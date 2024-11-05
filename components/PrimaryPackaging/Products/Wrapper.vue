<script setup>
const props = defineProps({
  products:{
    type:Array,
    default: []
  }
})
</script>

<template>
    <div class="hpp__catProductsWrapper pb-[50px]">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

            <div class="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[30px]">
                <div class="item__wrap" v-for="(item, index) in props.products" :key="index">
                    <NuxtLink to="#"
                        class="group relative flex flex-wrap md:flex-nowrap items-center md:block bg-white md:px-4 md:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] md:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap relative w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}${item.feature_image}`"
                                :alt="item.feature_image_alt" loading="lazy" fit="cover" width="336" height="336"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <div
                                class="font-description hidden text-[13px] leading-[18px] text-acai-120 sm:flex items-center flex-wrap mb-2">
                                <span>Min. 200 units</span><span class="text-[18px] px-2">·</span><span>Delivery: 4
                                    weeks</span>
                            </div>
                            <h3 class="font-headings text-[20px] leading-[24px] text-acai font-bold mb-0.5">{{item.name}}</h3>
                        </div>
                    </NuxtLink>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
