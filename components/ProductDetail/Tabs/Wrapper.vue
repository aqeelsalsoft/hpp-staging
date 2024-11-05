<script lang="ts" setup>
const items = [{
    key: 'materials',
    label: 'Materials',
    icon: 'i-heroicons-information-circle',
}, {
    key: 'adons',
    label: 'Ad-Ons & Finishing',
    icon: 'i-heroicons-arrow-down-tray',
}, {
    key: 'paperWeight',
    label: 'Paper Weight',
    icon: 'i-heroicons-eye-dropper',
}, {
    key: 'shipping',
    label: 'Shipping',
    icon: 'i-heroicons-eye-dropper',
}]
</script>

<template>
    <div class="hpp__productTabsContentWrapper pt-[50px] pb-[50px] bg-white">
        <div class="container mx-auto px-[15px]">
            <UTabs :items="items" class="w-full">
                <template #item="{ item }">
                    <UCard>
                        <div v-if="item.key === 'materials'" class="space-y-3">
                            <div class="flex">
                                <div class="desc__wrapper basis-1/2">
                                    <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Discover our range of high-quality packaging materials designed to tailor your packaging order to perfection. From sturdy cardboard boxes to eco-friendly options, we have the ideal materials for your unique needs. Elevate your brand and protect your products with our customizable packaging solutions</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="item.key === 'adons'" class="space-y-3">
                            <div class="flex">
                                <div class="desc__wrapper basis-1/2">
                                    <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Elevate your packaging with our premium add-ons. Choose from lamination, foiling, coatings, and other finishing options to create packaging that reflects your brand's elegance and style. Tailor your order to your exact preferences for a distinctive and eye-catching presentation and make a lasting impression</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="item.key === 'paperWeight'" class="space-y-3">
                            <div class="flex">
                                <div class="desc__wrapper basis-1/2">
                                    <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Select from a range of packaging paper thicknesses, from 8pt to 28pt, to meet your specific needs. Rigid boxes demand greater thickness for durability and luxury, capable of supporting your product's weight. Make a wise choice that aligns with your budget while ensuring your packaging exudes quality and resilience</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="item.key === 'shipping'" class="space-y-3">
                            <div class="flex">
                                <div class="desc__wrapper basis-1/2">
                                    <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Experience worry-free shipping with our packaging solutions. Whether you choose ground or air shipments, we offer guaranteed insured freight options, ensuring your packaging orders arrive safely and securely. Relax knowing your products are in reliable hands from production to delivery</p>
                                </div>
                            </div>
                        </div>
                    </UCard>
                </template>
            </UTabs>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
