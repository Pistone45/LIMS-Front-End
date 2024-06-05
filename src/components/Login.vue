<template>
  <toast />
  <h1 class="center">Login</h1>
  <ion-card>
    <ion-card-header>
      <ion-card-title class="center">Sign in below</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <form>
      <ion-input v-model="username" label="Username" label-placement="floating" fill="solid" placeholder="Enter Username" style="margin-bottom: 30px;"></ion-input>
      <ion-input v-model="password" label="Password" label-placement="floating" fill="solid" placeholder="Enter Password" style="margin-bottom: 20px;"></ion-input>
      <ion-button expand="block" @click="login()">Sign In</ion-button>
      </form>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonButton
} from '@ionic/vue';
import { useToast } from "primevue/usetoast";


import Authentication from "@/composables/authentication";

defineComponent({
  components: {

  }});

const toast = useToast();
const {Login, message, code} = Authentication();
const username = ref("");
const password = ref("");

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 5000 });
};

const login = () =>{
  console.log("hahaha");
  showSuccess();
}

</script>

<style scoped>

</style>