<script setup>
import { ref } from 'vue';
import { Menu, X, Phone } from 'lucide-vue-next';
import { RouterLink } from 'vue-router'; // Explicit import if needed, though usually auto-resolved

const isOpen = ref(false);

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'O Nas', href: '/o-nas' },
  { name: 'Oferta', href: '/oferta' },
  { name: 'Kontakt', href: '/kontakt' },
];
</script>

<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <div class="flex items-center gap-2" data-aos="fade-down">
          <RouterLink to="/">
             <img src="/logos-logo.png" alt="Logos" class="h-16 w-auto" />
          </RouterLink>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" class="text-slate-600 hover:text-brand-700 font-medium transition-colors">
            {{ item.name }}
          </RouterLink>
        </div>

        <div class="flex items-center gap-4">
            <a href="tel:+48533255214" class="hidden md:flex items-center gap-2 text-slate-600 hover:text-brand-700 font-bold transition-colors">
            <Phone class="w-4 h-4" />
            +48 533 255 214
            </a>
            
             <!-- Mobile menu button -->
            <div class="-mr-2 flex items-center md:hidden">
            <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-brand-900 hover:text-brand-700 hover:bg-brand-50 focus:outline-none transition-colors">
                <Menu v-if="!isOpen" class="block h-6 w-6" aria-hidden="true" />
                <X v-else class="block h-6 w-6" aria-hidden="true" />
            </button>
            </div>
        </div>
      </div>
    </div>
     <!-- Mobile menu -->
    <div v-show="isOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute w-full shadow-xl">
      <div class="pt-2 pb-4 space-y-1">
        <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" @click="isOpen = false" class="block pl-3 pr-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-brand-50 hover:border-brand-500 hover:text-brand-900 transition-all">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
