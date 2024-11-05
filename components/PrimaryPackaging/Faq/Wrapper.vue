<script lang="ts" setup>

const items = [{
    defaultOpen: true,
    label: 'What are your minimum order quantities (MOQ)?',
    description: 'Our minimum order quantity (MOQ) changes based on the distinct product line and customization needs. For more information about the MOQ for the product you\'re inquisitive about, please reach out to our specialists. We seek to accommodate orders of all measures to meet our customers\' various needs, so don\'t hesitate.'
}, {
    label: 'Do you offer design assistance?',
    description: 'Yes, our professional designers can assist you in creating the ideal design for your custom packaging. We function closely with our clients to guarantee your packaging aligns with your brand values and product needs. Also, it is free of cost.'
}, {
    label: 'Can I try out samples before purchasing?',
    description: 'Absolutely! Our sample kit is curated to showcase our top-selling products, allowing you to experience their exceptional quality firsthand. You\'ll get the chance to see and feel the materials up close. Additionally, we offer a convenient swatch book for your reference.'
}, {
    label: 'Where to buy boxes?',
    description: 'You can buy custom boxes in all styles, sizes, shapes, and colors from Half Price Packaging. We offer an all-inclusive range of packaging solutions to meet your needs - primary to secondary.'
}, {
    label: 'What types of custom boxes do you offer?',
    description: 'We deliver a huge collection of bespoke boxes, including corrugated boxes, rigid boxes, gift boxes, folding cartons, mylar bags, mailer boxes, and many other boxes tailored to your precise needs.'
}, {
    label: 'What types of packaging materials are available for custom boxes?',
    description: 'We bring an extensive collection of materials in various thicknesses, including but not limited to eco-friendly Kraft, heavy-duty corrugated, lightweight paperboard and cardboard, bux board, and rigid stock. To keep the uniqueness alive, we also offer metallic stock. For more information, contact our material experts.'
}, {
    label: 'How can I get in touch with the packaging experts to discuss material options?',
    description: 'At Half Price Packaging, you can reach out to our representative through email and call. Also, you can fill the online form and we’ll get back to you with all the answers to your queries.'
}, {
    label: 'What is the duration of your production time?',
    description: 'The production timeline varies from 8-10 business days, depending on the order quantity. After checkout, you will receive an estimated "in hands" date for the boxes shopping cart.'
}, {
    label: 'What types of packaging products are available for ordering at Half Price Packaging?',
    description: 'At Half Price Packaging, we offer an extensive range of packaging products that cater to diverse needs and industries. Whether you\'re looking for custom boxes, CBD boxes, mailer boxes, retail packaging, or product packaging for various items, we have you covered. Our selection includes eco-friendly and sustainable options, such as biodegradable and recyclable materials, making us a go-to source for businesses of all sizes. We also make custom boxes for small businesses.'
}]

</script>

<template>
    <div class="hpp__faqSectionWrapper py-[70px]">
        <div class="container mx-auto px-[15px]">
            <div class="flex mx-auto">
                <div class="content__wrapper basis-1/2 pr-28">
                    <div class="hpp__customPackagingSuccessHeader mb-8">
                        <h2 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span
                                class="text-[#ef4b5f]">Help
                                center.</span><br />Find an answer to all your questions below.</h2>
                        <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600">Quick answers to
                            questions you may have. Can’t find what you’re looking for? Check out our full
                            documentation.</p>
                    </div>
                    <div class="wrapper">
                        <ul role="list" class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div class="flex items-center gap-x-6">
                                    <NuxtImg format="webp" src="/images/support-agent.jpg"
                                        alt="Why Choose Us Thumbnail" loading="lazy" width="70" height="70"
                                        fit="cover" class="h-16 w-16 rounded-full" />
                                    <div>
                                        <h3
                                            class="font-headings text-base font-semibold leading-7 tracking-tight text-gray-900">
                                            Have other questions for us?</h3>
                                        <p class="font-description text-sm font-semibold leading-6 text-[#ef4b5f]">
                                            <NuxtLink to="#"
                                                class="font-description text-[#ef4b5f] text-[14px] uppercase font-bold inline-flex items-center">
                                                <span>Ask our experts directly</span><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </NuxtLink>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="faq__wrapper basis-1/2">
                    <UAccordion :items="items">
                        <template #default="{ item, index, open }">
                            <UButton color="gray" variant="soft" size="xl" class="mb-[10px]">
                                <span class="truncate font-headings font-semibold">{{ item.label }}</span>
                                <template #trailing>
                                    <UIcon name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']" />
                                </template>
                            </UButton>
                        </template>
                        <template #item="{ item }">
                            <div class="px-[15px]">
                                <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">
                                    {{ item.description }}
                                </p>
                            </div>
                        </template>
                    </UAccordion>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
