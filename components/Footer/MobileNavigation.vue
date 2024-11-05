<script lang="ts" setup>
const items = [{
    defaultOpen: false,
    label: 'Company',
    description: `<ul class="font-description">
                        <li class="mb-[5px]">
                            <a href="/about-us" class="block text-[14px] leading-[24px] hover:text-pitaya-100">About Us</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/terms-and-conditions" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Terms & Conditions</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/refund-cancellation-policy" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Refund / Cancellation Policy</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/shipping-policy" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Shipping Policy</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/privacy-policy" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Privacy & Policy</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/sitemap" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Sitemap</a>
                        </li>
                    </ul>`
}, {
    label: 'Products Packaging',
    description: `<ul class="font-description">
                        <li class="mb-[5px]">
                            <a href="/mailer-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Mailer Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/rigid-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Rigid Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/kraft-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Kraft Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/cardboard-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Cardboard Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/sustainable-packaging" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Sustainable Packaging</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/product-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Product Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/primary-packaging" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Primary Packaging</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/display-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Display Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/industry/gift" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Gift Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/pillow-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Pillow Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/tuck-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Tuck Boxes</a>
                        </li>
                    </ul>`
}, {
    label: 'Packaging Styles',
    description: `<ul class="font-description">
                        <li class="mb-[5px]">
                            <a href="/sleeve-and-tray" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Sleeve and Tray</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/pillow-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Pillow Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/tobacco-cigarette" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Cigarette Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/child-resistant" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Child Resistant Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/window-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Window Boxes</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/gable-boxes" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Gable Boxes</a>
                        </li>
                    </ul>`
}, {
    label: 'Inspiration',
    description: `<ul class="font-description">
                        <li class="mb-[5px]">
                            <a href="/blog" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Blog</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="#" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Client Success Stories</a>
                        </li>
                    </ul>`
}, {
    label: 'Contact',
    description: `<ul class="font-description">
                        <li class="mb-[5px]">
                            <a href="tel:+18662252112" class="block text-[14px] leading-[24px] hover:text-pitaya-100">866-225-2112</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="mailto:orders@halfpricepackaging.com" class="block text-[14px] leading-[24px] hover:text-pitaya-100">orders@halfpricepackaging.com</a>
                        </li>
                        <li class="mb-[5px]">
                            <a href="/contact-us" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Contact Us</a>
                        </li>
                    </ul>`
}]
</script>

<template>
    <div class="footer__navigationWrapper mb-10">
        <div class="InnerWrap">
            <h2 class="text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100 mb-3">Our Links</h2>
            <UAccordion multiple :items="items">
                <template #default="{ item, index, open }">
                    <UButton color="gray" variant="soft" size="xl" class="mb-[10px]">
                        <span class="font-headings font-semibold text-left w-[calc(100%_-_20px)]">{{
                            item.label }}</span>
                        <template #trailing>
                            <UIcon name="i-heroicons-chevron-right-20-solid"
                                class="w-[20px] h-[20px] ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']" />
                        </template>
                    </UButton>
                </template>
                <template #item="{ item }">
                    <div class="px-[15px]" v-html="item.description"></div>
                </template>
            </UAccordion>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
