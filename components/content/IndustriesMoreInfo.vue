<script lang="ts" setup>
// Define the props for this component
defineProps({
    title: {
        type: String,
        default: "Default Title"
    },
    description: {
        type: String,
        default: "Default Description"
    },
    moreInfo: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <div class="hpp__moreInfoContentWrapper pt-[70px] pb-[70px]">
        <div class="container mx-auto px-[15px]">

            <!-- <div v-for="(item, index) in moreInfo" :key="index">
                <pre>
                    {{ item }}
                </pre>
            </div> -->

            <div class="flex flex-wrap justify-center bg-[#f6f6f6] rounded-[32px] px-[50px] py-[50px]">
                <div class="text-center basis-full mb-[50px] max-w-2xl">
                    <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[15px]">{{ title }}</h2>
                    <p class="font-description text-[#212529] text-[16px] leading-[24px]">{{ description }}</p>
                </div>
                <div class="flex flex-wrap basis-full -mx-[30px]">
                    <div v-for="(item, index) in moreInfo" class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">{{ item.title }}</h2>
                        <p v-for="(content, index) in item.description" class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">{{ content.desc }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
