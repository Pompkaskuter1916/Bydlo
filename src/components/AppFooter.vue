<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="w-full font-sans" style="background: #060807; border-top: 1px solid rgba(200,146,42,0.12);" aria-label="Stopka strony">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Column 1: Logo + opis + kontakt -->
        <div class="lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-3 shrink-0 group mb-4" aria-label="Logos — Skup Bydła, strona główna">
            <img
              src="/logobeztla.webp"
              alt="Logos Marcin Kiedel — Skup i Sprzedaż Bydła"
              class="h-16 md:h-14 w-auto object-contain"
              style="filter: brightness(0) invert(1); opacity: 0.8;"
              loading="lazy"
              width="120"
              height="56"
            />
          </RouterLink>
          
          <!-- NAP — Name Address Phone -->
          <address class="not-italic space-y-2.5 text-sm" itemscope itemtype="https://schema.org/LocalBusiness">
            <meta itemprop="name" content="Logos Marcin Kiedel" />
            <a href="tel:+48500277836" class="flex items-center gap-2.5 transition-colors hover:text-[#e8ad40]" style="color: #c8922a;" itemprop="telephone">
              <Phone class="w-4 h-4 shrink-0" />
              <span class="font-bold">500 277 836</span>
            </a>
            <a href="mailto:logos@epoczta.pl" class="flex items-center gap-2.5 transition-colors hover:text-[#e8ad40]" style="color: #a09280;" itemprop="email">
              <Mail class="w-4 h-4 shrink-0" />
              <span>logos@epoczta.pl</span>
            </a>
            <div class="flex items-start gap-2.5" style="color: #a09280;" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
              <MapPin class="w-4 h-4 shrink-0 mt-0.5" style="color: #c8922a;" />
              <div>
                <span itemprop="streetAddress">Łęknica 55b</span>,<br>
                <span itemprop="postalCode">78-460</span> <span itemprop="addressLocality">Barwice</span><br>
                <span itemprop="addressRegion">woj. zachodniopomorskie</span>
              </div>
            </div>
          </address>
        </div>

        <!-- Column 2: Oferta -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest mb-5" style="color: #c8922a;">Nasza oferta</h3>
          <ul class="space-y-2.5">
            <li>
              <RouterLink to="/oferta/skup-bydla" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Skup bydła rzeźnego
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/oferta/sprzedaz-bydla" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Sprzedaż bydła hodowlanego
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/oferta/transport-bydla" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Transport bydła i żywca
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/kontakt" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Kontakt i wycena
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Obszar działania -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest mb-5" style="color: #c8922a;">Obszar działania</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/skup-bydla-zachodniopomorskie" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Skup bydła — zachodniopomorskie
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/skup-bydla-pomorskie" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Skup bydła — pomorskie
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/skup-bydla-wielkopolskie" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Skup bydła — wielkopolskie
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/skup-bydla-lubuskie" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Skup bydła — lubuskie
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/skup-bydla-kujawsko-pomorskie" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Skup bydła — kujawsko-pomorskie
              </RouterLink>
            </li>
            <li class="pt-2">
              <span class="text-xs uppercase font-bold tracking-wider" style="color: #b8ae9d;">Obsługiwane miasta:</span>
              <p class="text-xs mt-1 leading-relaxed" style="color: #b8ae9d;">Szczecin, Koszalin, Kołobrzeg, Białogard, Stargard, Drawsko Pom., Świdwin, Wałcz, Barwice, Bydgoszcz, Toruń, Włocławek, Grudziądz</p>
            </li>
          </ul>
        </div>

        <!-- Column 4: Informacje -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest mb-5" style="color: #c8922a;">Informacje</h3>
          <ul class="space-y-2.5 mb-6">
            <li>
              <RouterLink to="/o-nas" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                O firmie
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/polityka-prywatnosci" class="text-sm transition-colors hover:text-[#e8ad40]" style="color: #d4c8b0;">
                Polityka prywatności
              </RouterLink>
            </li>
            <li>
              <a
                href="https://www.olx.pl/d/oferta/skup-bydla-zywca-platnosc-od-reki-konkurencyjne-ceny-CID4371-IDjqga6.html"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[#e8ad40]"
                style="color: #d4c8b0;"
              >
                Oferta na OLX
                <ExternalLink class="w-3 h-3" />
              </a>
            </li>
          </ul>


        </div>

      </div>

      <!-- Bottom bar -->
      <div class="pt-6 border-t flex flex-col md:flex-row justify-between items-center text-xs gap-4" style="border-color: rgba(200,146,42,0.15);">
        <div class="flex flex-col items-center md:items-start gap-2 text-center md:text-left" style="color: #b8ae9d;">
          <p>© {{ currentYear }} Logos Marcin Kiedel. Wszelkie prawa zastrzeżone.</p>
          
        </div>
        <div class="text-center" style="color: #5a4f3f;">
          Created by <span class="font-medium" style="color: #b8ae9d;">CodeWave</span>
        </div>
      </div>
    </div>
  </footer>
</template>
