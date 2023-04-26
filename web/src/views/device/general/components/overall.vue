<template>
  <div class="rectangle1">
    <h4>总览</h4>
    <div class="rectangle2">
      <div class="rectangle3">
        <h5>日均能耗</h5>
        <span>8.12度</span>
      </div>
      <div class="rectangle3">
        <h5>本月能耗</h5>
        <span>162.34度</span>
      </div>
      <div class="rectangle3">
        <h5>本月报警</h5>
        <span>2度</span>
      </div>
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script>
  import {d2CrudPlus} from 'd2-crud-plus'
  export default {
    name: 'overall',
    mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
    data() {
      return {
        option: {
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [10, 20, 30, 40, 50, 60, 70,80, 90, 100, 110, 120],
            type: 'line',
            smooth: true
          }],
          grid:{
            top:20,
            right:10,
            bottom:20,
            left:30
          }
        }
      }
    }
  }
</script>

<style scoped>
  .rectangle1 {
    height: 180px;
    flex: 60%;
    margin: 0px 5px;
    display: flex;
    flex-direction: column;
  }

  .rectangle2 {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }

  .rectangle3 {
    flex: 15%;
    height: 55%;
    margin: 0px 5px;
    text-align: center;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 20px;
    font-weight: bold;
  }
  .rectangle2 .rectangle3:nth-of-type(1) {
    color: deepskyblue;
    border-left: 1px solid deepskyblue;
    border-right: 1px solid deepskyblue;
    border-bottom: 1px solid deepskyblue;
  }
  .rectangle2 .rectangle3:nth-of-type(2) {
    color: gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .rectangle2 .rectangle3:nth-of-type(3) {
    color: crimson;
    border-left: 1px solid crimson;
    border-right: 1px solid crimson;
    border-bottom: 1px solid crimson;
  }
  span{
    line-height: 40px;
  }
  .chart {
    flex: 50%;
  }
  h4{
    background-color: dodgerblue;
    padding: 8px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    color: white;
  }
  h5{
    margin: 0px;
    padding: 10px;
    color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .rectangle2 .rectangle3:nth-of-type(1) h5{
    background-color: deepskyblue;
  }
  .rectangle2 .rectangle3:nth-of-type(2) h5{
    background-color: gray;
  }
  .rectangle2 .rectangle3:nth-of-type(3) h5{
    background-color: crimson;
  }
</style>
