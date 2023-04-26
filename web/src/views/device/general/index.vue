<template>
  <d2-container :class="{'page-compact':crud.pageOptions.compact}">
    <div class="top_container">
      <overall></overall>
      <monitor></monitor>
    </div>
    <div class="bottom_container">
      <h4 style="border-bottom: 1px solid black; padding: 10px;">设备运行一览&ensp;门诊二楼</h4>
      <div class="rectangle5">
        <deviceDetail></deviceDetail>
        <deviceDetail></deviceDetail>
      </div>
    </div>
  </d2-container>
</template>

<script>
  import {crudOptions} from './crud' //上文的crudOptions配置
  import {d2CrudPlus} from 'd2-crud-plus'
  import overall from './components/overall'
  import monitor from './components/monitor'
  import deviceDetail from './components/deviceDetail'
  export default {
    name: 'general',
    mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
    components: {overall,monitor,deviceDetail},
    data() {
      return {
        option: {
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [10, 20, 30, 40, 50, 60, 70],
            type: 'line',
            smooth: true
          }],
          grid:{
            top:20,
            right:20,
            bottom:20,
            left:30
          },
        },
        option2: {
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [10, 20, 30, 40, 50, 60, 70],
            type: 'line',
            smooth: true
          }],
          grid:{
            top:20,
            right:20,
            bottom:20,
            left:30
          }
        }
      }
    },
  }
</script>

<style scoped>
  .top_container {
    display: flex;
    flex-direction: row;
  }

  .bottom_container{
    border: 1px solid black;
    border-radius: 7px;
    margin: 10px 5px;
  }
  .rectangle5{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 5px;
  }
  .rectangle6{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .rectangle7{
    width: 300px;
    height: 350px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 7px;
    text-align: center;
  }
  .rectangle8{
    display: flex;
    flex-direction: row;
    width: 300px;
  }
  .chart2 {
    width: 300px;
    height: 130px;
  }
  .rectangle9 {
    color: deepskyblue;
    flex: 1;
    margin: 0px 5px;
    text-align: center;
    border-left: 1px solid deepskyblue;
    border-right: 1px solid deepskyblue;
    border-bottom: 1px solid deepskyblue;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 15px;
    font-weight: bold;
  }
  .rectangle9 span{
    line-height: 30px;
    vertical-align: middle;
  }
</style>
