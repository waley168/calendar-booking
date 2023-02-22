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
            { name: '成人(13歲以上)', price: 1400, value: 'adultCounter', counter: 1, atleast: 1 },
            { name: '兒童(4 - 12歲)', price: 1100, value: 'childrenCounter', counter: 0, atleast: 0 },
            { name: '幼兒(3歲以下)', price: 300, value: 'babyCounter', counter: 0, atleast: 0 },
          ],
          options:[
            { value: '09:00', disabled: false },
            { value: '13:00', disabled: false }
          ],
          weekDay: [      //禁用星期三
            3
          ],
          disabledDates:[ //禁用日期
            '2023-02-28',
            '2023-02-27'
          ],
        };
      },
  }
</script>