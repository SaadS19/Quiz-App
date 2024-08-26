<template>
    <section class="d-flexflex-col">
        <v-col>{{ displayMinutes }}</v-col>
        <span>:</span>
        <v-col>
            {{ displaySeconds }}
        </v-col>
    </section>
</template>

<script>
export default {
    data() {
        return {
            displayMinutes: 0,
            displaySeconds: 0
        }
    },
    methods: {
        showTime() {
            let timer = 60000;
            const timerId = setTimeout(() => {
                const minutes = timer / 60;
                const seconds = timer % 60;

                this.displayMinutes = this.minutes < 10 ? '0' + minutes : minutes;
                this.displaySeconds = this.seconds < 10 ? '0' + seconds : seconds;

                if (--timer < 0) {
                    clearInterval(timerId);
                    console.log('Times Up')
                    return;
                }
            }, 1000)
        }
    },
    created() {
        this.showTime();
    }
}
</script>