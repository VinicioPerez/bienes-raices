<script setup>
    import { useForm, useField } from 'vee-validate';
    import { loginSchema } from '@/validation/LoginSchema';

    const {handleSubmit} = useForm({validationSchema: loginSchema})

    const email = useField('email')
    const password = useField('password')

    const submit = handleSubmit(() => {
        console.log('Submit....')
    })



</script>

<template>
    
    <v-card
        flat 
        max-width="500"
        class="mx-auto my-10"
    >
        <v-card-title 
            class="text-h3 text-center"
            tag="h3"
        >
            Iniciar Sesión
        </v-card-title>
        <v-card-subtitle 
            class="text-h5 text-center"
        >
            Inicia Sesión con tu cuenta
        </v-card-subtitle>
        <v-form class="mt-5">
            <v-text-field
                type="email"
                label="Email"
                color="blue-darken-1" 
                bg-color="blue-grey-lighten-5"
                class="mb-4"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
            />
            <v-text-field
                type="password"
                label="Password"
                color="blue-darken-1"   
                bg-color="blue-grey-lighten-5"
                class="mb-4"            
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
            />
            <v-btn
                block
                color="blue-darken-2"
                @click="submit"
            >
                Iniciar Sesión
            </v-btn>

            <!-- <v-otp-input></v-otp-input> -->

            
        </v-form>
    </v-card>
</template>