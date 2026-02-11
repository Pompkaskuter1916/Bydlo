<script setup>
import { Phone, Truck, Scale, BadgeCheck, MapPin } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-white border-b border-slate-100 overflow-hidden h-auto lg:h-[58vh] flex flex-col lg:block">
    
    <div class="order-first lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-80 sm:h-96 lg:h-full w-full bg-slate-50 relative z-0">
       <img class="absolute inset-0 w-full h-full object-cover" src="/wmremove-transformed.png" alt="Skup bydła i transport zwierząt Szczecinek - Bydło-Trans">
       
       <div class="hidden lg:block absolute inset-y-0 left-0 w-40 -translate-x-1/2 z-10 backdrop-blur-2xl [mask-image:linear-gradient(to_right,transparent,black,transparent)] pointer-events-none"></div>
       
       <div class="block lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

       <div class="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 z-30 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/60 max-w-[280px] lg:max-w-xs transform hover:scale-105 transition-transform duration-300">
         <div class="flex items-start gap-3 lg:gap-4">
           <div class="p-2 bg-brand-100 rounded-lg text-brand-700 shrink-0">
             <MapPin class="w-5 h-5 lg:w-6 lg:h-6" />
           </div>
           <div>
             <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Lokalizacja bazy</p>
             <p class="font-bold text-slate-900 text-sm lg:text-base leading-tight">Baza: Szczecinek (Dojazd 24h)</p>
           </div>
         </div>
       </div>
    </div>

    <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none hidden lg:block z-0">
        <Truck class="w-[800px] h-[800px] text-slate-900" />
    </div>

    <div class="order-last lg:order-none w-full h-full relative z-20 pointer-events-none flex flex-col justify-center">
      
      <div class="w-full lg:w-1/2 px-4 py-8 lg:py-0 flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-12 lg:px-0 lg:pl-[16%] lg:pt-2 pointer-events-auto bg-white lg:bg-transparent">
          
          <div class="flex flex-row lg:flex-col gap-6 lg:gap-10 border-t lg:border-t-0 lg:border-l border-slate-100 lg:border-slate-200 pt-6 lg:pt-2 lg:pl-4 z-20 w-full lg:w-auto justify-between lg:justify-start shrink-0 order-last lg:order-first">
             <div class="flex flex-col items-center lg:items-start">
                <span class="text-lg lg:text-xl font-black text-slate-900 tracking-tighter">15+</span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Lat na rynku</span>
             </div>
             <div class="flex flex-col items-center lg:items-start">
                <span class="text-lg lg:text-xl font-black text-slate-900 tracking-tighter">100%</span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Polski kapitał</span>
             </div>
             <div class="flex flex-col items-center lg:items-start">
                <span class="text-lg lg:text-xl font-black text-slate-900 tracking-tighter">24H</span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Czas dojazdu</span>
             </div>
          </div>

          <div class="flex flex-col justify-start text-left items-start relative z-10 flex-grow max-w-xl">
            
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold mb-4 lg:mb-5 border border-brand-100 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              SKUP BYDŁA: SZCZECINEK I OKOLICE
            </div>

            <h1 class="text-3xl sm:text-5xl md:text-6xl tracking-tight font-black text-slate-900 mb-5 leading-tight">
              <span class="block text-slate-900">Profesjonalny</span>
              <span class="block text-brand-700">Skup Bydła.</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8">
              <strong class="text-slate-800">Gotówka od ręki</strong>, uczciwa waga i <strong class="text-slate-800">darmowy transport</strong> z Twojego gospodarstwa w <span class="text-brand-700 font-bold">Szczecinku</span> i okolicach (Barwice, Borne Sulinowo, Grzmiąca).
            </p>
            
            <div class="grid grid-cols-1 gap-2 mb-8 w-full text-slate-700">
               <div class="flex items-center gap-2.5">
                 <Truck class="w-5 h-5 text-brand-600 shrink-0" />
                 <span class="text-sm font-bold">Dojazd do rolnika (zachodniopomorskie)</span>
               </div>
               <div class="flex items-center gap-2.5">
                 <Scale class="w-5 h-5 text-brand-600 shrink-0" />
                 <span class="text-sm font-bold">Uczciwa waga elektroniczna</span>
               </div>
               <div class="flex items-center gap-2.5">
                 <BadgeCheck class="w-5 h-5 text-brand-600 shrink-0" />
                 <span class="text-sm font-bold">Płatność od ręki (gotówka)</span>
               </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+48533255214" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-xl text-white bg-brand-700 hover:bg-brand-800 transition-all shadow-lg hover:shadow-brand-700/30 active:scale-95">
                <Phone class="w-5 h-5 mr-2" />
                Zadzwoń teraz
              </a>
              <RouterLink to="/oferta" class="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:border-brand-200 active:bg-slate-100">
                Sprawdź ofertę
              </RouterLink>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>