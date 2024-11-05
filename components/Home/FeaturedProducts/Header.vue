<script lang="ts" setup>
// const { $device } = useNuxtApp();
</script>

<template>
    <ClientOnly>
        <div class="flex items-center mb-[30px]">
            <div class="block md:flex md:items-center">
                <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[10px]">Featured Product
                    Packaging</h2>
                <div class="hidden md:block divider__wrap flex bg-[#999999] h-[20px] w-[1px] mx-[15px]"></div>
                <p class="font-description text-[#212529] text-sm xl:text-base mb-0">Discover packaging tailored
                    for your products. Can’t find what you need? <NuxtLink to="/catalogue"
                        class="font-description ml-[10px] text-[#ef4b5f] text-sm uppercase font-bold inline-flex items-center">
                        <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </NuxtLink>
                </p>
            </div>
            <!-- <div v-if="$device.isDesktop" class="flex items-center">
                <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[10px]">Featured Product
                    Packaging</h2>
                <div class="divider__wrap flex bg-[#999999] h-[20px] w-[1px] mx-[15px]"></div>
                <p class="font-description text-[#212529] text-[16px] leading-[24px] mb-0">Discover packaging tailored
                    for your products. Can’t find what you need? <NuxtLink to="/catalogue"
                        class="font-description ml-[10px] text-[#ef4b5f] text-[13px] uppercase font-bold inline-flex items-center">
                        <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </NuxtLink>
                </p>
            </div> -->
            <!-- <div v-else class="block">
                <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[15px]">Featured Product
                    Packaging</h2>
                <p class="font-description text-[#212529] text-[16px] leading-[24px] mb-[20px]">Discover packaging
                    tailored for your products. Can’t find what you need?</p>
                <NuxtLink to="/catalogue"
                    class="font-description text-[#ef4b5f] text-[16px] uppercase font-bold inline-flex items-center">
                    <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </NuxtLink>
            </div> -->
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
