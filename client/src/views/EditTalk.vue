<template>
    <div>
        editar CHARLA
        <app-registration-form @talkEdited="getValue">
        </app-registration-form>
    </div>
    
</template>
<script>
import { editTalk } from '../services/services'
import AppRegistrationForm from "../components/AppRegistrationForm"
export default {
    data() {
        return {
            speakerId: null,
            talkId: null
        }
    },
    components: {
        AppRegistrationForm
    },
    mounted() {
        this.speakerId = this.$route.params.speakerId
        this.talkId = this.$route.params.talkId
    },
    methods: {
        getValue(payload) {
            editTalk(this.speakerId, this.talkId, payload)
        }
    }
}
</script>