<script setup>
const { $device } = useNuxtApp();
</script>

<template>
    <!-- <header class="hpp__siteHeader hidden md:block min-h-[128px] sticky top-0 z-50 bg-white w-full"> -->
    <header class="hpp__siteHeader block min-h-[128px] md:sticky md:top-0 z-[999] bg-white w-full">
        <!-- <header class="hpp__siteHeader hidden md:block sticky top-0 z-50 bg-white"> -->
        <HeaderLogoSearchBar />
        <HeaderMainNavigation class="hidden md:block" />
    </header>
    <!-- <header v-else class="hpp__siteMobileHeader block md:hidden min-h-[156px] sticky top-0 z-50 bg-white px-[15px] pt-[15px] pb-[25px]"> -->
    <!-- <header class="hpp__siteMobileHeader block md:hidden  sticky top-0 z-50 bg-white px-[15px] pt-[15px] pb-[25px]"> -->
        <!-- <div class="flex items-center flex-wrap"> -->
            <!-- <HeaderMobileLogo /> -->
            <!-- <ClientOnly> -->
                <!-- <HeaderMobileNavigation v-if="$device.isMobile" /> -->
                <!-- <HeaderMobileNavigation /> -->
            <!-- </ClientOnly> -->
            <!-- <HeaderSearchBar /> -->
        <!-- </div> -->
    <!-- </header> -->
</template>

<style lang="scss" scoped></style>
