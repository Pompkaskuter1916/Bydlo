<script setup>
import { Check, Phone, Beef, ExternalLink, ChevronRight, ShieldCheck } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  const bc = document.createElement('script');
  bc.type = 'application/ld+json';
  bc.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://bydlo-trans.pl/' },
      { '@type': 'ListItem', position: 2, name: 'Skup bydła', item: 'https://bydlo-trans.pl/oferta/skup-bydla' }
    ]
  });
  document.head.appendChild(bc);

  const service = document.createElement('script');
  service.type = 'application/ld+json';
  service.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Skup bydła rzeźnego i hodowlanego',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Logos Marcin Kiedel',
      telephone: '+48500277836',
      url: 'https://bydlo-trans.pl'
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Zachodniopomorskie' },
      { '@type': 'AdministrativeArea', name: 'Pomorskie' },
      { '@type': 'AdministrativeArea', name: 'Wielkopolskie' },
      { '@type': 'AdministrativeArea', name: 'Lubuskie' },
    ],
    description: 'Profesjonalny skup bydła rzeźno-hodowlanego: cielaki, odsadki, jałówki, krowy, buhaje. Szybki przelew od razu przy załadunku, własny transport, uczciwa waga WBC.'
  });
  document.head.appendChild(service);
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
          <Beef class="w-3.5 h-3.5" />
          SKUP BYDŁA
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 text-white leading-tight">
          <span class="text-brand-500">Skup</span> bydła rzeźnego
        </h1>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Skupujemy bydło wszystkich ras mięsnych, mlecznych i mieszanych w każdej kategorii wagowej na terenie całego kraju. Gwarantujemy rzetelną wycenę, szybki przelew realizowany od razu przy załadunku oraz bezpieczny i błyskawiczny odbiór z Twojego gospodarstwa.</p>
      </div>
    </div>

    <!-- Offer Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Cielaki -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
            <img src="/cielaki.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Cielaki" loading="lazy" decoding="async" width="600" height="192">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black" style="line-height: 1.1">Cielaki</h3>
              <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SKUP HODOWLANY</span>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
             <p class="text-neutral-400 text-xs sm:text-sm font-medium">Skupujemy cielęta małe już od 7. dnia życia. Płacimy rzetelnie od ręki.</p>
          </div>
        </div>

        <!-- Odsadki -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
            <img src="/odsadki.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Odsadki" loading="lazy" decoding="async" width="600" height="192">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black" style="line-height: 1.1">Odsadki</h3>
              <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SKUP HODOWLANY</span>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm font-medium">Kupujemy odsadki rasy mięsnej i mlecznej, gwarantując konkurencyjne ceny.</p>
          </div>
        </div>

        <!-- Krowy mleczne i jałówki cielne -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
            <img src="/cows_premium_1772742826381.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy i Jałówki" loading="lazy" decoding="async" width="600" height="192">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black" style="line-height: 1.1">Krowy i jałówki</h3>
              <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SKUP RZEŹNY I HODOWLANY</span>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm font-medium">Skupujemy wybrakowane krowy, sztuki po laktacji, a także jałówki.</p>
          </div>
        </div>

        <!-- Byki rozpłodniki -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
            <img src="/bulls_premium_1772742794993.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Byki rozpłodniki" loading="lazy" decoding="async" width="600" height="192">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-sm sm:text-base md:text-lg font-black" style="line-height: 1.1">Byki rozpłodniki</h3>
              <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-3 sm:p-4 md:p-5">
            <p class="text-neutral-400 text-xs sm:text-sm font-medium">Buhaje i byki rzeźne. Najlepsze stawki za mięsne rasy, korzystna waga WBC.</p>
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

      <!-- Co zapewniamy block has been removed to Home.vue -->


      <!-- Enhanced Contact CTA -->
      <div class="mt-8 md:mt-12 pb-12 md:pb-20 px-4" data-aos="fade-up">
        <div class="max-w-5xl mx-auto bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-3xl p-8 sm:p-12 border border-brand-800/50 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 flex-1">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Sprzedajesz <span class="text-brand-400">bydło?</span></h2>
            <p class="text-brand-100/90 text-base md:text-lg max-w-xl">
              Gwarantujemy uczciwe ceny podążające za rynkiem WJH, realizację płatności szybkim przelewem od razu przy załadunku i błyskawiczny odbiór z każdej lokalizacji. Nie czekaj – przygotujemy wycenę specjalnie dla Ciebie!
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
