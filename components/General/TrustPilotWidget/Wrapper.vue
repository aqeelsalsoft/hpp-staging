<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Dynamically load the Trustpilot script when the component is mounted
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    script.async = true
    document.body.appendChild(script)
})
</script>

<template>
    <div class="widget__trustPilotWrap">
        <!-- TrustBox widget - Mini -->
        <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32"
            data-businessunit-id="5bb659709eb6b60001e191ea" data-style-height="85px" data-style-width="100%">
            <a href="https://www.trustpilot.com/review/www.halfpricepackaging.com" target="_blank"
                rel="noopener">Trustpilot</a>
        </div>
        <!-- End TrustBox widget -->
    </div>
</template>

<style lang="scss" scoped></style>
