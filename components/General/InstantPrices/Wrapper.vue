<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <ClientOnly>
        <div v-if="$device.isDesktop" class="hpp__instantPricesWrapper pt-[20px] pb-[40px] bg-[#f5f6fa]">
            <div class="container mx-auto px-[15px]">
                <GeneralInstantPricesForm />
            </div>
        </div>
        <div v-else class="hpp__instantPricesWrapper pt-[20px] pb-[40px] bg-[#f5f6fa]">
            <div class="px-[20px]">
                <GeneralInstantPricesForm />
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
