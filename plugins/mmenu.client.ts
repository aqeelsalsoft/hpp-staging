import { defineNuxtPlugin } from '#app';
import 'mmenu-js/dist/mmenu.css'; // Import mmenu CSS
import Mmenu from 'mmenu-js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('mmenu', Mmenu); // Provide the Mmenu object globally
});
