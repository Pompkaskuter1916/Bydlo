<script setup>
import { ref, computed } from 'vue';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';

const galleryAll = [
  { src: '/transport-tir-realizacja.webp', alt: 'Nowoczesna flota Logos' },
  { src: '/transport-realizacja-bydlo.webp', alt: 'Bezpieczny transport żywca' },
  { src: '/realizacja-transport.webp', alt: 'Organizacja załadunku' },
  { src: '/transportrealizacja.webp', alt: 'Flota transportowa u rolnika' },
  { src: '/bydlorealizacja.webp', alt: 'Odbiór byków i jałówek' },
  { src: '/transportrealizacja2.webp', alt: 'Specjalistyczny transport' },
  { src: '/bydlorealizacja2.webp', alt: 'Rzetelna ocena stada' },
  { src: '/transportrealizacja3.webp', alt: 'Bezpieczny załadunek' },
  { src: '/bydlorealizacja3.webp', alt: 'Odbiór bez formalności' },
  { src: '/bydlorealizacja4.webp', alt: 'Skup krów i byków' },
  { src: '/bydlorealizacja5.webp', alt: 'Transparentna transakcja' },
  { src: '/bydlorealizacja6.webp', alt: 'Dobrostan podczas transportu' },
  { src: '/real-PHOTO-2026-03-10-17-16-10.webp', alt: 'Załadunek bydła na transport' },
  { src: '/real-PHOTO-2026-03-10-17-17-25.webp', alt: 'Stado przed skupem' },
  { src: '/real-PHOTO-2026-03-10-17-19-29.webp', alt: 'Ocena zwierząt w terenie' },
  { src: '/real-PHOTO-2026-03-10-17-27-57.webp', alt: 'Odbiór bydła od rolnika' },
  { src: '/real-PHOTO-2026-03-10-17-28-32.webp', alt: 'Bydło rzeźne gotowe do transportu' },
  { src: '/real-PHOTO-2026-03-10-17-28-55.webp', alt: 'Sprawny załadunek na TIR' },
  { src: '/real-PHOTO-2026-03-10-17-29-23.webp', alt: 'Profesjonalna obsługa skupu' },
  { src: '/real-PHOTO-2026-03-10-17-32-05.webp', alt: 'Transport bydła hodowlanego' },
  { src: '/real-PHOTO-2026-03-10-17-34-17.webp', alt: 'Skup bydła — zachodniopomorskie' },
  { src: '/real-PHOTO-2026-03-10-17-35-32.webp', alt: 'Wycena stada na miejscu' },
  { src: '/real-PHOTO-2026-03-10-17-35-45.webp', alt: 'Bydło mleczne przed skupem' },
  { src: '/real-PHOTO-2026-03-10-17-36-19.webp', alt: 'Szybki odbiór z gospodarstwa' },
  { src: '/real-PHOTO-2026-03-10-17-39-36.webp', alt: 'Dobrostan zwierząt w transporcie' },
  { src: '/real-PHOTO-2026-03-10-17-39-47.webp', alt: 'Realizacja skupu bydła rzeźnego' },
  { src: '/real-PHOTO-2026-03-10-17-41-56.webp', alt: 'Załadunek jałówek i byków' },
  { src: '/real-PHOTO-2026-03-10-17-42-53.webp', alt: 'Odbiór bydła — rzetelna waga' },
  { src: '/real-PHOTO-2026-03-10-17-46-19.webp', alt: 'Flota Logos w akcji' },
  { src: '/real-PHOTO-2026-03-10-17-47-10.webp', alt: 'Skup cieląt i odsadków' },
  { src: '/real-PHOTO-2026-03-10-17-48-19.webp', alt: 'Bydło hodowlane — odbiór własny' },
  { src: '/real-PHOTO-2026-03-10-17-48-32.webp', alt: 'Profesjonalny transport żywca' },
  { src: '/real-PHOTO-2026-03-10-17-48-53.webp', alt: 'Szybki przelew po załadunku' },
];

const hoveredIndex = ref(null);
const isExpanded = ref(false);

const gallery = computed(() => {
  return isExpanded.value ? galleryAll : galleryAll.slice(0, 3);
});

const toggleGallery = () => {
    isExpanded.value = !isExpanded.value;
    if (!isExpanded.value) {
        // scroll back slightly when closing to avoid disorientation
        const el = document.getElementById('galeria-realizacji');
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}
</script>

<template>
  <section id="galeria-realizacji" aria-label="Nasze realizacje" class="py-16 md:py-24 relative" style="background: #060807; border-bottom: 1px solid rgba(200,146,42,0.06);">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <div class="mb-14 md:flex items-end justify-between">
        <div>
            <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Z życia firmy</p>
            <h2 class="font-display text-3xl md:text-5xl font-bold mb-4" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
                Nasze realizacje
            </h2>
            <div class="w-16 h-0.5" style="background: linear-gradient(90deg, #c8922a, transparent);"></div>
        </div>
        <p class="text-sm md:text-base max-w-sm leading-relaxed mt-4 md:mt-0" style="color: #6b5a42;">
            Zobacz, jak pracujemy na co dzień. Profesjonalny sprzęt i dbałość o dobrostan zwierząt w praktyce.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <div 
            v-for="(img, i) in gallery" 
            :key="i"
            class="relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] border group cursor-pointer"
            style="border-color: rgba(200,146,42,0.15); background: #0a0c08;"
            @mouseenter="hoveredIndex = i"
            @mouseleave="hoveredIndex = null"
        >
            <!-- Image -->
            <img 
                :src="img.src" 
                :alt="img.alt" 
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 ease-out"
                :class="hoveredIndex === i ? 'scale-110' : 'scale-100'"
            />
            
            <!-- Overlay -->
            <div 
                class="absolute inset-0 transition-opacity duration-500 flex items-end justify-center pb-6"
                style="background: linear-gradient(to top, rgba(10,12,8,0.95) 0%, rgba(10,12,8,0.4) 50%, transparent 100%);"
                :class="hoveredIndex === i ? 'opacity-100' : 'opacity-0'"
            >
                <div class="text-white font-bold opacity-0 translate-y-3 transition-all duration-300 delay-75 px-4 text-center text-sm" :class="hoveredIndex === i ? 'opacity-100 translate-y-0' : ''">
                    <span class="inline-block pb-1 border-b" style="border-color: #c8922a;">{{ img.alt }}</span>
                </div>
            </div>
        </div>
      </div>
      
      <div class="mt-12 text-center flex justify-center w-full relative z-20">
          <button @click="toggleGallery" class="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold group backdrop-blur-sm cursor-pointer transition-all duration-300 active:scale-95" style="border: 1px solid rgba(200,146,42,0.3); color: #f0ead8; background: rgba(200,146,42,0.05);">
            <span v-if="!isExpanded">Załaduj więcej zdjęć</span>
            <span v-else>Ukryj dodatkowe zdjęcia</span>
            <ChevronDown v-if="!isExpanded" class="w-4 h-4 group-hover:translate-y-1 transition-transform" style="color: #c8922a;" />
            <ChevronUp v-else class="w-4 h-4 group-hover:-translate-y-1 transition-transform" style="color: #c8922a;" />
          </button>
      </div>

    </div>
  </section>
</template>
