<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Truck, Scale, Banknote, ShieldCheck, MapPin, Phone, Star } from 'lucide-vue-next';

const route = useRoute();

// Pobieranie regionu z parametrów URL (np. zachodniopomorskie)
const regionParam = computed(() => {
    return route.params.region || 'Zachodniopomorskim';
});

// Formatowanie "zachodniopomorskie" na "Zachodniopomorskie" i w locative np. "zachodniopomorskim"
const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
const regionName = computed(() => capitalize(regionParam.value));
// Słownik odmiany województw w miejscowniku
const regionLocativeMap = {
  zachodniopomorskie: 'zachodniopomorskim',
  pomorskie: 'pomorskim',
  wielkopolskie: 'wielkopolskim',
  lubuskie: 'lubuskim',
  kujawskopomorskie: 'kujawsko-pomorskim',
  warminskimazurskie: 'warmińsko-mazurskim',
};
const regionLocative = computed(() => {
    const key = regionParam.value.toLowerCase().replace(/-/g, '');
    return regionLocativeMap[key] || regionParam.value.toLowerCase();
});

// Czy to jest podstrona dla bydła pourazowego?
const isPourazowe = computed(() => route.path.includes('pourazowego'));

const titlePrefix = computed(() => isPourazowe.value ? 'Skup bydła pourazowego' : 'Skup bydła');

// Mapa miast per województwo (dla treści SEO)
const regionCities = {
  zachodniopomorskie: 'Szczecin, Koszalin, Kołobrzeg, Białogard, Stargard, Drawsko Pomorskie, Świdwin, Police, Łobez, Gryfice, Choszczno, Myślibórz, Pyrzyce, Wałcz, Barwice, Świnoujście, Gryfino, Nowogard',
  pomorskie: 'Gdańsk, Gdynia, Słupsk, Tczew, Starogard Gdański, Malbork, Kwidzyń, Chojnice, Człuchów, Lębork, Pruszcz Gdański',
  wielkopolskie: 'Poznań, Kalisz, Leszno, Gniezno, Konin, Ostrów Wielkopolski, Piła, Szamotuły, Złotów, Jarocin',
  lubuskie: 'Zielona Góra, Gorzów Wielkopolski, Żary, Żagań, Nowa Sól, Świebodzin, Wschowa, Sulęcin',
  'kujawsko-pomorskie': 'Bydgoszcz, Toruń, Włocławek, Grudziądz, Inowrocław, Brodnica, Świecie, Chełmno, Nakło nad Notecią, Rypin',
};

const citiesInRegion = computed(() => {
  const key = regionParam.value.toLowerCase();
  return regionCities[key] || '';
});

// Dynamiczny JSON-LD per region
const injectSchema = () => {
  // Usuń poprzedni schema jeśli istnieje
  const existing = document.getElementById('region-ld-json');
  if (existing) existing.remove();

  const slug = regionParam.value.toLowerCase();
  const pageUrl = `https://bydlo-trans.pl/${isPourazowe.value ? 'skup-bydla-pourazowego' : 'skup-bydla'}-${slug}`;

  const bc = document.createElement('script');
  bc.type = 'application/ld+json';
  bc.id = 'region-ld-json';
  bc.text = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://bydlo-trans.pl/' },
        { '@type': 'ListItem', position: 2, name: `${titlePrefix.value} — ${regionName.value}`, item: pageUrl }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${titlePrefix.value} ${regionName.value}`,
      url: pageUrl,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Logos Marcin Kiedel',
        telephone: '+48500277836',
        url: 'https://bydlo-trans.pl',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Łęknica 55B',
          addressLocality: 'Barwice',
          postalCode: '78-460',
          addressRegion: 'Zachodniopomorskie',
          addressCountry: 'PL',
        },
      },
      areaServed: { '@type': 'AdministrativeArea', name: regionName.value },
      description: `Profesjonalny ${titlePrefix.value.toLowerCase()} na terenie województwa ${regionLocative.value}. Szybki przelew od razu przy załadunku, własny transport, uczciwa waga. Zadzwoń: 500 277 836.`
    }
  ]);
  document.head.appendChild(bc);
};

onMounted(() => injectSchema());
watch(regionParam, () => injectSchema());
</script>


<template>
  <div class="bg-[#0a0c08] min-h-screen text-[#f0ead8] font-sans pb-24">
    <!-- HERO SEO -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-center" style="border-bottom: 1px solid rgba(200,146,42,0.15);">
      <div class="absolute inset-0 z-0">
        <img src="/bydlostart.webp" alt="Skup bydła tło" class="w-full h-full object-cover opacity-20" loading="lazy" width="1200" height="800">
        <div class="absolute inset-0 bg-gradient-to-b from-[#0a0c08]/80 via-[#0a0c08]/90 to-[#0a0c08]"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style="background: rgba(200,146,42,0.1); border-color: rgba(200,146,42,0.3); color: #c8922a;">
            <MapPin class="w-4 h-4" />
            <span class="text-xs font-bold uppercase tracking-widest">Województwo {{ regionName }}</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight" style="font-family: 'Barlow Condensed', sans-serif;">
          {{ titlePrefix }} <span style="color: #c8922a;">{{ regionName }}</span>
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style="color: #a09280;">
          Szybka wycena, natychmiastowy odbiór bezpośrednio z gospodarstwa z zachowaniem najwyższych standardów, oraz płatność do ręki na obszarze całego województwa {{ regionLocative }}.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:+48500277836" class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105" style="background: linear-gradient(135deg, #c8922a, #a97820); color: #111; box-shadow: 0 8px 32px rgba(200,146,42,0.25);">
                <Phone class="w-4 h-4" /> Zamów odbiór: 500 277 836
            </a>
        </div>
      </div>
    </section>

    <!-- KONTENT GŁÓWNY -->
    <section class="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
        <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold" style="font-family: 'Barlow Condensed', sans-serif;">
                Rzetelny partner na terenie województwa {{ regionLocative }}
            </h2>
            <div class="w-16 h-1 rounded flex-shrink-0" style="background: linear-gradient(90deg, #c8922a, #a97820);"></div>
            
            <p class="text-[15px] leading-relaxed" style="color: #a09280;">
                Prowadzisz hodowlę bydła w województwie {{ regionLocative }} i szukasz rzetelnego partnera do współpracy? Postaw na ponad 25-letnie doświadczenie, terminowość i uczciwe warunki – właśnie to oferuje Ci Logos Marcin Kiedel.
            </p>
            <p class="text-[15px] leading-relaxed" style="color: #a09280;" v-if="!isPourazowe">
                Skupujemy bydło rzeźne, mleczne, mięsne, cielęta i odsadki, oferując atrakcyjne stawki ustalane indywidualnie na miejscu w Twoim gospodarstwie. Naszym priorytetem jest Twoje zadowolenie bez zbędnych, nużących procedur.
            </p>
            <p class="text-[15px] leading-relaxed" style="color: #a09280;" v-else>
                Zdajemy sobie sprawę, że w hodowli zdarzają się trudne i nieprzewidziane sytuacje. Oferujemy profesjonalny, zgodny z prawem i szybki skup bydła pourazowego na obszarze całego województwa {{ regionLocative }}. Minimalizujemy biurokrację, dostarczamy sprawny transport.
            </p>
            <ul class="pt-4 space-y-4">
                <li class="flex items-start gap-4">
                    <div class="p-2 rounded mt-0.5" style="background: rgba(200,146,42,0.1); color: #c8922a;">
                        <Scale class="w-4 h-4" />
                    </div>
                    <span class="text-sm font-medium" style="color: #e8ad40;">Uczciwa stawka oparta na dzisiejszych uwarunkowaniach rynkowych</span>
                </li>
                <li class="flex items-start gap-4">
                    <div class="p-2 rounded mt-0.5" style="background: rgba(200,146,42,0.1); color: #c8922a;">
                        <Banknote class="w-4 h-4" />
                    </div>
                    <span class="text-sm font-medium" style="color: #e8ad40;">Szybki przelew od razu przy załadunku</span>
                </li>
                <li class="flex items-start gap-4">
                    <div class="p-2 rounded mt-0.5" style="background: rgba(200,146,42,0.1); color: #c8922a;">
                        <Truck class="w-4 h-4" />
                    </div>
                    <span class="text-sm font-medium" style="color: #e8ad40;">Własny tabor i dojazd do {{ regionLocative }} od 2 do 7 dni</span>
                </li>
            </ul>

            <!-- Lista miast obsługiwanych w regionie -->
            <div v-if="citiesInRegion" class="mt-6 p-5 rounded-2xl" style="background: rgba(200,146,42,0.06); border: 1px solid rgba(200,146,42,0.15);">
              <p class="text-xs uppercase tracking-widest font-bold mb-2" style="color: #c8922a;">Obsługujemy m.in.:</p>
              <p class="text-sm leading-relaxed" style="color: #9a8770;">{{ citiesInRegion }}</p>
            </div>
        </div>
        <div class="relative">
            <!-- Dekoracja wizualna zdjęciowa -->
            <div class="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl border" style="border-color: rgba(200,146,42,0.2);">
                <img src="/bydlorealizacja4.webp" :alt="`Odbiór bydła w województwie ${regionLocative}`" class="w-full h-full object-cover" loading="lazy" width="800" height="1000" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div class="absolute bottom-0 left-0 p-8 w-full">
                    <div class="backdrop-blur-md rounded-2xl p-5 border" style="background: rgba(15,18,9,0.7); border-color: rgba(200,146,42,0.3);">
                        <h4 class="font-bold mb-2 flex items-center gap-2 text-white">
                            <Star class="w-4 h-4 text-[#c8922a]" /> Gwarancja najlepszych cen
                        </h4>
                        <p class="text-xs" style="color: #a09280;">Dzięki bezpośredniej i długofalowej współpracy z największymi ubojniami, oferujemy jedne z najwyższych stawek za skup bydła w Twoim regionie.</p>
                    </div>
                </div>
            </div>
            <div class="absolute -z-10 bg-gradient-to-r from-[#c8922a]/20 to-transparent blur-3xl w-full h-full rounded-full top-0 right-10"></div>
        </div>

      </div>
    </section>

    <!-- CTA section -->
    <section class="max-w-4xl mx-auto px-6 pb-16">
      <div class="rounded-3xl p-8 md:p-12 text-center" style="background: #13160d; border: 1px solid rgba(200,146,42,0.2);">
        <p class="text-xs uppercase tracking-widest font-bold mb-4" style="color: #c8922a;">Bezpłatna wycena</p>
        <h2 class="text-2xl md:text-3xl font-black mb-4" style="font-family: 'Barlow Condensed', sans-serif;">
          Sprzedaj bydło w woj. {{ regionLocative }} — zadzwoń teraz
        </h2>
        <p class="mb-8 text-sm leading-relaxed max-w-xl mx-auto" style="color: #a09280;">
          Jeden telefoniczny kontakt wystarczy. Dojedziemy do Twojego gospodarstwa, przeprowadzimy rzetelną wycenę i zrealizujemy szybki przelew od razu przy załadunku.
        </p>
        <a href="tel:+48500277836" class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105" style="background: linear-gradient(135deg, #c8922a, #a97820); color: #111; box-shadow: 0 8px 32px rgba(200,146,42,0.25);">
          <Phone class="w-5 h-5" /> Zadzwoń: 500 277 836
        </a>
      </div>
    </section>

  </div>
</template>

