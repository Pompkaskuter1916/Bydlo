<script setup>
import Navbar from '../components/Navbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans layout-root" style="background: #0a0c08; color: #f0ead8;">
    <Navbar />
    
    <main class="flex-grow w-full flex flex-col">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.layout-root ::selection {
  background-color: #c8922a;
  color: #f0ead8;
}
</style>
