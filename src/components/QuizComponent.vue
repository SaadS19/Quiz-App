<template>
    <!-- eslint-disable -->
    <v-container fluid class="">
        <v-row no-gutters>
            <v-col cols="12" align="center" class="">
                <v-btn color="success" v-if="!timer" @click="toggleTimer">Start Quiz</v-btn>
                <the-timer v-if="timer"></the-timer>
            </v-col>
        </v-row>
        <v-row v-if="timer">
            <v-col cols="12">
                <div v-if="currentQuestion < questions.length" class="d-flex flex-column justify-space-between">
                    <v-card class="d-flex flex-column" :style="{ height: height }">
                        <v-card-title class="text-h4 text-md-h4 text-sm-h4">Question {{ questionNo }} of {{
                            questions.length
                        }}</v-card-title>
                        <v-card-text class="text-h5 text-md-h4">{{ questions[currentQuestion].question
                            }}</v-card-text>
                        <v-card-actions class="">
                            <v-radio-group class="" :disabled="disableOption" v-model="selectedAnswer">
                                <v-radio class="" v-for="(option, index) in options" :key="index" :label="option"
                                    :value="option" @click="submitAnswer"></v-radio>
                            </v-radio-group>
                        </v-card-actions>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn @click="previousQuestion" :disabled="currentQuestion === 0">Previous</v-btn>
                            <v-btn @click="nextQuestion">Next</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div v-else>

                    <data-table :header="ansinMeds.HEADER" :items="ansinMeds.ITEMS"
                        :itemSlot="['header-id', 'header-date', 'header-patient.name', 'header-status', 'header-meds', 'id', 'date', 'patient', 'medications', 'status']">
                        <template #header-id="{ column }">
                            <div class="custom-header">Custom {{ column.text }}</div>
                        </template>

                        <template #header-date="{ column }">
                            <div class="custom-header ">Order: {{ column.text }}</div>
                        </template>

                        <template #header-patient.name="{ column }">
                            <div class="custom-header ">pName: {{ column.text }}</div>
                        </template>

                        <template #header-meds="{ column }">
                            <div class="custom-header ">Meds: {{ column.text }}</div>
                        </template>
                        <template #header-status="{ column }">
                            <div class="custom-header ">Status: {{ column.text }}</div>
                        </template>

                        <template #id="{ id }">
                            <div class="me-2">
                                <p><strong>Custom ID:</strong> {{ id }}</p>
                            </div>
                        </template>

                        <template #date="{ date }">
                            <div class="custom-date me-2">
                                <h3>Custom Date: {{ date.split("@")[0] }}</h3>
                            </div>
                        </template>

                        <template #patient="{ patient }">
                            <div class="custom-patient me-2">
                                <p><strong>Patient Name:</strong> {{ patient.name }}</p>
                            </div>
                        </template>

                        <template #medications="{ medications }">
                            <div class="custom-medications me-2">
                                <h2>Medications:</h2>
                                <ul>
                                    <li v-for="medication in medications" :key="medication.id">
                                        <strong>{{ medication.name }}</strong> - Qty: {{ medication.qty }}
                                    </li>
                                </ul>
                            </div>
                        </template>

                        <template #status="{ status }">
                            <div class="custom-status me-3">
                                <h2>Status:</h2>
                                <ul>
                                    <li v-for="statusItem in status" :key="statusItem.label">
                                        {{ statusItem.label }} - Color: {{ statusItem.color || 'Not Provided' }}
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </data-table>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TheTimer from "./TheTimer.vue";
import { useDisplay } from "vuetify";
import { computed } from "vue";
import DataTable from "./DataTable.vue";
export default {
    components: {
        TheTimer,
        DataTable
    },
    computed: {
        currentQuestion() {
            return this.$store.getters["currentQuestion"];
        },
        questions() {
            return this.$store.getters["questions"];
        },
        selectedAnswer() {
            return this.$store.getters["selectedAnswer"];
        },
        questionNo() {
            const currentQuestion = this.$store.getters.currentQuestion;
            return currentQuestion + 1;
        },
        disableOption() {
            return this.$store.getters["disableOption"];
        },
        options() {
            const currentQuestion = this.$store.getters.currentQuestion;
            const question = this.$store.getters.questions;
            return question[currentQuestion].options;
        },
        timer() {
            return this.$store.getters.timer;
        },
    },
    methods: {
        editItem(item) {
            console.log(item)
        },
        deleteItem(item) {
            console.log(item)
        },
        toggleTimer() {
            this.$store.dispatch("toggleTimer");
            this.$store.dispatch('setTimerQuestion')
        },
        submitAnswer($event) {
            const answer = $event.target.value;
            this.$store.dispatch("setSelectedAnswer", answer);
            this.$store.dispatch("submitData");
        },
        nextQuestion() {
            this.$store.dispatch("nextQuestion");
        },
        previousQuestion() {
            this.$store.dispatch("previousQuestion");
        },

    },
    data() {
        return {
            "ansinMeds": {
                "HEADER": [
                    {
                        "sortable": false,
                        "text": "Id",
                        "value": "id"
                    },
                    {
                        "sortable": false,
                        "text": "Order Date",
                        "value": "date"
                    },
                    {
                        "sortable": false,
                        "text": "Patient",
                        "value": "patient.name"
                    },
                    {
                        "sortable": false,
                        "text": "Pharmacy",
                        "value": "pharmacy.name"
                    },
                    {
                        "sortable": false,
                        "text": "Status",
                        "value": "status"
                    },
                    {
                        "sortable": false,
                        "text": "Address",
                        "value": "proxyAddress"
                    },
                    {
                        "sortable": false,
                        "text": "Medications",
                        "value": "meds"
                    },
                    {
                        "sortable": false,
                        "text": "",
                        "value": "proxyCreateShipping"
                    },
                    {
                        "sortable": false,
                        "text": "Next Address",
                        "value": "ptAddress"
                    },
                    {
                        "sortable": false,
                        "text": "Medications",
                        "value": "pfsMeds"
                    },
                    {
                        "sortable": false,
                        "text": "",
                        "value": "proxyPFSCreateShipping"
                    },
                    {
                        "sortable": false,
                        "text": "Next Address",
                        "value": "pfsAddress"
                    },
                    {
                        "sortable": false,
                        "text": "Ship Method",
                        "value": "shipMethod"
                    },
                    {
                        "sortable": false,
                        "text": "",
                        "value": "ACTION"
                    }
                ],
                "ITEMS": [
                    {
                        "date": "8/29/2024@17:43",
                        "editedPtAddress": "",
                        "id": 37843,
                        "invoiceId": 44420,
                        "medications": [
                            {
                                "PFS": 0,
                                "PFSReceived": 0,
                                "PFSReceivedBy": "",
                                "PFSReceivedDate": "",
                                "comments": "",
                                "deleted": 0,
                                "deletedBy": "",
                                "deletedDate": "",
                                "deletedNotes": "",
                                "duration": 84,
                                "id": 608908,
                                "ien": 1,
                                "name": "SL-TIRZEPATIDE PLUS (TIRZEPATIDE/CYANOCOBALAMIN) 10MG/500MCG/ML, 2 ML VIAL INJ,SOLN",
                                "notes": "",
                                "pharmacyReceived": 1,
                                "proxyReceived": 0,
                                "proxyReceivedBy": "",
                                "proxyReceivedDate": "",
                                "qty": "3 VIAL(S)"
                            }
                        ],
                        "meds": "SL-TIRZEPATIDE PLUS (TIRZEPATIDE/CYANOCOBALAMIN) 10MG/500MCG/ML, 2 ML VIAL INJ,SOLN",
                        "oNotes": "",
                        "patient": {
                            "id": 4960,
                            "name": "ESHKAR BUTBUL",
                            "pfs": "",
                            "shipping": {
                                "city": "Calabasas",
                                "state": "CA",
                                "street": "4072 declaration ave",
                                "street2": "",
                                "zip": 91302
                            }
                        },
                        "pfsAddress": "",
                        "pfsMeds": "",
                        "pharmacy": {
                            "id": 13,
                            "name": "SOUTH LAKE PHARMACY"
                        },
                        "pharmacyShipped": 0,
                        "pharmacyShipping": {
                            "deliveryDate": "",
                            "expectedDeliveryDate": "9/3/2024",
                            "shipFrom": "SL",
                            "shipTo": "430 Ansin Blvd #430H, Hallandale Beach, FL 33009",
                            "status": "S",
                            "statusDescription": "shipment ready for ups",
                            "timeDescription": "",
                            "updateDate": "8/30/2024@16:49:52",
                            "updatedBy": "RJ"
                        },
                        "pharmacyTracking": "1Z6A52R30127098280",
                        "proxyAddress": "430 Ansin Blvd #430H, Hallandale Beach, FL 33009",
                        "proxyPFSShipped": 0,
                        "proxyPFSShipping": {
                            "deliveryDate": "",
                            "expectedDeliveryDate": "",
                            "shipFrom": "",
                            "shipTo": "",
                            "status": 0,
                            "statusDescription": "",
                            "timeDescription": ""
                        },
                        "proxyPFSTracking": "",
                        "proxyShipped": 0,
                        "proxyShipping": {
                            "deliveryDate": "",
                            "expectedDeliveryDate": "",
                            "shipFrom": "",
                            "shipTo": "",
                            "status": 0,
                            "statusDescription": "",
                            "timeDescription": ""
                        },
                        "proxyTracking": "",
                        "ptAddress": "4072 declaration ave Calabasas CA 91302",
                        "shipMethod": "STANDARD OVERNIGHT (BEFORE 4:30 PM)",
                        "status": [
                            {
                                "color": "green",
                                "label": "SL",
                                "next": "green"
                            },
                            {
                                "color": "",
                                "label": "Ansin",
                                "next": ""
                            },
                            {
                                "color": "",
                                "label": "PT"
                            }
                        ]
                    }
                ]
            },
        }
    },
    setup() {
        const { name } = useDisplay();

        const height = computed(() => {
            // console.log(name._object.height)
            const displayHeight = name._object.height;
            console.log(displayHeight)
            if (450 > displayHeight) return "50vh";
            else if (displayHeight >= 450 && displayHeight < 500) return "60vh";
            else if (displayHeight >= 500 && displayHeight < 550) return "60vh";
            else if (displayHeight >= 550 && displayHeight < 600) return "60vh";
            else if (displayHeight >= 600 && displayHeight < 650) return "72vh";
            else if (displayHeight >= 650 && displayHeight < 700) return "71vh";
            else if (displayHeight >= 700 && displayHeight < 750) return "73vh";
            else if (displayHeight >= 750 && displayHeight < 800) return "73vh";
            else if (displayHeight >= 800 && displayHeight < 850) return "76vh";
            else if (displayHeight >= 850 && displayHeight < 950) return "78vh";
            else if (displayHeight >= 950 && displayHeight < 1000) return "80vh";
            else if (displayHeight >= 1000 && displayHeight < 1280) return "83vh";
            else if (displayHeight >= 1280) return "85vh";
            else return "100vh";
        });
        //   console.log(height.value)
        return { height };
    }
}
</script>

<style>
.custom-header {
    font-weight: bold;
    color: #333;
}

.custom-cell {
    background-color: #f9f9f9;
    padding: 5px;
    border: 1px solid #ddd;
}

.v-label {
    font-size: 2rem
}

.custom-date,
.custom-patient,
.custom-medications,
.custom-status {
    margin-bottom: 10px;
}
</style>
