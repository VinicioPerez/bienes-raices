import { ref, computed, onMounted} from 'vue';
import { defineStore } from "pinia";
import { useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {

    const auth = useFirebaseAuth()
    const authUser = ref(null)

    console.log(authUser.value)

    const errorMsg = ref('')

    const errorCodes = {
         'auth/invalid-credential': 'Usuario no encontrado',
         'auth/invalid-password': 'La contraseña es incorrecta',
    }

    onMounted(() =>{ 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                authUser.value = user
            }
        })
    })

    const login = ({email, password}) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                authUser.value = user

                console.log(authUser.value)
        })
        .catch(error => {
            console.log(errorCodes[error.code])
            errorMsg.value = errorCodes[error.code]
        });
    }

    const hasError = computed(() => {
        
        return errorMsg.value
    })

    const isAuth = computed(() => {
        return authUser.value
    })





    return {
        login,
        hasError,
        errorMsg,
        isAuth,
    }
})