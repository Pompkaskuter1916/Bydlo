<script setup>
import HeroSection from '../components/HeroSection.vue';
import { Truck, Scale, Banknote, Phone, Handshake, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div>
    <HeroSection />
    
    <!-- Quick Features Section (Trust Indicators) with Sidebar CTA -->
    <section class="py-10 md:py-20 bg-white border-b border-slate-100" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="mb-12">
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Dlaczego warto nam zaufać?</h2>
            <p class="text-slate-600 text-lg max-w-2xl">Profesjonalizm i uczciwość to fundamenty naszej pracy.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            <!-- Feature 1 -->
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-brand-200 transition-colors group">
                <div class="flex items-center gap-4 mb-3">
                    <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-600 shrink-0 shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                    <Truck class="w-6 h-6" />
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 leading-tight">Własna flota<br>transportowa</h3>
                </div>
                <p class="text-slate-600 text-sm leading-relaxed">
                Posiadamy specjalistyczne pojazdy do przewozu żywca. Odbieramy bydło bezpośrednio z Twojego gospodarstwa.
                </p>
            </div>

            <!-- Feature 2 -->
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-brand-200 transition-colors group">
                <div class="flex items-center gap-4 mb-3">
                    <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-600 shrink-0 shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                    <Scale class="w-6 h-6" />
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 leading-tight">Uczciwa waga<br>elektroniczna</h3>
                </div>
                <p class="text-slate-600 text-sm leading-relaxed">
                Ważenie odbywa się w Twojej obecności na legalizowanych wagach. Pełna transparentność i wydruk z wagi.
                </p>
            </div>

            <!-- Feature 3 -->
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-brand-200 transition-colors group">
                <div class="flex items-center gap-4 mb-3">
                    <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-600 shrink-0 shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                    <Banknote class="w-6 h-6" />
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 leading-tight">Płatność<br>od ręki</h3>
                </div>
                <p class="text-slate-600 text-sm leading-relaxed">
                Płacimy natychmiast po zważeniu i ustaleniu ceny. Gotówka lub szybki przelew na życzenie rolnika.
                </p>
            </div>
        </div>
      </div>
    </section>

    <!-- About Section (Green) - "Firma z tradycją" -->
    <section class="py-16 md:py-24 bg-brand-950 relative overflow-hidden" data-aos="fade-up">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Text Content -->
          <div class="order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900/50 text-brand-300 text-xs font-bold mb-6 border border-brand-800">
              <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              ZAUFAJ DOŚWIADCZENIU
            </div>

            <h2 class="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Firma z tradycją i szacunkiem do rolnika.
            </h2>

            <div class="space-y-6 text-brand-100 text-lg leading-relaxed">
              <p>
                Nazywam się <strong class="text-white">Marcin Kiedel</strong> i od ponad 17 lat prowadzę firmę Logos. 
                Przez ten czas zbudowałem relacje z setkami rolników z całego województwa zachodniopomorskiego.
              </p>
              <p>
                Szanuję ciężką pracę rolnika — dlatego stawiam na <strong class="text-white">uczciwość, terminowość i rzetelne warunki</strong>. 
                Każda transakcja to moje słowo honoru.
              </p>
            </div>

            <div class="mt-8">
               <RouterLink to="/o-nas" class="inline-flex items-center text-white font-bold hover:text-brand-300 transition-colors group">
                 Poznaj naszą historię
                 <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </RouterLink>
            </div>
          </div>

          <!-- Image Content -->
          <div class="order-1 lg:order-2 relative group">
            <div class="absolute inset-0 bg-brand-600 rounded-2xl rotate-3 scale-[1.02] opacity-20 blur-lg group-hover:rotate-2 group-hover:scale-[1.03] transition-all duration-500"></div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-800/50">
              <img src="/about-cows-v2.png" alt="Stado bydła na pastwisku - Bydło-Trans" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700">
              
              <!-- Stats Overlay -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-end justify-between">
                 <div class="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                    <div class="text-[10px] text-brand-200 uppercase tracking-wider font-bold mb-1">Doświadczenie</div>
                    <div class="text-xl font-black text-white">17+ lat</div>
                 </div>
                 <div class="bg-white rounded-lg p-3 border border-white/20 shadow-lg">
                    <div class="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Region</div>
                    <div class="text-xl font-black text-slate-900">Cała Polska</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section (White) - "Jak to działa?" -->
    <section class="py-16 md:py-24 bg-white border-b border-slate-100" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-4 border border-brand-100">
            PROSTY PROCES
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Jak to działa?</h2>
          <p class="text-slate-600 text-lg">Cały proces od kontaktu do płatności trwa zaledwie kilka godzin. Zero biurokracji, zero czekania.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Connector Line (Desktop) -->
          <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

          <!-- Step 1 -->
          <div class="bg-white relative">
             <div class="w-24 h-24 mx-auto bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 mb-6 relative z-10">
               <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">1</div>
               <Phone class="w-10 h-10 text-brand-600" />
             </div>
             <div class="text-center px-4">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Zadzwoń do nas</h3>
               <p class="text-slate-600 leading-relaxed text-sm">
                 Zadzwoń i podaj ile sztuk bydła chcesz sprzedać. Ustalimy termin odbioru nawet na ten sam dzień.
               </p>
             </div>
          </div>

          <!-- Step 2 -->
          <div class="bg-white relative">
             <div class="w-24 h-24 mx-auto bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 mb-6 relative z-10">
               <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">2</div>
               <Truck class="w-10 h-10 text-brand-600" />
             </div>
             <div class="text-center px-4">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Przyjeżdżamy i ważymy</h3>
               <p class="text-slate-600 leading-relaxed text-sm">
                 Nasz transport przyjeżdża na miejsce. Ważymy bydło na legalizowanej wadze elektronicznej w Twojej obecności.
               </p>
             </div>
          </div>

          <!-- Step 3 -->
          <div class="bg-white relative">
             <div class="w-24 h-24 mx-auto bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 mb-6 relative z-10">
               <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">3</div>
               <Handshake class="w-10 h-10 text-brand-600" />
             </div>
             <div class="text-center px-4">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Płacimy gotówkę</h3>
               <p class="text-slate-600 leading-relaxed text-sm">
                 Natychmiast po ustaleniu wagi płacimy gotówkę do ręki lub przelewem. Szybko, uczciwie i bez komplikacji.
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
