<template>
    <section class="">
        <v-row>
            <v-col class=" text-h4">{{ minutes }} : {{ seconds }}</v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    computed: {
        minutes() {
            return this.$store.getters.minutes;
            // return this.$store.getters['timer/minutes'];
        },
        seconds() {
            return this.$store.getters.seconds;
            // return this.$store.getters['timer/seconds'];
        }
    },
    methods: {
        showTime() {
            // const timerId = setInterval(() => {
            //     console.log(this.timer)
            //     let minutes = Math.floor(this.timer / 60);
            //     let seconds = this.timer % 60;

            //     this.displayMinutes = minutes < 10 ? '0' + minutes : minutes;
            //     this.displaySeconds = seconds < 10 ? '0' + seconds : seconds;
            //     if (--this.timer < 0) {
            //         clearInterval(timerId);
            //         console.log('Times Up')
            //         return;
            //     }
            // }, 1000)
            this.$store.dispatch('startTime')
        },
    },
    created() {
        this.showTime();
    },
}
</script>