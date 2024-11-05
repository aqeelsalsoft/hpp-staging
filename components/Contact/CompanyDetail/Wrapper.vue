<script lang="ts" setup>
const img = useImage()
const backgroundStyles = computed(() => {
    const imgUrl = img('/images/contact-girl.jpg', { format: 'webp', width: '1920px', height: '901px' })
    return { backgroundImage: `url('${imgUrl}')` }
});
</script>

<template>
    <!-- <div class="hpp__companyDetailsWrapper bg-[#eef3f7] py-[30px] md:py-[70px] bg-[center_bottom] bg-contain bg-no-repeat bg-[url('imgUrl')]" :style="backgroundStyles"> -->
    <div class="hpp__companyDetailsWrapper bg-[#eef3f7] py-[30px] md:py-[70px] bg-[center_2000vw] md:bg-[center_bottom] bg-contain bg-no-repeat bg-none"
        :style="backgroundStyles">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
            <div class="inner__wrapper flex flex-wrap md:justify-end">
                <div class="w-full md:w-[50%]">
                    <div class="section__header mb-[30px]">
                        <span class="text-[#ef4b5f] font-headings text-[14px] md:text-[18px] font-bold mb-4">LIVE
                            SUPPORT</span>
                        <h2
                            class="font-headings text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-bold mb-3 md:mb-6">
                            Looking for a packaging
                            whizz for your business needs? Let’s have a talk!</h2>
                        <p class="font-description text-[16px] md:text-[18px] leading-[26px]">Schedule a meeting with
                            our packaging
                            experts with a few clicks to get started. We have answers to any and all questions!</p>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="hpp__tollFree w-full md:w-[50%] mb-6 md:mb-0">
                            <h3 class="font-headings text-[24px] leading-[28px] font-bold mb-6">Toll-free Call Center
                            </h3>
                            <ul>
                                <li class="mb-3">
                                    <NuxtLink to="tel:+18662252112" class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg viewBox="0 0 24 24" class="size-8" fill="#ef4b5f">
                                                <path
                                                    d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[16px] leading-[24px] group-hover:text-[#ef4b5f] font-semibold">866-225-2112</span>
                                    </NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink to="tel:+101214683011" class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg viewBox="0 0 24 24" class="size-8" fill="#ef4b5f">
                                                <path
                                                    d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[16px] leading-[24px] group-hover:text-[#ef4b5f] font-semibold">0121-468-3011</span>
                                    </NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <div class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#ef4b5f"
                                                class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[16px] leading-[24px] font-semibold">Monday
                                            - Friday</span>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="#ef4b5f" class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[16px] leading-[24px] font-semibold">9:30
                                            AM - 6:30 PM EST</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="hpp__tollFree w-full md:w-[50%]">
                            <h3 class="font-headings text-[24px] leading-[28px] font-bold mb-6">Sales Inquiries</h3>
                            <ul>
                                <li class="mb-3">
                                    <NuxtLink to="mailto:sales@halfpricepackaging.com" class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#ef4b5f" class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[16px] leading-[24px] group-hover:text-[#ef4b5f] font-semibold">sales@halfpricepackaging.com</span>
                                    </NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink to="mailto:sales@halfpricepackaging.co.uk"
                                        class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#ef4b5f" class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[16px] leading-[24px] group-hover:text-[#ef4b5f] font-semibold">sales@halfpricepackaging.co.uk</span>
                                    </NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <div class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4b5f"
                                                class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[14px] leading-[18px] font-normal"><strong>Head
                                                Office:</strong> 44288 Fremont Blvd, Fremont, CA 94538, USA</span>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4b5f"
                                                class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[14px] leading-[20px] font-normal"><strong>Site
                                                Office:</strong> 1800 W HAWTHORNE LN STE 205 WEST CHICAGO, IL
                                            60185-1863</span>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="group flex items-center">
                                        <span class="icon mr-3">
                                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4b5f"
                                                class="size-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        </span>
                                        <span
                                            class="font-description text-[14px] leading-[20px] font-normal"><strong>UK
                                                Office:</strong> Office G16, Brook House, 54a Cowley Mill Road,
                                            Uxbridge, UB8 2FX</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
