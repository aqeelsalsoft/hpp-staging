<script setup>
// const { $device } = useNuxtApp();

// const img = useImage()
// const backgroundStyles = computed(() => {
//     const imgUrl = img('/images/home-banner/banner-slider-image.jpg', { format: 'webp', width: '1920px', height: '490px', sizes: '100vw sm:996px md:1200px lg:1350px xl:1600px xxl:1920px' })
//     return { 
//         backgroundImage: `url('${imgUrl}')`,
//         backgroundPosition: 'center right',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//     }
// });

// import { useImage } from 'some-image-utility';
// import { computed } from 'vue';

// const img = useImage();

// const backgroundStyles = computed(() => {
//     // Check if the screen size is below a certain width for mobile
//     //const isMobile = breakpoints.smaller('lg'); // Adjust 'md' as per the breakpoint where you want to switch images
//     const isMobile = window.matchMedia('(max-width: 768px)').matches; // Adjust 'md' as per the breakpoint where you want to switch images

//     // Set the image based on the screen size
//     const imgUrl = img( isMobile ? '/images/home-banner/banner-mobile.jpg' : '/images/home-banner/banner-slider-image.jpg', 
//         { 
//             format: 'webp', 
//             width: isMobile ? '768px' : '1920px', // Use smaller dimensions for mobile
//             height: '490px', 
//             sizes: '100vw sm:996px md:1200px lg:1350px xl:1600px xxl:1920px'
//         }
//     );

//     return { 
//         backgroundImage: `url('${imgUrl}')`,
//         backgroundPosition: isMobile ? 'center bottom' : 'center right',
//         backgroundSize: isMobile ? 'contain' : 'cover',
//         backgroundRepeat: 'no-repeat'
//     };
// });

</script>

<template>
    <div class="hpp__bannerSliderWrap">
        <div class="slider__innerWrap relative overflow-hidden">
            <div class="block w-full">
                <div class="w-full">
                    <div class="relative w-full min-h-[490px] pb-[200px] bg-[url('/images/home-banner/banner-mobile.webp')] md:bg-[url('/images/home-banner/banner-slider-image.webp')] bg-contain md:bg-cover bg-[center_top_10rem] md:bg-right bg-no-repeat">
                    <!-- <div class="relative w-full min-h-[490px] pb-[200px] md:bg-[url('/images/home-banner/banner-slider-image.webp')] bg-contain md:bg-cover bg-[center_top_10rem] md:bg-right bg-no-repeat"> -->
                        <!-- <div class="slide__imageWrap absolute bottom-0 left-0 ">
                            <NuxtImg preload placeholder format="webp" width="1920" height="490" src="/images/home-banner/banner-slider-image.jpg" alt="Half Price Packaging Home Banner"
                                class="w-full h-[200px] md:h-[490px] object-cover object-right"
                                sizes="100vw sm:996px md:1200px lg:1350px xl:1600px xxl:1920px xxxl:1930px" />
                        </div> -->
                        <div class="slider__innerWrap md:absolute w-full md:left-0 md:top-2/4 md:-translate-y-1/2">
                            <div class="px-[20px] py-[40px] md:px-[120px] md:py-0">
                                <div class="slide__content md:w-[700px]">
                                    <h1 class="font-headings text-[40px] md:text-[50px] leading-[46px] md:leading-[56px] text-white font-bold mb-6">
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

    <!-- <div class="hpp__bannerSliderWrap">
        <div class="slider__innerWrap relative overflow-hidden">
            <div class="block w-full">
                <div class="w-full">
                    <div class="relative w-full min-h-[490px] md:h-[490px] pb-[200px] md:pb-0" :style="backgroundStyles">
                        <div class="slider__innerWrap md:absolute w-full md:left-0 md:top-2/4 md:-translate-y-1/2">
                            <div class="px-[20px] py-[40px] md:px-[120px] md:py-0">
                                <div class="slide__content md:w-[700px]">
                                    <h1 class="font-headings text-[40px] md:text-[50px] leading-[46px] md:leading-[56px] text-white font-bold mb-6">
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
    </div> -->
</template>

<style lang="scss" scoped></style>
