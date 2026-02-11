<template>
  <footer class="bg-gray-900 text-white border-t border-brand-900/30">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="space-y-4">
          <span class="text-2xl font-bold text-white tracking-tight">BYDŁO<span class="text-amber-500">-TRANS</span></span>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            Lider skupu bydła w regionie Szczecinka. Oferujemy najwyższe ceny, płatność gotówką od ręki i profesjonalną obsługę weterynaryjną.
          </p>
        </div>
        
        <div>
          <h3 class="text-sm font-bold text-brand-500 tracking-wider uppercase mb-4">Obszar działania</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Szczecinek</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Borne Sulinowo</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Barwice</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Biały Bór</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Czaplinek</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-bold text-brand-500 tracking-wider uppercase mb-4">Kontakt</h3>
          <ul class="space-y-4 text-gray-300">
            <li class="flex flex-col">
                <span class="text-xs text-gray-500 uppercase">Telefon</span>
                <a href="tel:+48000000000" class="hover:text-amber-400 font-bold text-xl transition-colors">000 000 000</a>
            </li>
             <li class="flex flex-col">
                <span class="text-xs text-gray-500 uppercase">Email</span>
                <span class="text-white">kontakt@bydlo-trans.pl</span>
            </li>
             <li class="flex flex-col">
                <span class="text-xs text-gray-500 uppercase">Adres</span>
                <span class="text-white">78-400 Szczecinek</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-800 pt-8 text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Bydło-Trans Szczecinek. Wszelkie prawa zastrzeżone.</p>
        <p class="text-sm text-gray-600 mt-2 sm:mt-0">Realizacja: <span class="hover:text-brand-500 cursor-pointer transition-colors">Antigravity</span></p>
      </div>
    </div>
  </footer>
</template>
