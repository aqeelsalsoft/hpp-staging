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
  finishes: '',
  printing_sides: '',
  coating_lamination: '',
  card_thickness: '',
  materials: '',
  length: '',
  width: '',
  height: '',
  unit: '',
  quantity: '',
  file: null,
  description: '',
})

const phoneError = ref('');
const emailError = ref('');
const quantityError = ref('');
const isProcessing = ref(false);


const onSubmit = async () => {
  if(!phoneError.value && !emailError.value && !quantityError.value){
    try {
    isProcessing.value = true
    const formData = new FormData()
    formData.append('full_name', form.full_name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('box_type', form.box_type)
    formData.append('card_thickness', form.card_thickness)
    formData.append('coating_lamination', form.coating_lamination)
    formData.append('printing_sides', form.printing_sides)
    formData.append('finishes', form.finishes)
    formData.append('materials', form.materials)
    formData.append('length', form.length)
    formData.append('width', form.width)
    formData.append('hieght', form.height)
    formData.append('unit', form.unit)
    formData.append('quantity', form.quantity)
    formData.append('lead_source', 'Web')
    formData.append('medium', ' Custom Quote Form')
    formData.append('file', null)
    formData.append('description', form.description)
    formData.append('first_page_url', window.location.origin + FirstPageUrl.value)
    formData.append('full_page_url', window.location.origin + route.fullPath)

    const response = await $fetch(`${useRuntimeConfig().public.apiURL}/submit-data`, {
      method: 'POST',
      body: formData
    })

    isProcessing.value = false;
    resetForm();
    router.push('/thank-you-custom-quote-form');
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
  form.finishes = ''
  form.printing_sides = '',
  form.coating_lamination = '',
  form.card_thickness = '',
  form.materials = ''
  form.length = ''
  form.width = ''
  form.height = ''
  form.unit = ''
  form.quantity = ''
  form.file = null
  form.description = ''
}

const rules = {
  required: (value) => !!value || 'This field is required', 
  isNumeric: (value) => /^[+\d\s()-]+$/.test(value) || 'Phone number is not valid',
  minLength: (value, length = 6) => value.length >= length || `Phone number must be at least ${length} digits long`,
  isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Email must be valid',
  isQuantity: (value) => value >= 200 || 'Min 200 | Great Savings on Larger QTY', 
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
   
   if (quantityFormatError !== true) {
    quantityError.value = quantityFormatError
    return false
  } else {
    quantityError.value = ''
    return true
  }
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  form.file = file
}

// Validate all fields
const validate = () => {
  const isPhoneValid = validatePhone()
  const isEmailValid = validateEmail()
  const isQuantityValid = validateQuantity()
  
  return isPhoneValid && isEmailValid && isQuantityValid
}
</script>


<template>
    <div class="hpp__instantFormWrapper" id="instantFormWrapper">
        <div class="flex flex-wrap items-center justify-center pl-[30px]">
            <div class="w-full mb-[30px] px-[25px]">
                <h3 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-5 md:mb-3">Get In Touch</h3>
                <p class="font-description text-[#212529] text-[16px] leading-[24px]">Fill out the form to get in touch with our
                    dedicated packaging consultant</p>
            </div>
            <div class="px-[25px] w-full bg-white rounded-[32px]">
                <form id="hpp__instantPricesForm" @submit.prevent="onSubmit" class="mb-0">
                    <div class="flex flex-wrap ml-[-5px] mr-[-5px]">
                        <div class="relative w-[50%] px-[5px] mb-[10px]">
                            <label for="ipf-full-name" class="sr-only">Full Name</label>
                            <input type="text" required v-model="form.full_name" placeholder="Full Name*" id="ipf-full-name"
                                class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                        </div>
                        <div class="relative w-[50%] px-[5px] mb-[10px]">
                            <label for="ipf-phone" class="sr-only">Phone</label>
                            <input type="text" @input="validatePhone()" required v-model="form.phone" placeholder="Phone*" id="ipf-phone"
                                class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                <span v-if="phoneError" class="text-red-500 text-xs mt-1">{{ phoneError }}</span>
                        </div>
                        <div class="relative w-[50%] px-[5px] mb-[10px]">
                            <label for="ipf-email" class="sr-only">Email</label>
                            <input  v-model="form.email" type="email" required placeholder="Email*" id="ipf-email"
                                class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                <span v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</span>
                        </div>
                        <div class="relative w-[50%] px-[5px] mb-[10px]">
                            <label for="ipf-email" class="sr-only">Subject</label>
                            <input v-model="form.email" type="text" required placeholder="Subject" id="ipf-email"
                                class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                <span v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</span>
                        </div>
                        <div class="relative w-full px-[5px] mb-[20px]">
                            <textarea
                            v-model="form.description"
                            class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]"
                            placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote." name="message" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div class="relative w-full px-[5px] mb-[20px]">
                            <UCheckbox color="rose" label="I Consentto Receive SMS Notifications, Alerts & Occasional Marketing Communication from Half Price Packaging. Message frequency varies. Message & data ratesmay apply. Text HELP to (866) 225-2112 for assistance. You can reply STOP to unsubscribe at any time." />
                        </div>
                        <div class="relative w-full px-[5px] mb-[20px]">
                            <div class="flex">
                                <NuxtLink to="/terms-and-conditions" class="block font-description font-normal text-[#bc3042] text-[13px]">Terms & Conditions</NuxtLink>
                                <div class="block h-[18px] w-[3px] bg-slate-400 mx-[10px]"></div>
                                <NuxtLink to="/privacy-policy" class="block font-description font-normal text-[#bc3042] text-[13px]">Privacy Policy</NuxtLink>
                            </div>
                        </div>
                        <div class="flex w-full px-[5px]">
                            <button
                                 :disabled="isProcessing"
                                class="font-description text-[#ffffff] text-[14px] font-medium border border-[#ef4b5f] bg-[#ef4b5f] select-none transition-all py-[8px] px-[25px] rounded-[6px] no-underline select-none font-normal w-[200px]"
                                type="submit">{{isProcessing ? 'Loading...' :'Order Now'}}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

