<script setup>
import { MapPin, Phone, Mail, Clock, ShieldCheck, Banknote, Truck } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';

const mapRef = ref(null);
const mapSrc = ref('');
const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22380.852864316694!2d16.274602352574128!3d53.763403781472526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701a157f2c8ffa3%3A0x4cd8ec19ecfef2ed!2s%C5%81eknica%2055B%2C%2078-460%20%C5%81eknica!5e1!3m2!1spl!2spl!4v1773090706599!5m2!1spl!2spl';

onMounted(() => {
  if (!mapRef.value) return;
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        mapSrc.value = MAP_URL;
        observer.disconnect();
      }
    },
    { rootMargin: '200px' }
  );
  observer.observe(mapRef.value);
});
</script>

<template>
  <div class="bg-neutral-950 min-h-screen flex flex-col relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-10 left-0 w-80 h-80 bg-brand-900/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-20 right-0 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl -z-10"></div>

    <!-- Header -->
    <div class="bg-black text-white pt-10 pb-20 md:pt-12 md:pb-28 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-transparent to-black/50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-6 border border-brand-900/30">
          <Phone class="w-3.5 h-3.5" />
          DOSTĘPNI 24/7
        </div>
        <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">Skontaktuj się ze specjalistami</h1>
        <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Poszukujesz profesjonalnego odbiorcy bydła powiązanego z bezpieczną i bezproblemową transakcją? Skontaktuj się z naszym biurem obsługi.</p>
      </div>
    </div>

    <!-- Quick contact bar -->
    <div class="bg-neutral-950 border-b border-neutral-800 shadow-sm relative z-10 -mt-6" data-aos="fade-up">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-6">
          <a href="tel:+48500277836" class="flex items-center gap-4 bg-brand-700 text-white p-6 md:rounded-tl-2xl md:rounded-bl-2xl hover:bg-brand-800 transition-colors group">
            <div class="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-200">Zadzwoń</p>
              <p class="text-xl font-black">500 277 836</p>
            </div>
          </a>
          <a href="mailto:logos@epoczta.pl" class="flex items-center gap-4 bg-brand-800 text-white p-6 hover:bg-brand-900 transition-colors group">
            <div class="w-12 h-12 bg-brand-700 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-200">Email</p>
              <p class="text-lg font-bold">logos@epoczta.pl</p>
            </div>
          </a>
          <div class="flex items-center gap-4 bg-brand-900 text-white p-6 md:rounded-tr-2xl md:rounded-br-2xl">
            <div class="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center shrink-0">
              <MapPin class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-300">Adres bazy</p>
              <p class="text-lg font-bold">Łęknica 55b</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Grid -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-grow w-full" data-aos="fade-up">
      <div class="flex flex-col gap-12 lg:gap-16">
        
        <!-- Center: Info -->
        <div class="space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-400 text-sm font-bold mb-6 border border-brand-900">
              <ShieldCheck class="w-4 h-4" />
              Dlaczego warto z nami współpracować?
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
              Bezproblemowa <br><span class="text-brand-500">transakcja.</span>
            </h2>
            <p class="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">Zapewniamy pełną obsługę logistyczną i formalną. Wystarczy jeden kontakt z naszym doradcą – my organizujemy bezpieczny odbiór oraz błyskawiczną płatność.</p>
          </div>

          <!-- Benefits list -->
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-xl border border-brand-800/30 hover:border-brand-800/60 transition-colors">
              <div class="w-10 h-10 bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-500 shrink-0 border border-brand-800/30">
                <Truck class="w-5 h-5" />
              </div>
              <div>
                <p class="font-bold text-white mb-1">Darmowy dojazd i załadunek</p>
                <p class="text-neutral-400 text-sm">Przyjeżdżamy na Twoje gospodarstwo z transportem — bez dodatkowych kosztów.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-xl border border-brand-800/30 hover:border-brand-800/60 transition-colors">
              <div class="w-10 h-10 bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-500 shrink-0 border border-brand-800/30">
                <Banknote class="w-5 h-5" />
              </div>
              <div>
                <p class="font-bold text-white mb-1">Szybki przelew</p>
                <p class="text-neutral-400 text-sm">Płacimy od ręki po zważeniu. Realizujemy przelew natychmiast przy załadunku.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-xl border border-brand-800/30 hover:border-brand-800/60 transition-colors">
              <div class="w-10 h-10 bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-500 shrink-0 border border-brand-800/30">
                <Clock class="w-5 h-5" />
              </div>
              <div>
                <p class="font-bold text-white mb-1">Odbiór w 24-48h</p>
                <p class="text-neutral-400 text-sm">W pilnych przypadkach jesteśmy w stanie odebrać bydło już następnego dnia.</p>
              </div>
            </div>
          </div>

          <!-- Company details and working hours side by side -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Company details card -->
            <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 p-6 rounded-xl border border-brand-800/30">
               <h4 class="font-bold text-white mb-3 flex items-center gap-2">
                 <ShieldCheck class="w-4 h-4 text-brand-500" />
                 Dane firmy
               </h4>
               <ul class="text-neutral-400 text-sm space-y-2">
                 <li><strong class="text-neutral-300">NIP:</strong> 6731683206</li>
                 <li><strong class="text-neutral-300">REGON:</strong> 331350519</li>
                 <li><strong class="text-neutral-300">KRS:</strong> 0000090063</li>
                 <li><strong class="text-neutral-300">Numer WNI:</strong> 32156109</li>
                 <li><strong class="text-neutral-300">Numer przewoźnika:</strong> 32152803</li>
                 <li class="pt-2 italic text-brand-400">Obsługujemy faktury RR/VAT oraz integrację z KSeF. Raportujemy IRZ plus / ARiMR.</li>
               </ul>
            </div>
  
            <!-- Working hours card -->
            <div class="bg-brand-950 p-6 rounded-xl border border-brand-900">
               <h4 class="font-bold text-brand-400 mb-2 flex items-center gap-2">
                 <Clock class="w-4 h-4" />
                 Godziny pracy
               </h4>
               <p class="text-neutral-400 text-sm">Jesteśmy dostępni pod telefonem 7 dni w tygodniu. Odbiory zwierząt realizujemy również w weekendy po wcześniejszym umówieniu.</p>
            </div>
          </div>
        </div>

        <!-- Removed Right: Form Section as per user request -->

      </div>
    </section>

    <!-- Map Section -->
    <div class="w-full relative" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Nasza lokalizacja</h2>
          <p class="text-neutral-500">Baza transportowa w Łeknicy 55B 78-460 woj. zachodniopomorskie</p>
        </div>
      </div>
      <div ref="mapRef" class="w-full h-96 bg-neutral-800 relative overflow-hidden rounded-t-3xl md:rounded-t-none border-t border-neutral-800">
        <iframe
          v-if="mapSrc"
          :src="mapSrc"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa dojazdu — Łęknica 55b"
          aria-label="Mapa Google pokazująca lokalizację bazy: Łęknica 55b, Barwice"
        ></iframe>
        <div v-else class="w-full h-full flex items-center justify-center" style="background:#0a0c08;">
          <div class="text-center">
            <MapPin class="w-8 h-8 mx-auto mb-2" style="color:#c8922a;" />
            <p class="text-sm" style="color:#6b5a42;">Wczytywanie mapy…</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
