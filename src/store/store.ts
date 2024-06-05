import {
  Store as VuexStore,
  ActionContext,
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
  DispatchOptions,
  CommitOptions,
} from "vuex";
import axios, {Axios, AxiosRequestConfig} from "axios";
import {User} from "@/interfaces/User";

const user: User = {} as User;

const instance = axios.create({
  baseURL: "http://127.0.0.1:9000/",
  timeout: 10000,
});

export type State = {
  counter: number;
  axios: Axios;
  isLoggedIn: boolean,
  user: User;
  token: any
};

const state: State = {
  counter: 0,
  axios: instance,
  isLoggedIn: false,
  user: user,
  token: null,
};

export enum MutationTypes {
  SET_AXIOS = "SETTING_AXIOS",
  INC_COUNTER = "SET_COUNTER",
  SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
  SET_USER = "SET_USER",
}

export enum ActionTypes {
  SET_AXIOS = "SETTING_AXIOS",
  INC_COUNTER = "SET_COUNTER",
  SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
  SET_USER = "SET_USER",
}

export type Mutations<S = State> = {
  [MutationTypes.SET_AXIOS](state: S, payload: Axios): void;
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
  [MutationTypes.SET_IS_LOGGED_IN](state: S, payload: boolean): void;
  [MutationTypes.SET_USER](state: S, payload: User): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_AXIOS](state: State, payload: Axios) {
    state.axios = payload;
  },
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter += payload;
  },
  [MutationTypes.SET_IS_LOGGED_IN](state: State, payload: boolean) {
    state.isLoggedIn = payload;
  },
  [MutationTypes.SET_USER](state: State, payload: User) {
    state.user = payload;
    state.isLoggedIn = true;
    state.token = state.user.token;

    // Add the token to the Authorization header
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      if (!config.headers) {
        config.headers = {};
        config.headers.Authorization = `Token ${state.token}`;
      }
      config.headers = { Authorization: `Token ${state.token}` };
      return config;
    });

  },
};

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.SET_AXIOS](
      { commit }: AugmentedActionContext,
      payload: Axios
  ): void;

  [ActionTypes.INC_COUNTER](
      { commit }: AugmentedActionContext,
      payload: number
  ): void;

  [ActionTypes.SET_IS_LOGGED_IN](
      { commit }: AugmentedActionContext,
      payload: boolean
  ): void;

  [ActionTypes.SET_USER](
      { commit }: AugmentedActionContext,
      payload: User
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.SET_AXIOS]({ commit }, payload: Axios) {
    commit(MutationTypes.SET_AXIOS, payload);
  },

  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload);
  },

  [ActionTypes.SET_IS_LOGGED_IN]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_IS_LOGGED_IN, payload);
  },

  [ActionTypes.SET_USER]({ commit }, payload: User) {
    commit(MutationTypes.SET_USER, payload);
  },
};

export type Getters = {
  doubleCounter(state: State): number;
  axios(state: State): Axios;
  isLoggedIn(state: State): boolean;
  user(state: State): User;
};

export const getters: GetterTree<State, State> & Getters = {

  doubleCounter: (state) => {
    return state.counter * 2;
  },
  axios: (state) => {
    return state.axios;
  },
  isLoggedIn: (state) => {
    return state.isLoggedIn;
  },
  user: (state) => {
    return state.user;
  },
};

export type Store = Omit<
    VuexStore<State>,
    "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
      key: K,
      payload: Parameters<Actions[K]>[1],
      options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export function useStore() {
  return store as Store;
}