<template>
    <div id="pdf-content" class="card" style="text-align: center; width: 500px; margin-left: 20px;">
        <p style="font-weight: bold;">User Details</p>
        Name: {{ name }} <br>
        Email: {{ email }} <br>
    </div>

<div style="margin: 20px 200px;"><button style="text-align: center;" @click="downloadPDF">Download PDF</button></div>

</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import html2pdf from 'html2pdf.js';

let name = ref(null);
let email = ref(null);



try {
    const route = useRoute();
    const id = route.params.id;
    let res = axios.get(`http://laraveltask.test/api/user/${id}`)
        .then((user) => {
            name.value = user.data.name;
            email.value = user.data.email;
        });
    if (res) {
        console.log(res);
        // name.value = res.data.name;
        // email.value = res.data.email;
    }

} catch (err) {
    console.log(err);
}

const downloadPDF = () => {
    const content = document.getElementById('pdf-content');
    html2pdf(content);
};


</script>
