<script setup>
import { BadgeCheck, Users, Clock, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-white relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl -z-10"></div>
    <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-400 rounded-full opacity-20"></div>
    <div class="absolute top-2/3 right-1/4 w-3 h-3 bg-brand-500 rounded-full opacity-15"></div>
    <!-- Header Banner -->
    <div class="bg-brand-950 text-white py-20 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Ponad <span class="text-emerald-400">15 lat doświadczenia</span> w skupie bydła
        </h1>
        <p class="text-emerald-100 text-lg max-w-2xl mx-auto">Firma Logos prowadzona przez Marcina Kiedla to gwarancja uczciwości i profesjonalizmu.</p>
      </div>
    </div>

    <!-- Main Content Split -->
    <section class="py-16 md:py-24" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Text Content -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-sm font-bold mb-6 border border-brand-100">
              <ShieldCheck class="w-4 h-4" />
              Lider w regionie
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Szanujemy ciężką pracę rolnika. <br>
              <span class="text-emerald-600">Wspieramy lokalne rolnictwo.</span>
            </h2>
            <div class="relative bg-brand-50/50 p-8 rounded-2xl rounded-tl-none border border-brand-100 shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-right" data-aos-delay="200">
                <!-- Speech Bubble Tail -->
                <div class="absolute -top-[1px] -left-[1px] w-8 h-8 bg-brand-50/50 border-t border-l border-brand-100 transform -skew-y-[45deg] origin-top-left"></div>

                <div class="space-y-4 text-slate-600 text-lg leading-relaxed relative z-10">
                  <p>
                    Z głębokim szacunkiem podchodzimy do trudu pracy rolnika, dlatego naszą misją jest realne wsparcie lokalnego rolnictwa. Nazywam się <strong>Marcin Kiedel</strong> i od 17 lat prowadzę firmę Logos. Choć sercem naszej działalności są powiaty <strong>szczecinecki, świdwiński, wałecki, koszaliński oraz drawski</strong>, z sukcesem budujemy relacje z gospodarstwami w całej Polsce.
                  </p>
                  <p>
                    W codziennej pracy stawiamy na solidność, rzetelność i pełną przejrzystość transakcji. Dzięki ugruntowanej współpracy z wiodącymi ubojniami w kraju i za granicą, gwarantujemy naszym dostawcom konkurencyjne warunki cenowe.
                  </p>
                  <div class="bg-white p-4 rounded-xl border border-brand-100 mt-4">
                    <p class="font-bold text-brand-800 mb-2 text-base">
                      Nasza oferta obejmuje nie tylko profesjonalny skup, ale również sprzedaż wysokiej klasy bydła:
                    </p>
                    <ul class="list-disc list-inside space-y-1 ml-2 text-slate-700 text-base">
                        <li>Krowy i jałówki cielne,</li>
                        <li>Byki rozpłodowe,</li>
                        <li>Cielęta oraz odsadki.</li>
                    </ul>
                  </div>
                </div>
            </div>

            <!-- Trust Badges -->
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 cursor-default">
                <BadgeCheck class="w-5 h-5 text-brand-600" />
                <span class="font-bold text-slate-700 text-sm">Legalny Skup</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 cursor-default">
                <Users class="w-5 h-5 text-brand-600" />
                <span class="font-bold text-slate-700 text-sm">Rodzinna Firma</span>
              </div>
            </div>
          </div>

            <div class="relative group">
              <div class="absolute inset-0 bg-brand-700/10 rounded-2xl transform rotate-3 scale-105 group-hover:rotate-2 transition-transform duration-500"></div>
              <img 
                src="/about-cows-v2.png" 
                alt="Transport bydła - krowy na pastwisku" 
                class="relative rounded-2xl shadow-2xl border border-slate-200 w-full object-cover h-[500px]"
              />
              <!-- Overlay Text Badge -->
              <div class="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-white/50 z-20">
                <span class="block text-brand-800 font-black text-lg tracking-tight uppercase">Transport Bydła</span>
              </div>
            <!-- Quote Card -->
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <p class="italic text-slate-600 mb-4">"Współpracuję z nimi od lat. Zawsze na czas i kasa się zgadza."</p>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div>
                  <p class="font-bold text-slate-900 text-sm">Pan Marek</p>
                  <p class="text-xs text-slate-500">Hodowca z Bornego Sulinowa</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-brand-900 text-white py-16" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-6">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">17 Lat</p>
            <p class="text-emerald-100 font-medium tracking-wide">Doświadczenia na rynku</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-brand-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">1000+</p>
            <p class="text-emerald-100 font-medium tracking-wide">Zadowolonych rolników</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-brand-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">24h</p>
            <p class="text-emerald-100 font-medium tracking-wide">Czas reakcji i dojazdu</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
