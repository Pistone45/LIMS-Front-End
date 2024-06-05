<template>
  <ion-app>
    <SideMenu/>
    <ion-router-outlet/>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/vue';
import SideMenu from "@/components/SideMenu.vue";
import {defineComponent} from "vue";

defineComponent({
  components: {
    IonApp,
    IonRouterOutlet,
    SideMenu
  }
});

</script>

<style scoped>
</style>
