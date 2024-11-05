<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
    title: "Terms and Conditions | Half Price Packaging",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "Terms and Conditions | Half Price Packaging" },
        { name: 'description', content: "Read the terms and conditions page on the Half Price Packaging that explains all the custom products and services that we offer." },
        { property: 'og:title', content: "Terms and Conditions | Half Price Packaging" },
        { property: 'og:description', content: "Read the terms and conditions page on the Half Price Packaging that explains all the custom products and services that we offer." },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/terms-and-conditions.b477125.webp" },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "Terms and Conditions | Half Price Packaging" },
        { name: 'twitter:description', content: "Read the terms and conditions page on the Half Price Packaging that explains all the custom products and services that we offer." },
        { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/terms-and-conditions.b477125.webp" },
    ],
});

useHead({
    link: [
        { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
    ],
});

</script>

<template>
    <div class="hpp__contentPageWrapper bg-white">

        <div class="breadcrumbs__wrap py-[20px] md:py-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <ul class="flex items-center gap-[10px]">
                    <li><a href="#" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></a></li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>Terms & Conditions</span></li>
                </ul>
            </div>
        </div>
        <div class="section__headerWrap bg-gray-100 py-[30px] md:py-[50px]">
            <div class="md:container md:mx-auto px-[20px] px-[15px]">
                <div class="inner__wrap flex flex-wrap">
                    <div class="content__wrapper w-full">
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-0">
                            Terms & Conditions</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="hpp__pageContentWrapper pt-[30px] md:pt-[50px] pb-[50px] md:pb-[100px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">By using
                    this website, you are agreeing to the below terms and conditions of the website usage. Half Price
                    Packaging holds all the rights to make amendments to these terms and conditions without any prior
                    notice at any time. Therefore, we encourage you to visit this page regularly to stay updated about
                    possible changes to the Terms and Conditions. Half Price Packaging owns all the literature and
                    materials used in manufacturing the custom boxes. We do not give or sell these boxes to any other
                    party and reserve all the rights of distributing free samples of the boxes and also using them for
                    our website display.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Copyright
                    Notice</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">By using
                    this website you are agreeing and acknowledging that all the content on this website including data,
                    text, images, graphics, illustrations, designs, maps, icons, software, and all other materials which
                    are collectively called “Our Website Contents'' are the sole property of Half Price Packaging and
                    third-party service providers. Copying, storing, republishing, modifying, or otherwise, distributing
                    our website contents are legally prohibited without our written consent.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">User’s
                    Conduct on Half Price Packaging</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Users are solely
                    accountable for the content they send, post, upload, or otherwise transmit to or via our website.
                    While using this website, you agree that any kind of material or data that you send, upload, or
                    transmit to or via our website or in connection with our website contents will not include any
                    images, text, trademark, service mark, design, or work copyrighted by any third party unless you
                    have the written authorization or consent from the respective owners.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">You also agree and
                    warrant that you will not upload, send, or transmit to or via our website any contents that are
                    indecent, unlawful, infringe the intellectual property rights of our website or any third-party, or
                    that restrict other users from using Half Price Packaging.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We will not be
                    accountable for the accuracy, quality, or integrity of content posted by our clients or users of our
                    website. And under no circumstances, we will be liable to you for any content you may be exposed to
                    or find offensive, objectionable, or indecent in any way.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">You must also know that
                    Half Price Packaging and its authorized designers have the right but not the obligation to remove
                    any content that violates terms of services or is objectionable otherwise, in their sole discretion.
                    We can protect and disclose your content if needed by law or in case it is essential to comply with
                    the legal procedures, for enforcing terms of service or responding to claims of third parties for
                    violating intellectual rights, or for protecting property, personal safety, and the rights of our
                    website and its users.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">It is up to users for
                    providing the most accurate and latest information for the processing of their orders and requests.
                    Our website is for humans and is not meant to be accessed or used by any automated means or robots.
                    The fraudulent use of the content on our website not conforming to these terms and conditions is
                    liable for legal action.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">While using our website
                    and placing an order on it, you are warranting that you are legally permitted and have the authority
                    to place an order. In this process, you also authorize Half Price Packaging to manufacture products
                    on your behalf. In addition, you also have to warrant that you are of legal age before placing an
                    order on our website for binding the legal obligation for any sort of liabilities that you may incur
                    as a result of using our website.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">It is solely the user’s
                    responsibility to protect their passwords and control access to their registered account. By using
                    the Half Price Packaging website, you agree that you will be responsible for all orders placed
                    through your registered account. At the time, when you or anybody who has the access to your account
                    places an order by using your account and password, you are allowing us royalty-free and
                    non-exclusive license to use, modify, publish, adapt, sub-license, display, and create derivative
                    works from your content on our website or the final product for storing design or processing the
                    orders.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">To access some segments
                    of our website require users to have registered emails and names as well as passwords for future
                    access. We have the right to ask for more business and personal information before registering your
                    account.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">The user is the only
                    responsible entity for protecting the privacy of their password and account credentials and should
                    not be disclosing them to any other individual. In case of any unauthorized use of
                    password-protected areas of our website, users have to agree that they shall be liable for all the
                    consequences of such use.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Your use of
                    Half Price Packaging constitutes the agreement to use and collection of your information as
                    explained in our Privacy Policy. You can read and acknowledge the explanation of our <NuxtLink
                        to="#">privacy policy</NuxtLink> and the usage and collection of your personal and business
                    information.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Rules of
                    Liability and Indemnification</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">By using Half Price
                    Packaging, you are agreeing to indemnify, defend, and protect the website including, its
                    representatives, members, directors, suppliers, vendors, subcontractors, and affiliates against and
                    from any damages and claims if any charge, claim, arbitration, demand, or action is made against us.
                    These claims can be based upon, arising from, and relating to wrongful acts of buyers, or issues to
                    the printing products manufactured by us and ordered by customers:</p>
                <ol class="!list-decimal pl-[20px] mb-[20px]">
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">It infringes any
                        patent, copyright, or other intellectual property rights of any person</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">It contains material
                        that is scandalous, obscene, defamatory, libelous, or slanderous</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Is the result of any
                        unauthorized access to our websites password-protected areas</li>
                </ol>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">You shall indemnify us
                    and hold us harmless from and against any damages, losses, expenses, and costs that may arise out of
                    or due to claims which may include:</p>
                <ol class="!list-decimal pl-[20px] mb-[20px]">
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Defend us against
                        such a claim</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Paying any award or
                        judgment</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">And reimbursing us
                        for legal costs that may incur in responding</li>
                </ol>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Under no conditions Half
                    Price Packaging or its employees, members, directors, vendors, representatives, affiliates,
                    subcontractors, and suppliers are responsible for any death, injury, damage, loss, claim, the act of
                    God, delay, accident, or any punitive, special, consequential, or incidental damages regardless of
                    their nature, whether they are in contract, tort, or not.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We are also
                    not liable for damages that may take place in any way connected to any use of Half Price Packaging,
                    or any delays or inabilities to use this website, and for any data, information, software, products,
                    and services obtained via our website, even if the other part has advised about the possibility of
                    such damages or troubles. Under no circumstances Half Price Packaging is totally liable to you for
                    losses, damages, and causes of action including but not limited to negligence or arising from this
                    contract or use of our website exceeding the paid amounts by customers to the company for their
                    orders and requests.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Return and
                    Refund Policy</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">According to our refund
                    policy, in case you find any defects in the product, or the delivered boxes are not as per your
                    ordered specifications then you need to inform us within 3 working days after receiving the order.
                    Though we do not issue a credit or refund to you, you can get a reprinting of the whole order.
                    However, the reprinting of your original order is subject to the determination of the defect or
                    faults with the delivery. If you find ordered products defective, you are required to submit digital
                    proof of defection.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Our team of
                    experts will be determining whether the defect came from us or is due to any misinformation by the
                    clients. If it is proved on the company side, we will be reprinting your original order. But, if it
                    is on the client's side, all the expenses of reprinting will be paid by the client. You are also
                    bound to return the whole order within seven working days of order delivery to avail of this
                    entitlement.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Terms and
                    Conditions for Order Placement, Payment, and Cancellations</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">All prices for our
                    products on this website are in US dollars (USD). Therefore, all the payments for orders will be
                    made in the same currency. Owing to the custom nature of our printing and packaging products and
                    other services we offer, we do not start working on your orders for printing and packaging jobs
                    until you make a full payment that includes all charges, shipping and handling fees, and taxes
                    through our approved payment modes. As a part of the order placement process, we need users and
                    buyers to approve the electronic proof of their custom boxes.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">As soon as
                    you approve the proof, we send the printing jobs to the press department. Once you approve the proof
                    and the job is sent to the press, you are not allowed to make changes to the artwork files and job
                    specifications. You have a very limited time of 4 hours to cancel your order after the proof is
                    approved. Such annulment will cost a fee of 5% of the total order sum earlier the order is negated.
                    We do not guarantee the cancellation of your orders beyond the 24-hour limit.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Design Orders
                </h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Half Price
                    Packaging does not issue any refunds or credits for any design service. All orders for designing are
                    non-refundable.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Sales Tax
                    Policy</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We charge
                    our clients with sales tax on all kinds of orders. However, if you are entitled to tax exemption,
                    please make sure to provide your tax exemption certificate when you place the order.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Terms of
                    Artwork/Files Submission</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Our creative design team
                    makes electronic and hard copy proofs from the artwork provided by the customers. We ask you to
                    submit artwork with a resolution of at least 300 dpi in the final format and CMYK format. In case
                    you fail to provide artwork in CMYK format and at least 300 dpi resolution, we will not be
                    answerable for blurred, contorted, or pixilated printing and color changes when it comes to
                    converting your files into the CMYK format.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">You are liable for
                    providing accurate print-ready artwork including any modifications in the alignment or orientation
                    of the pages of your submitted files. Although we take all precautionary measures to avoid the loss
                    of your submitted artwork, we are not responsible for any loss or damage to your artwork files in
                    the process.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">By uploading your artwork
                    to our website, you are agreeing that you have the ownership of all the materials or you have the
                    written consent to use the data from the respective entities.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We reserve
                    the right to refuse any order that we perceive as illegal or have infringed the copyrights of any
                    third party. You are the one to accept responsibility for the content or material you provide for
                    the procession of your orders. We also have the right to deny an order without mentioning any
                    reasons. It is noteworthy that we will not accept any offensive, improper, or indecent material for
                    printing.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Proofs and
                    Color Accuracy</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Half Price Packaging
                    requires users and buyers to approve the proof of their printing products or services they order
                    for. We do not send any custom box to the press without the client’s approval. Therefore, customers
                    are responsible for checking the provided proofs by logging in to their accounts. We are not
                    responsible for delays that may occur due to late or non-approval of digital or hard copy proofs.
                    Please keep in mind that the turnaround time that we offer on our website starts when you approve
                    the proof.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">It is your obligation to
                    make sure that you have reviewed the proof thoroughly before approving it. You must be checking it
                    against the original file you have submitted to validate and check for possible issues in copy,
                    spacing, font style, final text, bleeds, punctuation, image placement, or layout. The digital proofs
                    do not show transparency, color changes from RGB or Pantone to CMYK or print issues. Also, the
                    application of UV lamination may affect the appearance of the printed colors. Therefore, we are not
                    liable for any such change in prints or colors for the laminated items. Customers are fully liable
                    for all things contained in their final approved proofs.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We will
                    reproduce the colors of the submitted graphic files as accurately as possible, but we cannot
                    guarantee that they match in color and density. Due to inherent limitations in the printing methods
                    and image ink requirements, the accuracy of color reproduction cannot be ensured. We make our best
                    efforts to match the color density. However, we take no responsibility for color differences in the
                    final product and the graphic files sent. Under no circumstances will we entertain any reprints for
                    color variations that may occur during the printing process.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Gang Printing
                </h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We at Half
                    Price Packaging do not use gang printing for most of our printing products. At times, based on the
                    client’s requirements we may choose the printing method that we see best suited for printing the
                    particular printing product.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Overruns and
                    Underruns</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Normally, we
                    try to deliver the exact amount of the asked products with an additional amount without charging any
                    additional costs. In case, you receive fewer items than the ordered amount, we will bill for the
                    amount you received only. However, we strictly follow the general trade practice of delivering 5%
                    extra of the ordered quantity.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Changes to
                    our Website and Terms and Conditions</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We hold the
                    right to change any portion of our website or Terms and Conditions at any time with or without prior
                    notice to the customers and users of our website. The revisions to our website and Terms and
                    conditions will be uploaded on our website and will be applicable immediately. Your continuous usage
                    of our website after possible changes are live will indicate your agreement with them.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">How to
                    Contact Half Price Packaging?</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">You can
                    contact us via email at <NuxtLink to="tel:+18662252112">866-225-2112</NuxtLink> or mail us at
                    <NuxtLink to="mailto:orders@halfpricepackaging.com">orders@halfpricepackaging.com</NuxtLink>
                </p>
            </div>
        </div>
        <LazyGeneralSampleKitWrapper />
    </div>
</template>