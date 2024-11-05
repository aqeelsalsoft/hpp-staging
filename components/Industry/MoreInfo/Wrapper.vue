<script setup>
import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();
import { computed } from 'vue';

const props = defineProps({
  title: String,
  content:String
});

</script>

<template>
    <div class="hpp__moreInfoContentWrapper pt-[30px] md:pt-[70px] pb-[50px] md:pb-[70px] bg-white">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
            <div class="flex flex-wrap justify-center bg-[#f6f6f6] rounded-[32px] px-[30px] md:px-[50px] py-[30px] md:py-[50px]">
                <div class="text-left md:text-center basis-full mb-6 md:mb-[50px] max-w-2xl">
                    <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold">Learn More
                        About {{props.title}}</h2>
                    <!-- <p class="font-description text-[#212529] text-[16px] leading-[24px]">This is a demo description
                        about
                        the learn more section</p> -->
                </div>
                <!-- <div class="flex flex-wrap basis-full -mx-[30px]">
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">
                            Sell Your Original Beauty Bars in Custom Soap Packaging</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Half Price
                            Packaging offers distinguishing solutions that align with your client's preferences. We
                            craft enticing and exciting custom soap packaging boxes that assist customers in making an
                            informed decision about their moisturizing and organic soaps. You can present your peculiar
                            soap bar features as they come with enough space to print your product info with invoking
                            artwork depicting your soap value.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Leave The
                            Competition In The Shadows!</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">We offer
                            end-to-end solutions: custom sizing and shaping, material selection, extensive add-ons
                            library, and a quality assurance team that performs meticulous proofing. Dedicated to your
                            amazing soap creations, we can offer themed boxes with custom window cutouts. Not only this!
                            Half Price Packaging presents fragranced soap sleeve packaging, die-cut wrapping paper, and
                            personalized labels. Our cardboard soap sleeves featuring your logo, brand name, and slogan
                            will grab your attention!</p>
                    </div>
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">
                            Choose the Premium Packaging Material for Your Luxury Soap Packaging</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Material quality
                            plays an integral role in the outlook and feel of your custom soap box packaging.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">You can pick our
                            lightweight yet sturdy paperboard SBS - the perfect stock choice for preventing your soaps
                            from deforming due to external pressure. For eco-friendly soap packaging or to display soaps
                            with natural organic ingredients, go for Kraft paper soap packaging. We make them
                            biodegradable with a rustic vibe. Moreover, we urge brands to select our rigid materials for
                            soap boxes for a luxury touch.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Does your soap
                            have a funky shape, sharp smell, or bold color? Go for our metallic stock! Also, bux and
                            cardboard are favored for being entirely customizable and resilient. To finalize the right
                            thickness varying from 9pt to 24pt for the desired structural stiffness, you must consult
                            with our material analysts.</p>
                    </div>
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">
                            Let Your Soap Box Packaging Make A Statement!</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Whether you
                            intend to excel in the market or promote your brand, using soap bar packaging is the
                            effective way. You can complement the appearance of your beauty bars with your brand color
                            scheme, 3D images, graphics, and essential text with Half Price Packaging. We simplify this
                            complicated task using our top-notch printing technology, including digital printing, CMYK
                            printing, and offset printing.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Combine these
                            printing techniques with our ink options to get unparalleled <a href="#">luxury soap
                                packaging boxes</a> that demand attention.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">For instance, you
                            can select CMYK printing with eco-friendly soy-based inks to bring exquisite color accuracy
                            and depth to your packaging. Our error-free printing results in boxes that reflect the
                            opulence of your products while capturing the essence of the brand's exclusivity.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Customization in
                            the styles of custom soap packaging allows you to be creative and come up with a variety of
                            functional styles for your products. We have cubic tuck top boxes that are easy to stack in
                            a symmetrical pattern. Gable, sleeve and tray, and mailer are also preferable picks.</p>
                    </div>
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">
                            Soap Packaging Boxes Finishings & Add-Ons for a Sustainable Future</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Our commitment to
                            sustainability extends to our finishing options!</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Choose from
                            various finishes, including Gloss, Matte, <a href="#">Aqueous Coating</a>, and Spot UV,
                            designed to enhance your eco-friendly soap packaging. We believe that sustainable packaging
                            can also be visually stunning and impactful. By incorporating these solvent-free finishings,
                            your soap packaging exudes elegance and reinforces your dedication to environmentally
                            conscious practices.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">When it comes to
                            making your soap packaging truly stand out, our range of add-ons provides the perfect
                            solution. From elegant ribbons that add a touch of sophistication to vibrant inserts that
                            engage your customers and plush cushions that ensure product safety - we offer a diverse
                            selection to meet your needs. These add-ons are meticulously designed to complement your
                            soap packaging, creating an unforgettable unboxing experience.</p>
                    </div>
                    <div class="desc__wrapper basis-1/2 px-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">
                            Enjoy Bulk Discounts on the Ultimate Packaging Solutions with Half Price Packaging</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">The high-quality
                            boxes at affordable prices give you an edge to extend your profit margins while competing
                            well in the market.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Whether you're a
                            small business or a large enterprise, our soap bar packaging solutions cater to your
                            specific requirements, ensuring quality and lower prices go hand in hand. Being one of the
                            top soap packaging suppliers, our branding experts have advanced knowledge of crafting
                            custom packaging that assists your brand in getting noticed at first glance.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">We customize each
                            aspect of custom soap boxes, including material, layout, style, and design. You can print
                            your brand logo and other graphic elements easily the way you desire. Our 24/7 services
                            assist you in placing an order easily and becoming an active part of the design and printing
                            procedure. Even if you need <a href="#">soap wraps</a>, our adept designers can deliver!</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Reach out to us
                            now at 866-225-2112 or via email at <a
                                href="mailto:orders@halfpricepackaging.com">orders@halfpricepackaging.com</a> to obtain
                            your envisioned soap packaging.</p>
                    </div>
                </div> -->
                <div class="hpp__seoContentWrapper flex flex-wrap basis-full -mx-[30px]">
                   <div class="desc__wrapper font-description text-[16px] leading-[24px] text-gray-600 mb-[15px]" v-clean-html="props?.content"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
.hpp__seoContentWrapper{
    .desc__wrapper {
        h2, h3{
            @apply font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[15px] mt-[30px];
            
            &:first-child{
                @apply mt-0;
            }
        }
        p{
            @apply font-description text-[14px] leading-[22px] text-gray-600 mb-[15px];
        }
        a{
            @apply text-[#ef4b5f];
        }
    }
}
</style>
