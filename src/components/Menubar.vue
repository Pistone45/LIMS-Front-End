<template>
  <ion-header :translucent="true" class="custom-header">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title style="color: white;">LMIS</ion-title>

      <ion-buttons slot="primary" style="padding-right: 25px;" class="action-button">
        <p style="color: white; font-size: 20px;" class="links">Login</p>
      </ion-buttons>

      <ion-buttons slot="primary" style="padding-right: 20px;" class="action-button">
        <p style="color: white; font-size: 20px;" class="links">Register</p>
      </ion-buttons>

      <ion-buttons slot="primary">
        <ion-button>
          <i class="fa-solid fa-user" style="font-size: 25px; color: white;"></i>
        </ion-button>
      </ion-buttons>

    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">

import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/vue";
import {defineComponent} from "vue";
// import {time} from "ionicons/icons";
defineComponent({
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonButton
  }});
</script>
<style scoped>
.action-button{
  cursor: pointer;
}
.links:hover{
  color: black !important;
}
.custom-header{
  background-color: #25bceb !important;
}

</style>