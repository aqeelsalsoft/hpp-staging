<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
  title: "Custom Packaging That Fits Your Budget | Half Price Packaging",
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "Custom Packaging That Fits Your Budget | Half Price Packaging" },
    { name: 'description', content: "Half Price Packaging offers Custom Packaging to meet your business needs. From boxes, bags, mailers to all other customized packaging essentials." },
    { property: 'og:title', content: "Custom Packaging That Fits Your Budget | Half Price Packaging" },
    { property: 'og:description', content: "Half Price Packaging offers Custom Packaging to meet your business needs. From boxes, bags, mailers to all other customized packaging essentials." },
    { property: 'og:url', content: `https://www.halfpricepackaging.com` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: "https://www.halfpricepackaging.com/_ipx/f_webp,s_484x358/images/home-banner/custom-boxes.jpg" },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'halfpricepackaging.com' },
    { name: 'twitter:title', content: "Custom Packaging That Fits Your Budget | Half Price Packaging" },
    { name: 'twitter:description', content: "Half Price Packaging offers Custom Packaging to meet your business needs. From boxes, bags, mailers to all other customized packaging essentials." },
    { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_ipx/f_webp,s_484x358/images/home-banner/custom-boxes.jpg" },
  ],
});

useHead({
  link: [
    { rel: 'canonical', href: `https://www.halfpricepackaging.com` },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "image": "https://www.halfpricepackaging.com/_ipx/f_webp,s_484x358/images/home-banner/custom-boxes.jpg",
        "url": "https://www.halfpricepackaging.com",
        "sameAs": ["https://www.halfpricepackaging.com/about-us"],
        "logo": "https://www.halfpricepackaging.com/_ipx/s_255x66/images/logo.svg",
        "name": "Half Price Packaging",
        "description": "Grab exclusive custom box packaging from Half Price Packaging at highly competitive prices. Order our best mailer boxes, rigid boxes, and other types.",
        "email": "orders@halfpricepackaging.com",
        "telephone": "+1-866-225-2112",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "44288 Fremont Blvd, Fremont",
          "addressLocality": "Fremont",
          "addressCountry": "US",
          "addressRegion": "California",
          "postalCode": "94538"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.halfpricepackaging.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.halfpricepackaging.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What are your minimum order quantities (MOQ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our minimum order quantity (MOQ) changes based on the distinct product line and customization needs. For more information about the MOQ for the product you're inquisitive about, please reach out to our specialists. We seek to accommodate orders of all measures to meet our customers' various needs, so don't hesitate."
          }
        }, {
          "@type": "Question",
          "name": "Do you offer design assistance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our professional designers can assist you in creating the ideal design for your custom packaging. We function closely with our clients to guarantee your packaging aligns with your brand values and product needs. Also, it is free of cost."
          }
        }, {
          "@type": "Question",
          "name": "Can I try out samples before purchasing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our sample kit is curated to showcase our top-selling products, allowing you to experience their exceptional quality firsthand. You'll get the chance to see and feel the materials up close. Additionally, we offer a convenient swatch book for your reference."
          }
        }, {
          "@type": "Question",
          "name": "Where to buy boxes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can buy custom boxes in all styles, sizes, shapes, and colors from Half Price Packaging. We offer an all-inclusive range of packaging solutions to meet your needs - primary to secondary."
          }
        }, {
          "@type": "Question",
          "name": "What types of custom boxes do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver a huge collection of bespoke boxes, including corrugated boxes, rigid boxes, gift boxes, folding cartons, mylar bags, mailer boxes, and many other boxes tailored to your precise needs."
          }
        }, {
          "@type": "Question",
          "name": "What types of packaging materials are available for custom boxes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We bring an extensive collection of materials in various thicknesses, including but not limited to eco-friendly Kraft, heavy-duty corrugated, lightweight paperboard and cardboard, bux board, and rigid stock. To keep the uniqueness alive, we also offer metallic stock. For more information, contact our material experts."
          }
        }, {
          "@type": "Question",
          "name": "How can I get in touch with the packaging experts to discuss material options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Half Price Packaging, you can reach out to our representative through email and call. Also, you can fill the online form and we’ll get back to you with all the answers to your queries."
          }
        }, {
          "@type": "Question",
          "name": "What is the duration of your production time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The production timeline varies from 8-10 business days, depending on the order quantity. After checkout, you will receive an estimated in hands date for the boxes shopping cart."
          }
        }, {
          "@type": "Question",
          "name": "What types of packaging products are available for ordering at Half Price Packaging?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Half Price Packaging, we offer an extensive range of packaging products that cater to diverse needs and industries. Whether you're looking for custom boxes, CBD boxes, mailer boxes, retail packaging, or product packaging for various items, we have you covered. Our selection includes eco-friendly and sustainable options, such as biodegradable and recyclable materials, making us a go-to source for businesses of all sizes. We also make custom boxes for small businesses."
          }
        }]
      })
    }
  ],
});

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
  <div class="hpp__homePageContentWrap">
    <HomeBannerWrapper />
    <HomeReviewLogosWrapper />
    <HomeFeaturedIndustriesWrapper />
    <LazyGeneralSaveBulkOrderCTAWrapper />
    <LazyHomeFeaturedProductsWrapper />
    <LazyGeneralSaveBulkOrderCTAWrapper subtitle='Need more this year?' title='Get The Most <span class="text-[#ef4b5f]">Accurate Quotation</span>' />
    <LazyGeneralGoogleReviewsWrapper />
    <!-- <LazyGeneralInstantPricesWrapper /> -->
    <!-- <LazyGeneralPackagingProcessStepsWrapper /> -->
    <!-- <LazyGeneralVideoTestimonialWrapper /> -->
    <LazyGeneralGreenInitiativeWrapper />
    <LazyGeneralClientSuccessStoriesWrapper />
    <LazyGeneralFaqWrapper :faqs="items" />
    <LazyGeneralSampleKitWrapper />
  </div>
</template>