<template>
    <div>

        <section class="vh-100 bg-image"
            style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                    <form>

                                        <div class="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" v-model="name"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example1cg">Your Name</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3cg" v-model="email"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4cg" v-model="password"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4cdg" v-model="confirm_password"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example4cdg">Repeat your
                                                password</label>
                                        </div>

                                        <div class="form-check d-flex justify-content-center mb-5">
                                            <input class="form-check-input me-2" type="checkbox" value=""
                                                id="form2Example3cg" />
                                            <label class="form-check-label" for="form2Example3g">
                                                I agree all statements in <a href="#!" class="text-body"><u>Terms of
                                                        service</u></a>
                                            </label>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="button" @click="register"
                                                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p class="text-center text-muted mt-5 mb-0">Have already an account? <a
                                                href="#!" class="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

let email = ref(null);
let password = ref(null);
let confirm_password = ref(null);
let name = ref(null);
let errors = ref([]);
let credentialNotMathced = ref(null);


const register = async function () {

    errors.value = [];

    try {

        let res = await axios.post('http://laraveltask.test/api/register', { email: email.value, password: password.value, name: name.value, confirm_password: confirm_password.value }).then((data) => {
            console.log(data.data.user.id);
            router.push({ name: 'user', params: { id: data.data.user.id } });
        });



    } catch (err) {
        console.log(err);
        errors.value = err.response.data?.errors ?? null;

        credentialNotMathced.value = err.response?.data?.error ?? null;

    }
}


</script>
