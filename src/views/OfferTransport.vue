<script setup>
import { Truck, Phone, Check, ShieldCheck, MapPin, Users, Timer, Route, Banknote, ChevronRight, ExternalLink } from 'lucide-vue-next';
import { ref, computed, onMounted } from 'vue';

const transportCapacity = ref(15);
const capacityLabel = computed(() => {
  if (transportCapacity.value <= 5) return 'Mały transport';
  if (transportCapacity.value <= 15) return 'Średni transport';
  return 'Duży transport';
});

onMounted(() => {
  const bc = document.createElement('script');
  bc.type = 'application/ld+json';
  bc.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://bydlo-trans.pl/' },
      { '@type': 'ListItem', position: 2, name: 'Transport bydła', item: 'https://bydlo-trans.pl/oferta/transport-bydla' }
    ]
  });
  document.head.appendChild(bc);
});
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
          <Truck class="w-3.5 h-3.5" />
          TRANSPORT BYDŁA
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 text-white leading-tight">
          Profesjonalny <span class="text-brand-500">transport bydła</span>
        </h1>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2 mb-6">Zapewniamy bezpieczny i sprawny przewóz bydła — od pojedynczej sztuki aż do 30 na jednym kursie. Wszelkie formalności związane z ARiMR oraz rozliczenia (szybki przelew) realizujemy według standardów wspierających nowoczesnego rolnika.</p>
        <a
          href="https://www.olx.pl/d/oferta/skup-bydla-zywca-platnosc-od-reki-konkurencyjne-ceny-CID4371-IDjqga6.html?srsltid=AfmBOop8xz6KA0dOOi0ED6KHbSPsi8uy51Gl5ssLnAjo_zXK7D3SPSPk"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 group mt-4 mb-2"
        >
          Sprawdź naszą ofertę wstępną na OLX
          <ExternalLink class="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Transport Hero Card -->
      <div class="mt-8 md:mt-12 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="absolute top-10 right-10 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-48 h-48 bg-brand-400/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Left: Interactive Capacity -->
          <div>
            <h3 class="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3 tracking-tight">Ile sztuk chcesz przewieźć?</h3>
            <p class="text-brand-200/80 mb-5 sm:mb-8 text-sm sm:text-base">Niezależnie od liczby — zapewniamy transport dostosowany do Twoich potrzeb.</p>
            
            <!-- Capacity Slider -->
            <div class="bg-brand-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-brand-700/30 backdrop-blur-sm">
              <div class="flex items-center justify-between mb-4">
                <span class="text-brand-300 text-sm font-bold uppercase tracking-wider">Liczba sztuk</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-black text-white">{{ transportCapacity }}</span>
                  <span class="text-brand-400 text-sm font-bold">szt.</span>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                v-model="transportCapacity" 
                class="w-full h-2 bg-brand-800 rounded-full appearance-none cursor-pointer accent-brand-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-brand-500/50 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
              />
              <div class="flex justify-between mt-3">
                <span class="text-brand-400/60 text-xs font-bold">1 szt.</span>
                <span class="text-brand-300 text-xs font-bold px-3 py-1 bg-brand-700/40 rounded-full">{{ capacityLabel }}</span>
                <span class="text-brand-400/60 text-xs font-bold">30 szt.</span>
              </div>
            </div>
          </div>

          <!-- Right: Key Stats -->
          <div class="grid grid-cols-2 gap-2.5 sm:gap-4">
            <div class="bg-brand-800/30 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-brand-700/20 hover:bg-brand-800/50 hover:border-brand-600/30 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="w-9 h-9 sm:w-11 sm:h-11 bg-brand-600/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-brand-600/30 group-hover:scale-110 transition-all">
                <Truck class="w-5 h-5 text-brand-400" />
              </div>
              <p class="text-lg sm:text-2xl font-black text-white mb-0.5">1–30</p>
              <p class="text-brand-300/70 text-[10px] sm:text-xs font-medium">sztuk na kurs</p>
            </div>
            <div class="bg-brand-800/30 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-brand-700/20 hover:bg-brand-800/50 hover:border-brand-600/30 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="w-9 h-9 sm:w-11 sm:h-11 bg-brand-600/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-brand-600/30 group-hover:scale-110 transition-all">
                <Timer class="w-5 h-5 text-brand-400" />
              </div>
              <p class="text-lg sm:text-2xl font-black text-white mb-0.5">24h</p>
              <p class="text-brand-300/70 text-[10px] sm:text-xs font-medium">ekspresowa realizacja</p>
            </div>
            <div class="bg-brand-800/30 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-brand-700/20 hover:bg-brand-800/50 hover:border-brand-600/30 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="w-9 h-9 sm:w-11 sm:h-11 bg-brand-600/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-brand-600/30 group-hover:scale-110 transition-all">
                <MapPin class="w-5 h-5 text-brand-400" />
              </div>
              <p class="text-lg sm:text-2xl font-black text-white mb-0.5">Nasz region</p>
              <p class="text-brand-300/70 text-[10px] sm:text-xs font-medium">zasięg transportu</p>
            </div>
            <div class="bg-brand-800/30 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-brand-700/20 hover:bg-brand-800/50 hover:border-brand-600/30 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="w-9 h-9 sm:w-11 sm:h-11 bg-brand-600/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-brand-600/30 group-hover:scale-110 transition-all">
                <ShieldCheck class="w-5 h-5 text-brand-400" />
              </div>
              <p class="text-lg sm:text-2xl font-black text-white mb-0.5">100%</p>
              <p class="text-brand-300/70 text-[10px] sm:text-xs font-medium">zgodność z przepisami</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Process Steps -->
      <div class="mt-12 md:mt-20" data-aos="fade-up" data-aos-delay="100">
        <h3 class="text-xl font-bold text-white text-center mb-8">Jak wygląda <span class="text-brand-500">proces transportu?</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <!-- Connecting line (desktop) -->
          <div class="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300"></div>

          <!-- Step 1 -->
          <div class="relative bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 hover:-translate-y-1 group transition-all duration-300">
            <div class="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-black text-sm mb-4 mx-auto relative z-10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all">1</div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center mx-auto mb-3 text-brand-500 group-hover:bg-brand-900 transition-colors">
                <Phone class="w-6 h-6" />
              </div>
              <h4 class="font-bold text-white mb-2">Kontakt i ustalenia</h4>
              <p class="text-neutral-500 text-sm">Zadzwoń do nas lub napisz. Ustalimy termin, liczbę sztuk i miejsce załadunku.</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 hover:-translate-y-1 group transition-all duration-300">
            <div class="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-black text-sm mb-4 mx-auto relative z-10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all">2</div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center mx-auto mb-3 text-brand-500 group-hover:bg-brand-900 transition-colors">
                <Truck class="w-6 h-6" />
              </div>
              <h4 class="font-bold text-white mb-2">Załadunek i transport</h4>
              <p class="text-neutral-500 text-sm">Przyjeżdżamy w umówionym terminie z profesjonalnym transportem. Pomagamy przy załadunku.</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 hover:-translate-y-1 group transition-all duration-300">
            <div class="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-black text-sm mb-4 mx-auto relative z-10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all">3</div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center mx-auto mb-3 text-brand-500 group-hover:bg-brand-900 transition-colors">
                <Check class="w-6 h-6" />
              </div>
              <h4 class="font-bold text-white mb-2">Bezpieczna dostawa</h4>
              <p class="text-neutral-500 text-sm">Bydło trafia bezpiecznie na miejsce. Wszystko zgodnie z przepisami weterynaryjnymi.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Transport Features Grid -->
      <div class="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-950 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-900 group-hover:scale-110 transition-all">
              <Route class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-white mb-2">Elastyczne trasy</h4>
            <p class="text-neutral-500 text-sm leading-relaxed">Realizujemy transporty w naszym regionie. Trasa dopasowana do Twoich potrzeb.</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-950 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-900 group-hover:scale-110 transition-all">
              <ShieldCheck class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-white mb-2">Certyfikowany przewóz</h4>
            <p class="text-neutral-500 text-sm leading-relaxed">Posiadamy wymagane zezwolenia i prowadzimy pełną dokumentację zgodnie z prawem.</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-950 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-900 group-hover:scale-110 transition-all">
              <Users class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-white mb-2">Doświadczona ekipa</h4>
            <p class="text-neutral-500 text-sm leading-relaxed">Nasz zespół ma wieloletnie doświadczenie w transporcie zwierząt. Dbamy o każdy szczegół.</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-950 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-900 group-hover:scale-110 transition-all">
              <Banknote class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-white mb-2">Konkurencyjne ceny</h4>
            <p class="text-neutral-500 text-sm leading-relaxed">Oferujemy atrakcyjne stawki za transport. Cena ustalana indywidualnie — zadzwoń po wycenę.</p>
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
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Potrzebujesz <span class="text-brand-400">transportu bydła?</span></h2>
            <p class="text-brand-100/90 text-base md:text-lg max-w-xl">
              Skontaktuj się z nami! Gwarantujemy profesjonalny przewóz, pełne bezpieczeństwo weterynaryjne i ekspresowe terminy realizacji na terenie całego regionu.
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

    </div>
  </div>
</template>
