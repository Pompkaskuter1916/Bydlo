<script setup>
</script>

<template>
  <section id="kontakt" class="py-24 bg-gradient-to-b from-slate-50 to-brand-900/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-16 items-center">
        <div>
          <h2 class="text-3xl font-extrabold text-brand-900 sm:text-4xl mb-6 leading-tight">
            Masz bydło na sprzedaż? <br/>
            <span class="text-amber-600">Skontaktuj się z nami.</span>
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Wypełnij formularz lub zadzwoń. Wstępną wycenę otrzymasz nawet tego samego dnia.
            Obsługujemy <span class="font-semibold text-brand-800">Szczecinek, Koszalin, Wałcz</span> i całe województwo.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-center group">
              <div class="flex-shrink-0 bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform">
                <!-- Map Pin Icon Placeholder -->
                <svg class="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-lg font-bold text-gray-900">Zachodniopomorskie</p>
                <p class="text-gray-500">Dojazd do gospodarstwa GRATIS</p>
              </div>
            </div>
             <div class="flex items-center group">
              <div class="flex-shrink-0 bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform">
                <svg class="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-lg font-bold text-gray-900">+48 000 000 000</p>
                <p class="text-gray-500">Dostępni 7 dni w tygodniu</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 sm:mt-16 md:mt-0 relative">
           <!-- Form decoration -->
           <div class="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
           <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

          <form class="grid grid-cols-1 gap-y-6 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/50 relative z-10">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700">Imię i nazwisko</label>
              <div class="mt-1">
                <input type="text" name="name" id="name" class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-200 bg-white/50 rounded-lg border transition-colors" placeholder="Jan Kowalski">
              </div>
            </div>
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700">Numer telefonu</label>
              <div class="mt-1">
                <input type="tel" name="phone" id="phone" class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-200 bg-white/50 rounded-lg border transition-colors" placeholder="000 000 000">
              </div>
            </div>
            <div>
              <label for="location" class="block text-sm font-semibold text-gray-700">Miejscowość</label>
              <div class="mt-1">
                <input type="text" name="location" id="location" class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-200 bg-white/50 rounded-lg border transition-colors">
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700">Ilość i rodzaj bydła</label>
              <div class="mt-1">
                <textarea id="message" name="message" rows="3" class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-200 bg-white/50 rounded-lg border transition-colors" placeholder="Np. 2 byki, 1 krowa"></textarea>
              </div>
            </div>
            <div class="pt-2">
              <button type="submit" class="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-lg text-base font-bold rounded-lg text-white bg-gradient-to-r from-brand-800 to-brand-900 hover:from-brand-700 hover:to-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:-translate-y-0.5">
                Wyślij darmowe zapytanie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
