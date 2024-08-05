export const loginSchema = {
    email(value) {
        if (!value) {
          return 'Requieres ingresar un email correcto';
        }
        // si es un email válido
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return 'Email no válido. ej: ejemplo@ejemplo.com';
        }
        return true;
    },
    password(value) {
        if (value) return true
        return 'El Password es Obligatorio'
    }
}