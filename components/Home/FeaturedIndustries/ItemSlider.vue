<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import KeenSlider from 'keen-slider';

const slider = ref<HTMLElement | null>(null); // Ref for the slider container
let keenSlider: KeenSlider | null = null; // Declare keenSlider in the outer scope

const current = ref(0);
// const [container] = useKeenSlider({
//     initial: current.value,
//     slideChanged: (s) => {
//         current.value = s.track.details.rel;
//     },
// });

onMounted(() => {
    if (slider.value) {
        keenSlider = new KeenSlider(slider.value, {
            // mode: "free-snap",
            loop: true,
            slides: {
                perView: 4,
                spacing: 20,
            },
            slideChanged: (s) => {
              if (s?.track?.details) {
                  current.value = s?.track?.details?.rel // Ensure track details are available
              }
            },
        });
    }
});

const isFirstSlide = computed(() => current.value === 0);
const isLastSlide = computed(() =>
    keenSlider ? current.value === keenSlider.track.details.slides.length - 1 : false
);
// Watch the isLastSlide value
watch(isLastSlide, (newVal) => {
    console.log('isLastSlide:', newVal);
});
// Cleanup on component unmount
onBeforeUnmount(() => {
    if (keenSlider) keenSlider.destroy();
});
</script>

<template>
    <!-- <div class="hpp__industryCarouselWrapper px-[120px] relative overflow-hidden"> -->
    <div class="hpp__industryCarouselWrapper relative overflow-hidden">
        <div ref="slider" class="keen-slider !hidden sm:!flex !overflow-visible overflow-y-hidden grow-0">
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/mailer-boxes"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/mailer-box.jpg"
                                alt="Mailer Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="font-description hidden text-[13px] leading-[18px] text-acai-120 sm:flex items-center flex-wrap mb-2">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Mailer Box</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/tuck-boxes"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/tuck-box.jpg"
                                alt="Tuck Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="font-description hidden text-[13px] leading-[18px] text-acai-120 sm:flex items-center flex-wrap mb-2">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Tuck Boxes</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/mylar-bags"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/mylar-bag.jpg"
                                alt="Mylar Bags and Pouches Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="font-description hidden text-[13px] leading-[18px] text-acai-120 sm:flex items-center flex-wrap mb-2">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Mylar Bags and Pouches</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/rigid-boxes"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/rigid-boxes.jpg"
                                alt="Rigid Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="font-description hidden text-[13px] leading-[18px] text-acai-120 sm:flex items-center flex-wrap mb-2">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Rigid Boxes</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/labels-stickers"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/labels-and-stickers.jpg"
                                alt="Labels & Stickers Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="font-description hidden text-[13px] leading-[18px] text-acai-120 sm:flex items-center flex-wrap mb-2">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Labels & Stickers</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/retail/custom-dispenser-boxes"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/custom-product-dispenser-box.jpg"
                                alt="Dispenser Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="hidden text-[14px] text-acai-120 sm:flex items-center flex-wrap mb-2 leading-[18px]">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Dispenser Boxes</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="/industry/vape-e-cigarette"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/cigarette-boxes.jpg"
                                alt="Cigarette Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <!-- <div
                                class="hidden text-[14px] text-acai-120 sm:flex items-center flex-wrap mb-2 leading-[18px]">
                                <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div> -->
                            <h3 class="font-headings text-xl 2xl:text-2xl text-acai font-bold mb-1">Cigarette Boxes</h3>
                            <span class="font-description text-acai text-base 2xl:text-xl">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <button @click="keenSlider?.prev()" aria-label="previous"
            class="rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 left-[2rem] group"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
        <button @click="keenSlider?.next()" aria-label="next"
            class="rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 right-[2rem] group"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
    </div>
</template>

<style lang="scss" scoped></style>
