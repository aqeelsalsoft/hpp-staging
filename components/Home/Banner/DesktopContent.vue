<script lang="ts" setup></script>

<template>
    <div class="hpp__bannerSliderWrap">
        <div class="slider__innerWrap relative h-[490px] overflow-hidden">
            <div class="block w-full">
                <div class="w-full">
                    <div class="relative w-full">
                        <div class="slide__imageWrap">
                            <NuxtImg placeholder format="webp" width="1920" height="490" src="/images/home-banner/banner-slider-image.jpg" alt="Half Price Packaging Home Banner"
                                class="w-full h-[490px] object-cover object-right"
                                sizes="100vw sm:996px md:1200px lg:1350px xl:1600px xxl:1920px" />
                        </div>
                        <div class="slider__innerWrap absolute w-full left-0 top-2/4 -translate-y-1/2">
                            <div class="px-[120px]">
                                <div class="slide__content w-[700px]">
                                    <h1 class="font-headings text-[50px] leading-[56px] text-white font-bold mb-6">
                                        Custom Packaging for an Irresistible Impression</h1>
                                    <p class="font-description text-[20px] leading-[30px] text-white font-light mb-14">
                                        A Leading Packaging Services Provider With 25+ Years<br />of Experience & Competitive Teams Worldwide</p>
                                    <NuxtLink to="/catalogue"
                                        class="font-description inline-block ease-in-out duration-[0.3s] text-black text-[16px] leading-[24px] font-semibold text-center bg-white rounded-[6px] py-[10px] px-[40px] border border-white border-solid hover:text-white hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                        Browse Our Catalogue</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
