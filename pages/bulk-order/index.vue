<script lang="ts" setup>
const items = [{
  defaultOpen: true,
  question: 'What are your minimum order quantities (MOQ)?',
  answer: 'Our minimum order quantity (MOQ) changes based on the distinct product line and customization needs. For more information about the MOQ for the product you\'re inquisitive about, please reach out to our specialists. We seek to accommodate orders of all measures to meet our customers\' various needs, so don\'t hesitate.'
}, {
  question: 'Do you offer design assistance?',
  answer: 'Yes, our professional designers can assist you in creating the ideal design for your custom packaging. We function closely with our clients to guarantee your packaging aligns with your brand values and product needs. Also, it is free of cost.'
}, {
  question: 'Can I try out samples before purchasing?',
  answer: 'Absolutely! Our sample kit is curated to showcase our top-selling products, allowing you to experience their exceptional quality firsthand. You\'ll get the chance to see and feel the materials up close. Additionally, we offer a convenient swatch book for your reference.'
}, {
  question: 'Where to buy boxes?',
  answer: 'You can buy custom boxes in all styles, sizes, shapes, and colors from Half Price Packaging. We offer an all-inclusive range of packaging solutions to meet your needs - primary to secondary.'
}, {
  question: 'What types of custom boxes do you offer?',
  answer: 'We deliver a huge collection of bespoke boxes, including corrugated boxes, rigid boxes, gift boxes, folding cartons, mylar bags, mailer boxes, and many other boxes tailored to your precise needs.'
}, {
  question: 'What types of packaging materials are available for custom boxes?',
  answer: 'We bring an extensive collection of materials in various thicknesses, including but not limited to eco-friendly Kraft, heavy-duty corrugated, lightweight paperboard and cardboard, bux board, and rigid stock. To keep the uniqueness alive, we also offer metallic stock. For more information, contact our material experts.'
}, {
  question: 'How can I get in touch with the packaging experts to discuss material options?',
  answer: 'At Half Price Packaging, you can reach out to our representative through email and call. Also, you can fill the online form and we’ll get back to you with all the answers to your queries.'
}, {
  question: 'What is the duration of your production time?',
  answer: 'The production timeline varies from 8-10 business days, depending on the order quantity. After checkout, you will receive an estimated "in hands" date for the boxes shopping cart.'
}, {
  question: 'What types of packaging products are available for ordering at Half Price Packaging?',
  answer: 'At Half Price Packaging, we offer an extensive range of packaging products that cater to diverse needs and industries. Whether you\'re looking for custom boxes, CBD boxes, mailer boxes, retail packaging, or product packaging for various items, we have you covered. Our selection includes eco-friendly and sustainable options, such as biodegradable and recyclable materials, making us a go-to source for businesses of all sizes. We also make custom boxes for small businesses.'
}]
</script>

<template>
    <div class="hpp__bulkOrdersPageWrap">
        <!-- <BulkOrderHeaderWrapper /> -->
        <BulkOrderFormWrapper />
        <LazyGeneralGoogleReviewsWrapper />
        <LazyGeneralFaqWrapper :faqs="items" />
    </div>
    
</template>

<style lang="scss" scoped></style>
