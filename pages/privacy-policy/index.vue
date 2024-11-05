<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useHead({
    link: [
        {
            rel: 'canonical',
            href: `https://www.halfpricepackaging.com${route.path}`,
        },
    ],
})
useSeoMeta({
    title: "Privacy Policy | Half Price Packaging",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "Privacy Policy | Half Price Packaging" },
        { name: 'description', content: "Click and review our privacy policy to see how we collect, store and use the information that we collect from you. Read the full policy online for your satisfaction!" },
        { property: 'og:title', content: "Privacy Policy | Half Price Packaging" },
        { property: 'og:description', content: "Click and review our privacy policy to see how we collect, store and use the information that we collect from you. Read the full policy online for your satisfaction!" },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "Privacy Policy | Half Price Packaging" },
        { name: 'twitter:description', content: "Click and review our privacy policy to see how we collect, store and use the information that we collect from you. Read the full policy online for your satisfaction!" },
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
                    <li><span>Privacy Policy</span></li>
                </ul>
            </div>
        </div>
        <div class="section__headerWrap bg-gray-100 py-[30px] md:py-[50px]">
            <div class="md:container md:mx-auto px-[20px] px-[15px]">
                <div class="inner__wrap flex flex-wrap">
                    <div class="content__wrapper w-full">
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-0">
                            Privacy Policy</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="hpp__pageContentWrapper pt-[30px] md:pt-[50px] pb-[50px] md:pb-[100px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Using the
                    Half Price Packaging website is the acceptance of this Privacy Policy. The privacy of our website
                    users is our top priority. We ensure that any information we collect for order processing and
                    customer care services will not be shared with third-party users. We use these pieces of information
                    for fulfilling customer orders, shipping requests, and contacting customers.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Legal Age for
                    Website Usage</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Half Price
                    Packaging website is not for children. We do not collect data from children under 16. Using this
                    website, you must be above the legal age to place orders or submit your personal data. If you think
                    we have collected personal data from your underage child, please contact us to get it removed.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Personal Data
                    Collection</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">While you use our
                    website, we may collect personal data, including:</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Contact
                    Details</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">This may include Name,
                    Email Address, Shipping Address, and Phone Number.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Shipping
                    Receipt and Route Information</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">This will include
                    information like the recipient's Contact numbers, Shipment routing, Forwarding directions, Delivery
                    destination, Order tracking, Shipment status, Product quantity, and Custom information that can help
                    us ensure timely delivery of your custom boxes.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Account
                    Details</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">While processing orders,
                    we may collect account details, including user Names, Passwords, and other required Credentials.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Financial
                    Details</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We may collect financial
                    information that includes the Bank, Credit account, and other Payment system details.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Other
                    Information That We May Collect</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Half Price Packaging can
                    also collect Device identification, IP address, Browser setting, and Type, System usage, Referring
                    website addresses, Email tracking, Geolocation data, and Content access activity.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">User
                    Information</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We can collect the user
                    information, including Purchase history, Login history, Preferences, and Communications.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Why and How
                    We Use Data?</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We use your Personal Data
                    that we collect or receive for the following lawful purposes:</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">To Manage
                    Customer/User Accounts</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We use/process personal
                    data for managing our contracts for the website, products, and service use; if you do not have any
                    contract either explicitly or for the sake of completing a sale or transaction based on legitimate
                    interest for providing you with the essential functionality which is required for the use of our
                    website.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">For Providing
                    Products and Services</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Half Price
                    Packaging processes/uses personal data collected from users for performing their contract for the
                    usage of our website and its services and for fulfilling responsibilities under the terms of service
                    and use. If we are not in contact with you, we process or use the data based on our lawful interest
                    in operating and administering the website for providing you with the content you request or access.
                </p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">For
                    Processing Payments</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Suppose you have provided
                    us with your financial information. In that case, we will process your personal data to verify the
                    provided information and collect the payments essential to performing a contract with you.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">To Keep You
                    Updated About Our New Products and Services</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Half Price Packaging also
                    processes your personal data to provide you with information about our new products and services and
                    other personalized content to the extent it is essential for our lawful interest in promoting our
                    products, services, and the website.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">To Improve
                    Our Website, Products, and Services</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We also process your
                    personal data to analyze trends, track website usage, and other interactions with the Half Price
                    Packaging website, its products, and services to the extent we feel it is essential for our
                    legitimate interest to develop, improve products and services as well as to provide you with the
                    more relevant content and offers.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">For
                    Addressing Security, Fraud, and Technical Issues</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We process
                    your personal data in order to track the usage of our website and services, create aggregate data,
                    verify activity and accounts, and enforce the terms and policies of our website to the extent they
                    are essential for our lawful interest to promote the security and safety of the services,
                    applications, and systems for the sake protecting our rights and of others.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">To Whom We
                    Can Share Your Personal Data?</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Considering the purposes
                    mentioned above for processing your personal data, we may share it with entities including:</p>
                <ul class="pl-[20px] mb-[20px]">
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Our service
                        providers</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Payment processors
                    </li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Your affiliated
                        customers</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Professional
                        advisors</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Our third-party
                        affiliates</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Legal authorities
                    </li>
                </ul>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Duration of
                    Keeping Your Personal Data</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We can keep
                    your Personal Data for as long as is necessary to fulfill our legal responsibilities or as long as
                    is essential to meet the original purpose of collection.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Cookies
                    Policy</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Like many websites, Half
                    Price Packaging uses "cookies." A cookie is a little piece of data saved on a user's device and
                    contains information about their visit to a website.<br />We use cookies of various types,
                    including:</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Analytics
                    Cookies</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Half Price
                    Packaging uses analytics cookies to track a user's visit information, duration and time of website
                    visit, time zone, referring website, IP address, and pages viewed. We will be using this information
                    for improving and administering our website.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Functional
                    Cookies</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We use these
                    cookies for tracking the login IDs, pages viewed, and system preferences. We also use cookies that
                    are necessary for the functionality and performance of our website. You can change the user setting
                    in your browsers if you do not want to let us store cookies on your system.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Your Rights
                </h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Based on the
                    geographical territory in which you live, you may have certain privileges regarding your Personal
                    Data. With Half Price Packaging, you have the following entitlements regarding your personal data:
                </p>
                <p>You can have access to your personal information that we have on file;<br />
                    Learn more about how we handle your personal information.<br />
                    Correct any inaccuracies or omissions in your personal information;<br />
                    Request that your personal information be erased or deleted;<br />
                    Restrict our use of your personal information;<br />
                    Transfer your Personal Data to a third-party data processor;<br />
                    You are allowed to object to the processing and use of your personal data by us;<br />
                    Opt out of some third-party disclosures of your Personal Data;<br />
                    If you're under the age of 16, you can opt into certain third-party disclosures of your Personal
                    Data.<br />
                    We will not mistreat you if you exercise your rights;<br />
                    Not be subjected to a legal decision based exclusively on automated processing, including profiling
                    (we do not do this on our website or in our products and services at the moment);<br />
                    You can withdraw your authorization at any time without affecting the legitimacy of the processing
                    based on such authorization before its withdrawal; and<br>
                    Complaint to a supervisory authority.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Exercise Your
                    Rights</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">For exercising your
                    rights, please do contact us by using the details in the Contact Us section. We always try to answer
                    all lawful, checkable requests as fast as possible and will reach you if we need further
                    information.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Security of
                    Personal Data</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">The protection of the
                    user/customer's personal data is our top priority, and we take all reasonable measures to prevent
                    data loss, inappropriate access, and misuse. We always use generally accepted data protection
                    practices, including encryption and firewalls. As we follow the generally accepted personal data
                    protection standards, we cannot guarantee the 100% security of a data storage or transmission
                    method. Users are liable for the protection of their account details and devices.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Banking and credit/debit
                    card information for automated clearing house (ACH) payments that you use for the checkouts is
                    submitted directly to our protected merchant processor using their best standards and protection
                    standards. We do not access or keep full credit/debit card numbers or other bank account details for
                    ACH processing in the online checkout process at any time. Our direct payment gateways providers are
                    aligned to the standards set by the PCI-DSS, which is managed by the PCI Security Standards Council
                    that is a mutual effort of brands like MasterCard, Discover, American Express, and Visa. PCI-DSS
                    standards help us ensure the safe management of credit/debit card information by our data store or
                    data storage service providers.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">International
                    Data Transfers</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Your
                    personal data collected by <NuxtLink to="/">Half Price Packaging</NuxtLink> can be processed within
                    and outside of your jurisdiction and countries where the standards or laws of the European
                    Commission are not applicable, or your local authority which might not ensure the same level of data
                    protection as in your jurisdiction. However, we always make sure that the entities who receive data
                    offer a sufficient level of security by entering into contracts with them. And if necessary, we add
                    contractual clauses regarding data storage and security approved by the European Commission. We
                    might be asking for your consent regarding international data transfers. Usually, we transfer your
                    data to the servers located in the United States for manufacturing, fulfilling, and servicing your
                    orders.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Changes to
                    The Privacy Policy</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">Changes to our privacy
                    policy can occur from time to time, reflecting amendments to our practices, legal requirements,
                    technologies, and other related factors. Please keep visiting our privacy policy page from time to
                    time to stay updated. Any changes to the privacy policy will be immediately effective from when we
                    update the page.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Note</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">No mobile information
                    will be shared with third parties/affiliates for marketing/promotional purposes.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Contact Us
                </h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">For
                    exercising your rights or any other kind of queries, you should contact us via email at <NuxtLink
                        to="tel:+18662252112">866-225-2112</NuxtLink> or mail us at <NuxtLink
                        to="mailto:orders@halfpricepackaging.com">orders@halfpricepackaging.com</NuxtLink>, or our
                    online chat support.</p>
            </div>
        </div>
        <LazyGeneralSampleKitWrapper />
    </div>
</template>

<style lang="scss" scoped></style>
