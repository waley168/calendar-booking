<template>
    <VueDatePicker v-model="date" locale="zh-tw" :enable-time-picker="false" :disabled-dates="disabledDates"
        :disabled-week-days="weekDay" :min-date="minDate" :max-date="maxDate" hide-offset-dates inline auto-apply
        prevent-min-max-navigation required />
    <input type = "hidden" name = "bookingDate" :value = "currentDate"/>
    <div class="right-col">
        <div class="optTIME right-col-row">
            <h4>選擇時間</h4>
            <label class="radio blue" v-for="opt in options" v-bind:key="opt.value">
                <input type="radio" name="optTime" :value="opt.value" :disabled="opt.disabled"
                    required />
                <span v-html="opt.value"></span>
            </label>
        </div>
        <div class="right-col-row">
            <h4>參加人數</h4>
            <div class="counter-wrapper" v-for="person in peopleData">
                <label>{{ person.name }}</label>
                <span>TWD {{ person.price }}/人</span>
                <div class="counter">
                    <button class="btn btn--minus" @click="person.counter--" type="button" name="button"
                        :disabled="person.counter <= person.atleast">-</button>
                    <input class="quantityInput" type="text" readonly="readonly" :name="person.value" :value="person.counter">
                    <button class="btn btn--plus" @click="person.counter++" type="button" name="button">+</button>
                </div>
            </div>
        </div>
        <div class="right-col-row">
            <h4>總計金額</h4>
            <div class="totalMoney">TWD {{ Number(sumOfPeople).toLocaleString() }}</div>
            <input type="hidden" id="totalMoney" name="totalMoney" :value="sumOfPeople">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    props: {
        minDate: {
            type: String,
            required: true
        },
        maxDate: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        weekDay: {
            type: Array,
            required: true
        },
        peopleData: {
            type: Array,
            required: true
        },
        disabledDates: {
            type: Array,
            required: true
        },
    },
    components: { VueDatePicker },
    data() {
        return {
            date: null,
        };
    },
    //總計金額
    computed: {
        sumOfPeople() {
            return this.peopleData.reduce((sum, person) => {
                return sum += person.price * person.counter;
            }, 0);
        },currentDate() {
            const bookingTime = new Date(this.date);
            return`${bookingTime.getFullYear()}-${bookingTime.getMonth()+1}-${bookingTime.getDate()}`;
        },
    },
}
const date = ref();
</script>