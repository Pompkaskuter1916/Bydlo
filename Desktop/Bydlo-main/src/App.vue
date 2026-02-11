<script setup>
import { onMounted } from 'vue';
import MainLayout from './layouts/MainLayout.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic',
  });
});
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
