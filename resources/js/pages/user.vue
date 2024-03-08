<template>

    <div style="text-align: center; margin-top: 100px;">
        <qrcode-vue :value="value" :level="level" type="image/png"/>


<p>After scanning the QR code in your phone, you will get the url. If you copy that url and past it to browser then you will get the auth user's details.</p>



    </div>
</template>

<script setup>
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
    const id = route.params.id;

const value = ref(`${window.location.origin}/user/${id}`);
const level = ref ('M')
const renderAs = ref('svg')


</script>
