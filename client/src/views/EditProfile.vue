<template>
    <div>
        editar perfil
        <app-registration-form @speakerEdited="getValue">
        </app-registration-form>
    </div>
    
</template>
<script>
import { editSpeaker } from "../services/services"
import AppRegistrationForm from "../components/AppRegistrationForm"
export default {
    data() {
        return {
            speakerId: null
        }
    },
    components: {
        AppRegistrationForm
    },
    mounted() {
        this.speakerId = this.$route.params.id
    },
    methods: {
        getValue(payload) {
            editSpeaker(this.speakerId, payload)
        }
    }
}
</script>