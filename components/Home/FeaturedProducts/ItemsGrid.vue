<script setup>
import { computed } from 'vue';

const carouselImageUrl1 = '/images/home-featured-products/auto-lock-boxes.jpg';
const carouselImageUrl2 = '/images/home-featured-products/magnetic-closure-with-insert.jpg';
const carouselImageUrl3 = '/images/home-featured-products/custom-boxes-with-inserts.jpg';
const carouselImageUrl4 = '/images/home-featured-products/coffee-cups.jpg';
const carouselImageUrl5 = '/images/home-featured-products/eco-friendly.jpg';
const carouselImageUrl6 = '/images/home-featured-products/wine-boxes.jpg';
const carouselImageUrl7 = '/images/home-featured-products/metalized-printed-boxes.jpg';

const img = useImage()
const backgroundStyles1 = computed(() => {
    const carouselImage = img(carouselImageUrl1, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
const backgroundStyles2 = computed(() => {
    const carouselImage = img(carouselImageUrl2, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
const backgroundStyles3 = computed(() => {
    const carouselImage = img(carouselImageUrl3, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
const backgroundStyles4 = computed(() => {
    const carouselImage = img(carouselImageUrl4, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
const backgroundStyles5 = computed(() => {
    const carouselImage = img(carouselImageUrl5, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
const backgroundStyles6 = computed(() => {
    const carouselImage = img(carouselImageUrl6, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
const backgroundStyles7 = computed(() => {
    const carouselImage = img(carouselImageUrl7, { format: 'webp' })
    return { backgroundImage: `url('${carouselImage}')` }
});
</script>

<template>
    <div class="hpp__featuredIndustriesWrapper">
        <div class="hpp__industriesInner">
            <div class="grid grid-cols-2 content-start gap-[20px] px-[20px]">
                <div class="item__wrap">
                    <NuxtLink to="/tuck-boxes/auto-lock-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/auto-lock-boxes.jpg"
                                alt="Auto Lock Boxes Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Auto Lock boxes</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/rigid-boxes/custom-magnetic-closure-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/magnetic-closure-with-insert.jpg"
                                alt="Magnetic Closure Boxes with inserts Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Magnetic Closure Boxes with inserts</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/cardboard-boxes/custom-boxes-with-inserts"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/custom-boxes-with-inserts.jpg"
                                alt="Custom Boxes with Inserts Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Custom Boxes with Inserts</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/coffee-tea/double-wall-coffee-cups"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/coffee-cups.jpg"
                                alt="Double Wall Coffee Cups Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Double Wall Coffee Cups</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/sustainable-packaging/eco-friendly-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/eco-friendly.jpg"
                                alt="Eco-Friendly Boxes Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Eco-Friendly Boxes</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/beverage-wine-liquor/wine-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/wine-boxes.jpg"
                                alt="Wine Boxes Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Wine Boxes</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/metalized-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-products/metalized-printed-boxes.jpg"
                                alt="Metalized Printed Boxes Thumbnail" loading="lazy" fit="cover" width="200" height="200"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Metalized Printed Boxes
                            </h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
