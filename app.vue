<template>
  <div class="bg-black fixed w-[calc(100%+1px)] h-full">
    <NuxtPage />

    <CreatePost 
    :class="[{ 'max-h-[100vh] translation-all duration-200 ease-in visible':userStore.isMenuOverlay },
    { 'max-h-0 translation-all duration-200 ease-out invisible':!userStore.isMenuOverlay },
  ]"/>

<Modal
    :class="[{ 'max-h-[100vh] translation-all duration-200 ease-in visible':userStore.isLogoutOverlay },
    { 'max-h-0 translation-all duration-200 ease-out invisible':!userStore.isLogoutOverlay },
  ]"/>
   
  </div>
</template>
<script setup>

import { useUserStore } from '~~/store/user';
const userStore = useUserStore()
</script>
