<script setup>
import { Check, Phone, ArrowRight, Truck, Scale, Banknote, FileText, ShieldCheck, Clock, Beef, ExternalLink, MapPin, Users, Timer, Route, ChevronRight, UtensilsCrossed } from 'lucide-vue-next';
import { ref, computed } from 'vue';

const transportCapacity = ref(15);
const capacityLabel = computed(() => {
  if (transportCapacity.value <= 5) return 'Mały transport';
  if (transportCapacity.value <= 15) return 'Średni transport';
  return 'Duży transport';
});

const faqItems = ref([
  { question: 'Jak wygląda proces sprzedaży bydła?', answer: 'To proste — dzwonisz do nas, ustalamy termin, przyjeżdżamy z transportem i wagą. Po zważeniu płacimy gotówką od ręki lub przelewem na konto.', open: false },
  { question: 'Jakie gatunki bydła skupujecie?', answer: 'Skupujemy buhaje, byki rzeźne, jałówki, krowy (również po laktacji i wybrakowane). Przyjmujemy zarówno rasy mięsne (Limousine, Charolaise), jak i mleczne (HF) oraz mieszańce.', open: false },
  { question: 'Czy odbieracie pojedyncze sztuki?', answer: 'Tak! Odbieramy nawet pojedyncze sztuki. Nie ma minimum — każda transakcja jest dla nas ważna.', open: false },
  { question: 'Ile czasu trwa odbiór od momentu kontaktu?', answer: 'Standardowo od 2 do 7 dni, ale w pilnych przypadkach jesteśmy w stanie przyjechać nawet w ciągu 24 godzin.', open: false },
  { question: 'Czy wystawiacie faktury?', answer: 'Tak, wystawiamy faktury RR i VAT. Prowadzimy również pełny wykaz przemieszczeń bydła zgodnie z przepisami.', open: false },
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
          <Beef class="w-3.5 h-3.5" />
          SKUP & SPRZEDAŻ
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 text-white leading-tight">
          Nasza <span class="text-brand-500">oferta profesjonalnego skupu i sprzedaży</span>
        </h1>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Eksponujemy niezawodne i wysoce wyspecjalizowane usługi skupu bydła rzeźnego oraz sprzedaż najwyższej klasy zwierząt hodowlanych (w tym cieląt czy byków).</p>
      </div>
    </div>

    <!-- Offer Cards -->
    <div id="skup-bydla" class="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Offer Card 1: Byki -->
        <div class="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-800 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-40 sm:h-44 md:h-52 bg-neutral-800 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?q=75&w=600&fm=webp&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Byki" loading="lazy" decoding="async" width="600" height="208">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-xl font-black">Buhaje / Byki</h3>
              <span class="text-xs font-bold bg-brand-600 text-white px-2.5 py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-5 sm:p-6 md:p-8">
            <p class="text-neutral-400 mb-6 font-medium text-sm">Specjalizujemy się w obrocie bydłem o najwyższej mięsności. Aktywnie poszukujemy ras gwarantujących klasę premium (Limousine, Charolaise) oraz solidnych mieszańców mięsnych.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Waga powyżej 450kg
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Waga ciężka +800kg (Premium)
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Wszystkie klasy WBC
              </li>
            </ul>
          </div>
        </div>

        <!-- Offer Card 2: Jałówki -->
        <div class="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-800 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-40 sm:h-44 md:h-52 bg-neutral-800 relative overflow-hidden">
             <img src="/jalowka.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Jałówki" loading="lazy" decoding="async" width="600" height="208">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-xl font-black">Jałówki</h3>
              <span class="text-xs font-bold bg-brand-600 text-white px-2.5 py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-5 sm:p-6 md:p-8">
            <p class="text-neutral-400 mb-6 font-medium text-sm">Gwarantujemy konkurencyjne wyceny na skup jałówek przeznaczonych na ubój rzeźny. Szczególny nacisk kładziemy na prawidłowy odchów oraz pewną genetykę przekładającą się na doskonałą klasę mięsa.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Rasy mleczne i mięsne
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Dobra kondycja zdrowotna
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Płatność od wagi żywej lub WBC
              </li>
            </ul>
          </div>
        </div>

        <!-- Offer Card 3: Krowy -->
        <div class="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-800 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-40 sm:h-44 md:h-52 bg-neutral-800 relative overflow-hidden">
             <img src="/dbanieokrowki.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy" loading="lazy" decoding="async" width="600" height="208">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-xl font-black">Krowy</h3>
              <span class="text-xs font-bold bg-brand-600 text-white px-2.5 py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-5 sm:p-6 md:p-8">
            <p class="text-neutral-400 mb-6 font-medium text-sm">Kupujemy krowy wybrakowane, po laktacji oraz sztuki rzeźne. Każdą sztukę wyceniamy indywidualnie.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Krowy HF i mieszańce
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Odbiór nawet pojedynczych sztuk
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Konkurencyjne stawki
              </li>
            </ul>
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

      <!-- Sales Section (Sprzedaż) -->
      <div id="sprzedaz-bydla" class="scroll-mt-24 mt-12 md:mt-24" data-aos="fade-up">
        <div class="text-center mb-8 md:mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <ArrowRight class="w-3.5 h-3.5" />
            SPRZEDAŻ
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 md:mb-4">Ekspercka <span class="text-brand-500">sprzedaż i selekcja</span> bydła hodowlanego</h2>
          <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Rozszerz swoje stado o specjalnie wyselekcjonowane osobniki charakteryzujące się nienagannym zdrowiem i produktywnością.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">

            <!-- Cielaki -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=75&w=600&fm=webp&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Cielaki" loading="lazy" decoding="async" width="600" height="192">
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
                <img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=75&w=600&fm=webp&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Odsadki" loading="lazy" decoding="async" width="600" height="192">
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
                <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=75&w=600&fm=webp&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy i Jałówki" loading="lazy" decoding="async" width="600" height="192">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                  <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Krowy i Jałówki</h3>
                  <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SPRZEDAŻ</span>
                </div>
              </div>
              <div class="p-3 sm:p-4 md:p-5">
                <p class="text-neutral-400 text-xs sm:text-sm font-medium">Cielne krowy i jałówki do dalszego chowu. Gwarancja zdrowia i dobrej kondycji.</p>
              </div>
            </div>

            <!-- Byki -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div class="h-32 sm:h-40 md:h-48 bg-neutral-800 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?q=75&w=600&fm=webp&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Byki rozpłodniki" loading="lazy" decoding="async" width="600" height="192">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                  <h3 class="text-white text-sm sm:text-base md:text-lg font-black">Byki</h3>
                  <span class="text-[10px] sm:text-xs font-bold bg-brand-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">SPRZEDAŻ</span>
                </div>
              </div>
              <div class="p-3 sm:p-4 md:p-5">
                <p class="text-neutral-400 text-xs sm:text-sm font-medium">Rozpłodniki najwyższej jakości. Mocne, zdrowe byki do rozrodu w Twoim stadzie.</p>
              </div>
            </div>

        </div>
      </div>

      <!-- Meat Sales Section (Sprzedaż Mięs) -->
      <div id="sprzedaz-mies" class="scroll-mt-24 mt-12 md:mt-24" data-aos="fade-up">
        <div class="text-center mb-8 md:mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <UtensilsCrossed class="w-3.5 h-3.5" />
            SPRZEDAŻ MIĘS
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 md:mb-4">Świeże <span class="text-brand-500">mięso wołowe</span> prosto od producenta</h2>
          <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Oferujemy mięso najwyższej jakości, pochodzące z naszego skupu. Gwarantujemy świeżość i naturalny smak.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">

          <!-- Card 1: Wołowina Premium -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
            <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div class="h-36 sm:h-44 md:h-56 bg-neutral-800 relative overflow-hidden">
              <img src="/wolowinapremium.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Wołowina Premium" loading="lazy" decoding="async" width="600" height="224">
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
              <img src="/stekiwolowe.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Steki Wołowe" loading="lazy" decoding="async" width="600" height="224">
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
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
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

        <!-- Meat CTA -->
        <div class="mt-10 text-center" data-aos="fade-up" data-aos-delay="100">
          <div class="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-brand-950 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 border border-brand-900">
            <div class="text-center sm:text-left">
              <p class="font-bold text-white text-base sm:text-lg">Zainteresowany świeżym mięsem?</p>
              <p class="text-neutral-500 text-xs sm:text-sm">Zadzwoń i zapytaj o aktualną dostępność i ceny.</p>
            </div>
            <a href="tel:+48533255214" class="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap group">
              <Phone class="w-4 h-4" />
              533 255 214
              <ChevronRight class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <!-- Transport Section -->
      <div id="transport-bydla" class="scroll-mt-24 mt-12 md:mt-24 relative" data-aos="fade-up">
        <!-- Section Header -->
        <div class="text-center mb-8 md:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <Truck class="w-3.5 h-3.5" />
            TRANSPORT BYDŁA
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 md:mb-4">Profesjonalny <span class="text-brand-500">transport bydła</span></h2>
          <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Zapewniamy bezpieczny i sprawny przewóz bydła — od pojedynczej sztuki aż do 30 na jednym kursie.</p>
        </div>

        <!-- Transport Hero Card -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden mb-8 md:mb-12">
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
                <p class="text-lg sm:text-2xl font-black text-white mb-0.5">Cała PL</p>
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
        <div class="mb-12" data-aos="fade-up" data-aos-delay="100">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="200">
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-6 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-20 h-20 bg-brand-950 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-900 group-hover:scale-110 transition-all">
                <Route class="w-6 h-6" />
              </div>
              <h4 class="font-bold text-white mb-2">Elastyczne trasy</h4>
              <p class="text-neutral-500 text-sm leading-relaxed">Realizujemy transporty na terenie całej Polski. Trasa jest zawsze dopasowana do Twoich potrzeb.</p>
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

        <!-- Transport CTA -->
        <div class="mt-10 text-center" data-aos="fade-up" data-aos-delay="300">
          <div class="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-brand-950 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 border border-brand-900">
            <div class="text-center sm:text-left">
              <p class="font-bold text-white text-base sm:text-lg">Potrzebujesz transportu bydła?</p>
              <p class="text-neutral-500 text-xs sm:text-sm">Zadzwoń i umów termin — wycena gratis.</p>
            </div>
            <a href="tel:+48533255214" class="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap group">
              <Phone class="w-4 h-4" />
              533 255 214
              <ChevronRight class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <!-- Co zapewniamy — dark block -->
      <div class="mt-12 md:mt-24 bg-brand-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 tracking-tight">Co zapewniamy<br>przy każdej transakcji?</h2>
              <ul class="text-left text-brand-100 text-base space-y-3">
                  <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                      <div class="p-1.5 bg-brand-600 rounded-full group-hover:scale-110 transition-transform shrink-0">
                          <Check class="w-4 h-4 text-white"/> 
                      </div>
                      Krótki termin odbioru (2-7 dni)
                  </li>
                  <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                       <div class="p-1.5 bg-brand-600 rounded-full group-hover:scale-110 transition-transform shrink-0">
                          <Check class="w-4 h-4 text-white"/> 
                      </div>
                      Płatność gotówką od ręki lub przelew z VAT
                  </li>
                  <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                       <div class="p-1.5 bg-brand-600 rounded-full group-hover:scale-110 transition-transform shrink-0">
                          <Check class="w-4 h-4 text-white"/> 
                      </div>
                      Pomoc w załadunku
                  </li>
                  <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                       <div class="p-1.5 bg-brand-600 rounded-full group-hover:scale-110 transition-transform shrink-0">
                          <Check class="w-4 h-4 text-white"/> 
                      </div>
                      Wystawiamy faktury RR i VAT
                  </li>
                  <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                       <div class="p-1.5 bg-brand-600 rounded-full group-hover:scale-110 transition-transform shrink-0">
                          <Check class="w-4 h-4 text-white"/> 
                      </div>
                      Prowadzimy wykaz przemieszczeń bydła
                  </li>
              </ul>
            </div>

            <div class="text-center lg:text-left">
              <div class="bg-brand-800/40 rounded-2xl p-8 border border-brand-700/30">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center">
                    <Phone class="w-7 h-7 text-white" />
                  </div>
                  <div class="text-left">
                    <p class="text-xs text-brand-300 font-bold uppercase tracking-wider">Zadzwoń teraz</p>
                    <p class="text-2xl font-black text-white">500 277 836</p>
                  </div>
                </div>
                <p class="text-brand-100/70 text-sm mb-6">Umów się na odbiór bydła lub zapytaj o aktualną cenę skupu.</p>
                <a href="tel:+48500277836" class="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-brand-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors">
                   Zamów transport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-12 md:mt-24 pb-12 md:pb-20" data-aos="fade-up">
        <div class="text-center mb-8 md:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <FileText class="w-3.5 h-3.5" />
            FAQ
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 md:mb-4">Najczęściej zadawane pytania</h2>
          <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Odpowiedzi na pytania, które słyszymy najczęściej od naszych klientów.</p>
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
