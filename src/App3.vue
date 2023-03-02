<template>
  <calendar v-bind:peopleData="peopleData" v-bind:optTime="optTime" v-bind:options="options" :weekDay="weekDay" :disabledDates="disabledDates" :maxDate="maxDate" :minDate="minDate"></calendar>
</template>

<script>
import calendar from './components/calendar-basic.vue'
export default {
  components: { calendar },
  data() {
        return {
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
          disabledDates: [

          ],
        };
      },
      computed: {
        minDate () {
          const today = new Date();
          const march1 = new Date(today.getFullYear(), 2, 1); // 2表示3月份，月份是0-based的
            if (today < march1) {
              // 如果今天日期在3月以前，返回今年的3/1
              return march1;
            } else {
              // 如果今天日期在3月以後，返回今天的3天後的日期
              const threeDaysLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
              return threeDaysLater;
            }
        },
        maxDate () {
          const november30 = new Date(new Date().getFullYear(), 10, 30);
          return november30;
        },
      },
  }
</script>