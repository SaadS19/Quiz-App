<template>
    <v-col class="text-h4">
        <p>{{ minutes }} : {{ seconds }}</p>
    </v-col>
</template>

<script>

export default {
    name: 'CountdownTimer',
    computed: {
        minutes() {
            return this.$store.getters['count/minutes']
        },
        seconds() {
            return this.$store.getters['count/seconds']
        }
    },
    methods: {
        initializeTimer() {
            this.$store.dispatch('count/initializeTime')
        },
        startTimer() {
            this.$store.dispatch('count/startTimer')
        },
        stopTimer() {
            this.$store.dispatch('count/stopTimer')
        }
    },
    mounted() {
        this.initializeTimer();
        this.startTimer();
    },
    beforeUnmount() {
        this.stopTimer();
    },
};
</script>