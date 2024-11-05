<script lang="ts" setup>

defineProps({
    title: {
        type: String,
        default: 'Default title'
    },
    description: {
        type: String,
        default: 'Default description'
    },
    viewAllLink: {
        type: String,
        default: '#'
    },
})

const img = useImage()
const backgroundStyles = computed(() => {
    const imgUrl = img('/images/industry/soap/gallery/soap-box-gallery2.jpg', { format: 'webp', width: '303px', height: '405px' })
    return { backgroundImage: `url('${imgUrl}')` }
})


</script>

<template>
    <div class="hpp__catProductsWrapper pt-[50px] pb-[50px]">
        <div class="container mx-auto px-[15px]">
            <div class="flex items-center mb-[30px]">
                <div class="flex items-center">
                    <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[10px]">{{ title }}</h2>
                    <div class="divider__wrap flex bg-[#999999] h-[20px] w-[1px] mx-[15px]"></div>
                    <p class="font-description text-[#212529] text-[16px] leading-[24px] mb-0">{{ description }} <NuxtLink to="{{ viewAllLink }}"
                            class="font-description ml-[10px] text-[#ef4b5f] text-[13px] uppercase font-bold inline-flex items-center">
                            <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </NuxtLink>
                    </p>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="categories__ListWrapper w-[300px] pr-[30px]">
                    <div class="cat__listWrapper mb-[50px]">
                        <h3
                            class="font-headings text-[#212529] text-[24px] leading-[30px] font-bold pb-[15px] mb-[25px] border-b border-[#e5e5e5]">
                            Industries
                        </h3>
                        <ul class="font-description font-medium text-gray-500 text-[14px]">

                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Cosmetic Boxes
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Candle Boxes
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Bakery Boxes
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    CBD Boxes
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Sustainable Packaging
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Vape & E-Cigarette
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Gift Boxes
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Pharma Packaging
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Retail Boxes
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Marijuana & Cannabis
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Fragrance Packaging
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Candy & Sweets Packaging
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Sports Packaging
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Office & Workplace
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>
                            <li class="mb-[10px]">
                                <a href="#" class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                    Beverage, Wine, Liquor Packaging
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor"
                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </a>
                            </li>

                        </ul>
                    </div>

                    <div class="view__catalogueWrapper">
                        <div class="view__catalogueWrap bg-bottom bg-no-repeat bg-contain overflow-hidden rounded-[32px] pt-[50px] px-[30px] pb-[110%] bg-[#a5a87a]"
                            :style="backgroundStyles">
                            <h3 class="font-headings text-white text-[24px] leading-[30px] font-bold mb-[25px]">
                                Find a better price and we’ll beat it by up to 20%.
                            </h3>
                            <NuxtLink to="/catalogue"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[6px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                Browse Our Catalogue</NuxtLink>
                        </div>
                    </div>

                </div>
                <div class="grid grid-cols-4 content-start gap-[30px] w-[calc(100%_-_300px)]">
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/soap-sleeves.jpg"
                                    alt="Soap Sleeves Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-1">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Soap
                                    Sleeves</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/kraft-soap-boxes.jpg"
                                    alt="Kraft Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-1">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Kraft
                                    Soap Boxes</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/soap-boxes-with-window.jpg"
                                    alt="Soap Boxes With Window Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Soap
                                    Boxes With Window</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/die-cut-soap-boxes.jpg"
                                    alt="Die Cut Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Die Cut
                                    Soap Boxes</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/soap-wraps.jpg"
                                    alt="Soap Wraps Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Soap
                                    Wraps</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/soap-subscription-boxes.jpg"
                                    alt="Soap Subscription Boxes Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Soap
                                    Subscription Boxes</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/cardboard-soap-boxes.jpg"
                                    alt="Cardboard Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">
                                    Cardboard Soap Boxes</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/square-soap-boxes.jpg"
                                    alt="Square Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Square
                                    Soap Boxes</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/luxury-soap-packaging.jpg"
                                    alt="Luxury Soap Packaging Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Luxury
                                    Soap Packaging</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/soap-hotel-amenities.jpg"
                                    alt="Soap Hotel Amenities Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Soap
                                    Hotel Amenities</h3>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="item__wrap">
                        <NuxtLink to="#"
                            class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                            <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                <NuxtImg format="webp" src="/images/industry/soap/products/eco-friendly-soap-boxes.jpg"
                                    alt="Eco Friendly Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336"
                                    height="336" class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[10px]">
                                <div
                                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                    <span>Min. 5000 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                        weeks</span>
                                </div>
                                <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">Eco
                                    Friendly Soap Boxes</h3>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
