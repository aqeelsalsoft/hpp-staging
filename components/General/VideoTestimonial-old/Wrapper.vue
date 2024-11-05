<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <ClientOnly>
        <div v-if="$device.isDesktop" class="hpp__customPackagingSuccessWrapper py-[70px] bg-[#ffffff]">
            <div class="container mx-auto px-[15px]">
                <div class="flex mx-auto">
                    <div class="content__wrapper basis-[60%] pr-28">
                        <GeneralVideoTestimonialHeader />
                        <GeneralVideoTestimonialFeatures />
                    </div>
                    <div class="video__wrapper basis-[40%]">
                        <GeneralVideoTestimonialVideo />
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="hpp__customPackagingSuccessWrapper py-[50px] px-[20px] bg-[#ffffff]">
            <div class="flex flex-wrap">
                <div class="content__wrapper basis-full mb-[30px]">
                    <GeneralVideoTestimonialHeader />
                    <GeneralVideoTestimonialFeatures />
                </div>
                <div class="video__wrapper basis-full">
                    <LazyGeneralVideoTestimonialVideo />
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
