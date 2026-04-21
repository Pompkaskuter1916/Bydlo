import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Logos — Skup i Sprzedaż Bydła | Łęknica, woj. zachodniopomorskie',
            description: 'Profesjonalny skup i sprzedaż bydła. Szybki przelew od razu przy załadunku, własny transport, uczciwa waga. Działamy w zachodniopomorskim oraz na terenie całej Polski. Zadzwoń: 500 277 836.',
        },
    },
    {
        path: '/o-nas',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: 'O Nas — Logos Marcin Kiedel | Skup Bydła',
            description: 'Poznaj firmę Logos Marcin Kiedel. Ponad 25 lat doświadczenia w skupie i sprzedaży bydła. Własna flota transportowa, uczciwa waga.',
        },
    },
    {
        path: '/oferta',
        redirect: '/oferta/skup-bydla',
    },
    {
        path: '/oferta/skup-bydla',
        name: 'OfferSkup',
        component: () => import('../views/OfferSkup.vue'),
        meta: {
            title: 'Skup Bydła — Logos | Szybki przelew, Własny Transport',
            description: 'Skupujemy byki, jałówki, krowy i cielęta. Płatność przelewem natychmiast po zważeniu. Jeździmy do Ciebie — zachodniopomorskie i region.',
        },
    },
    {
        path: '/oferta/sprzedaz-bydla',
        name: 'OfferSprzedaz',
        component: () => import('../views/OfferSprzedaz.vue'),
        meta: {
            title: 'Sprzedaż Bydła — Logos | Szeroka oferta bydła hodowlanego',
            description: 'Sprzedaż bydła hodowlanego i rzeźnego. Byki, jałówki, krowy mleczne. Baza transportowa: Łęknica 55b, 78-460 Barwice, woj. zachodniopomorskie.',
        },
    },
    {
        path: '/oferta/transport-bydla',
        name: 'OfferTransport',
        component: () => import('../views/OfferTransport.vue'),
        meta: {
            title: 'Transport Bydła — Logos | Bezpieczny przewóz żywca',
            description: 'Profesjonalny transport bydła w naszym regionie. Specjalistyczne pojazdy, pełna dokumentacja, punktualność.',
        },
    },

    {
        path: '/kontakt',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: {
            title: 'Kontakt — Logos | Tel: 500 277 836',
            description: 'Skontaktuj się z nami. Logos Marcin Kiedel, Łęknica 55b, 78-460 Barwice, woj. zachodniopomorskie. Tel: 500 277 836. Email: logos@epoczta.pl',
        },
    },
    {
        path: '/polityka-prywatnosci',
        name: 'PrivacyPolicy',
        component: () => import('../views/PrivacyPolicy.vue'),
        meta: {
            title: 'Polityka Prywatności — Logos Marcin Kiedel',
            description: 'Polityka prywatności i ochrony danych osobowych firmy Logos Marcin Kiedel.',
        },
    },
    {
        path: '/skup-bydla-:region',
        name: 'Region',
        component: () => import('../views/Region.vue'),
        meta: {
            title: (route) => `Skup bydła ${capitalize(route.params.region)} — Logos | Szybki przelew, Własny Transport`,
            description: (route) => `Profesjonalny skup bydła w woj. ${route.params.region}. Cielaki, krowy, buhaje, jałówki. Płatność przelewem natychmiast po zważeniu. Bezpłatna wycena — zadzwoń: 500 277 836.`,
        },
    },
    {
        path: '/skup-bydla-pourazowego-:region',
        name: 'RegionPourazowe',
        component: () => import('../views/Region.vue'),
        meta: {
            title: (route) => `Skup bydła pourazowego ${capitalize(route.params.region)} — Logos | Pomoc doraz`,
            description: (route) => `Oferujemy bezpieczny, szybki skup bydła pourazowego w woj. ${route.params.region}. Szybki dojazd, płatność na miejscu i przejrzyste warunki — 600 277 836.`,
        },
    },
];

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        }
        return new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0, left: 0 }), 100);
        });
    },
});

// Dynamiczne meta tagi per strona
router.afterEach((to) => {
    const { title, description } = to.meta || {};
    const resolvedTitle = typeof title === 'function' ? title(to) : title;
    const resolvedDesc = typeof description === 'function' ? description(to) : description;
    if (resolvedTitle) document.title = resolvedTitle;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && resolvedDesc) descEl.setAttribute('content', resolvedDesc);
    // Update canonical
    let canonEl = document.querySelector('link[rel="canonical"]');
    if (!canonEl) {
        canonEl = document.createElement('link');
        canonEl.rel = 'canonical';
        document.head.appendChild(canonEl);
    }
    canonEl.href = `https://bydlo-trans.pl${to.path}`;
});

export default router;
