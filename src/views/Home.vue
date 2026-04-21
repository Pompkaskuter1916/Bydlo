<script setup>
import HeroSection from '../components/HeroSection.vue';
import Realizations from '../components/Realizations.vue';
import { Truck, Scale, Banknote, Phone, PhoneCall, Clock, Handshake, ArrowRight, Users, Timer, ShieldCheck, MapPin, Star, Check } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  // JSON-LD LocalBusiness schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Logos Marcin Kiedel — Skup i Sprzedaż Bydła',
    description: 'Profesjonalny skup, sprzedaż i transport bydła. Gwarantujemy uczciwość, szybki przelew od razu przy załadunku, darmową wycenę i ponad 25 lat doświadczenia. Obsługujemy rolników w regionie zachodniopomorskim oraz na terenie całej Polski.',
    url: 'https://bydlo-trans.pl',
    telephone: '+48500277836',
    email: 'logos@epoczta.pl',
    priceRange: '$$',
    hasMap: 'https://www.google.com/maps?q=Łęknica+55B,+78-460+Barwice',
    sameAs: [
      'https://www.olx.pl/d/oferta/skup-bydla-zywca-platnosc-od-reki-konkurencyjne-ceny-CID4371-IDjqga6.html'
    ],
    image: 'https://bydlo-trans.pl/bydlostart.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Łęknica 55B',
      addressLocality: 'Barwice',
      postalCode: '78-460',
      addressRegion: 'Zachodniopomorskie',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.7579476,
      longitude: 16.3016184,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '06:00', closes: '22:00' },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Zachodniopomorskie' },
      { '@type': 'AdministrativeArea', name: 'Pomorskie' },
      { '@type': 'AdministrativeArea', name: 'Wielkopolskie' },
      { '@type': 'AdministrativeArea', name: 'Lubuskie' },
      { '@type': 'AdministrativeArea', name: 'Kujawsko-pomorskie' },
      { '@type': 'City', name: 'Szczecin' },
      { '@type': 'City', name: 'Koszalin' },
      { '@type': 'City', name: 'Kołobrzeg' },
      { '@type': 'City', name: 'Białogard' },
      { '@type': 'City', name: 'Stargard' },
      { '@type': 'City', name: 'Drawsko Pomorskie' },
      { '@type': 'City', name: 'Świdwin' },
      { '@type': 'City', name: 'Police' },
      { '@type': 'City', name: 'Łobez' },
      { '@type': 'City', name: 'Gryfice' },
      { '@type': 'City', name: 'Choszczno' },
      { '@type': 'City', name: 'Myślibórz' },
      { '@type': 'City', name: 'Pyrzyce' },
      { '@type': 'City', name: 'Wałcz' },
      { '@type': 'City', name: 'Barwice' },
      { '@type': 'City', name: 'Świnoujście' },
      { '@type': 'City', name: 'Gryfino' },
      { '@type': 'City', name: 'Nowogard' },
    ],
    taxID: '6731683206',
  });
  document.head.appendChild(script);



  // BreadcrumbList
  const bcScript = document.createElement('script');
  bcScript.type = 'application/ld+json';
  bcScript.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://bydlo-trans.pl/' }
    ]
  });
  document.head.appendChild(bcScript);
});
</script>

<template>
  <div>
    <HeroSection />

    <!-- ===== TRUST FEATURES ===== -->
    <section aria-label="Dlaczego warto nam zaufać" class="py-16 md:py-24" style="background: #0f1209; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="mb-12">
          <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Dlaczego my?</p>
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-4" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
            Dlaczego warto nam zaufać?
          </h2>
          <div class="w-12 h-0.5" style="background: linear-gradient(90deg, #c8922a, transparent);"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div class="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style="background: rgba(200,146,42,0.1); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
              <Truck class="w-5 h-5" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Własna flota transportowa
            </h3>
            <p class="text-sm leading-relaxed" style="color: #9a8770;">
              Dysponujemy nowoczesną i specjalistyczną flotą pojazdów do bezpiecznego przewozu żywca. Gwarantujemy sprawny odbiór bydła bezpośrednio z Twojego gospodarstwa, minimalizując stres zwierząt i oszczędzając Twój czas.
            </p>
            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>

          <div class="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style="background: rgba(200,146,42,0.1); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
              <Scale class="w-5 h-5" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Uczciwa waga i rzetelna wycena bydła
            </h3>
            <p class="text-sm leading-relaxed" style="color: #9a8770;">
              Kluczem do naszej współpracy jest transparentność. Ważenie odbywa się w Twojej obecności na atestowanych wagach elektronicznych. Udostępniamy pełną specyfikację oraz oferujemy możliwość rozliczenia w układzie WBC.
            </p>
            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>

          <div class="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style="background: rgba(200,146,42,0.1); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
              <Banknote class="w-5 h-5" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Szybki przelew od razu przy załadunku
            </h3>
            <p class="text-sm leading-relaxed" style="color: #9a8770;">
              Szanujemy Twoją pracę, dlatego przelew wysyłamy natychmiast po zważeniu i obustronnym ustaleniu ceny. Dbałość o Twoje bezpieczeństwo finansowe to nasz priorytet.
            </p>
            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OBSZAR DZIAŁANIA ===== -->
    <section aria-label="Obszar działania" class="py-16 md:py-24 relative overflow-hidden" style="background: #0a0c08; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="absolute inset-0 opacity-[0.025]" style="background-image: repeating-linear-gradient(45deg, #c8922a 0, #c8922a 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>
      <div class="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Baza w Łęknicy</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
          Nasz obszar działania
        </h2>
        <div class="p-8 rounded-2xl md:p-10" style="background: #13160d; border: 1px solid rgba(200,146,42,0.15); box-shadow: 0 4px 24px rgba(0,0,0,0.4);">
          <MapPin class="w-10 h-10 mx-auto mb-5" style="color: #c8922a;" />
          <p class="text-lg md:text-xl leading-relaxed" style="color: #a09280;">
            Głównym obszarem naszej działalności jest województwo <strong style="color: #d4c8b0;">zachodniopomorskie</strong>, jednak prężnie działamy również na terenie <strong style="color: #d4c8b0;">całej Polski</strong>. Zapewniamy najszybszy dojazd prosto na Twoje gospodarstwo.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== CO ZAPEWNIAMY ===== -->
    <section class="py-16 md:py-24 relative overflow-hidden" style="background: #0f1209; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl border border-brand-800/30" data-aos="fade-up">
          <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10">
            <div class="max-w-4xl mx-auto text-center">
              
              <div class="mb-10 sm:mb-12">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500 text-black text-xs font-bold mb-4 shadow-sm">
                  <ShieldCheck class="w-3.5 h-3.5" />
                  Nasze standardy
                </div>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Co zapewniamy<br class="hidden sm:block"/> przy każdej transakcji?</h2>
              </div>
              
              <div class="flex flex-col items-center gap-3 sm:gap-4 text-left text-brand-100 text-base max-w-xl mx-auto">
                    <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                        <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                            <Check class="w-5 h-5 text-white"/> 
                        </div>
                        <span class="relative z-10 font-bold group-hover:text-white transition-colors">Krótki termin odbioru (2-7 dni)</span>
                    </div>
                    <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                        <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                            <Check class="w-5 h-5 text-white"/> 
                        </div>
                        <span class="relative z-10 font-bold group-hover:text-white transition-colors">Szybki przelew realizowany od razu przy załadunku ze zwrotem VAT</span>
                    </div>
                    <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                        <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                            <Check class="w-5 h-5 text-white"/> 
                        </div>
                        <span class="relative z-10 font-bold group-hover:text-white transition-colors">Pomoc w załadunku</span>
                    </div>
                    <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                        <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                            <Check class="w-5 h-5 text-white"/> 
                        </div>
                        <span class="relative z-10 font-bold group-hover:text-white transition-colors">Wystawiamy faktury RR i VAT oraz obsługujemy system KSeF</span>
                    </div>
                    <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                        <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                            <Check class="w-5 h-5 text-white"/> 
                        </div>
                        <span class="relative z-10 font-bold group-hover:text-white transition-colors">Prowadzimy wykaz przemieszczeń bydła w ARiMR - IRZ plus</span>
                    </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

   
   

    <!-- ===== STATS ===== -->
    <section aria-label="Nasze osiągnięcia" class="py-16 md:py-20" style="background: #0a0c08; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="text-center mb-14">
          <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Nasze liczby</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight" style="color: #f0ead8;">
            Liczby mówią same
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div v-for="(stat, i) in [
            { icon: Clock, value: '25+', label: 'Lat na rynku' },
            { icon: Users, value: '1000+', label: 'Rolników' },
            { icon: Timer, value: '24h', label: 'Czas reakcji' },
            { icon: MapPin, value: '4', label: 'Województwa' },
          ]" :key="i"
            class="group relative rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);"
          >
            <div class="w-10 h-10 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              style="background: rgba(200,146,42,0.08); color: #c8922a; border: 1px solid rgba(200,146,42,0.2);">
              <component :is="stat.icon" class="w-5 h-5" />
            </div>
            <p class="text-3xl md:text-4xl font-black tracking-tight mb-1" style="color: #e8ad40;">{{ stat.value }}</p>
            <p class="text-xs uppercase tracking-widest font-bold" style="color: #7a6a55;">{{ stat.label }}</p>

            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== NASZE REALIZACJE ===== -->
    <Realizations />


    <!-- ===== CTA ===== -->
    <section class="relative py-16 md:py-24 overflow-hidden" style="background: #0f1209;">
      <!-- Diagonal gold lines decoration -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: repeating-linear-gradient(-45deg, #c8922a 0, #c8922a 1px, transparent 0, transparent 60px);"></div>

      <div class="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div class="relative rounded-3xl px-8 py-14 shadow-2xl overflow-hidden"
          style="background: #13160d; border: 1px solid rgba(200,146,42,0.25);">

          <!-- Top gold line -->
          <div class="absolute top-0 left-[15%] right-[15%] h-0.5" style="background: linear-gradient(90deg, transparent, #c8922a, transparent);"></div>

          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style="background: rgba(200,146,42,0.1); border: 1px solid rgba(200,146,42,0.3); color: #c8922a;">
            <Phone class="w-6 h-6" />
          </div>

          <p class="text-xs uppercase tracking-widest font-bold mb-4" style="color: #c8922a;">Skontaktuj się z nami</p>
          <h2 class="font-display text-3xl md:text-5xl font-bold mb-6" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8; line-height: 1.2;">
            Umów się na odbiór<br>
            <em class="not-italic" style="color: #c8922a;">jeszcze dziś.</em>
          </h2>
          <p class="text-base leading-relaxed max-w-xl mx-auto mb-10" style="color: #9a8770;">
            Jeden telefon wystarczy. Podpowiemy Ci najlepsze warunki sprzedaży i umówimy się na wygodny termin odbioru.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+48500277836"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-xl w-full sm:w-auto justify-center"
              style="background: linear-gradient(135deg, #c8922a, #a97820); color: #f0ead8; box-shadow: 0 8px 32px rgba(200,146,42,0.3);"
            >
              <Phone class="w-4 h-4" />
              +48 500 277 836
            </a>
            <RouterLink
              to="/kontakt"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:border-[rgba(200,146,42,0.5)] w-full sm:w-auto justify-center"
              style="color: #a09280; border: 1px solid rgba(200,146,42,0.2); background: transparent;"
            >
              Napisz do nas
              <ArrowRight class="w-4 h-4" />
            </RouterLink>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap justify-center gap-6 mt-10 pt-8" style="border-top: 1px solid rgba(200,146,42,0.1);">
            <div class="flex items-center gap-1.5 text-sm" style="color: #9a8770;">
              <ShieldCheck class="w-4 h-4" style="color: #c8922a;" />
              <span class="font-medium">Bez zobowiązań</span>
            </div>
            <div class="flex items-center gap-1.5 text-sm" style="color: #9a8770;">
              <Clock class="w-4 h-4" style="color: #c8922a;" />
              <span class="font-medium">Odpowiedź w 15 min</span>
            </div>
            <div class="flex items-center gap-1.5 text-sm" style="color: #9a8770;">
              <Banknote class="w-4 h-4" style="color: #c8922a;" />
              <span class="font-medium">Uczciwe ceny</span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
