<script setup>
import { ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-neutral-950 min-h-screen pb-20">
    <div class="bg-black text-white py-16" data-aos="fade-up">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">Polityka Prywatności</h1>
        <p class="text-neutral-400 text-lg">Zasady przetwarzania danych osobowych w firmie Logos</p>
      </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="prose prose-invert prose-neutral max-w-none">
        <div class="p-6 bg-brand-950 rounded-xl border border-brand-900 mb-12 flex items-start gap-4">
            <ShieldCheck class="w-8 h-8 text-brand-500 mt-1 flex-shrink-0" />
            <div>
                <h3 class="text-white font-bold text-lg m-0">Twoje dane są bezpieczne</h3>
                <p class="text-neutral-400 m-0 mt-1">Szanujemy Twoją prywatność. Nie sprzedajemy i nie udostępniamy Twoich danych osobom trzecim bez Twojej zgody.</p>
            </div>
        </div>
        <h2 class="text-white">1. Administrator Danych</h2>
        <p class="text-neutral-400">Administratorem Państwa danych osobowych jest firma <strong class="text-white">Logos</strong> z siedzibą w Łeknicy 55B 78-460 , woj. zachodniopomorskie. Można się z nami skontaktować pod adresem e-mail: <a href="mailto:logos@epoczta.pl" class="text-brand-500 hover:text-brand-400">logos@epoczta.pl</a> lub telefonicznie.</p>
        <h2 class="text-white">2. Cel przetwarzania danych</h2>
        <p class="text-neutral-400">Przetwarzamy Państwa dane osobowe w następujących celach:</p>
        <ul class="text-neutral-400"><li>Realizacja usług transportu i skupu bydła.</li><li>Kontakt w celu przedstawienia oferty lub odpowiedzi na zapytanie.</li><li>Realizacja obowiązków prawnych (np. wystawianie faktur).</li></ul>
        <h2 class="text-white">3. Rodzaj przetwarzanych danych</h2>
        <p class="text-neutral-400">Mogą to być: imię i nazwisko, adres gospodarstwa, numer telefonu, adres e-mail oraz inne dane niezbędne do realizacji usługi.</p>
        <h2 class="text-white">4. Okres przechowywania danych</h2>
        <p class="text-neutral-400">Dane przechowujemy przez okres niezbędny do realizacji usługi oraz wypełnienia obowiązków prawnych (np. podatkowych), a po tym czasie przez okres przedawnienia ewentualnych roszczeń.</p>
        <h2 class="text-white">5. Prawa użytkownika</h2>
        <p class="text-neutral-400">Przysługuje Państwu prawo do:</p>
        <ul class="text-neutral-400"><li>Dostępu do swoich danych oraz otrzymania ich kopii.</li><li>Sprostowania (poprawiania) swoich danych.</li><li>Usunięcia danych, ograniczenia przetwarzania danych.</li><li>Wniesienia sprzeciwu wobec przetwarzania danych.</li><li>Przenoszenia danych.</li><li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li></ul>
        <h2 class="text-white">6. Pliki Cookies</h2>
        <p class="text-neutral-400">Nasza strona internetowa może wykorzystywać pliki cookies (ciasteczka) w celach statystycznych i funkcjonalnych. Mogą Państwo w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce internetowej.</p>
        <h2 class="text-white">7. Kontakt</h2>
        <p class="text-neutral-400">W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem e-mail: <strong class="text-white">logos@epoczta.pl</strong>.</p>
      </div>
    </div>
  </div>
</template>
