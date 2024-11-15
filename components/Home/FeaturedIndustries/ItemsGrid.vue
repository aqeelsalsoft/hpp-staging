<script setup>
import { computed } from 'vue';

const carouselImageUrl1 = '/images/home-featured-industries/mailer-box.jpg';
const carouselImageUrl2 = '/images/home-featured-industries/tuck-box.jpg';
const carouselImageUrl3 = '/images/home-featured-industries/mylar-bag.jpg';
const carouselImageUrl4 = '/images/home-featured-industries/rigid-boxes.jpg';
const carouselImageUrl5 = '/images/home-featured-industries/labels-and-stickers.jpg';
const carouselImageUrl6 = '/images/home-featured-industries/custom-product-dispenser-box.jpg';
const carouselImageUrl7 = '/images/home-featured-industries/cigarette-boxes.jpg';

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
                    <NuxtLink to="/mailer-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div
                            class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles1">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-industries/mailer-box.jpg"
                            alt="Mailer Boxes Thumbnail" loading="lazy" fit="cover" width="220" height="220"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Mailer Box
                            </h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/tuck-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles2">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-industries/tuck-box.jpg"
                                alt="Tuck Boxes Thumbnail" loading="lazy" fit="cover" width="220" height="220"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Tuck Boxes
                            </h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/mylar-bags"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles3">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-industries/mylar-bag.jpg"
                                alt="Mylar Bags and Pouches Thumbnail" loading="lazy" fit="cover" width="220"
                                height="220" class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Mylar Bags
                                and Pouches</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/rigid-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles4">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-industries/rigid-boxes.jpg"
                                alt="Rigid Boxes Thumbnail" loading="lazy" fit="cover" width="220" height="220"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Rigid Boxes
                            </h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/labels-stickers"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles5">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-industries/labels-and-stickers.jpg"
                                alt="Labels & Stickers Thumbnail" loading="lazy" fit="cover" width="220" height="220"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Labels &
                                Stickers</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/retail/custom-dispenser-boxes"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles6">
                            <!-- <NuxtImg format="webp"
                                src="/images/home-featured-industries/custom-product-dispenser-box.jpg"
                                alt="Dispenser Thumbnail" loading="lazy" fit="cover" width="220" height="220"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Dispenser
                                Boxes</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="item__wrap">
                    <NuxtLink to="/industry/vape-e-cigarette"
                        class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover" :style="backgroundStyles7">
                            <!-- <NuxtImg format="webp" src="/images/home-featured-industries/cigarette-boxes.jpg"
                                alt="Cigarette Boxes Thumbnail" loading="lazy" fit="cover" width="220" height="220"
                                class="w-full h-auto" /> -->
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">Cigarette
                                Boxes</h3>
                            <span class="font-description text-acai text-[13px] lg:text-[15px]">Request a Quote</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
