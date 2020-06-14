<template>
    <div>
        Añadir nueva charla
        <app-registration-form @newTalk="getValue">
        </app-registration-form>
    </div>
    
</template>
<script>
import { createNewTalk }from "../services/services"
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
        this.speakerId = this.$route.params.speakerId
    },
    methods: {
        getValue(payload) {
            createNewTalk(this.speakerId, payload)
        },
       
    }
    
}
</script>