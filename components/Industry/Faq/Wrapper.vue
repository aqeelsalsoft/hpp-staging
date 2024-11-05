<script lang="ts" setup>

const items = [{
    defaultOpen: true,
    label: 'What types of soap packaging do you offer?',
    description: 'We offer a wide range of soap packaging options, including soap boxes, soap sleeve packaging, soap wraps, and soap labels. Each option can be customised to suit your specific soap size and design preferences.'
}, {
    label: 'Can I customize the soap packaging with my brand\'s logo and design?',
    description: 'Yes, you can customise the packaging as per your need. We allow complete branding by incorporating logos and brand statements on the boxes'
}, {
    label: 'Is your soap packaging eco friendly?',
    description: 'Yes, our packaging is completely eco-friendly. We make sure to use sustainable materials in order to reduce the carbon footprint.'
}, {
    label: 'What sizes of soaps can your packaging accommodate?',
    description: 'We provide packaging for soaps of all sizes. Simply tell us the dimensions of your soap and we’ll curate a custom box to snugly fit the product.'
}, {
    label: 'Can you help with the design of soap packaging?',
    description: 'Yes, our team is available 24/7 to help you with the design of your boxes.'
}]

</script>

<template>
    <div class="hpp__faqSectionWrapper pb-[70px]">
        <div class="container mx-auto px-[15px]">
            <div class="flex mx-auto">
                <div class="content__wrapper basis-1/2 pr-28">
                    <div class="hpp__customPackagingSuccessHeader mb-8">
                        <h2 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Help
                            center.<br />Find an answer to all your questions below.</h2>
                        <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600">Quick answers to
                            questions you may have. Can’t find what you’re looking for? Check out our full
                            documentation.</p>
                    </div>
                    <div class="wrapper">
                        <ul role="list" class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-16 w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
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
