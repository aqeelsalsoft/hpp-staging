<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const generingFaqs = [
  {
    question: "What are your minimum order quantities (MOQ)?",
    answer: "Our minimum order quantity (MOQ) changes based on the distinct product line and customization needs. For more information about the MOQ for the product you're inquisitive about, please reach out to our specialists. We seek to accommodate orders of all measures to meet our customers' various needs, so don't hesitate."
  },
  {
    question: "Do you offer design assistance?",
    answer: "Yes, our professional designers can assist you in creating the ideal design for your custom packaging. We function closely with our clients to guarantee your packaging aligns with your brand values and product needs. Also, it is free of cost."
  },
  {
    question: "Can I try out samples before purchasing?",
    answer: "Absolutely! Our sample kit is curated to showcase our top-selling products, allowing you to experience their exceptional quality firsthand. You'll get the chance to see and feel the materials up close. Additionally, we offer a convenient swatch book for your reference."
  },
  {
    question: "What types of packaging materials are available for custom boxes?",
    answer: "We bring an extensive collection of materials in various thicknesses, including but not limited to eco-friendly Kraft, heavy-duty corrugated, lightweight paperboard and cardboard, bux board, and rigid stock. To keep the uniqueness alive, we also offer metallic stock. For more information, contact our material experts."
  },
  {
    question: "What is the duration of your production time?",
    answer: `The production timeline varies from 8-10 business days, depending on the order quantity. After checkout, you will receive an estimated "in hands" date for the boxes shopping cart.`
  },
]

const { data, status, error, refresh, clear } = await useAsyncData(
  'product_slug',
  () => $fetch(`${useRuntimeConfig().public.apiURL}/get-product-by-industry`, {
    params: {
      slug: route.params.product_slug,
      industry: route.params.slug,
      type: 1,
      cacheBust: new Date().getTime() // Cache-busting parameter
    }
  }),
  { initialCache: false }
);

console.log("product data::", data?.value, status?.value, error?.value);

// if (!data.value || data.value == null) {
//   router.push('/404')
// }


useSeoMeta({
  title: computed(() => data?.value?.product?.seo_title || data?.value?.product?.meta_info.meta_title || "Half Price Packaging"),
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: computed(() => data?.value?.product?.seo_title || data?.value?.product?.meta_info.meta_title || "Half Price Packaging") },
    { name: 'description', content: computed(() => data?.value?.product?.seo_description || data?.value?.product?.meta_info.meta_description) },
    { property: 'og:title', content: computed(() => data?.value?.product?.seo_title || data?.value?.product?.meta_info.meta_title || "Half Price Packaging") },
    { property: 'og:description', content: computed(() => data?.value?.product?.seo_description || data?.value?.product?.meta_info.meta_description) },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: computed(() => `https://www.halfpricepackaging.com/storage/product_uploads/${data?.value?.product?.feature_image}`) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'halfpricepackaging.com' },
    { name: 'twitter:title', content: computed(() => data?.value?.product?.seo_title || data?.value?.product?.meta_info.meta_title || "Half Price Packaging") },
    { name: 'twitter:description', content: computed(() => data?.value?.product?.seo_description || data?.value?.product?.meta_info.meta_description) },
    { name: 'twitter:image', content: computed(() => `https://www.halfpricepackaging.com/storage/product_uploads/${data?.value?.product?.feature_image}`) },
  ],
});



const today = new Date();
const formattedDate = today.toISOString().split('T')[0];


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const reviewCount = getRandomNumber(40, 60);

// Using useHead to inject the schema dynamically
useHead({
  link: [
    { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": data?.value?.product?.name,
        "mpn": data?.value?.product?.slug,
        "url": `https://www.halfpricepackaging.com${route.path}`,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "1.00",
          "highPrice": "10.00",
          "priceCurrency": "USD",
          "offerCount": "1000000",
          "url": `https://www.halfpricepackaging.com${route.path}`,
          "availability": "In Stock",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": "300"
          },
          "seller": {
            "@type": "Organization",
            "name": "HalfPricePackaging"
          }
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": data?.value?.product?.rating_value,
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": "Karisten"
            },
            "datePublished": formattedDate
          }
        ],
        "image": [
          `https://www.halfpricepackaging.com/storage/product_uploads/${data?.value?.product?.feature_image}`
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": data?.value?.product?.rating_value,
          "reviewCount": reviewCount
        },
        "description": data?.value?.product?.seo_description
          ? data?.value?.product?.seo_description
          : data?.value?.product?.meta_info.meta_description,
        "sku": data?.value?.product?.slug
      })
    }
  ]
});

</script>

<template>
  <div class="hpp__categoryDetailPageWrap">
    <ProductDetailBannerWrapper :title="data?.product?.name" :description="data?.product?.title"
      :industry="data?.product?.industry" :galleryImages="data?.product?.galleryimages" />
      <HomeReviewLogosWrapper />
    <!-- <GeneralLogosBarWrapper /> -->
    <LazyProductDetailDescriptionWrapper :shortDescription="data?.product?.short_description"
      :featureImage="data?.product?.feature_image" :fAltTag="data?.product?.feature_image_alt" />
    <LazyProductDetailTabsWrapper />
    <LazyProductDetailWhyChooseUsWrapper :title="data?.product?.whyus_title" :description="data?.product?.whyus_desc"
      :image="data?.product?.cta_image" :alt="data?.product?.cta_image_alt" :bgTitle="data?.product?.background_title"
      :bgDescription="data?.product?.background_desc" :bgImage="data?.product?.cta_image2"
      :bgAlt="data?.product?.cta_image2_alt" />
    <LazyProductDetailMoreInfoWrapper :content="data?.product?.content" :title="data?.product?.name" />
    <LazyProductDetailRelatedProductsWrapper :product_id="data?.product?.id" />
    <!-- <LazyProductDetailFaqWrapper :faqs="data?.product?.faq"
      v-if="data?.product?.faq && data?.product?.faq[0]?.question != ''" /> -->
    <!-- <LazyProductDetailFaqWrapper :faqs="generingFaqs" v-else /> -->
    <LazyGeneralFaqWrapper :faqs="data?.product?.faq"
    v-if="data?.product?.faq && data?.product?.faq[0]?.question != ''" />
    <LazyProductDetailFaqWrapper :faqs="generingFaqs" v-else />
    <LazyGeneralSampleKitWrapper />
    <!-- Dynamic BreadCrumb Schema Script -->
    <div v-html="data?.product?.schema_script"></div>
  </div>
</template>