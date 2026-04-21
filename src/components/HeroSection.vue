<script setup>
import { Phone, Truck, Scale, BadgeCheck } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="relative bg-[#0a0c08] overflow-hidden min-h-[85vh] flex flex-col lg:flex-row">

    <!-- Left: content column -->
    <div class="relative z-20 w-full lg:w-[52%] flex flex-col justify-center px-6 pt-24 pb-16 lg:pt-32 lg:pb-16 xl:px-24 bg-[#0a0c08] order-2 lg:order-1">

      <!-- Top decorative line -->
      <div class="w-16 h-0.5 mb-8 hidden lg:block" style="background: linear-gradient(90deg, #c8922a, transparent);"></div>



      <!-- Heading -->
      <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5" style="color: #f0ead8; font-family: 'Barlow Condensed', sans-serif;">
        Profesjonalny<br>
        <em class="not-italic" style="color: #c8922a;">Skup i sprzedaż bydła.</em>
      </h1>

      <!-- Description -->
      <p class="text-base lg:text-lg leading-relaxed mb-8 max-w-lg" style="color: #8a7e6a;">
        Rolnicy szukają partnera, który nie komplikuje spraw, rzetelnie płaci i działa szybko. 
        <strong style="color: #d4c8b0;">Nasza oferta odpowiada na te potrzeby</strong> – odbieramy zwierzęta bez zbędnych formalności, dokumenty ARiMR wypełniamy na miejscu i internetowo, a szybki przelew realizowany jest od razu przy załadunku.
      </p>

      <!-- Feature badges -->
      <div class="flex flex-wrap gap-4 mb-10" style="color: #d4c8b0;">
        <div class="flex items-center gap-2 text-sm font-semibold">
          <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style="background: rgba(200,146,42,0.12); color: #c8922a; border: 1px solid rgba(200,146,42,0.3);">
            <BadgeCheck class="w-3.5 h-3.5" />
          </div>
          Szybki przelew
        </div>
        <div class="flex items-center gap-2 text-sm font-semibold">
          <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style="background: rgba(200,146,42,0.12); color: #c8922a; border: 1px solid rgba(200,146,42,0.3);">
            <Truck class="w-3.5 h-3.5" />
          </div>
          Szybki odbiór z gospodarstwa
        </div>
        <div class="flex items-center gap-2 text-sm font-semibold">
          <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style="background: rgba(200,146,42,0.12); color: #c8922a; border: 1px solid rgba(200,146,42,0.3);">
            <Scale class="w-3.5 h-3.5" />
          </div>
          Uczciwa wycena
        </div>
      </div>

      <!-- CTA block -->
      <div class="rounded-2xl p-6 border flex flex-col gap-3 max-w-sm"
        style="background: #0f1209; border-color: rgba(200,146,42,0.2);">
        <p class="text-xs uppercase tracking-widest font-bold" style="color: #6b5a42;">Darmowa wycena · Szybki dojazd</p>
        <a
          href="tel:+48500277836"
          class="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg"
          style="background: linear-gradient(135deg, #c8922a, #a97820); color: #f0ead8; box-shadow: 0 8px 32px rgba(200,146,42,0.25);"
        >
          <Phone class="w-4 h-4" />
          +48 500 277 836
        </a>
        <RouterLink
          to="/oferta/skup-bydla"
          class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:border-[rgba(200,146,42,0.5)]"
          style="color: #a09280; border: 1px solid rgba(200,146,42,0.15); background: transparent;"
        >
          Sprawdź ofertę
        </RouterLink>
      </div>

    </div>

    <!-- Right: image -->
    <div class="relative w-full lg:w-[48%] h-72 sm:h-96 lg:h-auto order-1 lg:order-2">
      <img
        src="/bydlostart.webp"
        alt="Profesjonalny skup, sprzedaż i transport bydła rzeźnego. Flota firmy Logos Marcin Kiedel w gotowości."
        class="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_40%] transition-transform duration-700 hover:scale-105"
        fetchpriority="high"
        decoding="async"
        width="1200" height="800"
        style="filter: brightness(0.85) saturate(1.1);"
      />
      <!-- Gradient overlay left edge (desktop) -->
      <div class="hidden lg:block absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" style="background: linear-gradient(to right, #0a0c08, transparent);"></div>
      <!-- Bottom fade (mobile) -->
      <div class="block lg:hidden absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none" style="background: linear-gradient(to top, #0a0c08, transparent);"></div>
      <!-- Top fade (mobile) -->
      <div class="block lg:hidden absolute inset-x-0 top-0 h-16 z-10 pointer-events-none" style="background: linear-gradient(to bottom, #0a0c08, transparent);"></div>

      <!-- Region card -->
      <div
        class="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-20 p-4 rounded-xl backdrop-blur-md shadow-2xl"
        style="background: rgba(10,12,8,0.92); border: 1px solid rgba(200,146,42,0.25);"
      >
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(200,146,42,0.12); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
            <Truck class="w-4 h-4" />
          </div>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-widest mb-0.5" style="color: #6b5a42;">Region działania</p>
            <p class="font-semibold text-sm" style="color: #f0ead8;">Cała Polska</p>
          </div>
        </div>
      </div>

      <!-- Stats overlay (desktop top-right) -->
      <div class="hidden lg:flex absolute top-8 right-8 z-20 gap-3">
        <div class="px-4 py-3 rounded-xl backdrop-blur-md text-center shadow-xl" style="background: rgba(10,12,8,0.88); border: 1px solid rgba(200,146,42,0.2);">
          <p class="text-xl font-black font-display" style="color: #c8922a;">25+</p>
          <p class="text-[10px] uppercase tracking-widest font-bold" style="color: #6b5a42;">Lat</p>
        </div>
        <div class="px-4 py-3 rounded-xl backdrop-blur-md text-center shadow-xl" style="background: rgba(10,12,8,0.88); border: 1px solid rgba(200,146,42,0.2);">
          <p class="text-xl font-black font-display" style="color: #c8922a;">24h</p>
          <p class="text-[10px] uppercase tracking-widest font-bold" style="color: #6b5a42;">Dojazd</p>
        </div>
      </div>
    </div>

  </section>
</template>