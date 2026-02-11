<script setup>
import Navbar from '../components/Navbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-700 selection:text-white">
    <Navbar />
    
    <main class="flex-grow w-full flex flex-col">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
