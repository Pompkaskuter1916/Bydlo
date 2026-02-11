<script setup>
import { Check } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-slate-50 min-h-screen pb-20 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-40 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-[0.02] -z-10" style="background-image: linear-gradient(#80BC40 1px, transparent 1px), linear-gradient(90deg, #80BC40 1px, transparent 1px); background-size: 50px 50px;"></div>
    <!-- Header -->
    <div class="bg-brand-950 text-white py-20 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Nasza <span class="text-emerald-400">Oferta Skupu</span></h1>
        <p class="text-emerald-100 text-lg max-w-2xl mx-auto">Skupujemy bydło rzeźne i hodowlane. Prowadzimy również sprzedaż cieląt i odsadków.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Offer Card 1: Byki -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-48 bg-slate-200 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Byki">
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 class="text-white text-xl font-bold">Buhaje / Byki</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-slate-600 mb-6 font-medium">Poszukujemy bydła o wysokiej mięsności. Interesują nas zarówno rasy mięsne (Limousine, Charolaise), jak i mieszańce.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Waga powyżej 450kg
              </li>
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Waga ciężka +800kg (Premium)
              </li>
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Wszystkie klasy WBC
              </li>
            </ul>
          </div>
        </div>

        <!-- Offer Card 2: Jałówki -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-48 bg-slate-200 relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy">
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 class="text-white text-xl font-bold">Jałówki</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-slate-600 mb-6 font-medium">Skupujemy jałówki przeznaczone na rzeź. Szczególnie cenimy sztuki dobrze odchowane i zdrowe.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Rasy mleczne i mięsne
              </li>
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Dobra kondycja zdrowotna
              </li>
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Płatność od wagi żywej lub WBC
              </li>
            </ul>
          </div>
        </div>

        <!-- Offer Card 3: Krowy -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-48 bg-slate-200 relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy">
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 class="text-white text-xl font-bold">Krowy</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-slate-600 mb-6 font-medium">Kupujemy krowy wybrakowane, po laktacji oraz sztuki rzeźne. Każdą sztukę wyceniamy indywidualnie.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Krowy HF i mieszańce
              </li>
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Odbiór nawet pojedynczych sztuk
              </li>
              <li class="flex items-center text-sm text-slate-700">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Konkurencyjne stawki
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Sales Section (Sprzedaż) -->
      <div class="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-slate-900 text-center mb-10" data-aos="fade-up">Prowadzimy również <span class="text-emerald-600">sprzedaż</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
            <div class="bg-white p-6 rounded-xl shadow border border-slate-100 text-center hover:shadow-lg hover:border-brand-200 transition-all duration-300 transform hover:scale-105 group">
                <h3 class="font-bold text-brand-700 text-lg mb-2">Cielaki</h3>
                <p class="text-slate-600 text-sm">Rasy mięsne i mleczne</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow border border-slate-100 text-center hover:shadow-lg hover:border-brand-200 transition-all duration-300 transform hover:scale-105 group">
                <h3 class="font-bold text-brand-700 text-lg mb-2">Odsadki</h3>
                <p class="text-slate-600 text-sm">Zdrowe i odchowane</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow border border-slate-100 text-center hover:shadow-lg hover:border-brand-200 transition-all duration-300 transform hover:scale-105 group">
                <h3 class="font-bold text-brand-700 text-lg mb-2">Krowy i Jałówki</h3>
                <p class="text-slate-600 text-sm">Cielne, do dalszego chowu</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow border border-slate-100 text-center hover:shadow-lg hover:border-brand-200 transition-all duration-300 transform hover:scale-105 group">
                <h3 class="font-bold text-brand-700 text-lg mb-2">Byki</h3>
                <p class="text-slate-600 text-sm">Rozpłodniki</p>
            </div>
        </div>
      </div>

      <!-- Transport Info Block -->
      <div class="mt-16 bg-brand-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden" data-aos="fade-up">
        <div class="relative z-10">

          <h2 class="text-3xl font-extrabold text-white mb-4">Co zapewniamy?</h2>
            <ul class="text-left text-emerald-100 text-lg max-w-2xl mx-auto mb-8 space-y-2">
                <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                    <div class="p-1.5 bg-brand-500 rounded-full group-hover:scale-110 transition-transform">
                        <Check class="w-4 h-4 text-white"/> 
                    </div>
                    Krótki termin odbioru (2-7 dni)
                </li>
                <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                     <div class="p-1.5 bg-brand-500 rounded-full group-hover:scale-110 transition-transform">
                        <Check class="w-4 h-4 text-white"/> 
                    </div>
                    Płatność gotówką od ręki lub przelew z VAT
                </li>
                <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                     <div class="p-1.5 bg-brand-500 rounded-full group-hover:scale-110 transition-transform">
                        <Check class="w-4 h-4 text-white"/> 
                    </div>
                    Pomoc w załadunku
                </li>
                <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                     <div class="p-1.5 bg-brand-500 rounded-full group-hover:scale-110 transition-transform">
                        <Check class="w-4 h-4 text-white"/> 
                    </div>
                    Wystawiamy faktury RR i VAT
                </li>
                <li class="flex items-center gap-3 p-3 bg-brand-800/30 rounded-lg hover:bg-brand-800/50 transition-colors cursor-default group border border-brand-700/30 font-medium">
                     <div class="p-1.5 bg-brand-500 rounded-full group-hover:scale-110 transition-transform">
                        <Check class="w-4 h-4 text-white"/> 
                    </div>
                    Prowadzimy wykaz przemieszczeń bydła
                </li>
            </ul>
          <a href="/kontakt" class="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-colors">
            Zamów transport
          </a>
        </div>
        <!-- Decorative bg pattern -->
        <div class="absolute top-0 right-0 p-12 opacity-5 transform rotate-12">
           <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" class="text-white"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
        </div>
      </div>

    </div>
  </div>
</template>
