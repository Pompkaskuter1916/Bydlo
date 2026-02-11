<script setup>
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-white min-h-screen flex flex-col relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-10 left-0 w-80 h-80 bg-brand-500/8 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-20 right-0 w-96 h-96 bg-brand-400/8 rounded-full blur-3xl -z-10"></div>
    <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl -z-10"></div>
    <!-- Header -->
    <div class="bg-brand-950 text-white py-20 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Kontakt</h1>
        <p class="text-emerald-100 text-lg max-w-2xl mx-auto">Masz pytania? Jesteśmy do Twojej dyspozycji 24/7.</p>
      </div>
    </div>

    <!-- Content Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full" data-aos="fade-up" data-aos-delay="100">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        <!-- Left: Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-bold text-slate-900 mb-6 border-l-4 border-brand-500 pl-4">Dane Kontaktowe</h3>
            <div class="space-y-6">
              <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100 group">
                <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-100 group-hover:text-brand-700 transition-colors">
                  <MapPin class="w-6 h-6" />
                </div>
                <div>
                  <p class="font-bold text-slate-900">Adres bazy</p>
                  <p class="text-slate-600">ul. Słowiańska 16<br>78-400 Szczecinek</p>
                </div>
              </div>

              <a href="tel:+48533255214" class="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100 group">
                <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-100 group-hover:text-brand-700 transition-colors">
                  <Phone class="w-6 h-6 group-hover:animate-pulse" />
                </div>
                <div>
                  <p class="font-bold text-slate-900">Telefon (Całodobowy)</p>
                  <span class="text-xl font-black text-brand-700 group-hover:underline">+48 533 255 214</span>
                </div>
              </a>

              <a href="mailto:biuro@bydlo-trans.pl" class="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100 group">
                <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-100 group-hover:text-brand-700 transition-colors">
                  <Mail class="w-6 h-6" />
                </div>
                <div>
                  <p class="font-bold text-slate-900">Email</p>
                  <span class="text-slate-600 group-hover:text-brand-700">biuro@bydlo-trans.pl</span>
                </div>
              </a>
            </div>
          </div>
          
           <div class="bg-brand-50 p-6 rounded-xl border border-brand-100">
             <h4 class="font-bold text-brand-900 mb-2 flex items-center gap-2">
               <Clock class="w-4 h-4" />
               Godziny pracy
             </h4>
             <p class="text-brand-800 text-sm">Jesteśmy dostępni pod telefonem 7 dni w tygodniu. Odbiory zwierząt realizujemy również w weekendy po wcześniejszym umówieniu.</p>
           </div>
        </div>

        <!-- Right: Form -->
        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          <h3 class="text-xl font-bold text-slate-900 mb-6">Napisz do nas</h3>
          <form class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Imię i Nazwisko</label>
                <input type="text" class="w-full rounded-lg border-slate-300 bg-slate-50 p-3 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none" placeholder="Jan Kowalski">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Telefon</label>
                <input type="tel" class="w-full rounded-lg border-slate-300 bg-slate-50 p-3 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none" placeholder="000-000-000">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-1">Miejscowość</label>
              <input type="text" class="w-full rounded-lg border-slate-300 bg-slate-50 p-3 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none" placeholder="np. Barwice">
            </div>

            <div>
              <label class="block text-sm font-bold text-slate-700 mb-1">Wiadomość</label>
              <textarea rows="4" class="w-full rounded-lg border-slate-300 bg-slate-50 p-3 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none" placeholder="Mam do sprzedania 5 byków..."></textarea>
            </div>

            <button type="button" class="w-full bg-brand-700 text-white font-bold py-4 rounded-lg hover:bg-brand-800 transition-colors flex items-center justify-center gap-2">
              <Send class="w-4 h-4" />
              Wyślij wiadomość
            </button>
          </form>
        </div>

      </div>
    </section>

    <!-- Map Section -->
    <div class="mt-12 w-full h-96 bg-slate-200 grayscale relative" data-aos="fade-up">
      <!-- Mockup Map -->
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37905.7726488665!2d16.63852230623194!3d53.70868115664972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470220fc59547563%3A0xb35a90714757c9a2!2sSzczecinek!5e0!3m2!1spl!2spl!4v1707390000000!5m2!1spl!2spl" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>
