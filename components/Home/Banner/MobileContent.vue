<script lang="ts" setup></script>

<template>
    <div class="relative">
        <div class="hpp__mobileBannerImgWrap pt-[150px]">
            <NuxtImg placeholder format="webp" src="/images/home-banner/banner-mobile.jpg" alt="HPP Home Mobile Banner" width="575"
                height="863" class="w-full h-[500px] object-cover object-top" sizes="320px default:375px xxs:400px xs:430px sm:450px md:500px lg:500px" />
        </div>
        <div class="hpp__bannerContentWrapper absolute top-0 left-0 px-[20px] pt-[70px]">
            <h1 class="font-headings text-[40px] leading-[46px] text-white font-bold mb-6">
                Premium Custom Boxes at Unbeatable Prices!</h1>
            <p class="font-description text-[20px] leading-[30px] text-white font-light mb-14">
                Discover custom packaging solutions crafted with perfection, to meet your unique
                needs</p>
            <NuxtLink to="/catalogue"
                class="font-description inline-block ease-in-out duration-[0.3s] text-black text-[16px] leading-[24px] font-semibold text-center bg-white rounded-[6px] py-[10px] px-[40px] border border-white border-solid hover:text-white hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                Browse Our Catalogue</NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
