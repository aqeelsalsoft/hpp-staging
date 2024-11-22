<script setup>

import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();

defineProps({
    featureImage: {
        type: String,
        default: ""
    },
    fAltTag:{
      type: String,
      default: ""
    },
    shortDescription: {
        type: String,
        default: ""
    },
});
</script>

<template>
    <div class="hpp__productDescriptionContentWrapper pt-[30px] md:pt-[70px] pb-[30px] md:pb-[50px] bg-white">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

            <div class="flex flex-wrap items-center">
                <div class="desc__wrapper w-full md:w-[55%] pl-0 md:pl-[15px] pr-0 md:pr-[70px] mb-8 md:mb-0">
                    <h2 class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Product Overview</h2>
                    <p v-clean-html="shortDescription" class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]"></p>
                </div>
                <div class="thumb__wrapper w-full md:w-[45%] px-0 md:px-[15px]">
                    <div class="thumb__wrap rounded-[32px] overflow-hidden">
                        <!-- <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}${featureImage}`" :alt="fAltTag"
                            alt="Kraft Soap Boxes Thumbnail" loading="lazy" fit="cover" width="600" height="600" class="w-full h-auto" /> -->
                        <img :src="`${useRuntimeConfig().public.productMediaURL}${featureImage}`" :alt="fAltTag"
                            loading="lazy" width="600" height="600" class="w-full h-auto" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
