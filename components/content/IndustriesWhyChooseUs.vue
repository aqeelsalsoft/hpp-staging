<script lang="ts" setup>
// Define the props for this component
defineProps({
    whyChooseUs: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <div class="hpp__whyChooseUsContentWrapper pt-[100px] pb-[100px]">
        <div class="container mx-auto px-[15px]">

            <div v-for="(item, index) in whyChooseUs" :key="index" :class="index % 2 !== 0 ? 'mb-0' : 'mb-[100px]'" class="flex items-center">
                
                <!-- Render thumb__wrapper based on even index -->
                <div v-if="index % 2 === 0" class="thumb__wrapper basis-[45%] px-[15px]">
                    <div class="thumb__wrap rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" :src="item.imageURL" :alt="item.imageALT" loading="lazy" fit="cover" class="w-full h-auto" />
                    </div>
                </div>

                <div :class="index % 2 !== 0 ? 'pr-[70px]' : 'pl-[70px]'" class="desc__wrapper basis-[55%] pr-[15px]">
                    <h2 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ item.title }}</h2>
                    <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">{{ item.description }}</p>
                    <div class="btn__wrapper">
                        <NuxtLink :to="item.buttonURL"
                            class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                            {{ item.buttonText }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Render thumb__wrapper below desc__wrapper for odd index -->
                <div v-if="index % 2 !== 0" class="thumb__wrapper basis-[45%] px-[15px]">
                    <div class="thumb__wrap rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" :src="item.imageURL" :alt="item.imageALT" loading="lazy" fit="cover" class="w-full h-auto" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
