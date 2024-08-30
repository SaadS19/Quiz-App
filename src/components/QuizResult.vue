<template>
    <!--  eslint-disable  -->
    <v-card>
        <v-card-title class="d-flex align-center pe-2">Quiz Result</v-card-title>
        <v-data-table>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header.key" :style="{ textAlign: header.align || 'left' }">
                        <slot :name="`header-${header.key}`">{{ header.title }}</slot>
                    </th>

                    <th v-if="checkbox" style="color: teal;">
                        Chekbox
                    </th>
                    <th v-if="actionsHeader" style="color: teal;">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="item in items" :key="item.id">
                    <td v-for="header in headers" :key="header.key" :style="{ textAlign: header.align || 'left' }">
                        <slot :name="`cell-${header.key}`" :item="item">
                            {{ item[header.key] }}
                        </slot>
                    </td>
                </tr> -->

                <tr v-for="item in items" :key="item.id">
                    <td v-for="header in headers" :key="header.key" :style="{ textAlign: header.align || 'left' }">
                        <slot :name="`cell-${header.key}`" :item="item">
                            {{ item[header.key] }}
                        </slot>
                    </td>
                    <td v-if="checkbox">
                        <slot name="checkbox" :item="item" />
                    </td>
                    <td v-if="actionsHeader">
                        <slot name="custom-actions" :item="item" />
                    </td>
                </tr>
            </tbody>
        </v-data-table>
    </v-card>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        headers: {
            type: Array,
            required: true,
        },
        actionsHeader: {
            type: Boolean,
            default: false,
        },
        checkbox: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        score() {
            return this.$store.getters.score;
        },
        // headers() {
        //     return this.$store.getters["headers"];
        // },
        questions() {
            return this.$store.getters['questions'];
        }
    },
    methods: {
        resetQuiz() {
            this.$store.dispatch("resetQuiz");
        },
        getColor(item) {
            if (item.answerSelected === item.answer) {
                return "green";
            } else if (item.answerSelected !== item.answer) {
                return "red";
            }
        },
        setHeader() {
            this.$store.dispatch('setHeader');
        }
    },
    mounted() {
        this.setHeader();
    }
};
</script>
