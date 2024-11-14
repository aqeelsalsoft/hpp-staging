<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const { FirstPageUrl } = storeToRefs(useGlobalStore());


const route = useRoute()
const router = useRouter()
 
const form = reactive({
  full_name: '',
  email: '',
  phone: '',
  box_type: '',
  extra_field: '',
  quantity: '',
  address:"",
  website:"",
  company_name:"",
})

const phoneError = ref('');
const emailError = ref('');
const quantityError = ref('');
const isProcessing = ref(false);

const onSubmit = async () => {
  if (form.extra_field) {
    console.log("Bot detected: honeypot field is filled.");
    return false;
  }
  if(!phoneError.value && !emailError.value && !quantityError.value){
    try {
    isProcessing.value = true
    const formData = new FormData()
    formData.append('full_name', form.full_name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('box_type', form.box_type)
    formData.append('quantity', form.quantity)
    formData.append('website', form.website)
    formData.append('company_name', form.company_name)
    formData.append('address', form.address)
    formData.append('file', null)
    formData.append('lead_source', 'Direct')
    formData.append('medium', 'Sample Kit Form')
    formData.append('first_page_url', window.location.origin + FirstPageUrl.value)
    formData.append('full_page_url', window.location.origin + route.fullPath)

    const response = await $fetch(`${useRuntimeConfig().public.apiURL}/submit-data`, {
      method: 'POST',
      body: formData
    })

    isProcessing.value = false;
    resetForm();
    router.push('/thank-you-sample-kit');
  } catch (error) {
    console.error(error)
    isProcessing.value = false
  }
  }
}


const resetForm = () => {
  form.full_name = ''
  form.email = ''
  form.phone = ''
  form.box_type = ''
  form.website = ''
  form.company_name = '',
  form.address = '',
  form.quantity = ''
}

const rules = {
  required: (value) => !!value || 'This field is required', 
  isNumeric: (value) => /^[+\d\s()-]+$/.test(value) || 'Phone number is not valid',
  minLength: (value, length = 6) => value.length >= length || `Phone number must be at least ${length} digits long`,
  isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Email must be valid',
  isQuantity: (value) => {
  if (!/^\d+$/.test(value)) {
    return 'Please enter a valid QTY';
  }
  return value >= 200 || 'Min 200 | Great Savings on Larger QTY';
}
};


// Function to validate
const validatePhone = () => {
  const phone = form.phone
  const numericError = rules.isNumeric(phone)
  const minLengthError = rules.minLength(phone, 6)

   if (numericError !== true) {
    phoneError.value = numericError
    return false
  } else if (minLengthError !== true) {
    phoneError.value = minLengthError
    return false
  } else {
    phoneError.value = ''
    return true
  }
}

const validateEmail = () => {
  const email = form.email
  const emailFormatError = rules.isEmail(email)
 
 if (emailFormatError !== true) {
    emailError.value = emailFormatError
    return false
  } else {
    emailError.value = ''
    return true
  }
}

const validateQuantity = () => {
  const quantity = form.quantity
  const quantityFormatError = rules.isQuantity(quantity)
   console.log("here", quantityFormatError);
   
   if (quantityFormatError !== true) {
    quantityError.value = quantityFormatError
    return false
  } else {
    quantityError.value = ''
    return true
  }
}

</script>

<template>
    <div class="hpp__instantFormWrapper">
        <div class="md:px-4 flex flex-wrap items-center justify-center">
            <div class="w-full flex flex-wrap md:flex-nowrap items-center">
                <div class="form__wrap relative w-full md:w-[60%] md:px-[30px] order-2 md:order-1">
                    <div class="header__wrap mb-[30px]">
                        <h2 class="font-headings text-[30px] md:text-[36px] leading-[34px] md:leading-[40px] font-bold tracking-tight text-[#242424] sm:text-4xl mb-4">Order a Sample Kit</h2>
                        <p class="font-description text-[#212529] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Get Free Consultation and Order Your Sample Kit to feel More Confident for Choosing Half Price Packaging as your product packaging partner.</p>
                    </div>
                    <form @submit.prevent="onSubmit" id="hpp__instantPricesForm" class="mb-0">
                        <input
                          type="text"
                          name="extra_field"
                          v-model="form.extra_field"
                          class="hidden"
                          autocomplete="off"
                        />
                        <div class="flex flex-wrap ml-[-5px] mr-[-5px]">
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-full-name" class="sr-only">Full Name</label>
                                <input required v-model="form.full_name" type="text" placeholder="Full Name*" id="ipf-full-name"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-email" class="sr-only">Email</label>
                                <input required v-model="form.email" type="email" placeholder="Email*" id="ipf-email"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-phone" class="sr-only">Phone</label>
                                <input required v-model="form.phone" @input="validatePhone()" type="text" placeholder="Phone*" id="ipf-phone"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                                    <span v-if="phoneError" class="text-red-500 text-xs mt-1">{{ phoneError }}</span>
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-company-name" class="sr-only">Company Name</label>
                                <input v-model="form.company_name" type="text" placeholder="Company Name" id="ipf-company-name"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-website" class="sr-only">Website</label>
                                <input v-model="form.website" type="text" placeholder="Website" id="ipf-website"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-address" class="sr-only">Physical Address</label>
                                <input v-model="form.address" type="text" placeholder="Physical Address" id="ipf-address"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-quantity" class="sr-only">Quantity</label>
                                <input v-model="form.quantity" type="text" placeholder="Quantity" id="ipf-quantity"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-select-industry" class="sr-only">Select Industry</label>
                                <select v-model="form.box_type" name="box-type" id="ipf-select-industry"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px] bg-transparent">
                                    <option value="" disabled>Select Industry</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Apparel Fashion">Apparel Fashion</option>
                                    <option value="CBD">CBD</option>
                                    <option value="Tobacco Cigarette">Tobacco Cigarette</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Marijuana Cannabis">Marijuana Cannabis</option>
                                    <option value="Candy Sweets">Candy Sweets</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Food Restaurant">Food Restaurant</option>
                                    <option value="Pharma">Pharma</option>
                                    <option value="Ecommerce">Ecommerce</option>
                                    <option value="Soap">Soap</option>
                                    <option value="Gift">Gift</option>
                                    <option value="Candle">Candle</option>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Vape E-Cigarette">Vape E-Cigarette</option>
                                    <option value="Toy Games">Toy Games</option>
                                    <option value="Coffee Tea">Coffee Tea</option>
                                    <option value="Holiday">Holiday</option>
                                    <option value="Pet">Pet</option>
                                    <option value="Presentation">Presentation</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Sustainable Packaging">Sustainable Packaging</option>
                                    <option value="Stationery">Stationery</option>
                                    <option value="Baby Products">Baby Products</option>
                                    <option value="Gadgets Accessories">Gadgets Accessories</option>
                                    <option value="Jewelry">Jewelry</option>
                                    <option value="Office Workplace">Office Workplace</option>
                                    <option value="Beverage, Wine, Liqour">Beverage, Wine, Liqour</option>
                                    <option value="Fragrance">Fragrance</option>
                                </select>
                            </div>
                            <div class="flex items-end basis-full px-[5px] mt-[10px]">
                                <button
                                    :disabled="isProcessing"
                                    class="font-description text-[#ffffff] text-[14px] font-medium border border-[#ef4b5f] bg-[#ef4b5f] select-none transition-all py-[8px] px-[35px] rounded-[6px] no-underline select-none font-normal"
                                    type="submit">{{isProcessing ? 'Loading...' : 'Order Now'}}</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="hidden md:block w-full md:w-[40%] text-center order-1 md:order-2 mb-[40px] md:mb-0">
                    <NuxtImg format="webp" src="/images/box-sample-kit.png" width="400" height="483" alt="Sample Kit Thumbnail" loading="lazy"
                class="inline-block w-[400px] h-auto object-contain" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
