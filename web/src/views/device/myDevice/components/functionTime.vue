<template>
  <div class="bottom_container_index1">
    <h4 style="padding: 10px;border: 1px solid black;border-top-left-radius: 7px;border-top-right-radius: 7px;">14日运行时长</h4>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'functionTime',
    mixins: [d2CrudPlus.crud],
    data() {
      return {
        option: {
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12','13','14']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [10, 20, 30, 40, 50, 60, 70,80, 90, 100, 110, 120,130,140],
            type: 'line',
            smooth: true
          }],
          grid:{
            top:40,
            right:40,
            bottom:40,
            left:40
          }
        },
      }
    }
  }
</script>

<style scoped>
  .bottom_container_index1{
    flex: 35%;
  }
  .chart{
    height: 300px;
    border: 1px solid black;
  }
</style>