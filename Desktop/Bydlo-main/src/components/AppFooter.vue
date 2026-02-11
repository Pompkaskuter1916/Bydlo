<script setup>
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'O Nas', href: '/o-nas' },
  { name: 'Oferta', href: '/oferta' },
  { name: 'Kontakt', href: '/kontakt' },
];
</script>

<template>
  <footer class="w-full font-sans relative z-30 flex flex-col">
    


    <!-- 2. ULTRA-COMPACT FOOTER -->
    <div class="bg-brand-950 text-brand-100/80 py-8 border-t border-brand-900 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Horizontal Layout Container -->
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          <!-- LEFT: Logo & Location -->
          <div class="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
            <RouterLink to="/" class="flex items-center gap-2 group">
              <img src="/logos-logo.png" alt="Logos" class="h-16 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
            </RouterLink>
            <p class="text-xs text-brand-200/60 mt-2 leading-relaxed">
              Bydło-Trans Marcin Kiedel<br />
              [Ulica]<br />
              78-400 Szczecinek
            </p>
          </div>

          <!-- CENTER: Minimalist Navigation -->
          <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" class="text-sm font-medium text-brand-200/70 hover:text-white transition-colors">
              {{ item.name }}
            </RouterLink>
          </nav>

          <!-- RIGHT: Contact & Map Link -->
          <div class="flex flex-col items-center lg:items-end gap-2 text-sm">
            <div class="flex items-center gap-4">
              <a href="tel:+48533255214" class="flex items-center gap-2 text-brand-100 hover:text-white transition-colors font-bold">
                <Phone class="w-4 h-4" />
                533 255 214
              </a>
              <span class="text-slate-300">|</span>
              <a href="mailto:biuro@bydlo-trans.pl" class="flex items-center gap-2 text-brand-200/80 hover:text-white transition-colors">
                <Mail class="w-4 h-4" />
                biuro@bydlo-trans.pl
              </a>
            </div>
            <a href="#" class="text-xs text-brand-200/50 hover:text-brand-300 transition-colors flex items-center gap-1 mt-1">
              <MapPin class="w-3 h-3" />
              Zobacz naszą bazę w Szczecinku
            </a>
          </div>

        </div>

        <!-- Very subtle copyright line -->
        <div class="mt-8 pt-6 border-t border-brand-900 text-center text-[10px] text-brand-200/40 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
          <p>&copy; {{ currentYear }} Logos. Wszelkie prawa zastrzeżone.</p>
          <div class="flex gap-4">
            <RouterLink to="/polityka-prywatnosci" class="hover:text-white">Polityka Prywatności</RouterLink>
          </div>
        </div>

      </div>
    </div>

  </footer>
</template>
