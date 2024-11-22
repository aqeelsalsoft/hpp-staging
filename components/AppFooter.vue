<script setup>
const { $device } = useNuxtApp();

import { onMounted } from 'vue';

// onMounted(() => {
//   // Defer the loading of the Zoho SalesIQ script until after the page has fully loaded
//   window.addEventListener('load', () => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.id = 'zsiqchat';
//     script.async = true;
//     script.defer = true;
//     script.innerHTML = `
//       var $zoho = $zoho || {};
//       $zoho.salesiq = $zoho.salesiq || {
//         widgetcode: "siq7554f5a6de5947a3bbb48ecbd8b715e435bf2a636fa2e2571eb445ab76f10a55",
//         values: {},
//         ready: function() {}
//       };
//       var d = document;
//       var s = d.createElement("script");
//       s.type = "text/javascript";
//       s.id = "zsiqscript";
//       s.async = true;
//       s.defer = true;
//       s.src = "https://salesiq.zohopublic.com/widget";
//       var t = d.getElementsByTagName("script")[0];
//       t.parentNode.insertBefore(s, t);
//     `;
//     document.body.appendChild(script);

//     const script2 = document.createElement('script');
//     script2.type = 'text/javascript';
//     script2.async = true;
//     script2.defer = true;
//     script2.innerHTML = `
//       (function(w,d,s,l,i){
//         w[l]=w[l]||[];
//         w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
//         var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
//         j.async=true; j.defer=true;
//         j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//         f.parentNode.insertBefore(j,f);
//       })(window,document,'script','dataLayer','GTM-WDX5T2S');
//     `;
//     document.body.appendChild(script2);
//   });
// });


// Add the Zoho SalesIQ script to the head
// useHead({
//     script: [
//         {
//             type: 'text/javascript',
//             id: 'zsiqchat',
//             async: true,
//             defer: true,
//             innerHTML: `
//         var $zoho=$zoho || {};
//         $zoho.salesiq = $zoho.salesiq || {
//           widgetcode: "siq7554f5a6de5947a3bbb48ecbd8b715e435bf2a636fa2e2571eb445ab76f10a55",
//           values:{},
//           ready:function(){}
//         };
//         var d=document;
//         var s=d.createElement("script");
//         s.type="text/javascript";
//         s.id="zsiqscript";
//         s.defer=true;
//         s.async=true;
//         s.src="https://salesiq.zohopublic.com/widget";
//         var t=d.getElementsByTagName("script")[0];
//         t.parentNode.insertBefore(s,t);
//       `
//         }
//     ],
//     // This is necessary to ensure that the inline script is correctly executed
//     __dangerouslyDisableSanitizersByTagID: {
//         'zsiqchat': ['innerHTML']
//     }
// })

// useHead({
//     script: [
//         {
//             id: 'ze-snippet',
//             src: 'https://static.zdassets.com/ekr/snippet.js?key=f4360e0e-8e8d-4314-8a66-9b6126fdd0b1',
//             async: true
//         }
//     ]
// });

</script>

<template>
    <ClientOnly>
        <footer v-if="$device.isDesktop" class="hpp__siteFooter pt-[70px] pb-[30px] bg-white">
            <div class="hpp__footerInner px-16">
                <div class="hpp__footerNavWrapper grid grid-cols-6 gap-4 gap-y-20 mb-10">
                    <div class="widget__wrapper">
                        <div class="title mb-3">
                            <span to="/about-us"
                                class="font-headings text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100">
                                Company</span>
                        </div>
                        <ul class="font-description">
                            <li class="mb-[5px]">
                                <NuxtLink to="/about-us" class="block text-[14px] leading-[24px] hover:text-pitaya-100">
                                    About Us</NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/terms-and-conditions"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Terms & Conditions
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/refund-cancellation-policy"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Refund / Cancellation
                                    Policy</NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/shipping-policy"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Shipping Policy
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/privacy-policy"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Privacy & Policy
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="widget__wrapper">
                        <div class="title mb-3">
                            <span
                                class="font-headings text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100">
                                Products Packaging</span>
                        </div>
                        <ul class="font-description">
                            <li class="mb-[5px]">
                                <NuxtLink to="/mailer-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Mailer Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/rigid-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Rigid Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/kraft-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Kraft Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/cardboard-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Cardboard Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/industry/sustainable-packaging"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Sustainable Packaging
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/product-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Product Boxes
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="widget__wrapper">
                        <div class="title mb-3">
                            <span
                                class="font-headings text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100">
                                &nbsp;</span>
                        </div>
                        <ul class="font-description">
                            <li class="mb-[5px]">
                                <NuxtLink to="/primary-packaging"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Primary Packaging
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/display-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Display Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/industry/gift"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Gift Boxes</NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/pillow-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Pillow Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/tuck-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Tuck Boxes</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="widget__wrapper">
                        <div class="title mb-3">
                            <span
                                class="font-headings text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100">
                                Packaging Styles</span>
                        </div>
                        <ul class="font-description">
                            <li class="mb-[5px]">
                                <NuxtLink to="/sleeve-and-tray"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Sleeve and Tray
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/custom-shapes/die-cut-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Die Cut Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/industry/tobacco-cigarette"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Cigarette Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/child-resistant"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Child Resistant Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/window-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Window Boxes
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/gable-boxes"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Gable Boxes
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="widget__wrapper">
                        <div class="title mb-3">
                            <span
                                class="font-headings text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100">
                                Inspiration</span>
                        </div>
                        <ul class="font-description">
                            <li class="mb-[5px]">
                                <NuxtLink to="/blog" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Blog
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/client-success-stories" class="block text-[14px] leading-[24px] hover:text-pitaya-100">
                                    Client Success Stories</NuxtLink>
                            </li>
                            <!-- <li class="mb-[5px]">
                            <NuxtLink to="#" class="block text-[14px] leading-[24px] hover:text-pitaya-100">inspo
                            </NuxtLink>
                        </li>
                        <li class="mb-[5px]">
                            <NuxtLink to="#" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Reviews
                            </NuxtLink>
                        </li>
                        <li class="mb-[5px]">
                            <NuxtLink to="#" class="block text-[14px] leading-[24px] hover:text-pitaya-100">Samples
                            </NuxtLink>
                        </li> -->
                        </ul>
                    </div>
                    <div class="widget__wrapper">
                        <div class="title mb-3">
                            <span
                                class="font-headings text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100">
                                Contact</span>
                        </div>
                        <ul class="font-description">
                            <li class="mb-[5px]">
                                <NuxtLink to="tel:+18662252112"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">866-225-2112
                                </NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="mailto:orders@halfpricepackaging.com"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">
                                    orders@halfpricepackaging.com</NuxtLink>
                            </li>
                            <li class="mb-[5px]">
                                <NuxtLink to="/contact-us"
                                    class="block text-[14px] leading-[24px] hover:text-pitaya-100">Contact Us</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__logosWrapper border-[#f2f2f2] border-y py-10 mb-6">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="hpp__trustedByWrapper">
                            <h2 class="text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100 mb-3">Where
                                We’re
                                Trusted</h2>
                            <div class="logos__wrapper flex gap-[20px] items-center">
                                <div class="logo w-[100px]">
                                    <NuxtLink
                                        to="https://www.google.com/search?q=half+price+packaging&sxsrf=ALiCzsagnxfrnR5uzV0qnBby6qK5JPHlfA%3A1667214393089&source=hp&ei=OaxfY9e8A6aJlwTW4oD4Dg&iflsig=AJiK0e8AAAAAY1-6STHTn6Ls6EZe00ThMT0OmDApSXrJ&ved=0ahUKEwiXvabNqYr7AhWmxIUKHVYxAO8Q4dUDCAg&uact=5&oq=half+price+packaging&gs_lcp=Cgdnd3Mtd2l6EAMyCgguEMcBEK8BECcyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6BAgAEEM6BwguENQCEEM6CAgAELEDEIMBOggIABCABBCxAzoHCAAQyQMQQzoECC4QQzoHCAAQsQMQQzoKCAAQsQMQgwEQQzoKCC4QsQMQgwEQQzoICC4QgAQQsQM6CggAEIAEEIcCEBQ6BQguEIAEOgcIABCABBAKOgsILhCABBDHARCvAToICAAQgAQQyQM6CQgAEBYQHhDJAzoICAAQFhAeEApQAFjaFGDlFWgBcAB4A4ABmAWIAbgwkgEKMi0xMy41LjAuMpgBAKABAbABCg&sclient=gws-wiz">
                                        <NuxtImg format="webp" src="/images/google-reviws-logo.png"
                                            alt="Google Reviews Logo" loading="lazy" width="145" height="58"
                                            class="w-full h-auto" />
                                    </NuxtLink>
                                </div>
                                <div class="logo w-[160px]">
                                    <LazyGeneralTrustPilotWidgetWrapper />
                                </div>
                                <div class="logo w-[170px]">
                                    <!-- <NuxtLink
                                    to="https://www.bbb.org/us/ca/fremont/profile/packaging-service/half-price-packaging-1116-920459#bbbonlineclick">
                                    <NuxtImg format="webp" src="/images/bbb-logo.png" alt="BBB Logo" loading="lazy"
                                        width="145" height="58" class="w-full h-auto" />
                                </NuxtLink> -->
                                    <NuxtLink
                                        href="https://www.bbb.org/us/ca/fremont/profile/packaging-service/half-price-packaging-1116-920459/#sealclick"
                                        target="_blank" rel="nofollow">
                                        <!-- <NuxtImg format="webp" loading="lazy"
                                        src="https://seal-goldengate.bbb.org/seals/blue-seal-200-42-bbb-920459.png"
                                        class="border-0 w-full h-auto" alt="Half Price Packaging BBB Business Review" width="200" height="42" /> -->
                                        <NuxtImg format="webp"
                                            src="https://seal-goldengate.bbb.org/seals/blue-seal-200-42-bbb-920459.png"
                                            class="border-0 w-full h-auto"
                                            alt="Half Price Packaging BBB Business Review" loading="lazy" width="170"
                                            height="36" />
                                    </NuxtLink>
                                </div>
                                <div class="logo w-[100px]">
                                    <NuxtLink to="https://www.reviews.io/company-reviews/store/halfpricepackaging-com">
                                        <NuxtImg format="webp" src="/images/reviews-io-logo.png" alt="Reviews IO Logo"
                                            loading="lazy" width="145" height="58" class="w-full h-auto" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="hpp__deliveryPartnersWrap flex justify-end">
                            <div class="inline-block">
                                <h2 class="text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100 mb-3">Our
                                    Logistics Partners</h2>
                                <div class="logos__wrapper flex items-center -mx-[15px]">
                                    <div class="logo px-[15px] w-[151px]">
                                        <svg class="w-full h-auto" viewBox="0 0 234 39.07">
                                            <path
                                                d="M8.3,.2h.29l.49,.1,.59,.1,1.56,.39,2.15,.39,1.17,.3,1.27,.29,1.37,.2,1.37,.39,1.47,.19,1.46,.39,4.69,.88,1.47,.39,1.56,.29,1.36,.29,1.47,.29,1.37,.29,1.37,.2,1.17,.29,1.17,.19,.98,.29,.88,.2,.78,.1,.68,.1,.49,.1,.29,.1h.19l1.27,.29,1.17,.2,.98,.29,.78,.19,.78,.29,.59,.2,.78,.39,.29,.2,.49,.49v.1l.1,.1v.1h4.2l.39,.1h.39l.29,.1h.29l.29,.1,.78,.39,.1,.2,.68,1.07,.2,1.27-.2,1.56-.49,1.46-.59,1.46-.59,1.17-.49,.78-.19,.29-.2,.1-.49,.19-.68,.29-.98,.39-1.07,.39-1.37,.58-1.47,.59-1.66,.59-1.86,.78-1.95,.68-1.95,.78-4.3,1.76-2.25,.88-2.25,.78-2.24,.97-2.34,.88-2.25,.78-2.15,.98-2.24,.78-2.05,.78-3.91,1.56-1.76,.68-1.66,.59-1.46,.58-1.27,.49-1.08,.49-.88,.29-.68,.29-.39,.1-.1,.1H55.28L63.49,0H8.3V.2Z"
                                                fill="#284e80" />
                                            <path
                                                d="M46.1,12.8l-.29,.1-1.95,.39h-.49l-.39,.1h-.39l-.59,.1-.29,.1-.2,.1-.1,.2v.19l.2,.2h.39l.39,.1h.98l.59-.1h.59l1.37-.2h.68l.78-.1,.68-.09,.59-.1,.68-.1h2.64l.29,.1,.2,.1,.19,.29v.39l-.1,.39-.1,.49-.2,.59-.29,.68-.2,.68-.1,.39,.19,.2,.2-.1,.39-.39,.19-.29,.29-.49,.29-.59,.29-.68,.29-.58,.2-.59,.1-.49v-.59l-.19-.49-.29-.29-.39-.29-.49-.2-.59-.1-.68-.1h-4.1l-.1,.1h-.1l-.19,.1-.2,.39-.19,.1-.2,.2-.29,.2h0Z"
                                                fill="#284e80" />
                                            <path
                                                d="M6.45,8.99L0,38.87l.29-.1,.59-.39,.98-.39,1.27-.68,1.46-.68,1.66-.88,1.95-.88,1.86-.98,1.95-.88,1.85-.98,1.86-.88,1.76-.88,1.47-.78,1.27-.58,.98-.49,.68-.29,.98-.49,.88-.49,1.07-.49,1.07-.58,.98-.49,1.17-.49,1.07-.59,1.17-.49,1.17-.59,5.86-2.44,2.64-.88,.39-.1,.39-.19,.49-.1,1.76-.59,2.05-.59,.68-.1,2.05-.59,1.17-.19,.39-.1,.29-.1h.29l.29-.1,.2-.2h.1v-.1l-.2-.39-.29-.1-.39-.1h-.39l-.58-.1h-.59l-.68,.1-1.17,.1-1.27,.19-1.37,.29-1.47,.3-1.46,.39-1.56,.49-1.47,.49-1.56,.49-1.46,.59-1.47,.49-1.37,.49-1.27,.49-1.17,.59-.98,.39-.88,.39-.68,.39-3.71-11.53h23.64l.1-.49-.39-.49-.59-.29-.88-.29-.98-.29-2.54-.39-4.1-.29H6.45Z"
                                                fill="#284e80" />
                                            <path d="M233.76,20.34H68.27l.24-2.49H234l-.24,2.49Z" fill="#ca4256" />
                                            <path
                                                d="M75.79,14.85l-1.27-.1-1.27-.29-.98-.29-.88-.59-.58-.68-.39-.88-.1-.97,.1-1.17,.49-2.15,.39-1.95,.39-1.66,.29-1.37,.2-1.17,.19-.88,.1-.49,.1-.2h3.22l-.1,.39-.19,.98-.39,1.46-.29,1.66-.39,1.66-.49,2.44-.1,.29-.1,.78v1.37l.19,.49,.39,.39,.49,.29,.68,.19,.78,.1,.88-.1,.68-.1,.68-.29,.49-.49,.39-.49,.39-.59,.59-1.56,.1-.78,.29-1.17,.3-1.46,.29-1.56,.39-1.47,.2-1.27,.19-.88,.1-.29h3.22l-.59,2.83-.29,1.47-.2,.49v.19l-.1,.59-.29,1.46-.68,2.83-.1,.58-.29,.59-.2,.49-.29,.49-.39,.49-.78,.78-.49,.29-.58,.29-.49,.29-.58,.19-.59,.1-.59,.19-1.37,.2h-.78ZM226.01,2.35h-4.59l-.78,.19-.58,.39-.1,.19-.1,.29v.39l.1,.39,.29,.39,.29,.49,.88,.88,.58,.39,.49,.39,.59,.49,.97,.98,.39,.49,.58,1.17,.1,.58-.1,.68-.19,.69-.29,.68-.49,.59-.68,.49-.78,.39-.98,.29-1.27,.2-1.37,.1h-4.98l.58-2.34h5.27l.49-.1,.39-.1,.29-.19,.29-.39,.19-.39-.1-.78-.58-.78-.98-.78-.98-.88-1.07-.98-.88-1.08-.58-1.08-.1-1.27,.19-.68,.39-.78,.39-.59,.68-.49,.88-.39,.88-.29,1.17-.2h5.66l-.49,2.34h0Zm-11.33,0h-7.32l-.88,3.81h6.45l-.49,2.05h-6.45l-.78,4.01h7.33l-.49,2.34h-10.55L204.63,0h10.55l-.49,2.34h0Zm-12.7,0h-4.49l-2.64,12.21h-3.22l2.64-12.21h-4.59L190.27,0h12.21l-.49,2.34h0Zm-22.46,12.21l1.27-2.34h4.59l-1.27-9.28-6.45,11.62h-3.22L182.84,0h3.81l2.25,14.55h-9.38Zm-.59-12.21h-4.49l-2.64,12.21h-3.22l2.64-12.21h-4.59L167.22,0h12.21l-.49,2.34h0Zm-13.97,0h-4.49l-.49,.1-.39,.1-.29,.2-.39,.39v.68l.1,.39,.19,.39,.39,.49,.88,.88,.49,.39,.59,.39,1.46,1.47,.39,.49,.39,.59,.19,.59,.1,.58v.68l-.2,.69-.29,.68-.59,.59-.58,.49-.88,.39-.98,.29-1.17,.2-1.46,.1h-4.88l.49-2.34h5.37l.49-.1,.39-.1,.29-.19,.29-.39,.1-.39-.1-.78-.58-.78-.88-.78-.97-.88-1.08-.98-.88-1.08-.58-1.08-.1-1.27,.2-.68,.29-.78,.49-.59,.68-.49,.78-.39,.97-.29,1.17-.2h5.66l-.59,2.34h0Zm-29.5,4.88l-1.47,7.33h6.55l.78-.1h.78l1.36-.39,.78-.29,.68-.39,1.17-.78,1.17-1.17,.98-1.37,.39-.78,.29-.78,.19-.88,.1-.39,.1-.59,.19-1.37-.1-1.27-.29-1.07-.49-.98-.78-.88-.97-.59-1.27-.39-1.46-.1h-7.13l-1.56,7.23Zm10.65,0l-.1,.49-.29,.59-.19,.49-.19,.59-.29,.39-.39,.49-.78,.78-.98,.58-.49,.2-.58,.19-1.18,.2h-2.93l.97-4.98,1.08-4.88h4.2l.78,.29,.59,.39,.49,.58,.29,.59,.19,.78v1.56l-.19,.59v.1h0Zm-11.92-4.88h-7.23l-.88,3.81h6.35l-.39,2.05h-6.44l-.78,4.01h7.23l-.39,2.34h-10.55L124.24,0h10.45l-.49,2.34h0Zm-12.6,0h-4.59l-2.64,12.21h-3.12l2.64-12.21h-4.59L109.78,0h12.21l-.39,2.34Zm-17.09,12.21h-3.13L104.41,0h3.22l-3.12,14.55Zm-6.25,0h-4.01l-3.61-10.84h-.1l-2.25,10.84h-2.83L88.59,0h4.1l3.52,10.94L98.46,0h2.93l-3.13,14.55h0Zm-26.76,18.75h-.39l-.2-.1h-.59l-.19-.1h-.19l-.2-2.05h.78l.1,.1h.59l.78-.1,1.17-.39,.39-.39,.58-.78,.2-.39v-.39l.1-.49v-.49l-.1-.39-.2-.29-.58-.39h-.39l-.39-.1h-2.64l-2.64,12.21h-3.22l3.13-14.56h6.93l1.07,.1,.78,.39,.68,.49,.39,.68,.19,.68,.1,.78v.78l-.1,.68-.29,.98-.49,.88-.59,.78-.78,.68-.78,.49-1.95,.58-1.08,.1h0Zm160.77-6.74h-7.42l-.78,3.81h6.45l-.49,2.15h-6.44l-.78,4.01h7.33l-.49,2.25h-10.55l3.13-14.56h10.55l-.49,2.35h0Zm-12.99,.2l-.39-.1h-.29l-.78-.19-.49-.1h-.49l-.39-.1h-.58l-1.07,.1-.98,.29-.97,.39-.88,.68-.68,.68-.68,.88-.39,1.07-.39,1.17-.2,1.17,.1,1.07,.29,.88,.39,.68,.58,.59,.78,.49,.88,.29,.97,.1h.58l.59-.1h.49l.98-.19h.39l.49-.1,.39-.1-.78,2.44-.39,.1h-.49l-.39,.1h-.49l-.39,.1h-2.25l-1.56-.19-.68-.19-.68-.29-.58-.29-.58-.39-.49-.39-.49-.49-.29-.58-.29-.68-.29-.58-.1-.78v-.78l.1-.88,.1-.98,.29-.88,.29-.98,.78-1.56,.49-.68,1.17-1.17,.68-.49,1.36-.78,1.56-.59,.78-.19,.78-.1,.88-.1h2.05l.39,.1h.39l.39,.1h.39l.39,.1-.29,2.44h0Zm-16.11,12.01h-3.22l3.13-14.56h3.22l-3.12,14.56h0Zm-10.36,0h-3.81l-2.15-14.56h3.22l1.46,11.72,6.45-11.72h3.13l-8.31,14.56Zm-11.82-6.25l2.35,6.25h-3.52l-2.64-7.91h1.86l.58-.1,.58-.19,.49-.29,.39-.29,.39-.39,.19-.49,.2-.58,.1-.39v-.39l-.19-.59-.19-.19-.39-.19-.98-.19h-2.93l-2.64,12.21h-3.22l3.13-14.56h6.74l.97,.1,.88,.19,.68,.29,.49,.39,.39,.49,.29,.68,.1,.78v.78l-.1,.98-.29,.88-.39,.78-.49,.58-.59,.58-.78,.39-.68,.29-.78,.09h0Zm-9.28-5.96h-7.33l-.78,3.81h6.35l-.39,2.15h-6.45l-.78,4.01h7.33l-.49,2.25h-10.65l3.13-14.56h10.55l-.49,2.35h0Zm-13.29,0h-4.1l-.98,.19-.39,.1-.19,.19-.29,.19-.19,.39v.49l.1,.39,.19,.39,.39,.39,.39,.49,.49,.39,.49,.49,.58,.39,.49,.49,.58,.39,.39,.58,.39,.49,.39,.58,.2,.49,.09,.68v.58l-.19,.78-.29,.58-1.17,1.17-.78,.39-1.08,.29-1.17,.19h-6.35l.49-2.25h5.37l.49-.1,.39-.2,.29-.19,.29-.29,.19-.39-.19-.78-.58-.78-.88-.88-.97-.88-1.08-.88-.88-1.07-.58-1.17-.1-1.17,.19-.78,.29-.68,.49-.58,.68-.49,.78-.39,.98-.29,1.17-.19,1.36-.1h4.3l-.49,2.35h0Zm-17.38,12.21h-9.87l3.03-14.56h3.32l-2.64,12.31h6.64l-.49,2.25h0Zm-20.9,0l1.27-2.25h4.59l-1.36-9.38-6.35,11.62h-3.22l8.3-14.56h3.91l2.25,14.56h-9.38s0,0,0,0Zm-.58-12.21h-4.59l-2.64,12.21h-3.22l2.64-12.21h-4.49l.49-2.35h12.21l-.39,2.35Zm-13.97,0h-4.1l-.98,.19-.29,.1-.29,.19-.39,.39-.1,.19v.49l.1,.39,.58,.78,.39,.49,.49,.39,.49,.49,.59,.39,.59,.49,.49,.39,.39,.58,.49,.49,.29,.58,.2,.49,.19,.68-.1,.58-.2,.78-.29,.58-.49,.59-.59,.58-.88,.39-1.07,.29-1.17,.19h-6.25l.39-2.25h5.47l.39-.1,.78-.39,.19-.29,.2-.39-.1-.78-.59-.78-.88-.88-1.08-.88-.98-.88-.88-1.07-.59-1.17-.2-1.17,.2-.78,.39-.68,.49-.58,.58-.49,.78-.39,1.07-.29,1.17-.19,1.27-.1h4.3l-.49,2.34h0Zm-27.15,4.98l-.2,1.57,.29,2.05,.59,1.17,.39,.58,.88,.88,.58,.39,.59,.29,.68,.29,.78,.19,.78,.1h1.66l1.56-.19,.78-.19,.78-.29,.68-.29,.59-.39,.68-.39,.59-.49,.49-.58,.59-.58,.39-.68,.78-1.56,.29-.88,.19-.98,.2-.78v-1.46l-.1-.78-.1-.68-.59-1.18-.78-.97-.49-.39-.59-.39-.59-.29-.78-.29-.68-.19-.78-.1h-1.66l-1.56,.19-.78,.19-.78,.3-.68,.29-.58,.39-.68,.49-.59,.39-.59,.59-.49,.68-.49,.58-.39,.78-.29,.78-.29,.98-.29,.88h0Zm12.21,0l-.29,1.17-.49,1.07-.49,.88-.68,.68-.78,.59-.88,.49-.88,.29-1.08,.1-1.08-.1-.78-.39-.68-.49-.49-.68-.29-.68-.19-.97v-.98l.19-.98,.29-1.17,.49-1.07,.49-.88,.68-.68,.78-.68,.88-.39,.88-.29,1.07-.1,.98,.2,.88,.19,.68,.59,.49,.59,.29,.78,.2,.88v.98l-.19,1.08h0Z" />
                                        </svg>
                                    </div>
                                    <div class="logo px-[15px] w-[151px]">
                                        <svg class="w-full h-auto" viewBox="0 0 234 32.75">
                                            <path d="M0,30.31H28.35l-1.63,2.28H0v-2.28Z" fill="#d22027" />
                                            <path d="M233.84,32.59h-34.71l1.79-2.28h33.08v2.28h-.16Z" fill="#d22027" />
                                            <path d="M0,26.07H31.61l-1.79,2.28H0v-2.28Z" fill="#d22027" />
                                            <path d="M0,21.84H34.87l-1.79,2.28H0v-2.28Z" fill="#d22027" />
                                            <path d="M233.84,28.35h-31.45l1.79-2.28h29.82v2.28h-.16Z" fill="#d22027" />
                                            <path d="M207.28,21.84h26.56v2.28h-28.35l1.79-2.28Z" fill="#d22027" />
                                            <path
                                                d="M30.64,32.59l14.99-20.04h18.58c2.12,0,2.12,.81,.98,2.12-.98,1.3-2.77,3.75-3.75,5.05-.49,.81-1.47,1.96,1.63,1.96h24.93c-1.96,2.93-8.8,11.08-20.86,11.08-9.78-.16-36.5-.16-36.5-.16Z"
                                                fill="#d22027" />
                                            <path d="M116.51,21.84l-8.15,10.92h-21.35l8.15-10.92h21.35Z"
                                                fill="#d22027" />
                                            <path d="M147.64,21.84l-8.15,10.92h-21.51l8.15-10.92h21.51Z"
                                                fill="#d22027" />
                                            <path
                                                d="M154.64,21.84s-1.63,2.12-2.28,3.1c-2.77,3.58-.33,7.82,8.47,7.82h34.55l8.15-10.92h-48.89Z"
                                                fill="#d22027" />
                                            <path
                                                d="M41.23,.16l-7.5,9.94h40.74c2.12,0,2.12,.81,.98,2.12-.98,1.3-2.77,3.75-3.75,5.05-.49,.65-1.47,1.96,1.63,1.96h16.62s2.77-3.58,4.89-6.68c3.1-4.07,.33-12.55-10.59-12.55-9.78,.16-43.02,.16-43.02,.16Z"
                                                fill="#d22027" />
                                            <path
                                                d="M149.43,19.23h-52.47L111.3,.16h21.51l-8.15,10.92h9.61L142.42,.16h21.51l-14.5,19.07Z"
                                                fill="#d22027" />
                                            <path d="M193.59,.16l-14.34,19.07h-22.81L170.77,.16h22.81Z"
                                                fill="#d22027" />
                                        </svg>
                                    </div>
                                    <div class="logo px-[15px] w-[151px]">
                                        <svg class="w-full h-auto" viewBox="0 0 234 64.83">
                                            <path
                                                d="M232.56,56.41c0-3.6-2.56-6.24-6.08-6.24s-6.08,2.64-6.08,6.24,2.56,6.23,6.08,6.23,6.08-2.64,6.08-6.23Zm-7.68,.32v4.08h-1.32v-8.99h3.27c1.92,0,2.8,.84,2.8,2.47,0,1.01-.68,1.8-1.56,1.92v.04c.76,.12,1.04,.8,1.2,2.04,.12,.8,.28,2.2,.57,2.53h-1.56c-.36-.85-.33-2.04-.61-3.04-.23-.76-.64-1.04-1.51-1.04h-1.28s0,0,0,0h0Zm1.63-1.16c1.28,0,1.65-.68,1.65-1.28,0-.71-.37-1.27-1.65-1.27h-1.63v2.56h1.63Zm-7.56,.84c0-4.44,3.53-7.44,7.52-7.44s7.53,3,7.53,7.44-3.52,7.44-7.53,7.44-7.52-3.01-7.52-7.44Z"
                                                fill="#f05b22" />
                                            <path
                                                d="M192.9,62.55l-8.67-9.72-8.59,9.72h-18.08l17.67-19.85-17.67-19.86h18.64l8.76,9.65,8.43-9.65h17.99l-17.58,19.77,17.83,19.93h-18.72Zm-70.05,0V0h34.72V13.94h-20.01v8.9h20.01v13.42h-20.01v12.31h20.01v13.98h-34.72Z"
                                                fill="#f05b22" />
                                            <path
                                                d="M108.19,0V25.6h-.16c-3.24-3.73-7.29-5.03-11.99-5.03-9.63,0-16.88,6.55-19.43,15.2-2.9-9.54-10.39-15.38-21.5-15.38-9.02,0-16.14,4.05-19.86,10.64v-8.2H16.62V13.94h20.34V0H0V62.55H16.62v-26.29h16.56c-.51,2.02-.77,4.1-.76,6.18,0,13.04,9.97,22.21,22.69,22.21,10.7,0,17.75-5.03,21.48-14.18h-14.24c-1.92,2.75-3.39,3.57-7.24,3.57-4.46,0-8.32-3.9-8.32-8.51h28.99c1.26,10.36,9.33,19.3,20.41,19.3,4.78,0,9.16-2.35,11.83-6.32h.16v4.05h14.65V0h-14.65ZM47.26,36.45c.93-3.97,4.01-6.57,7.85-6.57,4.24,0,7.16,2.52,7.93,6.57h-15.78Zm52.05,16.59c-5.4,0-8.75-5.03-8.75-10.28,0-5.62,2.92-11.01,8.75-11.01s8.46,5.4,8.46,11.01c0,5.32-2.55,10.28-8.46,10.28Z"
                                                fill="#302876" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hpp__logoSocialWrapper">
                    <div class="flex">
                        <div class="flex w-2/3">
                            <NuxtLink to="/" class="block w-[180px] mr-10" aria-label="HPP Footer Logo">
                                <svg class="w-full h-auto" viewBox="0 0 376.445 99.513">
                                    <defs>
                                        <linearGradient id="footerDesk__linear-gradient" y1="0.5" x2="1" y2="0.5"
                                            gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#8858e0" />
                                            <stop offset="1" stop-color="#e65f7d" />
                                        </linearGradient>
                                        <linearGradient id="footerDesk__linear-gradient-2" y1="0.5" x2="1" y2="0.5"
                                            gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#ed2467" />
                                            <stop offset="1" stop-color="#f06b58" />
                                        </linearGradient>
                                    </defs>
                                    <g id="Group_21831" data-name="Group 21831" transform="translate(-61.271 -43.579)">
                                        <g id="Group_21830" data-name="Group 21830">
                                            <path id="Path_31937" data-name="Path 31937"
                                                d="M96.106,68.868l-8.139,5.116-.136,24.438,8.587-5.4Z"
                                                fill="url(#footerDesk__linear-gradient)" />
                                            <path id="Path_31938" data-name="Path 31938"
                                                d="M110.252,81.227,73.738,103.319l.064,10.238,36.487-22.048Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <path id="Path_31939" data-name="Path 31939"
                                                d="M110.264,51.125,73.552,73.45l.064,10.238,36.711-22.337Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <path id="Path_31940" data-name="Path 31940"
                                                d="M149.34,98.075l-.1-27.97L140.4,75.659,140.266,93.6Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <path id="Path_31941" data-name="Path 31941"
                                                d="M119.545,86.972,149.336,102.2l0-8.835L119.287,77.494Z"
                                                fill="url(#footerDesk__linear-gradient)" />
                                            <path id="Path_31942" data-name="Path 31942"
                                                d="M113.389,91.34,113.2,58.1l8.835,5.554.094,31.965Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <path id="Path_31943" data-name="Path 31943"
                                                d="M113.139,51.125l.064,10.227,27.2,14.307,8.835-5.554Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <g id="Group_21829" data-name="Group 21829">
                                                <path id="Path_31944" data-name="Path 31944"
                                                    d="M70.69,75.084l-8.551,5.378-.02,42.826,8.831-5.554Z"
                                                    fill="#969595" />
                                                <path id="Path_31945" data-name="Path 31945"
                                                    d="M99.744,141.55,62.119,123.289l8.835-5.554,37.9,18.093Z"
                                                    fill="#747475" />
                                            </g>
                                            <path id="Path_31946" data-name="Path 31946"
                                                d="M147.663,111.983,111.676,94.334l-35.3,22.191,9.107,4.55,7.025-4.416,26.549,12.877Zm-35.712-7.546,17.687,8.6-10.369,6.518-17.845-8.5Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <path id="Path_31947" data-name="Path 31947"
                                                d="M101.652,110.911,85.484,121.075l7.025-4.416,26.549,12.877,9.113-5.592Z"
                                                fill="url(#footerDesk__linear-gradient)" />
                                            <path id="Path_31948" data-name="Path 31948"
                                                d="M111.676,94.334l-35.3,22.191,9.107,4.55L120.85,98.833Z"
                                                fill="url(#footerDesk__linear-gradient-2)" />
                                            <path id="Path_31949" data-name="Path 31949"
                                                d="M110.262,51.124,97.273,43.579l-36,22.048,12.284,7.82Z"
                                                fill="#747475" />
                                            <path id="Path_31950" data-name="Path 31950"
                                                d="M113.14,51.124l10.955-7.449,35.753,18.632-10.609,7.8Z"
                                                fill="#969595" />
                                            <path id="Path_31951" data-name="Path 31951"
                                                d="M147.663,111.983V125.9l-28.747,17.191.142-13.555Z" fill="#747475" />
                                        </g>
                                        <path id="Path_31952" data-name="Path 31952"
                                            d="M233.187,130.585v7.633h-2.445V119.271h6.019a6.866,6.866,0,0,1,4.864,1.518,5.433,5.433,0,0,1,1.613,4.153,5.285,5.285,0,0,1-1.666,4.151,6.983,6.983,0,0,1-4.811,1.492Zm6.571-2.982a4.155,4.155,0,0,0,0-5.363,4.59,4.59,0,0,0-3.212-.926h-3.359v7.228h3.359A4.545,4.545,0,0,0,239.758,127.6Z"
                                            fill="#424143" />
                                        <path id="Path_31953" data-name="Path 31953"
                                            d="M257.185,133.837h-8.33l-1.586,4.381h-2.634l7.015-18.6h2.767l6.987,18.6h-2.633Zm-.7-1.909-3.467-9.566-3.466,9.566Z"
                                            fill="#424143" />
                                        <path id="Path_31954" data-name="Path 31954"
                                            d="M277.985,120.789a8.707,8.707,0,0,1,3.117,4.663h-2.579a6.329,6.329,0,0,0-2.338-3,6.789,6.789,0,0,0-3.951-1.114,6.076,6.076,0,0,0-5.63,3.48,8.644,8.644,0,0,0-.847,3.936,8.5,8.5,0,0,0,.847,3.9,6.1,6.1,0,0,0,5.63,3.467,6.776,6.776,0,0,0,3.951-1.116,6.329,6.329,0,0,0,2.338-3H281.1a8.692,8.692,0,0,1-3.117,4.663,9.231,9.231,0,0,1-5.724,1.707,8.988,8.988,0,0,1-4.7-1.222,8.425,8.425,0,0,1-3.184-3.414,10.616,10.616,0,0,1-1.143-4.986,10.747,10.747,0,0,1,1.143-5.024,8.409,8.409,0,0,1,3.184-3.427,8.97,8.97,0,0,1,4.7-1.222A9.23,9.23,0,0,1,277.985,120.789Z"
                                            fill="#424143" />
                                        <path id="Path_31955" data-name="Path 31955"
                                            d="M289.083,128.651l8.654,9.567h-3.01l-7.9-8.842v8.842h-2.445V119.271h2.445v8.789l7.928-8.789h2.983Z"
                                            fill="#424143" />
                                        <path id="Path_31956" data-name="Path 31956"
                                            d="M311.255,133.837h-8.331l-1.585,4.381H298.7l7.015-18.6h2.767l6.988,18.6H312.84Zm-.7-1.909-3.467-9.566-3.467,9.566Z"
                                            fill="#424143" />
                                        <path id="Path_31957" data-name="Path 31957"
                                            d="M332.1,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.787,5.787,0,0,0-2.243-2.769,6.57,6.57,0,0,0-3.723-1.048,6.73,6.73,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.193,6.193,0,0,0,2.379-2.19,7.47,7.47,0,0,0,1.115-3.373h-7.444v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.311,9.311,0,0,1,4.81-1.235A9.154,9.154,0,0,1,332.1,120.723Z"
                                            fill="#424143" />
                                        <path id="Path_31958" data-name="Path 31958"
                                            d="M341.3,119.271v18.947h-2.445V119.271Z" fill="#424143" />
                                        <path id="Path_31959" data-name="Path 31959"
                                            d="M359.95,138.218H357.5l-9.836-14.97v14.97h-2.445V119.271h2.445l9.836,15v-15h2.446Z"
                                            fill="#424143" />
                                        <path id="Path_31960" data-name="Path 31960"
                                            d="M378.022,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.792,5.792,0,0,0-2.243-2.769,6.572,6.572,0,0,0-3.723-1.048,6.727,6.727,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.2,6.2,0,0,0,2.379-2.19,7.457,7.457,0,0,0,1.114-3.373h-7.443v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.309,9.309,0,0,1,4.81-1.235A9.156,9.156,0,0,1,378.022,120.723Z"
                                            fill="#424143" />
                                        <path id="Path_31961" data-name="Path 31961"
                                            d="M206.391,73.321v36.9h-8.976v-15.4H183.426v15.4H174.5v-36.9h8.925v14.3h13.989v-14.3Zm29.02,30.169H221.579l-2.3,6.733h-9.394l13.518-36.641h10.283l13.518,36.641h-9.5Zm-2.3-6.785-4.593-13.571-4.647,13.571Zm26.462,6.681h11.9v6.837H250.652v-36.9h8.925Zm24.958-14.87v-8.1h15.127v-7.1h-24.05v36.891h8.923V95.306h11.348v-6.79Z"
                                            fill="url(#footerDesk__linear-gradient)" />
                                        <path id="Path_31962" data-name="Path 31962"
                                            d="M326.128,76.371c-2.09-1.959-5.246-2.938-9.446-2.938H304.994V88.516h4.745V77.394h6.529c2.873,0,4.963.61,6.225,1.807a6.808,6.808,0,0,1,1.915,5.245,7.574,7.574,0,0,1-1.023,4.07h5.246a12.494,12.494,0,0,0,.631-4.07A10.576,10.576,0,0,0,326.128,76.371Z"
                                            fill="#737374" />
                                        <path id="Path_31963" data-name="Path 31963"
                                            d="M356.293,76.437q-3.133-3-9.4-3h-12.1V88.516h4.745V77.547h6.943q8.1,0,8.1,7.1a7.785,7.785,0,0,1-.871,3.874h5.05a11.692,11.692,0,0,0,.675-4.135A10.47,10.47,0,0,0,356.293,76.437Z"
                                            fill="#737374" />
                                        <rect id="Rectangle_129" data-name="Rectangle 129" width="4.745" height="15.083"
                                            transform="translate(365.217 73.433)" fill="#737374" />
                                        <path id="Path_31964" data-name="Path 31964"
                                            d="M404.981,76.371a17.933,17.933,0,0,0-11.1-3.308,17.346,17.346,0,0,0-9.141,2.372,16.324,16.324,0,0,0-6.181,6.66,19.609,19.609,0,0,0-2,6.421h4.963a13.858,13.858,0,0,1,1.371-4.309,11.847,11.847,0,0,1,10.926-6.769,13.267,13.267,0,0,1,7.683,2.176,12.152,12.152,0,0,1,4.527,5.811h5.027A16.965,16.965,0,0,0,404.981,76.371Z"
                                            fill="#737374" />
                                        <path id="Path_31965" data-name="Path 31965"
                                            d="M304.994,95.306v14.909h4.745V95.394m40.09-.088H344.78l9.533,14.909h5.376Zm-15.039,0v14.909h4.745V95.306Zm30.427,0v14.909h4.745V95.306Zm40.809,2.852a12.314,12.314,0,0,1-4.527,5.833,13.257,13.257,0,0,1-7.683,2.154,11.972,11.972,0,0,1-6.443-1.741,12.176,12.176,0,0,1-4.483-4.984,14.507,14.507,0,0,1-1.349-4.114h-4.963a18.983,18.983,0,0,0,1.981,6.225,16.39,16.39,0,0,0,6.181,6.638,17.543,17.543,0,0,0,9.141,2.373,17.8,17.8,0,0,0,11.1-3.33,16.882,16.882,0,0,0,6.072-9.054Zm16.127-2.852h-4.744v14.909h20.306v-3.852H422.153Z"
                                            fill="#424143" />
                                        <path id="Path_31966" data-name="Path 31966"
                                            d="M417.409,73.433V88.516h4.745V77.285h15.562V73.433Z" fill="#737374" />
                                    </g>
                                </svg>
                            </NuxtLink>
                            <ul class="flex items-center">
                                <li class="mr-6">
                                    <NuxtLink to="https://www.facebook.com/halfpricepackaging"
                                        aria-label="Facebook Icon" class="group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"
                                            class="w-[18px] h-[18px] fill-gray-300 group-hover:fill-[#000000] mx-auto">
                                            <path
                                                d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z">
                                            </path>
                                        </svg>
                                    </NuxtLink>
                                </li>
                                <li class="mr-6">
                                    <NuxtLink
                                        to="https://twitter.com/i/flow/login?redirect_after_login=%2Fhalfpricepacka1"
                                        aria-label="Twitter Icon" class="group">
                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 72 72"
                                            viewBox="0 0 72 72" id="twitter-x"
                                            class="w-[20px] h-[20px] fill-gray-300 group-hover:fill-[#000000] mx-auto">
                                            <switch>
                                                <g>
                                                    <path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
                                    h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"></path>
                                                </g>
                                            </switch>
                                        </svg>
                                    </NuxtLink>
                                </li>
                                <li class="mr-6">
                                    <NuxtLink to="https://www.instagram.com/halfpricepackaging/"
                                        aria-label="Instagram Icon" class="group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="instagram"
                                            class="w-[20px] h-[20px] fill-gray-300 group-hover:fill-[#000000] mx-auto">
                                            <path
                                                d="M18.946 6.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594 4.412 4.412 0 0 0-1.594-1.039 6.606 6.606 0 0 0-2.184-.418C12.75 1.01 12.444 1 10 1s-2.75.01-3.71.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 2.51 2.511a4.412 4.412 0 0 0-1.039 1.594 6.606 6.606 0 0 0-.418 2.184C1.01 7.25 1 7.556 1 10s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C7.25 18.99 7.556 19 10 19s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C18.99 12.75 19 12.444 19 10s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM10 5.378A4.622 4.622 0 1 0 14.622 10 4.622 4.622 0 0 0 10 5.378zM10 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z"
                                                transform="translate(-1 -1)"></path>
                                        </svg>
                                    </NuxtLink>
                                </li>
                                <li class="mr-6">
                                    <NuxtLink to="https://www.linkedin.com/company/halfpricepackaging/"
                                        aria-label="Linkedin Icon" class="group">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"
                                            viewBox="0 0 512 512" id="linkedin"
                                            class="w-[25px] h-[25px] fill-gray-300 group-hover:fill-[#000000] mx-auto">
                                            <path
                                                d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z">
                                            </path>
                                        </svg>
                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink to="https://www.youtube.com/channel/UCtGFbR-weWi7z18bB_YmGfA"
                                        aria-label="Youtube Icon" class="group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube"
                                            class="w-[25px] h-[25px] fill-gray-300 group-hover:fill-[#000000] mx-auto">
                                            <path
                                                d="M13.2974,0.30957c-1.44043,-0.141601 -3.52832,-0.30957 -5.29736,-0.30957c-1.76904,0 -3.85693,0.167969 -5.29639,0.30957c-1.5415,0.149414 -2.70361,1.43262 -2.70361,2.98438v5.41211c0,1.55176 1.16211,2.83496 2.70264,2.98438c1.44043,0.141602 3.52832,0.30957 5.29736,0.30957c1.76904,0 3.85693,-0.167969 5.29639,-0.30957c1.5415,-0.149414 2.70361,-1.43262 2.70361,-2.98438v-5.41211c0,-1.55176 -1.16211,-2.83496 -2.70264,-2.98438Zm-7.29736,8.69043v-6l5,2.99854l-5,3.00146Z"
                                                transform="translate(0 2)"></path>
                                        </svg>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="flex w-2/3 justify-end">
                            <ul class="flex items-center font-description">
                                <li class="flex px-1 text-[14px]">&copy; Half Price Packaging 2024</li>
                                <li class="flex px-1"><span class="inline-block w-[1px] h-[12px] bg-gray-300"></span>
                                </li>
                                <li class="flex px-1">
                                    <NuxtLink to="/terms-and-conditions" class="text-[14px]">Terms & Conditions
                                    </NuxtLink>
                                </li>
                                <li class="flex px-1"><span class="inline-block w-[1px] h-[12px] bg-gray-300"></span>
                                </li>
                                <li class="flex px-1">
                                    <NuxtLink to="/privacy-policy" class="text-[14px]">Privacy Policy</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <footer v-else class="hpp__siteFooterMobile pt-[50px] pb-[30px] bg-white">
            <div class="px-[20px]">
                <LazyFooterMobileNavigation />
                <div class="footer__logosWrapper mb-10">
                    <div class="hpp__trustedByWrapper">
                        <h2 class="text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100 mb-3">Where We’re
                            Trusted</h2>
                        <div class="logos__wrapper grid grid-cols-2 gap-[30px] items-center mb-10">
                            <div class="logo">
                                <NuxtLink
                                    to="https://www.google.com/search?q=half+price+packaging&sxsrf=ALiCzsagnxfrnR5uzV0qnBby6qK5JPHlfA%3A1667214393089&source=hp&ei=OaxfY9e8A6aJlwTW4oD4Dg&iflsig=AJiK0e8AAAAAY1-6STHTn6Ls6EZe00ThMT0OmDApSXrJ&ved=0ahUKEwiXvabNqYr7AhWmxIUKHVYxAO8Q4dUDCAg&uact=5&oq=half+price+packaging&gs_lcp=Cgdnd3Mtd2l6EAMyCgguEMcBEK8BECcyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6BAgAEEM6BwguENQCEEM6CAgAELEDEIMBOggIABCABBCxAzoHCAAQyQMQQzoECC4QQzoHCAAQsQMQQzoKCAAQsQMQgwEQQzoKCC4QsQMQgwEQQzoICC4QgAQQsQM6CggAEIAEEIcCEBQ6BQguEIAEOgcIABCABBAKOgsILhCABBDHARCvAToICAAQgAQQyQM6CQgAEBYQHhDJAzoICAAQFhAeEApQAFjaFGDlFWgBcAB4A4ABmAWIAbgwkgEKMi0xMy41LjAuMpgBAKABAbABCg&sclient=gws-wiz">
                                    <NuxtImg format="webp" src="/images/google-reviws-logo.png"
                                        alt="Google Reviews Logo" loading="lazy" width="145" height="58"
                                        class="w-full h-auto" />
                                </NuxtLink>
                            </div>
                            <div class="logo">
                                <LazyGeneralTrustPilotWidgetWrapper />
                            </div>
                            <div class="logo">
                                <NuxtLink
                                    href="https://www.bbb.org/us/ca/fremont/profile/packaging-service/half-price-packaging-1116-920459/#sealclick"
                                    target="_blank" rel="nofollow">
                                    <NuxtImg format="webp"
                                        src="https://seal-goldengate.bbb.org/seals/blue-seal-200-42-bbb-920459.png"
                                        class="border-0 w-full h-auto" alt="Half Price Packaging BBB Business Review"
                                        loading="lazy" width="170" height="36" />
                                </NuxtLink>
                            </div>
                            <div class="logo">
                                <NuxtLink to="https://www.reviews.io/company-reviews/store/halfpricepackaging-com">
                                    <NuxtImg format="webp" src="/images/reviews-io-logo.png" alt="Reviews IO Logo"
                                        loading="lazy" width="145" height="58" class="w-full h-auto" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="hpp__deliveryPartnersWrap">
                        <div class="inline-block">
                            <h2 class="text-[16px] font-bold uppercase text-acai-100 hover:text-pitaya-100 mb-3">Our
                                Logistics Partners</h2>
                            <div class="logos__wrapper grid grid-cols-3 gap-[30px] items-center">
                                <div class="logo flex items-center">
                                    <svg class="w-full h-auto" viewBox="0 0 234 39.07">
                                        <path
                                            d="M8.3,.2h.29l.49,.1,.59,.1,1.56,.39,2.15,.39,1.17,.3,1.27,.29,1.37,.2,1.37,.39,1.47,.19,1.46,.39,4.69,.88,1.47,.39,1.56,.29,1.36,.29,1.47,.29,1.37,.29,1.37,.2,1.17,.29,1.17,.19,.98,.29,.88,.2,.78,.1,.68,.1,.49,.1,.29,.1h.19l1.27,.29,1.17,.2,.98,.29,.78,.19,.78,.29,.59,.2,.78,.39,.29,.2,.49,.49v.1l.1,.1v.1h4.2l.39,.1h.39l.29,.1h.29l.29,.1,.78,.39,.1,.2,.68,1.07,.2,1.27-.2,1.56-.49,1.46-.59,1.46-.59,1.17-.49,.78-.19,.29-.2,.1-.49,.19-.68,.29-.98,.39-1.07,.39-1.37,.58-1.47,.59-1.66,.59-1.86,.78-1.95,.68-1.95,.78-4.3,1.76-2.25,.88-2.25,.78-2.24,.97-2.34,.88-2.25,.78-2.15,.98-2.24,.78-2.05,.78-3.91,1.56-1.76,.68-1.66,.59-1.46,.58-1.27,.49-1.08,.49-.88,.29-.68,.29-.39,.1-.1,.1H55.28L63.49,0H8.3V.2Z"
                                            fill="#284e80" />
                                        <path
                                            d="M46.1,12.8l-.29,.1-1.95,.39h-.49l-.39,.1h-.39l-.59,.1-.29,.1-.2,.1-.1,.2v.19l.2,.2h.39l.39,.1h.98l.59-.1h.59l1.37-.2h.68l.78-.1,.68-.09,.59-.1,.68-.1h2.64l.29,.1,.2,.1,.19,.29v.39l-.1,.39-.1,.49-.2,.59-.29,.68-.2,.68-.1,.39,.19,.2,.2-.1,.39-.39,.19-.29,.29-.49,.29-.59,.29-.68,.29-.58,.2-.59,.1-.49v-.59l-.19-.49-.29-.29-.39-.29-.49-.2-.59-.1-.68-.1h-4.1l-.1,.1h-.1l-.19,.1-.2,.39-.19,.1-.2,.2-.29,.2h0Z"
                                            fill="#284e80" />
                                        <path
                                            d="M6.45,8.99L0,38.87l.29-.1,.59-.39,.98-.39,1.27-.68,1.46-.68,1.66-.88,1.95-.88,1.86-.98,1.95-.88,1.85-.98,1.86-.88,1.76-.88,1.47-.78,1.27-.58,.98-.49,.68-.29,.98-.49,.88-.49,1.07-.49,1.07-.58,.98-.49,1.17-.49,1.07-.59,1.17-.49,1.17-.59,5.86-2.44,2.64-.88,.39-.1,.39-.19,.49-.1,1.76-.59,2.05-.59,.68-.1,2.05-.59,1.17-.19,.39-.1,.29-.1h.29l.29-.1,.2-.2h.1v-.1l-.2-.39-.29-.1-.39-.1h-.39l-.58-.1h-.59l-.68,.1-1.17,.1-1.27,.19-1.37,.29-1.47,.3-1.46,.39-1.56,.49-1.47,.49-1.56,.49-1.46,.59-1.47,.49-1.37,.49-1.27,.49-1.17,.59-.98,.39-.88,.39-.68,.39-3.71-11.53h23.64l.1-.49-.39-.49-.59-.29-.88-.29-.98-.29-2.54-.39-4.1-.29H6.45Z"
                                            fill="#284e80" />
                                        <path d="M233.76,20.34H68.27l.24-2.49H234l-.24,2.49Z" fill="#ca4256" />
                                        <path
                                            d="M75.79,14.85l-1.27-.1-1.27-.29-.98-.29-.88-.59-.58-.68-.39-.88-.1-.97,.1-1.17,.49-2.15,.39-1.95,.39-1.66,.29-1.37,.2-1.17,.19-.88,.1-.49,.1-.2h3.22l-.1,.39-.19,.98-.39,1.46-.29,1.66-.39,1.66-.49,2.44-.1,.29-.1,.78v1.37l.19,.49,.39,.39,.49,.29,.68,.19,.78,.1,.88-.1,.68-.1,.68-.29,.49-.49,.39-.49,.39-.59,.59-1.56,.1-.78,.29-1.17,.3-1.46,.29-1.56,.39-1.47,.2-1.27,.19-.88,.1-.29h3.22l-.59,2.83-.29,1.47-.2,.49v.19l-.1,.59-.29,1.46-.68,2.83-.1,.58-.29,.59-.2,.49-.29,.49-.39,.49-.78,.78-.49,.29-.58,.29-.49,.29-.58,.19-.59,.1-.59,.19-1.37,.2h-.78ZM226.01,2.35h-4.59l-.78,.19-.58,.39-.1,.19-.1,.29v.39l.1,.39,.29,.39,.29,.49,.88,.88,.58,.39,.49,.39,.59,.49,.97,.98,.39,.49,.58,1.17,.1,.58-.1,.68-.19,.69-.29,.68-.49,.59-.68,.49-.78,.39-.98,.29-1.27,.2-1.37,.1h-4.98l.58-2.34h5.27l.49-.1,.39-.1,.29-.19,.29-.39,.19-.39-.1-.78-.58-.78-.98-.78-.98-.88-1.07-.98-.88-1.08-.58-1.08-.1-1.27,.19-.68,.39-.78,.39-.59,.68-.49,.88-.39,.88-.29,1.17-.2h5.66l-.49,2.34h0Zm-11.33,0h-7.32l-.88,3.81h6.45l-.49,2.05h-6.45l-.78,4.01h7.33l-.49,2.34h-10.55L204.63,0h10.55l-.49,2.34h0Zm-12.7,0h-4.49l-2.64,12.21h-3.22l2.64-12.21h-4.59L190.27,0h12.21l-.49,2.34h0Zm-22.46,12.21l1.27-2.34h4.59l-1.27-9.28-6.45,11.62h-3.22L182.84,0h3.81l2.25,14.55h-9.38Zm-.59-12.21h-4.49l-2.64,12.21h-3.22l2.64-12.21h-4.59L167.22,0h12.21l-.49,2.34h0Zm-13.97,0h-4.49l-.49,.1-.39,.1-.29,.2-.39,.39v.68l.1,.39,.19,.39,.39,.49,.88,.88,.49,.39,.59,.39,1.46,1.47,.39,.49,.39,.59,.19,.59,.1,.58v.68l-.2,.69-.29,.68-.59,.59-.58,.49-.88,.39-.98,.29-1.17,.2-1.46,.1h-4.88l.49-2.34h5.37l.49-.1,.39-.1,.29-.19,.29-.39,.1-.39-.1-.78-.58-.78-.88-.78-.97-.88-1.08-.98-.88-1.08-.58-1.08-.1-1.27,.2-.68,.29-.78,.49-.59,.68-.49,.78-.39,.97-.29,1.17-.2h5.66l-.59,2.34h0Zm-29.5,4.88l-1.47,7.33h6.55l.78-.1h.78l1.36-.39,.78-.29,.68-.39,1.17-.78,1.17-1.17,.98-1.37,.39-.78,.29-.78,.19-.88,.1-.39,.1-.59,.19-1.37-.1-1.27-.29-1.07-.49-.98-.78-.88-.97-.59-1.27-.39-1.46-.1h-7.13l-1.56,7.23Zm10.65,0l-.1,.49-.29,.59-.19,.49-.19,.59-.29,.39-.39,.49-.78,.78-.98,.58-.49,.2-.58,.19-1.18,.2h-2.93l.97-4.98,1.08-4.88h4.2l.78,.29,.59,.39,.49,.58,.29,.59,.19,.78v1.56l-.19,.59v.1h0Zm-11.92-4.88h-7.23l-.88,3.81h6.35l-.39,2.05h-6.44l-.78,4.01h7.23l-.39,2.34h-10.55L124.24,0h10.45l-.49,2.34h0Zm-12.6,0h-4.59l-2.64,12.21h-3.12l2.64-12.21h-4.59L109.78,0h12.21l-.39,2.34Zm-17.09,12.21h-3.13L104.41,0h3.22l-3.12,14.55Zm-6.25,0h-4.01l-3.61-10.84h-.1l-2.25,10.84h-2.83L88.59,0h4.1l3.52,10.94L98.46,0h2.93l-3.13,14.55h0Zm-26.76,18.75h-.39l-.2-.1h-.59l-.19-.1h-.19l-.2-2.05h.78l.1,.1h.59l.78-.1,1.17-.39,.39-.39,.58-.78,.2-.39v-.39l.1-.49v-.49l-.1-.39-.2-.29-.58-.39h-.39l-.39-.1h-2.64l-2.64,12.21h-3.22l3.13-14.56h6.93l1.07,.1,.78,.39,.68,.49,.39,.68,.19,.68,.1,.78v.78l-.1,.68-.29,.98-.49,.88-.59,.78-.78,.68-.78,.49-1.95,.58-1.08,.1h0Zm160.77-6.74h-7.42l-.78,3.81h6.45l-.49,2.15h-6.44l-.78,4.01h7.33l-.49,2.25h-10.55l3.13-14.56h10.55l-.49,2.35h0Zm-12.99,.2l-.39-.1h-.29l-.78-.19-.49-.1h-.49l-.39-.1h-.58l-1.07,.1-.98,.29-.97,.39-.88,.68-.68,.68-.68,.88-.39,1.07-.39,1.17-.2,1.17,.1,1.07,.29,.88,.39,.68,.58,.59,.78,.49,.88,.29,.97,.1h.58l.59-.1h.49l.98-.19h.39l.49-.1,.39-.1-.78,2.44-.39,.1h-.49l-.39,.1h-.49l-.39,.1h-2.25l-1.56-.19-.68-.19-.68-.29-.58-.29-.58-.39-.49-.39-.49-.49-.29-.58-.29-.68-.29-.58-.1-.78v-.78l.1-.88,.1-.98,.29-.88,.29-.98,.78-1.56,.49-.68,1.17-1.17,.68-.49,1.36-.78,1.56-.59,.78-.19,.78-.1,.88-.1h2.05l.39,.1h.39l.39,.1h.39l.39,.1-.29,2.44h0Zm-16.11,12.01h-3.22l3.13-14.56h3.22l-3.12,14.56h0Zm-10.36,0h-3.81l-2.15-14.56h3.22l1.46,11.72,6.45-11.72h3.13l-8.31,14.56Zm-11.82-6.25l2.35,6.25h-3.52l-2.64-7.91h1.86l.58-.1,.58-.19,.49-.29,.39-.29,.39-.39,.19-.49,.2-.58,.1-.39v-.39l-.19-.59-.19-.19-.39-.19-.98-.19h-2.93l-2.64,12.21h-3.22l3.13-14.56h6.74l.97,.1,.88,.19,.68,.29,.49,.39,.39,.49,.29,.68,.1,.78v.78l-.1,.98-.29,.88-.39,.78-.49,.58-.59,.58-.78,.39-.68,.29-.78,.09h0Zm-9.28-5.96h-7.33l-.78,3.81h6.35l-.39,2.15h-6.45l-.78,4.01h7.33l-.49,2.25h-10.65l3.13-14.56h10.55l-.49,2.35h0Zm-13.29,0h-4.1l-.98,.19-.39,.1-.19,.19-.29,.19-.19,.39v.49l.1,.39,.19,.39,.39,.39,.39,.49,.49,.39,.49,.49,.58,.39,.49,.49,.58,.39,.39,.58,.39,.49,.39,.58,.2,.49,.09,.68v.58l-.19,.78-.29,.58-1.17,1.17-.78,.39-1.08,.29-1.17,.19h-6.35l.49-2.25h5.37l.49-.1,.39-.2,.29-.19,.29-.29,.19-.39-.19-.78-.58-.78-.88-.88-.97-.88-1.08-.88-.88-1.07-.58-1.17-.1-1.17,.19-.78,.29-.68,.49-.58,.68-.49,.78-.39,.98-.29,1.17-.19,1.36-.1h4.3l-.49,2.35h0Zm-17.38,12.21h-9.87l3.03-14.56h3.32l-2.64,12.31h6.64l-.49,2.25h0Zm-20.9,0l1.27-2.25h4.59l-1.36-9.38-6.35,11.62h-3.22l8.3-14.56h3.91l2.25,14.56h-9.38s0,0,0,0Zm-.58-12.21h-4.59l-2.64,12.21h-3.22l2.64-12.21h-4.49l.49-2.35h12.21l-.39,2.35Zm-13.97,0h-4.1l-.98,.19-.29,.1-.29,.19-.39,.39-.1,.19v.49l.1,.39,.58,.78,.39,.49,.49,.39,.49,.49,.59,.39,.59,.49,.49,.39,.39,.58,.49,.49,.29,.58,.2,.49,.19,.68-.1,.58-.2,.78-.29,.58-.49,.59-.59,.58-.88,.39-1.07,.29-1.17,.19h-6.25l.39-2.25h5.47l.39-.1,.78-.39,.19-.29,.2-.39-.1-.78-.59-.78-.88-.88-1.08-.88-.98-.88-.88-1.07-.59-1.17-.2-1.17,.2-.78,.39-.68,.49-.58,.58-.49,.78-.39,1.07-.29,1.17-.19,1.27-.1h4.3l-.49,2.34h0Zm-27.15,4.98l-.2,1.57,.29,2.05,.59,1.17,.39,.58,.88,.88,.58,.39,.59,.29,.68,.29,.78,.19,.78,.1h1.66l1.56-.19,.78-.19,.78-.29,.68-.29,.59-.39,.68-.39,.59-.49,.49-.58,.59-.58,.39-.68,.78-1.56,.29-.88,.19-.98,.2-.78v-1.46l-.1-.78-.1-.68-.59-1.18-.78-.97-.49-.39-.59-.39-.59-.29-.78-.29-.68-.19-.78-.1h-1.66l-1.56,.19-.78,.19-.78,.3-.68,.29-.58,.39-.68,.49-.59,.39-.59,.59-.49,.68-.49,.58-.39,.78-.29,.78-.29,.98-.29,.88h0Zm12.21,0l-.29,1.17-.49,1.07-.49,.88-.68,.68-.78,.59-.88,.49-.88,.29-1.08,.1-1.08-.1-.78-.39-.68-.49-.49-.68-.29-.68-.19-.97v-.98l.19-.98,.29-1.17,.49-1.07,.49-.88,.68-.68,.78-.68,.88-.39,.88-.29,1.07-.1,.98,.2,.88,.19,.68,.59,.49,.59,.29,.78,.2,.88v.98l-.19,1.08h0Z" />
                                    </svg>
                                </div>
                                <div class="logo">
                                    <svg class="w-full h-auto" viewBox="0 0 234 32.75">
                                        <path d="M0,30.31H28.35l-1.63,2.28H0v-2.28Z" fill="#d22027" />
                                        <path d="M233.84,32.59h-34.71l1.79-2.28h33.08v2.28h-.16Z" fill="#d22027" />
                                        <path d="M0,26.07H31.61l-1.79,2.28H0v-2.28Z" fill="#d22027" />
                                        <path d="M0,21.84H34.87l-1.79,2.28H0v-2.28Z" fill="#d22027" />
                                        <path d="M233.84,28.35h-31.45l1.79-2.28h29.82v2.28h-.16Z" fill="#d22027" />
                                        <path d="M207.28,21.84h26.56v2.28h-28.35l1.79-2.28Z" fill="#d22027" />
                                        <path
                                            d="M30.64,32.59l14.99-20.04h18.58c2.12,0,2.12,.81,.98,2.12-.98,1.3-2.77,3.75-3.75,5.05-.49,.81-1.47,1.96,1.63,1.96h24.93c-1.96,2.93-8.8,11.08-20.86,11.08-9.78-.16-36.5-.16-36.5-.16Z"
                                            fill="#d22027" />
                                        <path d="M116.51,21.84l-8.15,10.92h-21.35l8.15-10.92h21.35Z" fill="#d22027" />
                                        <path d="M147.64,21.84l-8.15,10.92h-21.51l8.15-10.92h21.51Z" fill="#d22027" />
                                        <path
                                            d="M154.64,21.84s-1.63,2.12-2.28,3.1c-2.77,3.58-.33,7.82,8.47,7.82h34.55l8.15-10.92h-48.89Z"
                                            fill="#d22027" />
                                        <path
                                            d="M41.23,.16l-7.5,9.94h40.74c2.12,0,2.12,.81,.98,2.12-.98,1.3-2.77,3.75-3.75,5.05-.49,.65-1.47,1.96,1.63,1.96h16.62s2.77-3.58,4.89-6.68c3.1-4.07,.33-12.55-10.59-12.55-9.78,.16-43.02,.16-43.02,.16Z"
                                            fill="#d22027" />
                                        <path
                                            d="M149.43,19.23h-52.47L111.3,.16h21.51l-8.15,10.92h9.61L142.42,.16h21.51l-14.5,19.07Z"
                                            fill="#d22027" />
                                        <path d="M193.59,.16l-14.34,19.07h-22.81L170.77,.16h22.81Z" fill="#d22027" />
                                    </svg>
                                </div>
                                <div class="logo">
                                    <svg class="w-full h-auto" viewBox="0 0 234 64.83">
                                        <path
                                            d="M232.56,56.41c0-3.6-2.56-6.24-6.08-6.24s-6.08,2.64-6.08,6.24,2.56,6.23,6.08,6.23,6.08-2.64,6.08-6.23Zm-7.68,.32v4.08h-1.32v-8.99h3.27c1.92,0,2.8,.84,2.8,2.47,0,1.01-.68,1.8-1.56,1.92v.04c.76,.12,1.04,.8,1.2,2.04,.12,.8,.28,2.2,.57,2.53h-1.56c-.36-.85-.33-2.04-.61-3.04-.23-.76-.64-1.04-1.51-1.04h-1.28s0,0,0,0h0Zm1.63-1.16c1.28,0,1.65-.68,1.65-1.28,0-.71-.37-1.27-1.65-1.27h-1.63v2.56h1.63Zm-7.56,.84c0-4.44,3.53-7.44,7.52-7.44s7.53,3,7.53,7.44-3.52,7.44-7.53,7.44-7.52-3.01-7.52-7.44Z"
                                            fill="#f05b22" />
                                        <path
                                            d="M192.9,62.55l-8.67-9.72-8.59,9.72h-18.08l17.67-19.85-17.67-19.86h18.64l8.76,9.65,8.43-9.65h17.99l-17.58,19.77,17.83,19.93h-18.72Zm-70.05,0V0h34.72V13.94h-20.01v8.9h20.01v13.42h-20.01v12.31h20.01v13.98h-34.72Z"
                                            fill="#f05b22" />
                                        <path
                                            d="M108.19,0V25.6h-.16c-3.24-3.73-7.29-5.03-11.99-5.03-9.63,0-16.88,6.55-19.43,15.2-2.9-9.54-10.39-15.38-21.5-15.38-9.02,0-16.14,4.05-19.86,10.64v-8.2H16.62V13.94h20.34V0H0V62.55H16.62v-26.29h16.56c-.51,2.02-.77,4.1-.76,6.18,0,13.04,9.97,22.21,22.69,22.21,10.7,0,17.75-5.03,21.48-14.18h-14.24c-1.92,2.75-3.39,3.57-7.24,3.57-4.46,0-8.32-3.9-8.32-8.51h28.99c1.26,10.36,9.33,19.3,20.41,19.3,4.78,0,9.16-2.35,11.83-6.32h.16v4.05h14.65V0h-14.65ZM47.26,36.45c.93-3.97,4.01-6.57,7.85-6.57,4.24,0,7.16,2.52,7.93,6.57h-15.78Zm52.05,16.59c-5.4,0-8.75-5.03-8.75-10.28,0-5.62,2.92-11.01,8.75-11.01s8.46,5.4,8.46,11.01c0,5.32-2.55,10.28-8.46,10.28Z"
                                            fill="#302876" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="hpp__logoSocialWrapper">

                    <div class="mb-10">
                        <NuxtLink to="/" class="block w-[255px] mb-5" aria-label="HPP Footer Logo">
                            <svg class="w-full h-auto" viewBox="0 0 376.445 99.513">
                                <defs>
                                    <linearGradient id="footer__linear-gradient" y1="0.5" x2="1" y2="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#8858e0" />
                                        <stop offset="1" stop-color="#e65f7d" />
                                    </linearGradient>
                                    <linearGradient id="footer__linear-gradient-2" y1="0.5" x2="1" y2="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#ed2467" />
                                        <stop offset="1" stop-color="#f06b58" />
                                    </linearGradient>
                                </defs>
                                <g id="Group_21831" data-name="Group 21831" transform="translate(-61.271 -43.579)">
                                    <g id="Group_21830" data-name="Group 21830">
                                        <path id="Path_31937" data-name="Path 31937"
                                            d="M96.106,68.868l-8.139,5.116-.136,24.438,8.587-5.4Z"
                                            fill="url(#footer__linear-gradient)" />
                                        <path id="Path_31938" data-name="Path 31938"
                                            d="M110.252,81.227,73.738,103.319l.064,10.238,36.487-22.048Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <path id="Path_31939" data-name="Path 31939"
                                            d="M110.264,51.125,73.552,73.45l.064,10.238,36.711-22.337Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <path id="Path_31940" data-name="Path 31940"
                                            d="M149.34,98.075l-.1-27.97L140.4,75.659,140.266,93.6Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <path id="Path_31941" data-name="Path 31941"
                                            d="M119.545,86.972,149.336,102.2l0-8.835L119.287,77.494Z"
                                            fill="url(#footer__linear-gradient)" />
                                        <path id="Path_31942" data-name="Path 31942"
                                            d="M113.389,91.34,113.2,58.1l8.835,5.554.094,31.965Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <path id="Path_31943" data-name="Path 31943"
                                            d="M113.139,51.125l.064,10.227,27.2,14.307,8.835-5.554Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <g id="Group_21829" data-name="Group 21829">
                                            <path id="Path_31944" data-name="Path 31944"
                                                d="M70.69,75.084l-8.551,5.378-.02,42.826,8.831-5.554Z" fill="#969595" />
                                            <path id="Path_31945" data-name="Path 31945"
                                                d="M99.744,141.55,62.119,123.289l8.835-5.554,37.9,18.093Z"
                                                fill="#747475" />
                                        </g>
                                        <path id="Path_31946" data-name="Path 31946"
                                            d="M147.663,111.983,111.676,94.334l-35.3,22.191,9.107,4.55,7.025-4.416,26.549,12.877Zm-35.712-7.546,17.687,8.6-10.369,6.518-17.845-8.5Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <path id="Path_31947" data-name="Path 31947"
                                            d="M101.652,110.911,85.484,121.075l7.025-4.416,26.549,12.877,9.113-5.592Z"
                                            fill="url(#footer__linear-gradient)" />
                                        <path id="Path_31948" data-name="Path 31948"
                                            d="M111.676,94.334l-35.3,22.191,9.107,4.55L120.85,98.833Z"
                                            fill="url(#footer__linear-gradient-2)" />
                                        <path id="Path_31949" data-name="Path 31949"
                                            d="M110.262,51.124,97.273,43.579l-36,22.048,12.284,7.82Z" fill="#747475" />
                                        <path id="Path_31950" data-name="Path 31950"
                                            d="M113.14,51.124l10.955-7.449,35.753,18.632-10.609,7.8Z" fill="#969595" />
                                        <path id="Path_31951" data-name="Path 31951"
                                            d="M147.663,111.983V125.9l-28.747,17.191.142-13.555Z" fill="#747475" />
                                    </g>
                                    <path id="Path_31952" data-name="Path 31952"
                                        d="M233.187,130.585v7.633h-2.445V119.271h6.019a6.866,6.866,0,0,1,4.864,1.518,5.433,5.433,0,0,1,1.613,4.153,5.285,5.285,0,0,1-1.666,4.151,6.983,6.983,0,0,1-4.811,1.492Zm6.571-2.982a4.155,4.155,0,0,0,0-5.363,4.59,4.59,0,0,0-3.212-.926h-3.359v7.228h3.359A4.545,4.545,0,0,0,239.758,127.6Z"
                                        fill="#424143" />
                                    <path id="Path_31953" data-name="Path 31953"
                                        d="M257.185,133.837h-8.33l-1.586,4.381h-2.634l7.015-18.6h2.767l6.987,18.6h-2.633Zm-.7-1.909-3.467-9.566-3.466,9.566Z"
                                        fill="#424143" />
                                    <path id="Path_31954" data-name="Path 31954"
                                        d="M277.985,120.789a8.707,8.707,0,0,1,3.117,4.663h-2.579a6.329,6.329,0,0,0-2.338-3,6.789,6.789,0,0,0-3.951-1.114,6.076,6.076,0,0,0-5.63,3.48,8.644,8.644,0,0,0-.847,3.936,8.5,8.5,0,0,0,.847,3.9,6.1,6.1,0,0,0,5.63,3.467,6.776,6.776,0,0,0,3.951-1.116,6.329,6.329,0,0,0,2.338-3H281.1a8.692,8.692,0,0,1-3.117,4.663,9.231,9.231,0,0,1-5.724,1.707,8.988,8.988,0,0,1-4.7-1.222,8.425,8.425,0,0,1-3.184-3.414,10.616,10.616,0,0,1-1.143-4.986,10.747,10.747,0,0,1,1.143-5.024,8.409,8.409,0,0,1,3.184-3.427,8.97,8.97,0,0,1,4.7-1.222A9.23,9.23,0,0,1,277.985,120.789Z"
                                        fill="#424143" />
                                    <path id="Path_31955" data-name="Path 31955"
                                        d="M289.083,128.651l8.654,9.567h-3.01l-7.9-8.842v8.842h-2.445V119.271h2.445v8.789l7.928-8.789h2.983Z"
                                        fill="#424143" />
                                    <path id="Path_31956" data-name="Path 31956"
                                        d="M311.255,133.837h-8.331l-1.585,4.381H298.7l7.015-18.6h2.767l6.988,18.6H312.84Zm-.7-1.909-3.467-9.566-3.467,9.566Z"
                                        fill="#424143" />
                                    <path id="Path_31957" data-name="Path 31957"
                                        d="M332.1,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.787,5.787,0,0,0-2.243-2.769,6.57,6.57,0,0,0-3.723-1.048,6.73,6.73,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.193,6.193,0,0,0,2.379-2.19,7.47,7.47,0,0,0,1.115-3.373h-7.444v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.311,9.311,0,0,1,4.81-1.235A9.154,9.154,0,0,1,332.1,120.723Z"
                                        fill="#424143" />
                                    <path id="Path_31958" data-name="Path 31958"
                                        d="M341.3,119.271v18.947h-2.445V119.271Z" fill="#424143" />
                                    <path id="Path_31959" data-name="Path 31959"
                                        d="M359.95,138.218H357.5l-9.836-14.97v14.97h-2.445V119.271h2.445l9.836,15v-15h2.446Z"
                                        fill="#424143" />
                                    <path id="Path_31960" data-name="Path 31960"
                                        d="M378.022,120.723a7.973,7.973,0,0,1,3.023,4.461h-2.58a5.792,5.792,0,0,0-2.243-2.769,6.572,6.572,0,0,0-3.723-1.048,6.727,6.727,0,0,0-3.467.9,6.286,6.286,0,0,0-2.4,2.566,8.34,8.34,0,0,0-.873,3.923,8.433,8.433,0,0,0,.887,3.992,6.273,6.273,0,0,0,2.458,2.58,7.159,7.159,0,0,0,3.616.9,6.849,6.849,0,0,0,3.2-.752,6.2,6.2,0,0,0,2.379-2.19,7.457,7.457,0,0,0,1.114-3.373h-7.443v-1.828h9.513v2.258a9.4,9.4,0,0,1-1.4,4.085,8.367,8.367,0,0,1-3.117,2.9,9.138,9.138,0,0,1-4.461,1.076,9.408,9.408,0,0,1-4.837-1.225,8.481,8.481,0,0,1-3.265-3.413,11.329,11.329,0,0,1,0-10.024,8.6,8.6,0,0,1,3.265-3.426,9.309,9.309,0,0,1,4.81-1.235A9.156,9.156,0,0,1,378.022,120.723Z"
                                        fill="#424143" />
                                    <path id="Path_31961" data-name="Path 31961"
                                        d="M206.391,73.321v36.9h-8.976v-15.4H183.426v15.4H174.5v-36.9h8.925v14.3h13.989v-14.3Zm29.02,30.169H221.579l-2.3,6.733h-9.394l13.518-36.641h10.283l13.518,36.641h-9.5Zm-2.3-6.785-4.593-13.571-4.647,13.571Zm26.462,6.681h11.9v6.837H250.652v-36.9h8.925Zm24.958-14.87v-8.1h15.127v-7.1h-24.05v36.891h8.923V95.306h11.348v-6.79Z"
                                        fill="url(#footer__linear-gradient)" />
                                    <path id="Path_31962" data-name="Path 31962"
                                        d="M326.128,76.371c-2.09-1.959-5.246-2.938-9.446-2.938H304.994V88.516h4.745V77.394h6.529c2.873,0,4.963.61,6.225,1.807a6.808,6.808,0,0,1,1.915,5.245,7.574,7.574,0,0,1-1.023,4.07h5.246a12.494,12.494,0,0,0,.631-4.07A10.576,10.576,0,0,0,326.128,76.371Z"
                                        fill="#737374" />
                                    <path id="Path_31963" data-name="Path 31963"
                                        d="M356.293,76.437q-3.133-3-9.4-3h-12.1V88.516h4.745V77.547h6.943q8.1,0,8.1,7.1a7.785,7.785,0,0,1-.871,3.874h5.05a11.692,11.692,0,0,0,.675-4.135A10.47,10.47,0,0,0,356.293,76.437Z"
                                        fill="#737374" />
                                    <rect id="Rectangle_129" data-name="Rectangle 129" width="4.745" height="15.083"
                                        transform="translate(365.217 73.433)" fill="#737374" />
                                    <path id="Path_31964" data-name="Path 31964"
                                        d="M404.981,76.371a17.933,17.933,0,0,0-11.1-3.308,17.346,17.346,0,0,0-9.141,2.372,16.324,16.324,0,0,0-6.181,6.66,19.609,19.609,0,0,0-2,6.421h4.963a13.858,13.858,0,0,1,1.371-4.309,11.847,11.847,0,0,1,10.926-6.769,13.267,13.267,0,0,1,7.683,2.176,12.152,12.152,0,0,1,4.527,5.811h5.027A16.965,16.965,0,0,0,404.981,76.371Z"
                                        fill="#737374" />
                                    <path id="Path_31965" data-name="Path 31965"
                                        d="M304.994,95.306v14.909h4.745V95.394m40.09-.088H344.78l9.533,14.909h5.376Zm-15.039,0v14.909h4.745V95.306Zm30.427,0v14.909h4.745V95.306Zm40.809,2.852a12.314,12.314,0,0,1-4.527,5.833,13.257,13.257,0,0,1-7.683,2.154,11.972,11.972,0,0,1-6.443-1.741,12.176,12.176,0,0,1-4.483-4.984,14.507,14.507,0,0,1-1.349-4.114h-4.963a18.983,18.983,0,0,0,1.981,6.225,16.39,16.39,0,0,0,6.181,6.638,17.543,17.543,0,0,0,9.141,2.373,17.8,17.8,0,0,0,11.1-3.33,16.882,16.882,0,0,0,6.072-9.054Zm16.127-2.852h-4.744v14.909h20.306v-3.852H422.153Z"
                                        fill="#424143" />
                                    <path id="Path_31966" data-name="Path 31966"
                                        d="M417.409,73.433V88.516h4.745V77.285h15.562V73.433Z" fill="#737374" />
                                </g>
                            </svg>
                        </NuxtLink>
                        <ul class="flex items-center">
                            <li class="mr-6">
                                <NuxtLink to="https://www.facebook.com/halfpricepackaging" aria-label="Facebook Icon"
                                    class="group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"
                                        class="w-[30px] h-[30px] fill-gray-600 group-hover:fill-[#000000] mx-auto">
                                        <path
                                            d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z">
                                        </path>
                                    </svg>
                                </NuxtLink>
                            </li>
                            <li class="mr-6">
                                <NuxtLink to="https://twitter.com/i/flow/login?redirect_after_login=%2Fhalfpricepacka1"
                                    aria-label="Twitter Icon" class="group">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 72 72"
                                        viewBox="0 0 72 72" id="twitter-x"
                                        class="w-[30px] h-[30px] fill-gray-600 group-hover:fill-[#000000] mx-auto">
                                        <switch>
                                            <g>
                                                <path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
                                    h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"></path>
                                            </g>
                                        </switch>
                                    </svg>
                                </NuxtLink>
                            </li>
                            <li class="mr-6">
                                <NuxtLink to="https://www.instagram.com/halfpricepackaging/" aria-label="Instagram Icon"
                                    class="group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="instagram"
                                        class="w-[30px] h-[30px] fill-gray-600 group-hover:fill-[#000000] mx-auto">
                                        <path
                                            d="M18.946 6.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594 4.412 4.412 0 0 0-1.594-1.039 6.606 6.606 0 0 0-2.184-.418C12.75 1.01 12.444 1 10 1s-2.75.01-3.71.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 2.51 2.511a4.412 4.412 0 0 0-1.039 1.594 6.606 6.606 0 0 0-.418 2.184C1.01 7.25 1 7.556 1 10s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C7.25 18.99 7.556 19 10 19s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C18.99 12.75 19 12.444 19 10s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM10 5.378A4.622 4.622 0 1 0 14.622 10 4.622 4.622 0 0 0 10 5.378zM10 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z"
                                            transform="translate(-1 -1)"></path>
                                    </svg>
                                </NuxtLink>
                            </li>
                            <li class="mr-6">
                                <NuxtLink to="https://www.linkedin.com/company/halfpricepackaging/"
                                    aria-label="Linkedin Icon" class="group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"
                                        viewBox="0 0 512 512" id="linkedin"
                                        class="w-[38px] h-[38px] fill-gray-600 group-hover:fill-[#000000] mx-auto">
                                        <path
                                            d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z">
                                        </path>
                                    </svg>
                                </NuxtLink>
                            </li>
                            <li class="">
                                <NuxtLink to="https://www.youtube.com/channel/UCtGFbR-weWi7z18bB_YmGfA"
                                    aria-label="Youtube Icon" class="group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube"
                                        class="w-[38px] h-[38px] fill-gray-600 group-hover:fill-[#000000] mx-auto">
                                        <path
                                            d="M13.2974,0.30957c-1.44043,-0.141601 -3.52832,-0.30957 -5.29736,-0.30957c-1.76904,0 -3.85693,0.167969 -5.29639,0.30957c-1.5415,0.149414 -2.70361,1.43262 -2.70361,2.98438v5.41211c0,1.55176 1.16211,2.83496 2.70264,2.98438c1.44043,0.141602 3.52832,0.30957 5.29736,0.30957c1.76904,0 3.85693,-0.167969 5.29639,-0.30957c1.5415,-0.149414 2.70361,-1.43262 2.70361,-2.98438v-5.41211c0,-1.55176 -1.16211,-2.83496 -2.70264,-2.98438Zm-7.29736,8.69043v-6l5,2.99854l-5,3.00146Z"
                                            transform="translate(0 2)"></path>
                                    </svg>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="flex items-center flex-wrap font-description">
                            <li class="flex px-1 text-[16px] w-full mb-2">&copy; Half Price Packaging 2024</li>
                            <li class="flex px-1">
                                <NuxtLink to="/terms-and-conditions" class="text-[16px]">Terms & Conditions</NuxtLink>
                            </li>
                            <li class="flex px-1"><span class="inline-block w-[1px] h-[12px] bg-gray-300"></span></li>
                            <li class="flex px-1">
                                <NuxtLink to="/privacy-policy" class="text-[16px]">Privacy Policy</NuxtLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    </ClientOnly>
    <LazyGeneralPopupWrapper />
    <LazyGeneralZohoScriptWrapper />
</template>

<style lang="scss" scoped></style>