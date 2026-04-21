<script setup>
import { ref, nextTick } from 'vue';
import { BadgeCheck, Users, Clock, ShieldCheck, Truck, Scale, Banknote, Phone, ArrowRight, Heart, Handshake, Award, MapPin, ChevronDown, ChevronUp, UtensilsCrossed } from 'lucide-vue-next';


</script>

<template>
  <div class="bg-neutral-950 relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-brand-900/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl -z-10"></div>

    <!-- Header Banner -->
    <div class="bg-black text-white py-20 md:py-28 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-transparent to-black/50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-6 border border-brand-900/30">
          <ShieldCheck class="w-3.5 h-3.5" />
          OD 2007 ROKU
        </div>
        <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
          Ponad <span class="text-brand-500">25 lat rzetelnego doświadczenia</span><br>w skupie bydła
        </h1>
        <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Logos Marcin Kiedel — Twój zaufany i profesjonalny partner w rolnictwie, gwarantujący transparentność i najwyższe standardy współpracy.</p>
      </div>
    </div>

    <!-- Main Content Split - O firmie -->
    <section class="py-16 md:py-24 relative" data-aos="fade-up">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-x-0 inset-y-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-brand-500" style="background-blend-mode: multiply; mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);"></div>
      <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-3xl -translate-y-1/2 -ml-40 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Text Content -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-400 text-sm font-bold mb-6 border border-brand-900">
              <Heart class="w-4 h-4" />
              Nasza historia
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
              Szanujemy owoc obustronnej współpracy. <br>
              <span class="text-brand-500">Wspieramy i promujemy lokalne rolnictwo.</span>
            </h2>
            <div class="relative bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 p-8 rounded-2xl rounded-tl-none border border-brand-800/30 shadow-xl" data-aos="fade-right" data-aos-delay="200">
                <div class="absolute -top-[1px] -left-[1px] w-8 h-8 bg-brand-900 border-t border-l border-brand-800/30 transform -skew-y-[45deg] origin-top-left"></div>
                <div class="space-y-4 text-neutral-400 text-base md:text-lg leading-relaxed relative z-10">
                  <p>
                    Nazywam się <strong class="text-white">Marcin Kiedel</strong> i od ponad 25 lat kieruję firmą Logos. Naszą misją jest długofalowe wsparcie rolnictwa oparte na szybkim działaniu i wzajemnym zaufaniu.
                  </p>
                  <p>
                    Odbieramy zwierzęta na terenie <strong class="text-white">województwa zachodniopomorskiego, pomorskiego, wielkopolskiego i lubuskiego</strong>. Dzięki własnej flocie aut skracamy czas obsługi i zdejmujemy z Ciebie obciążenia logistyczne.
                  </p>
                  <p>
                    Poprzez wyłączną współpracę z największymi ubojniami w kraju i za granicą oraz dużymi ilościami sprzedawanych zwierząt, jesteśmy w stanie wynegocjować najlepsze stawki dla gospodarza. Zapewniamy w 100% rzetelną wycenę, przemyślany proces i stabilne warunki oparte na obustronnym szacunku.
                  </p>
                </div>
            </div>

            <!-- Handel wymienny -->
            <div class="mt-6 flex items-start gap-4 p-5 bg-gradient-to-r from-brand-900/40 to-transparent border-l-4 border-brand-500 rounded-r-xl" data-aos="fade-right" data-aos-delay="300">
              <div class="w-10 h-10 bg-brand-950/80 rounded-full flex items-center justify-center shrink-0 border border-brand-500/30 text-brand-400 shadow-lg">
                <Handshake class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-bold text-white text-lg mb-1">Handel wymienny</h4>
                <p class="text-neutral-400 text-sm">Kupując u nas cielęta, możesz sprzedać nam bydło rzeźne po wyższej cenie.</p>
              </div>
            </div>

          </div>

          <!-- Image -->
          <div class="relative group" data-aos="fade-left">
              <div class="absolute inset-0 bg-brand-900/20 rounded-2xl transform rotate-3 scale-105 group-hover:rotate-2 transition-transform duration-500"></div>
              <img 
                src="/onastransport.webp" 
                alt="Transport bydła - krowy na pastwisku, specjalistyczny transport żywca"
                title="Logos Transport Bydła"
                class="relative rounded-2xl shadow-2xl border border-neutral-800 w-full object-cover h-64 md:h-[400px] lg:h-[500px]"
                loading="lazy" 
                decoding="async" 
                width="800" 
                height="500"
              />
              <div class="absolute top-6 right-6 bg-neutral-900/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-neutral-700 z-20">
                <span class="block text-brand-400 font-black text-lg tracking-tight uppercase">Transport Bydła</span>
              </div>
            <div class="absolute -bottom-6 -left-6 bg-neutral-900 p-6 rounded-xl shadow-xl border border-neutral-800 max-w-xs hidden md:block">
              <p class="italic text-neutral-400 mb-4">"Współpracujemy od lat. Cenię ich za terminowy odbiór, pełen profesjonalizm i rzetelne rozliczenia od ręki."</p>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-brand-950 rounded-full flex items-center justify-center">
                  <Users class="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <p class="font-bold text-white text-sm">Pan Marek</p>
                  <p class="text-xs text-neutral-500">Hodowca z Bornego Sulinowa</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Nasza misja — wartości firmy -->
    <section class="py-16 md:py-24 bg-black border-y border-neutral-800 relative" data-aos="fade-up">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-x-0 inset-y-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-brand-500" style="background-blend-mode: multiply;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <Award class="w-3.5 h-3.5" />
            NASZE WARTOŚCI
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Na czym budujemy naszą firmę?</h2>
          <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Każda transakcja opiera się na prostych, ale niezłomnych zasadach.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          <!-- Value 1 -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-8 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="0">
            <div class="w-14 h-14 bg-brand-950/50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
              <Handshake class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Uczciwe warunki</h3>
            <p class="text-neutral-400 leading-relaxed">Cena jest zawsze uczciwa i transparentna. Ważymy w Twojej obecności na legalizowanych wagach — żadnych ukrytych potrąceń.</p>
          </div>

          <!-- Value 2 -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-8 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="150">
            <div class="w-14 h-14 bg-brand-950/50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
              <Truck class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Szybki odbiór</h3>
            <p class="text-neutral-400 leading-relaxed">Przyjeżdżamy nawet w ciągu 24 godzin. Posiadamy własną flotę transportową, więc nie musisz martwić się o logistykę.</p>
          </div>

          <!-- Value 3 -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-8 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
            <div class="w-14 h-14 bg-brand-950/50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
              <Banknote class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Szybki przelew</h3>
            <p class="text-neutral-400 leading-relaxed">Płacimy natychmiast po załadunku. Szybki przelew realizowany jest od razu przy załadunku, bez zbędnych komplikacji.</p>
          </div>
        </div>
      </div>
    </section>



    <!-- Oferta Mięs (Sprzedaż mięs przeniesiona) -->
    <section id="sprzedaz-mies" class="py-16 md:py-24 relative bg-neutral-950 border-t border-neutral-800" data-aos="fade-up">
      <div class="absolute inset-x-0 inset-y-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-brand-500" style="background-blend-mode: multiply;"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <UtensilsCrossed class="w-3.5 h-3.5" />
            SPRZEDAŻ MIĘS
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Świeże <span class="text-brand-500">mięso wołowe</span> prosto od producenta</h2>
          <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Oferujemy mięso najwyższej jakości, pochodzące z naszego skupu. Gwarantujemy świeżość i naturalny smak.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
              <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Najwyższej jakości kawałki wołowiny — rostbef, polędwica, antrykot.</p>
              <div class="flex flex-wrap gap-2">
                <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Polędwica</span>
                <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Rostbef</span>
              </div>
            </div>
          </div>

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
              <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Świeżo mielone mięso wołowe, idealne na burgery, kotlety mielone i sosy.</p>
              <div class="flex flex-wrap gap-2">
                <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Na burgery</span>
              </div>
            </div>
          </div>

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
                <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Ribeye</span>
              </div>
            </div>
          </div>

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
              <p class="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Domowej roboty kiełbasy i wędliny z polskiej wołowiny. Tradycyjne receptury.</p>
              <div class="flex flex-wrap gap-2">
                <span class="text-[10px] sm:text-[11px] font-bold bg-brand-950 text-brand-400 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-brand-100">Naturalne</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
            <p class="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-6">Zaopatrujemy masarnie, restauracje i hotele w wołowinę najwyższej jakości prosto z naszego uboju. Zadzwoń po indywidualną ofertę hurtową.</p>
            <a href="tel:+48500277836" class="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold rounded-2xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-600/30 active:scale-95">
                <Phone class="w-5 h-5" />
                Dział Sprzedaży: 500 277 836
            </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-black text-white py-16 md:py-20 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Liczby mówią same</h2>
          <p class="text-neutral-500 text-lg max-w-xl mx-auto">Nasze wyniki to efekt lat ciężkiej pracy i zaufania rolników.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">25+</p>
            <p class="text-neutral-400 font-medium tracking-wide">Lat na rynku</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-neutral-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">1000+</p>
            <p class="text-neutral-400 font-medium tracking-wide">Zadowolonych rolników</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-neutral-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">24h</p>
            <p class="text-neutral-400 font-medium tracking-wide">Czas reakcji</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-neutral-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">100%</p>
            <p class="text-neutral-400 font-medium tracking-wide">Uczciwa waga</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 md:py-20 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center border border-brand-800/30 rounded-3xl p-8 shadow-2xl bg-neutral-900/40 backdrop-blur-sm">
        <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4" data-aos="fade-up">
          Masz pytania? Zadzwoń do nas
        </h2>
        <p class="text-neutral-400 text-lg max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          Chcesz poznać aktualne ceny, szczegóły dostawy lub złożyć zamówienie na świeże mięso wołowe? Jesteśmy do Twojej dyspozycji. Zadzwoń lub napisz.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <a href="tel:+48500277836" class="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-600/30 active:scale-95 group">
            <Phone class="w-5 h-5 group-hover:rotate-12 transition-transform" />
            +48 500 277 836
          </a>
          <RouterLink to="/kontakt" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-700/50 text-base font-bold rounded-2xl text-neutral-300 bg-brand-900/30 hover:bg-brand-900/50 transition-all shadow-sm hover:border-brand-500">
            Formularz kontaktowy
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>
