<script lang="ts" setup></script>

<template>
    <div class="flex items-center h-[50vw] md:h-[calc(100vh_/_2)] w-6/12 bg-[#333333] relative overflow-hidden">
        <div class="thumb__wrapper w-full h-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(0,0,0,0.6)]">
            <NuxtImg format="webp" src="/images/sustainability-grid/kraft-food-boxes.jpg" alt="Kraft Food Boxes Thumbnail"
                loading="lazy" width="500" height="500" class="w-full h-full object-cover" />
        </div>
        <div class="Inner absolute bottom-0 left-0 w-full">
            <div class="py-[20px] md:py-6 px-[20px] md:px-8">
                <h2 class="font-headings text-white text-[18px] font-bold">
                    <a href="/food-restaurant/kraft-food-boxes">Kraft Food Boxes</a>
                </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
