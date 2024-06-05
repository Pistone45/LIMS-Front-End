<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-list>
      <ion-menu-toggle>
        <div v-if="menuItems.length > 0">
          <ion-item v-for="item in menuItems" :key="item.path" :router-link="item.path" button>
            <i :class="item.icon" style="font-size: 21px; padding-right: 10px"></i>
            <ion-label><p class="links ninth-heading">{{ item.title }}</p></ion-label>
          </ion-item>
        </div>
      </ion-menu-toggle>
    </ion-list>
    <ion-content class="ion-padding">

    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
} from '@ionic/vue';
import { defineComponent} from 'vue';

defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
  }});

const menuItems = [
  {path: "path", icon: "fas fa-user", title: "Drivers Trips"},
]

</script>
<style scoped>
.links{
  font-size: 14px;
}
</style>