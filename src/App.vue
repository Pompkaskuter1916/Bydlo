<script setup>
import { onMounted } from 'vue';
import MainLayout from './layouts/MainLayout.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
      });
    }, 100);
  });
});
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
