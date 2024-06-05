import {ref} from "vue";
import {store} from "@/store/store";

const authentication = () => {
  const code = ref<string>("");
  const message = ref<string>("");
  const axios = ref(store.getters.axios);

  // Login
  const Login = (username: string, password: string) => {
    axios.value
        .post("users/signin", {
          username: username,
          password: password
        }).then(function (response: any) {
      if (response.status === 201) {
        message.value = "Logged in";
      } else {
        message.value = "Failed to login";
      }
    }).catch(function (error: any) {
      message.value = `External Error ${error.data}`;
    })
  }

  // Register
  const Register = () => {
    // Make request
    code.value = "200";
    message.value = "Verify OTP Register";
  };

  return {
    code,
    message,
    Login,
    Register,
  }
}

export default authentication;
