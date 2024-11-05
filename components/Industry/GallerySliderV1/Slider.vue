<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper and SwiperSlide components
import 'swiper/css'; // Import basic Swiper styles
import 'swiper/css/effect-coverflow'; // Import effect-specific styles
// import 'swiper/css/autoplay'; // Import autoplay-specific styles
import 'swiper/css/navigation';

import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'; // Import modules

</script>

<template>
    <div class="swiper__carouselWrapper relative">
        <ClientOnly fallback-tag="span" fallback="Loading Carousel...">
            <Swiper :navigation="{enabled: true, prevEl: '.swiper__prevButton', nextEl: '.swiper__nextButton'}" :loop="true" :centeredSlides="true" slides-per-view="4" :space-between="0"
                :modules="[EffectCoverflow, Navigation]" effect="coverflow" :coverflowEffect="{
                    rotate: 0,
                    stretch: 0,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false
                }"
                >
                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="450" alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                        <!-- <UButton label="Open" @click="isOpen = true" />

                        <UModal v-model="isOpen" prevent-close>
                            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                <template #header>
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                            Modal
                                        </h3>
                                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                                            class="-my-1" @click="isOpen = false" />
                                    </div>
                                </template>

                                <Placeholder class="h-32" />
                            </UCard>
                        </UModal> -->
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="450" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="450" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg" width="334"
                            height="450" alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="450" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="450" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="450" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg" width="334"
                            height="450" alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="450" alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="450" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="450" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg" width="334"
                            height="450" alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="450" alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="450" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="450" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->
            </Swiper>
        </ClientOnly>
        <!-- Custom Previous and Next Buttons -->
        
        <button aria-label="previous"
            class="swiper__prevButton rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 left-[2rem] group z-[9]"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
        <button aria-label="next"
            class="swiper__nextButton rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 right-[2rem] group z-[9]"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
    </div>
</template>