<template>
    <!-- eslint-disable -->
    <v-data-table :header="header" :items="filteredItems">
        <div class="d-flex flex-column ">
            <div class="d-flex">
                <div v-for="column in header" :key="column.value" class="flex-fill align-left">
                    <slot :name="`header-${column.value}`" :column="column">
                        {{ column.text }}
                    </slot>
                </div>
            </div>

            <div v-for="item in items" :key="item.id" class="data-item">
                <slot name="id" :id="item.id">
                    <div class="item-id me-2">
                        <p>ID :{{ item.id }}</p>
                    </div>
                </slot>

                <slot name="date" :date="item.date">
                    <div class="item-date me-3">
                        <p>Date: {{ item.date }}</p>
                    </div>
                </slot>

                <slot name="patient" :patient="item.patient">
                    <div class="item-patient me-2">
                        <p>Patient: {{ item.patient.name }}</p>
                    </div>
                </slot>

                <slot name="medications" :medications="item.medications">
                    <div class="item-medications me-2">
                        <h4>Medications:</h4>
                        <ul class="me-2">
                            <li v-for="medication in item.medications" :key="medication.id">
                                {{ medication.name }} - {{ medication.qty }}
                            </li>
                        </ul>
                    </div>
                </slot>

                <slot name="status" :status="item.status">
                    <div class="item-status me-2">
                        <h4>Status:</h4>
                        <ul>
                            <li v-for="status in item.status" :key="status.label">
                                {{ status.label }} - {{ status.color }}
                            </li>
                        </ul>
                    </div>
                </slot>

                <slot name="action" :status="item.action">
                    <div class="item-status me-2">
                        <h4>Action:</h4>
                        <v-icon class="me-2" size="small" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon class="me-2" size="small" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </div>
                </slot>
            </div>
        </div>
    </v-data-table>
</template>
<script>
export default {
    // eslint-disable
    props: {
        header: {
            type: Array,
            required: true,
            default: () => [],
        },
        items: {
            type: Array,
            required: true,
            default: () => [],
        },
        itemSlot: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    computed: {
        filteredItems() {
            const header = this.header.map(header => header.value);

            return this.items.map(item => {
                const filteredItem = {};
                header.forEach(header => {
                    filteredItem[header] = this.getNestedValue(item, header);
                });
                return filteredItem;
            });
        },
    },
    methods: {
        getNestedValue(obj, data) {
            return data.split('.').reduce((item, key) => (item ? item[key] : null), obj);
        },
        editItem(item) {
            console.log(item);
        },
        deleteItem(item) {
            console.log(item)
        }
    },
    created() {
        console.log(this.header)
        console.log(this.items)
        console.log(this.itemSlot)
    }
}
</script>


<style>
.header-row {
    display: flex;
    background-color: #f0f0f0;
    padding: 10px;
    font-weight: bold;
}

.header-cell,
.data-cell {
    flex: 1;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.data-table {
    display: flex;
    flex-direction: column;
}

.data-item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1em;
    /* padding: 1em; */
    border-radius: 8px;
}

.item-date,
.item-patient,
.item-medications,
.item-id,
.item-status {
    flex: 1;
    margin-right: 1em;
}
</style>
