<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <ClientOnly>
        <div v-if="$device.isDesktop" class="hpp__customPackagingSuccessWrapper pt-[20px] pb-[40px] md:pt-[30px] md:pb-[70px] bg-white">
            <div class="container mx-auto px-[15px]">
                <div class="flex mx-auto">
                    <div class="content__wrapper w-full">
                        <GeneralVideoTestimonialHeader />
                        <GeneralVideoTestimonialFeatures />
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="hpp__customPackagingSuccessWrapper py-[50px] px-[20px] bg-white">
            <div class="flex flex-wrap">
                <div class="content__wrapper w-full mb-[30px]">
                    <GeneralVideoTestimonialHeader />
                    <GeneralVideoTestimonialFeatures />
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
