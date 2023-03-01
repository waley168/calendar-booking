<template>
  <calendar v-bind:peopleData="peopleData" v-bind:optTime="optTime" v-bind:options="options" :weekDay="weekDay" :disabledDates="disabledDates" :maxDate="maxDate" :minDate="minDate"></calendar>
</template>

<script>
import calendar from './components/calendar-basic.vue'
export default {
  components: { calendar },
  data() {
        return {
          minDate: "2023-3-1",  //開始時間
          maxDate: "2023-11-30", //終了時間
          peopleData:[
              { name: '成人(13歲以上)', price: 900, value: 'adultCounter', counter: 1, atleast: 1 },
              { name: '兒童(4 - 12歲)', price: 700, value: 'childrenCounter', counter: 0, atleast: 0 },
              { name: '幼兒(3歲以下)', price: 300, value: 'babyCounter', counter: 0, atleast: 0 },
              ],
          options:[
            { value: '08:00', disabled: true },
            { value: '10:30', disabled: false },
            { value: '13:00', disabled: false },
            { value: '15:30', disabled: true }
            ],
          weekDay: [      //賞鯨不禁用星期三登島日
            
          ],
        };
      },
      computed: {
        disabledDates () {
          const today = new Date();
          const tomorrow = new Date(today)
          tomorrow.setDate(tomorrow.getDate() + 1)
          const afterTomorrow = new Date(tomorrow);
          afterTomorrow.setDate(tomorrow.getDate() + 1);
          return [tomorrow, afterTomorrow]
        },
      },
  }
</script>