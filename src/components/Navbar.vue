<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Menu, X, Phone, ChevronDown } from 'lucide-vue-next';
import { RouterLink, useRoute } from 'vue-router';

const isOpen = ref(false);
const isOfferOpen = ref(false);
const isOfferMobileOpen = ref(false);
const dropdownRef = ref(null);
const scrolled = ref(false);

const route = useRoute();
const isHome = computed(() => route.path === '/');
const isTransparentMode = computed(() => isHome.value && !scrolled.value);

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'O Nas', href: '/o-nas' },
  { name: 'Skup bydła', href: '/oferta/skup-bydla' },
  { name: 'Sprzedaż bydła', href: '/oferta/sprzedaz-bydla' },
  { name: 'Transport bydła', href: '/oferta/transport-bydla' },
  { name: 'Kontakt', href: '/kontakt' },
];

const closeDropdown = (e) => {
  const el = Array.isArray(dropdownRef.value) ? dropdownRef.value[0] : dropdownRef.value;
  if (el && el.contains && !el.contains(e.target)) {
    isOfferOpen.value = false;
  }
};

let scrollTicking = false;
const handleScroll = () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      scrolled.value = window.scrollY > 20;
      scrollTicking = false;
    });
    scrollTicking = true;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
  window.addEventListener('scroll', handleScroll, { passive: true });
});
onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    class="sticky top-0 z-50 transition-all duration-500"
    role="navigation"
    aria-label="Główna nawigacja"
    :class="isTransparentMode
      ? 'bg-transparent border-transparent'
      : (scrolled
        ? 'bg-[#0a0c08]/95 backdrop-blur-xl shadow-2xl shadow-black/60 border-b border-[rgba(200,146,42,0.18)]'
        : 'bg-transparent border-b border-[rgba(200,146,42,0.08)]')"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">

        <!-- Logo -->
        <div
          class="shrink-0 transition-opacity duration-300"
          :class="[
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100',
            isTransparentMode ? 'self-start pt-3 -ml-3 lg:-ml-8' : 'self-center'
          ]"
        >
          <RouterLink to="/" class="group flex items-start" aria-label="Strona główna">
            <div
              class="bg-white transition-all duration-500"
              :class="isTransparentMode
                ? 'h-[52px] lg:h-[185px] xl:h-[205px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)]'
                : 'h-[48px] lg:h-[62px] drop-shadow-lg'"
              style="aspect-ratio: 7/3; -webkit-mask-image: url(/logobeztla.webp); -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: left center; mask-image: url(/logobeztla.webp); mask-size: contain; mask-repeat: no-repeat; mask-position: left center;"
            ></div>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-4 xl:gap-7 ml-auto mr-2">
          <template v-for="item in navigation" :key="item.name">
            <!-- Dropdown -->
            <div v-if="item.children" class="relative" ref="dropdownRef" @mouseenter="isOfferOpen = true" @mouseleave="isOfferOpen = false">
              <button
                @click="isOfferOpen = !isOfferOpen"
                class="text-[#a09280] hover:text-[#e8ad40] font-medium text-sm tracking-wide transition-colors duration-200 inline-flex items-center gap-1 uppercase whitespace-nowrap"
              >
                {{ item.name }}
                <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200" :class="isOfferOpen ? 'rotate-180' : ''" />
              </button>

              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div v-show="isOfferOpen" class="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52">
                  <div class="bg-[#0f1209] border border-[rgba(200,146,42,0.25)] rounded-xl shadow-2xl shadow-black/60 overflow-hidden py-2">
                    <RouterLink
                      v-for="child in item.children"
                      :key="child.name"
                      :to="child.href"
                      class="block px-5 py-2.5 text-sm text-[#8a7e6a] hover:text-[#e8ad40] hover:bg-[rgba(200,146,42,0.06)] transition-all duration-200 font-medium"
                    >
                      {{ child.name }}
                    </RouterLink>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Regular -->
            <RouterLink
              v-else
              :to="item.href"
              class="text-[#a09280] hover:text-[#e8ad40] font-medium text-sm tracking-wide transition-colors duration-200 uppercase whitespace-nowrap"
            >
              {{ item.name }}
            </RouterLink>
          </template>
        </div>

        <!-- Phone CTA + Mobile toggle -->
        <div class="flex items-center gap-3">
          <a
            href="tel:+48500277836"
            class="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-[#e8ad40] border border-[rgba(200,146,42,0.3)] hover:border-[rgba(200,146,42,0.7)] hover:bg-[rgba(200,146,42,0.07)] font-bold text-sm transition-all duration-200 whitespace-nowrap"
          >
            <Phone class="w-3.5 h-3.5" />
            500 277 836
          </a>

          <!-- Mobile menu button -->
          <div class="flex items-center lg:hidden">
            <button
              @click="isOpen = !isOpen"
              :aria-expanded="isOpen"
              aria-label="Otwórz menu nawigacyjne"
              class="inline-flex items-center justify-center p-2 rounded-md text-[#a09280] hover:text-[#e8ad40] focus:outline-none transition-colors">
              <Menu v-if="!isOpen" class="block h-6 w-6" aria-hidden="true" />
              <X v-else class="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="lg:hidden border-t absolute w-full shadow-2xl" style="background: #0a0c08; border-color: rgba(200,146,42,0.12); z-index: 100;">
      <div class="pt-2 pb-4 space-y-0.5">
        <template v-for="item in navigation" :key="item.name">
          <div v-if="item.children">
            <button
              @click="isOfferMobileOpen = !isOfferMobileOpen"
              class="w-full text-left px-5 py-3.5 text-sm font-medium text-[#a09280] hover:text-[#e8ad40] hover:bg-[rgba(200,146,42,0.05)] transition-all flex items-center justify-between uppercase tracking-wide"
            >
              {{ item.name }}
              <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="isOfferMobileOpen ? 'rotate-180' : ''" />
            </button>
            <div v-show="isOfferMobileOpen" class="bg-[rgba(200,146,42,0.03)] border-l-2 border-[rgba(200,146,42,0.2)] ml-4">
              <RouterLink
                v-for="child in item.children"
                :key="child.name"
                :to="child.href"
                @click="isOpen = false; isOfferMobileOpen = false"
                class="block pl-6 pr-4 py-2.5 text-sm text-[#7a6e5a] hover:text-[#e8ad40] transition-all"
              >
                {{ child.name }}
              </RouterLink>
            </div>
          </div>

          <RouterLink
            v-else
            :to="item.href"
            @click="isOpen = false"
            class="block px-5 py-3.5 text-sm font-medium text-[#a09280] hover:text-[#e8ad40] hover:bg-[rgba(200,146,42,0.05)] transition-all uppercase tracking-wide"
          >
            {{ item.name }}
          </RouterLink>
        </template>

        <div class="px-5 pt-3 pb-1 border-t border-[rgba(200,146,42,0.1)] mt-2">
          <a href="tel:+48500277836" class="flex items-center gap-2 text-[#e8ad40] font-bold text-sm">
            <Phone class="w-4 h-4" />
            500 277 836
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
