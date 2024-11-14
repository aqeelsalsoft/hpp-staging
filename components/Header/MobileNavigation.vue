<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
// import { useNuxtApp } from '#app';

// // const { $device } = useNuxtApp();

// // Access the Mmenu from the provided plugin
// const { $mmenu } = useNuxtApp();
const router = useRouter();
// const menuInstance = ref(null);

// onMounted(() => {
//     menuInstance.value = new $mmenu('#hpp__mobileMenu', {
//         slidingSubmenus: true,
//         extensions: ['theme-dark', 'pagedim-black'],
//         navbar: {
//             title: '<div class="hpp__logoWrap p-[10px] w-[50%] xl:w-auto"><NuxtLink to="/" aria-label="Half Price Packaging Logo"><svg class="w-[200px] h-[52px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="376.445" height="99.513" viewBox="0 0 376.445 99.513"><defs><linearGradient id="mm__linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#8858e0" /><stop offset="1" stop-color="#e65f7d" /></linearGradient><linearGradient id="mm__linear-gradient-2" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#ed2467" /><stop offset="1" stop-color="#f06b58" /></linearGradient></defs><g id="Group_21831" data-name="Group 21831" transform="translate(-61.271 -43.579)"><g id="Group_21830" data-name="Group 21830"><path id="Path_31937" data-name="Path 31937"d="M96.106,68.868l-8.139,5.116-.136,24.438,8.587-5.4Z" fill="url(#mm__linear-gradient)" /><path id="Path_31938" data-name="Path 31938"d="M110.252,81.227,73.738,103.319l.064,10.238,36.487-22.048Z"fill="url(#mm__linear-gradient-2)" /><path id="Path_31939" data-name="Path 31939"d="M110.264,51.125,73.552,73.45l.064,10.238,36.711-22.337Z"fill="url(#mm__linear-gradient-2)" /><path id="Path_31940" data-name="Path 31940"d="M149.34,98.075l-.1-27.97L140.4,75.659,140.266,93.6Z" fill="url(#mm__linear-gradient-2)" /><path id="Path_31941" data-name="Path 31941"d="M119.545,86.972,149.336,102.2l0-8.835L119.287,77.494Z" fill="url(#mm__linear-gradient)" /><path id="Path_31942" data-name="Path 31942"d="M113.389,91.34,113.2,58.1l8.835,5.554.094,31.965Z" fill="url(#mm__linear-gradient-2)" /><path id="Path_31943" data-name="Path 31943"d="M113.139,51.125l.064,10.227,27.2,14.307,8.835-5.554Z" fill="url(#mm__linear-gradient-2)" /><g id="Group_21829" data-name="Group 21829"><path id="Path_31944" data-name="Path 31944"d="M70.69,75.084l-8.551,5.378-.02,42.826,8.831-5.554Z" fill="#969595" /><path id="Path_31945" data-name="Path 31945"d="M99.744,141.55,62.119,123.289l8.835-5.554,37.9,18.093Z" fill="#747475" /></g><path id="Path_31946" data-name="Path 31946"d="M147.663,111.983,111.676,94.334l-35.3,22.191,9.107,4.55,7.025-4.416,26.549,12.877Zm-35.712-7.546,17.687,8.6-10.369,6.518-17.845-8.5Z"fill="url(#mm__linear-gradient-2)" /><path id="Path_31947" data-name="Path 31947"d="M101.652,110.911,85.484,121.075l7.025-4.416,26.549,12.877,9.113-5.592Z"fill="url(#mm__linear-gradient)" /><path id="Path_31948" data-name="Path 31948"d="M111.676,94.334l-35.3,22.191,9.107,4.55L120.85,98.833Z" fill="url(#mm__linear-gradient-2)" /><path id="Path_31949" data-name="Path 31949"d="M110.262,51.124,97.273,43.579l-36,22.048,12.284,7.82Z" fill="#747475" /><path id="Path_31950" data-name="Path 31950"d="M113.14,51.124l10.955-7.449,35.753,18.632-10.609,7.8Z" fill="#969595" /><path id="Path_31951" data-name="Path 31951"d="M147.663,111.983V125.9l-28.747,17.191.142-13.555Z" fill="#747475" /></g><path id="Path_31952" data-name="Path 31952"d="M233.187,130.585v7.633h-2.445V119.271h6.019a6.866,6.866,0,0,1,4.864,1.518,5.433,5.433,0,0,1,1.613,4.153,5.285,5.285,0,0,1-1.666,4.151,6.983,6.983,0,0,1-4.811,1.492Zm6.571-2.982a4.155,4.155,0,0,0,0-5.363,4.59,4.59,0,0,0-3.212-.926h-3.359v7.228h3.359A4.545,4.545,0,0,0,239.758,127.6Z"fill="#424143" /><path id="Path_31953" data-name="Path 31953"d="M257.185,133.837h-8.33l-1.586,4.381h-2.634l7.015-18.6h2.767l6.987,18.6h-2.633Zm-.7-1.909-3.467-9.566-3.466,9.566Z"fill="#424143" /><path id="Path_31954" data-name="Path 31954"d="M277.985,120.789a8.707,8.707,0,0,1,3.117,4.663h-2.579a6.329,6.329,0,0,0-2.338-3,6.789,6.789,0,0,0-3.951-1.114,6.076,6.076,0,0,0-5.63,3.48,8.644,8.644,0,0,0-.847,3.936,8.5,8.5,0,0,0,.847,3.9,6.1,6.1,0,0,0,5.63,3.467,6.776,6.776,0,0,0,3.951-1.116,6.329,6.329,0,0,0,2.338-3H281.1a8.692,8.692,0,0,1-3.117,4.663,9.231,9.231,0,0,1-5.724,1.707,8.988,8.988,0,0,1-4.7-1.222,8.425,8.425,0,0,1-3.184-3.414,10.616,10.616,0,0,1-1.143-4.986,10.747,10.747,0,0,1,1.143-5.024,8.409,8.409,0,0,1,3.184-3.427,8.97,8.97,0,0,1,4.7-1.222A9.23,9.23,0,0,1,277.985,120.789Z"fill="#424143" /><path id="Path_31955" data-name="Path 31955"d="M289.083,128.651l8.654,9.567h-3.01l-7.9-8.842v8.842h-2.445V119.271h2.445v8.789l7.928-8.789h2.983Z"fill="#424143" /><path id="Path_31956" data-name="Path 31956"d="M311.255,133.837h-8.331l-1.585,4.381H298.7l7.015-18.6h2.767l6.988,18.6H312.84Zm-.7-1.909-3.467-9.566-3.467,9.566Z"fill="#424143" /><path id="Path_31957" data-name="Path 31957"d="M332.1,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.787,5.787,0,0,0-2.243-2.769,6.57,6.57,0,0,0-3.723-1.048,6.73,6.73,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.193,6.193,0,0,0,2.379-2.19,7.47,7.47,0,0,0,1.115-3.373h-7.444v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.311,9.311,0,0,1,4.81-1.235A9.154,9.154,0,0,1,332.1,120.723Z"fill="#424143" /><path id="Path_31958" data-name="Path 31958" d="M341.3,119.271v18.947h-2.445V119.271Z"fill="#424143" /><path id="Path_31959" data-name="Path 31959"d="M359.95,138.218H357.5l-9.836-14.97v14.97h-2.445V119.271h2.445l9.836,15v-15h2.446Z"fill="#424143" /><path id="Path_31960" data-name="Path 31960"d="M378.022,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.792,5.792,0,0,0-2.243-2.769,6.572,6.572,0,0,0-3.723-1.048,6.727,6.727,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.2,6.2,0,0,0,2.379-2.19,7.457,7.457,0,0,0,1.114-3.373h-7.443v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.309,9.309,0,0,1,4.81-1.235A9.156,9.156,0,0,1,378.022,120.723Z"fill="#424143" /><path id="Path_31961" data-name="Path 31961"d="M206.391,73.321v36.9h-8.976v-15.4H183.426v15.4H174.5v-36.9h8.925v14.3h13.989v-14.3Zm29.02,30.169H221.579l-2.3,6.733h-9.394l13.518-36.641h10.283l13.518,36.641h-9.5Zm-2.3-6.785-4.593-13.571-4.647,13.571Zm26.462,6.681h11.9v6.837H250.652v-36.9h8.925Zm24.958-14.87v-8.1h15.127v-7.1h-24.05v36.891h8.923V95.306h11.348v-6.79Z"fill="url(#mm__linear-gradient)" /><path id="Path_31962" data-name="Path 31962"d="M326.128,76.371c-2.09-1.959-5.246-2.938-9.446-2.938H304.994V88.516h4.745V77.394h6.529c2.873,0,4.963.61,6.225,1.807a6.808,6.808,0,0,1,1.915,5.245,7.574,7.574,0,0,1-1.023,4.07h5.246a12.494,12.494,0,0,0,.631-4.07A10.576,10.576,0,0,0,326.128,76.371Z"fill="#737374" /><path id="Path_31963" data-name="Path 31963"d="M356.293,76.437q-3.133-3-9.4-3h-12.1V88.516h4.745V77.547h6.943q8.1,0,8.1,7.1a7.785,7.785,0,0,1-.871,3.874h5.05a11.692,11.692,0,0,0,.675-4.135A10.47,10.47,0,0,0,356.293,76.437Z"fill="#737374" /><rect id="Rectangle_129" data-name="Rectangle 129" width="4.745" height="15.083"transform="translate(365.217 73.433)" fill="#737374" /><path id="Path_31964" data-name="Path 31964"d="M404.981,76.371a17.933,17.933,0,0,0-11.1-3.308,17.346,17.346,0,0,0-9.141,2.372,16.324,16.324,0,0,0-6.181,6.66,19.609,19.609,0,0,0-2,6.421h4.963a13.858,13.858,0,0,1,1.371-4.309,11.847,11.847,0,0,1,10.926-6.769,13.267,13.267,0,0,1,7.683,2.176,12.152,12.152,0,0,1,4.527,5.811h5.027A16.965,16.965,0,0,0,404.981,76.371Z"fill="#737374" /><path id="Path_31965" data-name="Path 31965"d="M304.994,95.306v14.909h4.745V95.394m40.09-.088H344.78l9.533,14.909h5.376Zm-15.039,0v14.909h4.745V95.306Zm30.427,0v14.909h4.745V95.306Zm40.809,2.852a12.314,12.314,0,0,1-4.527,5.833,13.257,13.257,0,0,1-7.683,2.154,11.972,11.972,0,0,1-6.443-1.741,12.176,12.176,0,0,1-4.483-4.984,14.507,14.507,0,0,1-1.349-4.114h-4.963a18.983,18.983,0,0,0,1.981,6.225,16.39,16.39,0,0,0,6.181,6.638,17.543,17.543,0,0,0,9.141,2.373,17.8,17.8,0,0,0,11.1-3.33,16.882,16.882,0,0,0,6.072-9.054Zm16.127-2.852h-4.744v14.909h20.306v-3.852H422.153Z"fill="#424143" /><path id="Path_31966" data-name="Path 31966" d="M417.409,73.433V88.516h4.745V77.285h15.562V73.433Z"fill="#737374" /></g></svg></NuxtLink></div>'
//         }
//     });
// });

// // Optional: Open menu on button click
// const openMenu = () => {
//     if (menuInstance.value) {
//         menuInstance.value.open();
//     }
// };

// // Watch for route changes and close the mmenu
const isOpen = ref(false)
const stopWatching = watch(
    () => router.currentRoute.value,
    () => {
        isOpen.value = false
    }
);


</script>

<template>
    <div class="w-[50%]">

        <!-- Trigger Button -->
        <div class="flex items-center justify-end">
            <a href="tel:+18662252112" class="phone__icon block bg-[#bc3042] rounded-full p-[8px] mr-[15px]"
                aria-label="Mobile Call Now Button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-[22px]">
                    <path class="fill-white"
                        d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z">
                    </path>
                    <path class="fill-white"
                        d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z">
                    </path>
                </svg>
            </a>
            <!-- <button @click="openMenu" id="hpp__mobileMenuBtnWrap" class="text-right w-[60px]" -->
            <button @click="isOpen = true" class="text-right w-[60px]" aria-label="Mobile Menu Toggle Button">
                <span class="block h-[3px] w-[50px] bg-[#555555] mb-[4px] ml-auto"></span>
                <span class="block h-[3px] w-[35px] bg-[#555555] mb-[4px] ml-auto"></span>
                <span class="block h-[3px] w-[20px] bg-[#555555] ml-auto"></span>
            </button>
            <!-- <UButton @click="isOpen = true" color="none"  class="inline-block text-right w-[60px]"
                aria-label="Mobile Menu Toggle Button">
                <span class="block h-[3px] w-[50px] bg-[#555555] mb-[4px] ml-auto"></span>
                <span class="block h-[3px] w-[35px] bg-[#555555] mb-[4px] ml-auto"></span>
                <span class="block h-[3px] w-[20px] bg-[#555555] ml-auto"></span>
            </UButton> -->
        </div>
        <!-- Menu Element -->

        <USlideover v-model="isOpen" side="left" :ui="{ wrapper: 'w-[100%] h-[100vh] overflow-y-scroll' }">
            <UCard class="flex flex-col flex-1"
                :ui="{ body: { base: 'flex-1' }, footer: { padding: 'px-0 py-0' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <UButton color="rose" variant="soft" size="sm" icon="i-heroicons-x-mark-20-solid"
                        class="flex sm:hidden absolute end-2 top-2 z-10 rounded-full" square padded @click="isOpen = false" />
                    <!-- <Placeholder class="h-8" /> -->
                    <div class="hpp__logoWrap py-0 px-[10px]">
                        <NuxtLink to="/" aria-label="Half Price Packaging Logo" class="block w-[200px] mx-auto"><svg class="w-full h-[52px]"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="376.445" height="99.513" viewBox="0 0 376.445 99.513">
                                <defs>
                                    <linearGradient id="mm__linear-gradient" y1="0.5" x2="1" y2="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#8858e0" />
                                        <stop offset="1" stop-color="#e65f7d" />
                                    </linearGradient>
                                    <linearGradient id="mm__linear-gradient-2" y1="0.5" x2="1" y2="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#ed2467" />
                                        <stop offset="1" stop-color="#f06b58" />
                                    </linearGradient>
                                </defs>
                                <g id="Group_21831" data-name="Group 21831" transform="translate(-61.271 -43.579)">
                                    <g id="Group_21830" data-name="Group 21830">
                                        <path id="Path_31937" data-name="Path 31937"
                                            d="M96.106,68.868l-8.139,5.116-.136,24.438,8.587-5.4Z"
                                            fill="url(#mm__linear-gradient)" />
                                        <path id="Path_31938" data-name="Path 31938"
                                            d="M110.252,81.227,73.738,103.319l.064,10.238,36.487-22.048Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <path id="Path_31939" data-name="Path 31939"
                                            d="M110.264,51.125,73.552,73.45l.064,10.238,36.711-22.337Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <path id="Path_31940" data-name="Path 31940"
                                            d="M149.34,98.075l-.1-27.97L140.4,75.659,140.266,93.6Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <path id="Path_31941" data-name="Path 31941"
                                            d="M119.545,86.972,149.336,102.2l0-8.835L119.287,77.494Z"
                                            fill="url(#mm__linear-gradient)" />
                                        <path id="Path_31942" data-name="Path 31942"
                                            d="M113.389,91.34,113.2,58.1l8.835,5.554.094,31.965Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <path id="Path_31943" data-name="Path 31943"
                                            d="M113.139,51.125l.064,10.227,27.2,14.307,8.835-5.554Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <g id="Group_21829" data-name="Group 21829">
                                            <path id="Path_31944" data-name="Path 31944"
                                                d="M70.69,75.084l-8.551,5.378-.02,42.826,8.831-5.554Z" fill="#969595" />
                                            <path id="Path_31945" data-name="Path 31945"
                                                d="M99.744,141.55,62.119,123.289l8.835-5.554,37.9,18.093Z"
                                                fill="#747475" />
                                        </g>
                                        <path id="Path_31946" data-name="Path 31946"
                                            d="M147.663,111.983,111.676,94.334l-35.3,22.191,9.107,4.55,7.025-4.416,26.549,12.877Zm-35.712-7.546,17.687,8.6-10.369,6.518-17.845-8.5Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <path id="Path_31947" data-name="Path 31947"
                                            d="M101.652,110.911,85.484,121.075l7.025-4.416,26.549,12.877,9.113-5.592Z"
                                            fill="url(#mm__linear-gradient)" />
                                        <path id="Path_31948" data-name="Path 31948"
                                            d="M111.676,94.334l-35.3,22.191,9.107,4.55L120.85,98.833Z"
                                            fill="url(#mm__linear-gradient-2)" />
                                        <path id="Path_31949" data-name="Path 31949"
                                            d="M110.262,51.124,97.273,43.579l-36,22.048,12.284,7.82Z" fill="#747475" />
                                        <path id="Path_31950" data-name="Path 31950"
                                            d="M113.14,51.124l10.955-7.449,35.753,18.632-10.609,7.8Z" fill="#969595" />
                                        <path id="Path_31951" data-name="Path 31951"
                                            d="M147.663,111.983V125.9l-28.747,17.191.142-13.555Z" fill="#747475" />
                                    </g>
                                    <path id="Path_31952" data-name="Path 31952"
                                        d="M233.187,130.585v7.633h-2.445V119.271h6.019a6.866,6.866,0,0,1,4.864,1.518,5.433,5.433,0,0,1,1.613,4.153,5.285,5.285,0,0,1-1.666,4.151,6.983,6.983,0,0,1-4.811,1.492Zm6.571-2.982a4.155,4.155,0,0,0,0-5.363,4.59,4.59,0,0,0-3.212-.926h-3.359v7.228h3.359A4.545,4.545,0,0,0,239.758,127.6Z"
                                        fill="#424143" />
                                    <path id="Path_31953" data-name="Path 31953"
                                        d="M257.185,133.837h-8.33l-1.586,4.381h-2.634l7.015-18.6h2.767l6.987,18.6h-2.633Zm-.7-1.909-3.467-9.566-3.466,9.566Z"
                                        fill="#424143" />
                                    <path id="Path_31954" data-name="Path 31954"
                                        d="M277.985,120.789a8.707,8.707,0,0,1,3.117,4.663h-2.579a6.329,6.329,0,0,0-2.338-3,6.789,6.789,0,0,0-3.951-1.114,6.076,6.076,0,0,0-5.63,3.48,8.644,8.644,0,0,0-.847,3.936,8.5,8.5,0,0,0,.847,3.9,6.1,6.1,0,0,0,5.63,3.467,6.776,6.776,0,0,0,3.951-1.116,6.329,6.329,0,0,0,2.338-3H281.1a8.692,8.692,0,0,1-3.117,4.663,9.231,9.231,0,0,1-5.724,1.707,8.988,8.988,0,0,1-4.7-1.222,8.425,8.425,0,0,1-3.184-3.414,10.616,10.616,0,0,1-1.143-4.986,10.747,10.747,0,0,1,1.143-5.024,8.409,8.409,0,0,1,3.184-3.427,8.97,8.97,0,0,1,4.7-1.222A9.23,9.23,0,0,1,277.985,120.789Z"
                                        fill="#424143" />
                                    <path id="Path_31955" data-name="Path 31955"
                                        d="M289.083,128.651l8.654,9.567h-3.01l-7.9-8.842v8.842h-2.445V119.271h2.445v8.789l7.928-8.789h2.983Z"
                                        fill="#424143" />
                                    <path id="Path_31956" data-name="Path 31956"
                                        d="M311.255,133.837h-8.331l-1.585,4.381H298.7l7.015-18.6h2.767l6.988,18.6H312.84Zm-.7-1.909-3.467-9.566-3.467,9.566Z"
                                        fill="#424143" />
                                    <path id="Path_31957" data-name="Path 31957"
                                        d="M332.1,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.787,5.787,0,0,0-2.243-2.769,6.57,6.57,0,0,0-3.723-1.048,6.73,6.73,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.193,6.193,0,0,0,2.379-2.19,7.47,7.47,0,0,0,1.115-3.373h-7.444v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.311,9.311,0,0,1,4.81-1.235A9.154,9.154,0,0,1,332.1,120.723Z"
                                        fill="#424143" />
                                    <path id="Path_31958" data-name="Path 31958"
                                        d="M341.3,119.271v18.947h-2.445V119.271Z" fill="#424143" />
                                    <path id="Path_31959" data-name="Path 31959"
                                        d="M359.95,138.218H357.5l-9.836-14.97v14.97h-2.445V119.271h2.445l9.836,15v-15h2.446Z"
                                        fill="#424143" />
                                    <path id="Path_31960" data-name="Path 31960"
                                        d="M378.022,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.792,5.792,0,0,0-2.243-2.769,6.572,6.572,0,0,0-3.723-1.048,6.727,6.727,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.2,6.2,0,0,0,2.379-2.19,7.457,7.457,0,0,0,1.114-3.373h-7.443v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.309,9.309,0,0,1,4.81-1.235A9.156,9.156,0,0,1,378.022,120.723Z"
                                        fill="#424143" />
                                    <path id="Path_31961" data-name="Path 31961"
                                        d="M206.391,73.321v36.9h-8.976v-15.4H183.426v15.4H174.5v-36.9h8.925v14.3h13.989v-14.3Zm29.02,30.169H221.579l-2.3,6.733h-9.394l13.518-36.641h10.283l13.518,36.641h-9.5Zm-2.3-6.785-4.593-13.571-4.647,13.571Zm26.462,6.681h11.9v6.837H250.652v-36.9h8.925Zm24.958-14.87v-8.1h15.127v-7.1h-24.05v36.891h8.923V95.306h11.348v-6.79Z"
                                        fill="url(#mm__linear-gradient)" />
                                    <path id="Path_31962" data-name="Path 31962"
                                        d="M326.128,76.371c-2.09-1.959-5.246-2.938-9.446-2.938H304.994V88.516h4.745V77.394h6.529c2.873,0,4.963.61,6.225,1.807a6.808,6.808,0,0,1,1.915,5.245,7.574,7.574,0,0,1-1.023,4.07h5.246a12.494,12.494,0,0,0,.631-4.07A10.576,10.576,0,0,0,326.128,76.371Z"
                                        fill="#737374" />
                                    <path id="Path_31963" data-name="Path 31963"
                                        d="M356.293,76.437q-3.133-3-9.4-3h-12.1V88.516h4.745V77.547h6.943q8.1,0,8.1,7.1a7.785,7.785,0,0,1-.871,3.874h5.05a11.692,11.692,0,0,0,.675-4.135A10.47,10.47,0,0,0,356.293,76.437Z"
                                        fill="#737374" />
                                    <rect id="Rectangle_129" data-name="Rectangle 129" width="4.745" height="15.083"
                                        transform="translate(365.217 73.433)" fill="#737374" />
                                    <path id="Path_31964" data-name="Path 31964"
                                        d="M404.981,76.371a17.933,17.933,0,0,0-11.1-3.308,17.346,17.346,0,0,0-9.141,2.372,16.324,16.324,0,0,0-6.181,6.66,19.609,19.609,0,0,0-2,6.421h4.963a13.858,13.858,0,0,1,1.371-4.309,11.847,11.847,0,0,1,10.926-6.769,13.267,13.267,0,0,1,7.683,2.176,12.152,12.152,0,0,1,4.527,5.811h5.027A16.965,16.965,0,0,0,404.981,76.371Z"
                                        fill="#737374" />
                                    <path id="Path_31965" data-name="Path 31965"
                                        d="M304.994,95.306v14.909h4.745V95.394m40.09-.088H344.78l9.533,14.909h5.376Zm-15.039,0v14.909h4.745V95.306Zm30.427,0v14.909h4.745V95.306Zm40.809,2.852a12.314,12.314,0,0,1-4.527,5.833,13.257,13.257,0,0,1-7.683,2.154,11.972,11.972,0,0,1-6.443-1.741,12.176,12.176,0,0,1-4.483-4.984,14.507,14.507,0,0,1-1.349-4.114h-4.963a18.983,18.983,0,0,0,1.981,6.225,16.39,16.39,0,0,0,6.181,6.638,17.543,17.543,0,0,0,9.141,2.373,17.8,17.8,0,0,0,11.1-3.33,16.882,16.882,0,0,0,6.072-9.054Zm16.127-2.852h-4.744v14.909h20.306v-3.852H422.153Z"
                                        fill="#424143" />
                                    <path id="Path_31966" data-name="Path 31966"
                                        d="M417.409,73.433V88.516h4.745V77.285h15.562V73.433Z" fill="#737374" />
                                </g>
                            </svg></NuxtLink>
                    </div>
                </template>

                <!-- <nav id="hpp__mobileMenu" class="hidden mm__navWrapper"> -->
                <div class="navMenuWrapper">
                    <nav class="">
                        <ul>
                            <li>
                                <NuxtLink to="/industries" class="block font-description text-md font-semibold py-[6px] border-b border-slate-300">Industries</NuxtLink>
                                <ul class="mb-[10px]">
                                    <li>
                                        <NuxtLink to="/industry/cosmetics" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Cosmetics & Skincare</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/bakery" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Bakery</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/retail" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Retail</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/soap" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Soap</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/candle" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Candles</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/gift" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Gift Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/pharma" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Pharma Packaging</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/fragrance" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Fragrance Packaging</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/candy-sweets" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Candy & Sweets Packaging</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/jewelry" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Jewelry Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/ecommerce" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Ecommerce Packaging</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/industry/coffee-tea" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Coffee and Tea Packaging</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="/shapes-and-styles" class="block font-description text-md font-semibold py-[6px] border-b border-slate-300">Product Packaging Styles</NuxtLink>
                                <ul class="mb-[10px]">
                                    <li>
                                        <NuxtLink to="/mailer-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Mailer Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/tuck-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Tuck Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/mylar-bags" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Myler Bags and Pouches</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/rigid-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Rigid Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/labels-stickers" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Labels and Stickers</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/custom-dispenser-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Dispenser Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/sleeve-and-tray" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Sleeve and Tray Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/pillow-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Pillow Box</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/tobacco-cigarette" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Cigarette Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/child-resistant" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Child Resistance</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/window-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Window Boxes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/gable-boxes" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Gable Boxes</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="/client-success-stories" class="block font-description text-md font-semibold py-[6px] border-b border-slate-300">Client Success Stories</NuxtLink>
                                <ul class="mb-[10px]">
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Olive Knives X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">8+ Face Cream X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Intoxicated Cosmetics X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Mermaid Cove X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Churro On Top X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">GrimmsBrook X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Rainy Rivers X HPP</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#" class="block text-description font-semibold text-sm py-[8px] ml-[20px] border-b border-slate-300">Evolve Cannabis X HPP</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <template #footer>
                    <div class="flex">
                        <a href="#" class="w-[50%] text-center font-description text-sm text-white bg-red-500 px-[20px] py-[10px]">Call Us
                            Now!</a>
                        <div class="w-[1px] h-full bg-white"></div>
                        <a href="#" class="w-[50%] text-center font-description text-sm text-white bg-red-500 px-[20px] py-[10px]">Request a
                            Quote!</a>
                    </div>
                </template>
            </UCard>
        </USlideover>

        <!-- <nav id="hpp__mobileMenu" class="hidden mm__navWrapper"> -->
        <!-- <nav class="hidden">
            <ul>
                <li>
                    <NuxtLink to="/industries">Industries</NuxtLink>
                    <ul>
                        <li>
                            <NuxtLink to="/industry/cosmetics">Cosmetics & Skincare</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/bakery">Bakery</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/retail">Retail</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/soap">Soap</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/candle">Candles</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/gift">Gift Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/pharma">Pharma Packaging</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/fragrance">Fragrance Packaging</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/candy-sweets">Candy & Sweets Packaging</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/jewelry">Jewelry Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/ecommerce">Ecommerce Packaging</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/industry/coffee-tea">Coffee and Tea Packaging</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/shapes-and-styles">Product Packaging Styles</NuxtLink>
                    <ul>
                        <li>
                            <NuxtLink to="/mailer-boxes">Mailer Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/tuck-boxes">Tuck Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/mylar-bags">Myler Bags and Pouches</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/rigid-boxes">Rigid Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/labels-stickers">Labels and Stickers</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/custom-dispenser-boxes">Dispenser Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/sleeve-and-tray">Sleeve and Tray Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/pillow-boxes">Pillow Box</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/tobacco-cigarette">Cigarette Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/child-resistant">Child Resistance</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/window-boxes">Window Boxes</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/gable-boxes">Gable Boxes</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/client-success-stories">Client Success Stories</NuxtLink>
                    <ul>
                        <li>
                            <NuxtLink to="#">Olive Knives X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">8+ Face Cream X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">Intoxicated Cosmetics X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">Mermaid Cove X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">Churro On Top X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">GrimmsBrook X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">Rainy Rivers X HPP</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#">Evolve Cannabis X HPP</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav> -->
    </div>
</template>

<style lang="scss">
// .mm__navWrapper {
//     @apply hidden
// }

// .mm-wrapper {
//     .mm__navWrapper {
//         @apply block
//     }
// }

// .mm-listview {
//     li {
//         a {
//             &:first-child {
//                 @apply block font-description text-black text-[14px] leading-[24px] font-semibold basis-[10%] px-[20px] py-[14px] overflow-hidden grow whitespace-nowrap truncate
//             }
//         }
//     }
// }

// .mm-panels {
//     .mm-panel {
//         .mm-navbar__title {
//             @apply font-description text-black text-[14px] leading-[24px] font-semibold;
//         }
//     }
// }</style>