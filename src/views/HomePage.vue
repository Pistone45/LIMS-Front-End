<template>
  <ion-page>
    <Menubar/>

    <ion-content :fullscreen="true">
      <div id="container">

        <ion-grid>
          <ion-row>
          <ion-col size="4"></ion-col>

          <ion-col>
            <Login v-if="!loggedIn"/>
          </ion-col>

          <ion-col size="4"></ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/vue';
import Login from "@/components/Login.vue";
// import Register from "@/components/Register.vue";
import {defineComponent, ref} from "vue";
import {store} from "@/store/store";
import Menubar from "@/components/Menubar.vue";

defineComponent({
  components: {
    Login,
    // Register,
  }
});

const loggedIn = ref<boolean>(store.getters.isLoggedIn);
console.log(loggedIn.value);
</script>

<style scoped>

</style>