<script setup>
import { Phone, CheckCircle } from 'lucide-vue-next';
</script>

<template>
  <div class="relative bg-brand-900 overflow-hidden min-h-[90vh] flex items-center">
    <!-- Background Overlay -->
    <div class="absolute inset-0 z-0">
      <img class="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1545464522-e421575822e0?q=80&w=1920&auto=format&fit=crop" alt="Bydło na pastwisku" />
      <div class="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/60" aria-hidden="true"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <div class="inline-flex items-center px-3 py-1 rounded-full border border-brand-400/30 bg-brand-800/50 text-brand-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <span class="flex h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
            Lider skupu w regionie
          </div>
          <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Rzetelny Skup Bydła</span>
            <span class="block text-amber-500">w Szczecinku</span>
          </h1>
          <p class="mt-3 text-base text-brand-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Profesjonalny skup bydła rzeźnego na terenie województwa <span class="text-white font-semibold">zachodniopomorskiego</span>. 
            <br class="hidden lg:block"/>
            Gwarantujemy uczciwą wagę, gotówkę do ręki oraz darmowy odbiór prosto z Twojego gospodarstwa.
          </p>
          
          <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+48000000000" class="group flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-amber-500 hover:bg-amber-600 md:text-lg shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-1">
                <Phone class="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Zadzwoń Teraz
              </a>
              <a href="#cennik" class="flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm md:text-lg transition-all">
                Sprawdź Ceny
              </a>
            </div>
          </div>

          <div class="mt-12 border-t border-brand-800/50 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 text-brand-100">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <CheckCircle class="h-6 w-6 text-amber-500" />
              </div>
              <div class="ml-3 text-base font-medium">Odbiór z gospodarstwa</div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <CheckCircle class="h-6 w-6 text-amber-500" />
              </div>
              <div class="ml-3 text-base font-medium">Płatność gotówką</div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <CheckCircle class="h-6 w-6 text-amber-500" />
              </div>
              <div class="ml-3 text-base font-medium">Własny transport</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
