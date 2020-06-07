<template>
    <div>
        DETALLE DE CHARLA
        <div>
            {{selectedTalk.title}}
        </div>
        <div>
            {{selectedTalk.description}}
        </div>
        <div>
            {{isRepeated}}
        </div>
        <router-link class="link" :to="`/speaker/${selectedSpeaker._id}`">
            <div>
            por: {{selectedSpeaker.name}}
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    data() {
        return {
            speakersData: JSON.parse(localStorage.getItem('data')),
            talkId: this.$route.params.talkId,
            speakerId: this.$route.params.speakerId,
            talks: [],
            selectedTalk: {},
            isRepeated: 'No he dado esta charla antes',
            selectedSpeaker: {}
        }
    },
    name: "TalkDetail",
    components: {},
    mounted() {
        this.getSpeakerData();
    },
    methods: {
        getSpeakerData() {
            const selectedSpeaker = this.speakersData.filter(speaker => speaker._id === this.speakerId)
            selectedSpeaker.map(item => this.selectedSpeaker = item)
            console.log('tt',this.selectedSpeaker)
            this.getTalkData()
        },
        getTalkData() {
            const selectedTalk = this.selectedSpeaker.talks.filter(talk => talk._id === this.talkId)
            selectedTalk.map(item => this.selectedTalk = item)
            this.setRepeated()
        },
        setRepeated() {
            if(!this.selectedTalk.isRepeated) {
                this.isRepeated = 'Ya he dado esta charla antes'
            }
        }
    }
}
</script>