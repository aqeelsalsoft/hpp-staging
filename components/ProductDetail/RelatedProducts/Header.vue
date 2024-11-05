<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <ClientOnly>
        <div v-if="$device.isDesktop" class="flex items-center mb-[30px]">
            <div class="flex items-center">
                <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[10px]">Related Products
                </h2>
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
            </div>
        </div>
        <div v-else class="block mb-[30px]">
            <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[15px]">Related Products
            </h2>
            <p class="font-description text-[#212529] text-[16px] leading-[24px] mb-[20px]">Discover packaging tailored
                for your products. Can’t find what you need?</p>
            <NuxtLink to="/catalogue"
                class="font-description text-[#ef4b5f] text-[16px] uppercase font-bold inline-flex items-center">
                <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </NuxtLink>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
