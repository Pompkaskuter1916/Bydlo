<script setup>
import { ArrowRight, Check, Phone, ChevronRight, ShieldCheck, Sparkles, Truck, ExternalLink } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  const bc = document.createElement('script');
  bc.type = 'application/ld+json';
  bc.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://bydlo-trans.pl/' },
      { '@type': 'ListItem', position: 2, name: 'Sprzedaż bydła', item: 'https://bydlo-trans.pl/oferta/sprzedaz-bydla' }
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
          <ArrowRight class="w-3.5 h-3.5" />
          SPRZEDAŻ BYDŁA
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 text-white leading-tight">
          <span class="text-brand-500">Sprzedaż</span> bydła hodowlanego
        </h1>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Prowadzimy sprzedaż cieląt i odsadków, przez jałówki i krowy do dalszej hodowli, aż po certyfikowane byki rozpłodniki.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="100">

            <!-- Cielaki -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
                <img src="/cielaki.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Cielaki" loading="lazy" decoding="async" width="600" height="192">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                  <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Cielaki</h3>
                  <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SPRZEDAŻ</span>
                </div>
              </div>
              <div class="p-3 sm:p-4 md:p-5">
                <p class="text-neutral-400 text-xs sm:text-sm font-medium">Rasy mięsne i mleczne. Zdrowe, dobrze odchowane sztuki gotowe do dalszego tuczu.</p>
              </div>
            </div>

            <!-- Odsadki -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
                <img src="/odsadki.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Odsadki" loading="lazy" decoding="async" width="600" height="192">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                  <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Odsadki</h3>
                  <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SPRZEDAŻ</span>
                </div>
              </div>
              <div class="p-3 sm:p-4 md:p-5">
                <p class="text-neutral-400 text-xs sm:text-sm font-medium">Zdrowe i odchowane odsadki. Idealne do dalszego chowu w Twoim gospodarstwie.</p>
              </div>
            </div>

            <!-- Krowy i Jałówki -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
                <img src="/cows_premium_1772742826381.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy i Jałówki" loading="lazy" decoding="async" width="600" height="192">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                  <h3 class="text-white text-sm sm:text-base md:text-lg font-black" style="line-height: 1.1">Krowy mleczne i jałówki cielne</h3>
                  <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SPRZEDAŻ</span>
                </div>
              </div>
              <div class="p-3 sm:p-4 md:p-5">
                <p class="text-neutral-400 text-xs sm:text-sm font-medium">Krowy mleczne oraz jałówki cielne i pod zacielenie do dalszego chowu. Gwarancja zdrowia i dobrej kondycji.</p>
              </div>
            </div>

            <!-- Byki -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
                <img src="/bulls_premium_1772742794993.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Byki rozpłodniki" loading="lazy" decoding="async" width="600" height="192">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                  <h3 class="text-white text-sm sm:text-base md:text-lg font-black" style="line-height: 1.1">Byki rozpłodniki</h3>
                  <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SPRZEDAŻ</span>
                </div>
              </div>
              <div class="p-3 sm:p-4 md:p-5">
                <p class="text-neutral-400 text-xs sm:text-sm font-medium">Rozpłodniki najwyższej jakości. Mocne, zdrowe byki do rozrodu w Twoim stadzie.</p>
              </div>
            </div>

        </div>

      <!-- OLX CTA -->
      <div class="mt-8 md:mt-12 flex justify-center px-2" data-aos="fade-up" data-aos-delay="200">
        <a
          href="https://www.olx.pl/d/oferta/skup-bydla-zywca-platnosc-od-reki-konkurencyjne-ceny-CID4371-IDjqga6.html?srsltid=AfmBOop8xz6KA0dOOi0ED6KHbSPsi8uy51Gl5ssLnAjo_zXK7D3SPSPk"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 group"
        >
          Sprawdź naszą ofertę na OLX
          <ExternalLink class="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>

      <!-- Why Choose Us Section -->
      <div class="mt-14 md:mt-24" data-aos="fade-up" data-aos-delay="150">
        <div class="text-center mb-8 md:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-3 md:mb-4 border border-brand-900/30">
            <Check class="w-3.5 h-3.5" />
            STANDARDY
          </div>
          <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Dlaczego warto wybrać <span class="text-brand-500">nasze stado?</span>
          </h2>
          <p class="text-neutral-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">Dbamy o najwyższe standardy hodowli. Każda sztuka bydła jest pod stałą opieką weterynaryjną, co gwarantuje jej znakomitą kondycję.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <!-- Benefit 1 -->
          <div class="group bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-brand-800/30 hover:border-brand-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-950/20 text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-brand-950 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-brand-900/50 group-hover:bg-brand-900 group-hover:scale-110 transition-all duration-300">
              <ShieldCheck class="w-6 h-6 sm:w-8 sm:h-8 text-brand-500" />
            </div>
            <h3 class="text-white font-bold text-base sm:text-lg mb-2">Gwarancja Zdrowia</h3>
            <p class="text-neutral-400 text-xs sm:text-sm">Pełna dokumentacja weterynaryjna. Sprzedajemy wyłącznie zdrowe i silne osobniki.</p>
          </div>

          <!-- Benefit 2 -->
          <div class="group bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-brand-800/30 hover:border-brand-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-950/20 text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-brand-950 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-brand-900/50 group-hover:bg-brand-900 group-hover:scale-110 transition-all duration-300">
              <Sparkles class="w-6 h-6 sm:w-8 sm:h-8 text-brand-500" />
            </div>
            <h3 class="text-white font-bold text-base sm:text-lg mb-2">Najwyższa Jakość</h3>
            <p class="text-neutral-400 text-xs sm:text-sm">Starannie wyselekcjonowane sztuki z najlepszych linii genetycznych, mięsnych i mlecznych.</p>
          </div>

          <!-- Benefit 3 -->
          <div class="group bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-brand-800/30 hover:border-brand-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-950/20 text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-brand-950 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-brand-900/50 group-hover:bg-brand-900 group-hover:scale-110 transition-all duration-300">
              <Truck class="w-6 h-6 sm:w-8 sm:h-8 text-brand-500" />
            </div>
            <h3 class="text-white font-bold text-base sm:text-lg mb-2">Bezpieczny Transport</h3>
            <p class="text-neutral-400 text-xs sm:text-sm">Oferujemy profesjonalny, bezstresowy transport zakupionych zwierząt prosto do Twojego gospodarstwa.</p>
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
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Szukasz <span class="text-brand-400">bydła hodowlanego?</span></h2>
            <p class="text-brand-100/90 text-base md:text-lg max-w-xl">
              Zadzwoń do nas, aby sprawdzić aktualną dostępność, uzyskać szczegółowe informacje o zwierzętach i umówić się na wizytę u nas.
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
