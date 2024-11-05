<script setup>
import { computed, onMounted, } from 'vue';
import { useRoute } from 'vue-router';
const { setFirstPageUrl } = useGlobalStore();
const { FirstPageUrl } = storeToRefs(useGlobalStore());
const route = useRoute();

onMounted(() => {
  if(!FirstPageUrl.value){
    setFirstPageUrl(route.fullPath);
  }
});

</script>

<template>
    <div class="hpp__mainNavigationWrapper border-[#f2f2f2] border-y relative">
        <div class="container mx-auto px-[15px]">
            <div class="flex items-center">
                <nav class="hpp__navWrapper px-[15px]">
                    <ul class="flex gap-x-[30px]">
                        <li class="group">
                            <NuxtLink to="/industries" class="flex items-center block hover:text-[#ef4b5f] megaMenuLink py-[15px]">
                                <span
                                    class="font-description font-normal text-[16px] leading-[24px]">Industries</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                            <!-- Dropdown menu -->
                            <div
                                class="dropdownMenuWrap animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div class="flex">
                                    <div class="grid grid-cols-5 gap-[20px] w-[calc(100%_-_300px)] border-r pr-[30px]">
                                        <div class="item__wrap">
                                            <NuxtLink to="/industry/cosmetics"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/cosmetics-boxes.jpg"
                                                        alt="Cosmetics & Skincare Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Cosmetics & Skincare</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/industry/bakery"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/bakery-boxes.jpg"
                                                        alt="Bakery Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Bakery</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/industry/retail"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/retail-boxes.jpg"
                                                        alt="Retail Boxes Thumbnail" loading="lazy"
                                                        fit="cover" width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Retail</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/industry/soap"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/soap-boxes.jpg"
                                                        alt="Soap Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Soap</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/industry/candle"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/luxury-candle-boxes.jpg"
                                                        alt="Candle Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Candles</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="w-[300px] pl-[30px]">
                                        <ul class="font-description font-medium text-gray-500 text-[14px] mb-[30px]">
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/gift"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Gift Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/pharma"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Pharma Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/fragrance"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Fragrance Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/candy-sweets"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Candy & Sweets Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/jewelry"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Jewelry Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/ecommerce"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Ecommerce Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/coffee-tea"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Coffee and Tea Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                        </ul>
                                        <div class="view__allBtnWrapper">
                                            <NuxtLink to="/industries"
                                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[6px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                                View All Industries</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="group">
                            <NuxtLink to="/shapes-and-styles" class="flex items-center block hover:text-[#ef4b5f] megaMenuLink py-[15px]">
                                <span
                                    class="font-description font-normal text-[16px] leading-[24px]">Product Packaging Styles</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                            <div
                                class="dropdownMenuWrap animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div class="flex">
                                    <div class="grid grid-cols-5 gap-[20px] w-[calc(100%_-_300px)] border-r pr-[30px]">
                                        <div class="item__wrap">
                                            <NuxtLink to="/mailer-boxes"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/mailer-boxes.jpg"
                                                        alt="Mailer Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Mailer boxes</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/tuck-boxes"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/tuck-boxes.jpg"
                                                        alt="Tuck Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Tuck boxes</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/mylar-bags"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/mylar-bags.jpg"
                                                        alt="Myler Bags and Pouches Thumbnail" loading="lazy"
                                                        fit="cover" width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Myler Bags and Pouches</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/rigid-boxes"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/rigid-box.jpg"
                                                        alt="Rigid Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Rigid boxes</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/labels-stickers"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/labels-and-stickers.jpg"
                                                        alt="Labels and Stickers Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Labels and stickers</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="w-[300px] pl-[30px]">
                                        <ul class="font-description font-medium text-gray-500 text-[14px] mb-[30px]">
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/retail/custom-dispenser-boxes"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Dispenser Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/sleeve-and-tray"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Sleeve & Tray Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink href="/pillow-boxes"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Pillow Box
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/industry/tobacco-cigarette"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Cigarette Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/child-resistant"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Child Resistant
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/window-boxes"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Window Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                            <li class="mb-[10px]">
                                                <NuxtLink to="/gable-boxes"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Gable Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </NuxtLink>
                                            </li>
                                        </ul>
                                        <div class="view__allBtnWrapper">
                                            <NuxtLink to="/shapes-and-styles"
                                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[6px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                                View All Packaging Styles</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="group">
                            <NuxtLink to="/client-success-stories" class="flex items-center block hover:text-[#ef4b5f] megaMenuLink py-[15px]">
                                <span
                                    class="font-description font-normal text-[16px] leading-[24px]">Client Success Stories</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                            <div
                                class="dropdownMenuWrap animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div class="flex">
                                    <div class="grid grid-cols-3 gap-[20px] w-[calc(100%_-_300px)] border-r pr-[30px]">
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/client-success-stories/evolve-cannabis-capsules.jpg"
                                                        alt="Evolve Cannabis Capsules Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="236" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Evolve Cannabis Capsules <span class="text-[24px] leading-[20px] font-headings font-bold align-top">X</span> HPP</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="/blog/how-wonderful-whirl-transforms-its-flashcard-packaging-with-tuck-boxes"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/client-success-stories/wonderful-whirl.jpg"
                                                        alt="Wonderful Whirl Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="236" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Wonderful Whirl <span class="text-[24px] leading-[20px] font-headings font-bold align-top">X</span> HPP</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/client-success-stories/ernburn.jpg"
                                                        alt="ERNBURN Thumbnail" loading="lazy"
                                                        fit="cover" width="336" height="236" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        ERNBURN <span class="text-[24px] leading-[20px] font-bold align-top">X</span> HPP</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="w-[300px] pl-[30px]">
                                        <ul class="font-description font-medium text-gray-500 text-[14px] leading-[20px] mb-[30px]">
                                            <li class="mb-[10px]">
                                                <a href="/blog/how-mermaid-cove-and-half-price-packaging-united-for-eco-friendly-beauty"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f] font-description">
                                                    Mermaid Cove <span class="font-headings text-[24px] leading-[20px] font-bold align-top mx-[5px]">X</span> HPP
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="/blog/a-flavorful-fusion-between-churro-on-top-and-half-price-packaging"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f] font-description">
                                                    Churro On Top <span class="font-headings text-[24px] leading-[20px] font-bold align-top mx-[5px]">X</span> HPP
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f] font-description">
                                                    GrimmsBrook <span class="font-headings text-[24px] leading-[20px] font-bold align-top mx-[5px]">X</span> HPP
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f] font-description">
                                                    Rainy Rivers <span class="font-headings text-[24px] leading-[20px] font-bold align-top mx-[5px]">X</span> HPP
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="/blog/olive-knives-gets-the-two-piece-rigid-boxes-for-their-knives"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f] font-description">
                                                    Olive Knives <span class="font-headings text-[24px] leading-[20px] font-bold align-top mx-[5px]">X</span> HPP
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                        </ul>
                                        <div class="view__allBtnWrapper">
                                            <NuxtLink to="/client-success-stories"
                                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[6px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                                View All Stories</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f] py-[15px]"><span
                                    class="font-description text-[14px] leading-[20px]">Client Success Stories</span>
                            </NuxtLink>
                        </li> -->
                    </ul>
                </nav>
                <!-- <div class="hpp__headerBtnsWrap">
                    <NuxtLink to="/"
                        class="ease-in-out duration-[0.3s] inline-block rounded-[8px] border border-[#ef4b5f] px-[20px] py-[10px] text-[#ef4b5f] text-[14px] uppercase font-semibold hover:text-[#ffffff] hover:bg-[#ef4b5f] mr-[15px]">
                        Beat the Price</NuxtLink>
                    <NuxtLink to="/"
                        class="ease-in-out duration-[0.3s] inline-block rounded-[8px] border border-[#ef4b5f] px-[20px] py-[10px] text-[#ef4b5f] text-[14px] uppercase font-semibold hover:text-[#ffffff] hover:bg-[#ef4b5f]">
                        Request a Quote</NuxtLink>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
