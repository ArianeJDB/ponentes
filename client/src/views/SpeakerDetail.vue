<template>
    <div>
        {{selectedSpeaker.name}}
        {{selectedSpeaker.biography}}
        {{selectedSpeaker.image}}
        {{selectedSpeaker.email}}
        <ul>
            charlas:
            <li v-for="(talk, index) in selectedSpeaker.talks" :key='index'>
                {{talk.title}}
            </li>
        </ul>
        <ul>
            redes:
            <li>
                {{selectedSpeaker.twitter}}
            </li>
            <li>
                {{selectedSpeaker.github}}
            </li>
            <li>
                {{selectedSpeaker.linkedin}}
            </li>
        </ul>




    </div>
</template>
<script>
export default {
    data() {
        return {
            speakersData: JSON.parse(localStorage.getItem('data')),
            speakerId: this.$route.params.speakerId,
            selectedSpeaker: {}
        }
    },
    mounted() {
        this.getSpeakerData()
    },
    methods: {
        getSpeakerData() {
            const selectedSpeaker = this.speakersData.filter(speaker => speaker._id === this.speakerId)
            selectedSpeaker.map(item => this.selectedSpeaker = item)
        }
    }
}
</script>