<script setup>
// const { $device } = useNuxtApp();
</script>

<template>
    <div class="hpp__homeBannerWrapper min-h-[490px] bg-black">
        <!-- <ClientOnly> -->
            <!-- <HomeBannerSlider v-if="$device.isDesktop" /> -->
            <!-- <HomeBannerMobileContent v-else /> -->
        <!-- </ClientOnly> -->

        <!-- <HomeBannerSlider class="hidden md:block" /> -->
        <!-- <HomeBannerDesktopContent class="hidden md:block" /> -->
        <!-- <HomeBannerMobileContent class="block md:hidden" /> -->
        <HomeBannerDesktopContent />
    </div>
</template>

<style lang="scss" scoped></style>
