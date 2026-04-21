<script setup>
import { UtensilsCrossed, Phone, ChevronRight, Handshake, FileText } from 'lucide-vue-next';
import { ref } from 'vue';

const faqItems = ref([
  { question: 'Czy prowadzicie sprzedaż detaliczną?', answer: 'Nasza oferta skierowana jest głównie na sprzedaż hurtową dla restauracji, hoteli i masarni, ale realizujemy również mniejsze zamówienia. Zadzwoń do nas, aby ustalić szczegóły i minimalną wielkość zamówienia dla klientów indywidualnych.', open: false },
  { question: 'Skąd pochodzi wołowina w waszej ofercie?', answer: 'W całości pochodzi ona z naszego własnego skupu bydła realizowanego na terenie Polski. Dzięki temu mamy pełną kontrolę nad jej jakością na każdym etapie – od selekcji zwierząt aż po porcjowanie mięsa.', open: false },
  { question: 'Czy mogę zamówić konkretne, wyselekcjonowane kawałki (np. tylko polędwicę)?', answer: 'Tak, oczywiście! Specjalizujemy się w dostarczaniu konkretnych, najwyższej klasy elementów wołowych. Przygotujemy zamówienie ściśle dopasowane do zapotrzebowania Twojej restauracji lub masarni.', open: false },
  { question: 'Czy dostarczacie mięso pod wskazany adres?', answer: 'Dysponujemy własnymi samochodami-chłodniami, dzięki czemu gwarantujemy bezpieczny transport mięsa w odpowiednich warunkach chłodniczych bezpośrednio do Twojego lokalu lub sklepu.', open: false },
  { question: 'Czy podejmujecie stałą współpracę z lokalami gastronomicznymi?', answer: 'Zdecydowanie! Współpracujemy stale z wieloma renomowanymi restauracjami. Oferujemy atrakcyjne warunki cenowe, elastyczne dostawy i gwarancję stałej, powtarzalnej, wysokiej jakości mięsa dla stałych partnerów.', open: false },
]);

const toggleFaq = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open;
};
</script>

<template>
  <div class="bg-neutral-950 min-h-screen relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-brand-900/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-40 left-10 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl -z-10"></div>

    <!-- Header -->
    <div class="bg-black text-white py-14 md:py-28 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-transparent to-black/50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-4 md:mb-6 border border-brand-900/30">
          <UtensilsCrossed class="w-3.5 h-3.5" />
          SPRZEDAŻ MIĘS
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 text-white leading-tight">
          Świeże <span class="text-brand-500">mięso wołowe</span> prosto od producenta
        </h1>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Oferujemy mięso najwyższej jakości, pochodzące z naszego skupu. Gwarantujemy świeżość i naturalny smak.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="100">

        <!-- Card 1: Wołowina Premium -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-36 sm:h-44 md:h-56 bg-neutral-800 relative overflow-hidden">
            <img src="/wolowinapremium.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Wołowina Premium" loading="lazy" decoding="async" width="600" height="224" style="filter: brightness(0.9) saturate(1.1);">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute top-3 right-3">
              <span class="text-[9px] sm:text-[10px] font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-lg">PREMIUM</span>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-4">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Wołowina Premium</h3>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Najwyższej jakości kawałki wołowiny — rostbef, polędwica, antrykot. Idealne do grillowania i duszenia.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Polędwica</span>
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Rostbef</span>
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Antrykot</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Mięso Mielone -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-36 sm:h-44 md:h-56 bg-neutral-800 relative overflow-hidden">
            <img src="/miesomielone.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mięso Mielone" loading="lazy" decoding="async" width="600" height="224">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Mięso Mielone</h3>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Świeżo mielone mięso wołowe, idealne na burgery, kotlety mielone i sosy bolognese.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Na burgery</span>
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Na kotlety</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Steki Wołowe -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-36 sm:h-44 md:h-56 bg-neutral-800 relative overflow-hidden">
            <img src="/stekiwolowe.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Steki Wołowe" loading="lazy" decoding="async" width="600" height="224" style="filter: brightness(0.9) saturate(1.1);">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute top-3 right-3">
              <span class="text-[9px] sm:text-[10px] font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-lg">BESTSELLER</span>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-4">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Steki Wołowe</h3>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Doskonale dojrzewane steki — T-bone, Ribeye, New York Strip. Perfekcyjne na grill.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">T-bone</span>
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Ribeye</span>
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Strip</span>
            </div>
          </div>
        </div>

        <!-- Card 4: Kiełbasy Domowe -->
        <div class="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-800 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-36 sm:h-44 md:h-56 bg-neutral-800 relative overflow-hidden">
            <img src="/kielbasy.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Kiełbasy i Wędliny" loading="lazy" decoding="async" width="600" height="224">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Kiełbasy & Wędliny</h3>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Domowej roboty kiełbasy i wędliny z polskiej wołowiny. Tradycyjne receptury, naturalny skład.</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Kiełbasa</span>
              <span class="text-[11px] font-bold bg-brand-950 text-brand-400 px-2.5 py-1 rounded-full border border-brand-100">Wędliny</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Partners Section -->
      <div class="mt-14 md:mt-20" data-aos="fade-up" data-aos-delay="150">
        <div class="text-center mb-8 md:mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-3 md:mb-4 border border-brand-900/30">
            <Handshake class="w-3.5 h-3.5" />
            O NAS
          </div>
          <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Firma z <span class="text-brand-500">tradycjami rodzinnymi</span>
          </h2>
          <p class="text-neutral-500 text-sm md:text-base mt-2 max-w-lg mx-auto">Dbamy o najwyższą jakość mięsa, bazując na wieloletnim doświadczeniu i wiedzy zintegrowanego modelu od pola, na stół.</p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <!-- Logo 1: Logos -->
          <div class="group relative bg-neutral-900/80 rounded-2xl border border-neutral-800 hover:bg-neutral-900 hover:border-brand-800/50 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-brand-900/20 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-950/0 to-brand-900/0 group-hover:from-brand-950/40 group-hover:to-brand-900/10 transition-all duration-500"></div>
            <div class="relative flex items-center justify-center h-20 sm:h-24 w-40 sm:w-52">
              <img
                src="/logobeztla.webp"
                alt="Logos"
                class="max-h-full max-w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-[1.8]"
                loading="lazy"
                decoding="async"
                width="160"
                height="80"
              >
            </div>
          </div>

          <!-- Partner 1: Ranczo Panderossa -->
          <div class="group relative bg-neutral-900/80 rounded-2xl border border-neutral-800 hover:bg-neutral-900 hover:border-brand-800/50 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-brand-900/20 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-950/0 to-brand-900/0 group-hover:from-brand-950/40 group-hover:to-brand-900/10 transition-all duration-500"></div>
            <div class="relative flex items-center justify-center h-20 sm:h-24 w-40 sm:w-52">
              <img
                src="/ranczopanderossa.webp"
                alt="Ranczo Panderossa"
                width="208"
                height="96"
                class="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>

          <!-- Partner 2: Regional Beef -->
          <div class="group relative bg-neutral-900/80 rounded-2xl border border-neutral-800 hover:bg-neutral-900 hover:border-brand-800/50 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-brand-900/20 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-950/0 to-brand-900/0 group-hover:from-brand-950/40 group-hover:to-brand-900/10 transition-all duration-500"></div>
            <div class="relative flex items-center justify-center h-20 sm:h-24 w-40 sm:w-52">
                <img
                  src="/regional_beef_white.webp"
                  alt="Regional Beef"
                  width="208"
                  height="96"
                  class="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                  decoding="async"
                >
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Contact CTA -->
      <div class="mt-16 md:mt-24 pb-8 md:pb-12" data-aos="fade-up">
        <div class="max-w-5xl mx-auto bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-3xl p-8 sm:p-12 border border-brand-800/50 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 flex-1">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Hurtowe <span class="text-brand-400">dostawy mięsa</span></h2>
            <p class="text-brand-100/90 text-base md:text-lg max-w-xl">
              Zaopatrujemy masarnie, restauracje i hotele w wołowinę najwyższej jakości prosto z naszego uboju. Zadzwoń po indywidualną ofertę.
            </p>
          </div>
          
          <div class="relative z-10 shrink-0 w-full md:w-auto">
            <a href="tel:+48500277836" class="group flex flex-col items-center justify-center bg-neutral-950 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-brand-500/20 transition-all duration-300 hover:-translate-y-1 w-full md:w-64 border border-neutral-800 hover:border-brand-500/50">
                <div class="w-14 h-14 bg-brand-900/30 text-brand-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <Phone class="w-6 h-6" />
                </div>
                <p class="text-xs text-brand-300/80 font-bold uppercase tracking-wider mb-1">Zadzwoń teraz</p>
                <p class="text-xl sm:text-2xl font-black text-white group-hover:text-brand-400 transition-colors whitespace-nowrap">500 277 836</p>
            </a>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-8 md:mt-16 pb-12 md:pb-20" data-aos="fade-up">
        <div class="text-center mb-8 md:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <FileText class="w-3.5 h-3.5" />
            FAQ
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 md:mb-4">Najczęściej zadawane pytania</h2>
          <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Odpowiedzi na najczęstsze pytania dotyczące zakupu i dostawy mięsa.</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="bg-neutral-900 rounded-xl border shadow-sm overflow-hidden transition-all duration-300"
            :class="item.open ? 'border-brand-200 shadow-md' : 'border-neutral-800 hover:border-brand-200'"
          >
            <button 
              @click="toggleFaq(index)" 
              class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group"
            >
              <span class="font-bold transition-colors" :class="item.open ? 'text-brand-700' : 'text-white group-hover:text-brand-700'">{{ item.question }}</span>
              <span 
                class="text-brand-500 text-xl font-bold shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300" 
                :class="item.open ? 'rotate-45 bg-brand-600 text-white scale-90' : 'bg-neutral-800 hover:bg-brand-50'"
              >+</span>
            </button>
            <div class="faq-answer-grid" :class="item.open ? 'faq-answer-open' : 'faq-answer-closed'">
              <div class="overflow-hidden">
                <div class="px-6 pb-5">
                  <p class="text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-answer-grid {
  display: grid;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.faq-answer-closed {
  grid-template-rows: 0fr;
  opacity: 0;
}

.faq-answer-open {
  grid-template-rows: 1fr;
  opacity: 1;
}
</style>
