<script setup>
import { computed } from 'vue';

const img = useImage()
const backgroundStyles = computed(() => {
    const imgUrl = img('/images/sustainability-grid/kraft-mylar-bags.webp', { loading: 'lazy' })
    return { backgroundImage: `url('${imgUrl}')` }
});
</script>

<template>
    <div class="flex items-center h-[50vw] md:h-[calc(100vh_/_2)] w-6/12 bg-[#333333] relative overflow-hidden">
        <!-- <div class="thumb__wrapper w-full h-full bg-[url('/images/sustainability-grid/kraft-mylar-bags.webp')] bg-no-repeat bg-center bg-contain pt-[100%] relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(0,0,0,0.6)]"> -->
        <div class="thumb__wrapper w-full h-full bg-no-repeat bg-center bg-contain pt-[100%] relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(0,0,0,0.6)]" :style="backgroundStyles">
            <!-- <NuxtImg format="webp" src="/images/sustainability-grid/kraft-mylar-bags.jpg" alt="Kraft Mylar Bags Thumbnail"
            loading="lazy" width="500" height="500" class="w-full h-full object-cover" sizes="400px sm:600px md:850 lg:950px xl:1000px xxl:100wv" /> -->
        </div>
        <div class="Inner absolute bottom-0 left-0 w-full">
            <div class="py-[20px] md:py-6 px-[20px] md:px-8">
                <h2 class="font-headings text-white text-sm md:text-lg md:text-2xl font-bold">
                    <a href="/mylar-bags/kraft-mylar-bags">Kraft Mylar Bags</a>
                </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
