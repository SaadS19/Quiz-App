<template>
    <v-card>
        <!-- eslint-disable  -->
        <v-card-title>Quiz Result</v-card-title>
        <v-data-table :headers="computedHeaders" :items="items" hide-default-footer>
            <template v-for="header in computedHeaders" :key="header.key" v-slot:[`header.${header.key}`]="{ column }">
                <template v-if="$slots[`header.${header.key}`]">
                    <slot :name="`header.${header.key}`" :item="column" />
                </template>
                <template v-else>
                    <span>{{ header.title }}</span>
                </template>
            </template>

            <template v-for="header in computedHeaders" :key="header.key" v-slot:[`item.${header.key}`]="{ item }">
                <v-row>
                    <v-col>
                        <template v-if="$slots[`column.${header.key}`]">
                            <slot :name="`column.${header.key}`" :item="item" />
                        </template>
                        <template v-else>
                            {{ item[header.key] }}
                        </template>
                    </v-col>
                </v-row>
            </template>
        </v-data-table>
        <v-card-text class="text-h5">Score : {{ score }} / {{ questions.length }}</v-card-text>
        <v-card-actions>
            <v-btn class="ms-2" @click="resetQuiz">Reset Quiz</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { computed, ref } from 'vue';
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
        actions: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        score() {
            return this.$store.getters.score;
        },
        questions() {
            return this.$store.getters.questions
        }
    },
    methods: {
        resetQuiz() {
            this.$store.dispatch('count/resetTimer')
        }
    },
    unmounted() {
        this.$store.dispatch('count/resetTimer')
    },
    setup(props) {
        const headers = ref(props.headers);

        const computedHeaders = computed(() => {
            if (props.actions) {
                const newHeader = [...headers.value, { key: 'actions', title: ' Actions' }];
                console.log(newHeader);
                return newHeader;
            }
            return headers.value;
        });

        return {
            computedHeaders
        };
    }
};
</script>