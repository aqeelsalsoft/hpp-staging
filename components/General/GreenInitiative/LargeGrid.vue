<script lang="ts" setup></script>

<template>
    <div class="flex items-center h-[100vw] md:h-screen bg-[#333333] relative overflow-hidden">
        <div class="thumb__wrapper w-full h-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(0,0,0,0.6)]">
            <NuxtImg format="webp" src="/images/sustainability-grid/grid1.jpg" alt="Sustainability Grid Thumbnail"
                loading="lazy" width="1000" height="1000" class="w-full h-full object-cover" />
        </div>
        <div class="Inner absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
            <div class="py-[50px] md:py-14 pl-[30px] md:pl-14 pr-[30px] md:pr-40">
                <span class="font-headings block text-white text-[14px] leading-[18px] font-bold tracking-[1px] mb-3">Green Initiatives</span>
                <h2 class="font-headings text-white mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Half Price Packaging's
                    commitment
                    to a sustainable tomorrow</h2>
                <NuxtLink to="/industry/sustainable-packaging"
                    class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[30px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                    Start Your Journey Towards Sustainability</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
