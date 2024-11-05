<script setup>
import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();

const { setIsModalShow } = useGlobalStore();

const openModal = () => {
  setIsModalShow(true);
}

defineProps({
    image: {
        type: String,
        default: ""
    },
    alt:{
      type: String,
      default:null
    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    bgImage: {
        type: String,
        default: ""
    },
    bgAlt:{
      type: String,
      default:null
    },
    bgTitle: {
        type: String,
        default: ""
    },
    bgDescription: {
        type: String,
        default: ""
    },
});

</script>

<template>
    <div class="hpp__whyChooseUsContentWrapper pt-[30px] md:pt-[50px] pb-[30px] md:pb-[100px] bg-white">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

            <div class="flex items-center flex-wrap mb-[50px] md:mb-[100px]" v-if="title && title != 'null'">
                <div class="thumb__wrapper w-full md:w-[45%] px-[0] md:px-[15px] mb-8">
                    <div class="thumb__wrap rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}${image}`" :alt="alt"
                            loading="lazy" width="556" height="363" fit="cover" class="w-full h-auto" />
                    </div>
                </div>
                <div class="desc__wrapper w-full md:w-[55%] pl-0 md:pl-[70px] pr-0 md:pr-[15px]">
                    <h2 class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl">{{title}}</h2>
                    <p v-clean-html="description" class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]"></p>
                    <div class="btn__wrapper">
                        <a  @click="openModal()"
                            class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                            Get Custom Quote</a>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap items-center" v-if="bgTitle && bgTitle != 'null'">
                <div class="desc__wrapper w-full md:w-[55%] pl-0 md:pl-[15px] pr-0 md:pr-[70px] order-2 md:order-1">
                    <h2 class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl">{{ bgTitle }}</h2>
                    <p v-clean-html="bgDescription" class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]"></p>
                    <div class="btn__wrapper">
                        <a  @click="openModal()"
                            class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                            Get Custom Quote</a>
                    </div>
                </div>
                <div class="thumb__wrapper w-full md:w-[45%] px-[15px] order-1 md:order-2 mb-8 md:mb-0">
                    <div class="thumb__wrap rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}${bgImage}`" :alt="bgAlt" loading="lazy" width="556" height="363" fit="cover" class="w-full h-auto" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
