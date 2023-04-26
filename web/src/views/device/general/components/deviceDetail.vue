<template>
  <div>
    <h5 style="text-align: left;">213诊断室</h5>
    <div class="rectangle6">
      <div class="rectangle7">
        <img src="/image/device/computer.jpg" width="150px" height="150px" style="float:left"/>
        <p style="font-size: 15px;font-weight: bold; color: black;margin: 10px 0px;">办公室电脑10023</p>
        <p style="font-size: 15px;font-weight: bold; color: limegreen;margin: 10px 0px;">(运行中)</p>
        <table style="width:148px; margin: 10px 0px;">
          <tr><td><div class="circle">V</div></td><td><div class="circle">A</div></td><td><div class="circle">W</div></td></tr>
          <tr><td>220</td><td>3.4</td><td>150</td></tr>
        </table>
        <div class="rectangle8">
          <div class="rectangle9">
            <h6>周运行</h6>
            <span>69.2时</span>
          </div>
          <div class="rectangle9">
            <h6>周能耗</h6>
            <span>1.32度</span>
          </div>
          <div class="rectangle9">
            <h6>能耗占比</h6>
            <span>8.5%</span>
          </div>
        </div>
        <v-chart class="chart" :option="option" />
      </div>
      <div class="rectangle7">
        <img src="/image/device/computer.jpg" width="150px" height="150px" style="float:left"/>
        <p style="font-size: 15px;font-weight: bold; color: black;margin: 10px 0px;">办公室电脑10023</p>
        <p style="font-size: 15px;font-weight: bold; color: limegreen;margin: 10px 0px;">(运行中)</p>
        <table style="width:148px; margin: 10px 0px;">
          <tr><td><div class="circle">V</div></td><td><div class="circle">A</div></td><td><div class="circle">W</div></td></tr>
          <tr><td>220</td><td>3.4</td><td>150</td></tr>
        </table>
        <div class="rectangle8">
          <div class="rectangle9">
            <h6>周运行</h6>
            <span>69.2时</span>
          </div>
          <div class="rectangle9">
            <h6>周能耗</h6>
            <span>1.32度</span>
          </div>
          <div class="rectangle9">
            <h6>能耗占比</h6>
            <span>8.5%</span>
          </div>
        </div>
        <v-chart class="chart" :option="option" />
      </div>
      <div class="rectangle7">
        <img src="/image/device/computer.jpg" width="150px" height="150px" style="float:left"/>
        <p style="font-size: 15px;font-weight: bold; color: black;margin: 10px 0px;">办公室电脑10023</p>
        <p style="font-size: 15px;font-weight: bold; color: limegreen;margin: 10px 0px;">(运行中)</p>
        <table style="width:148px; margin: 10px 0px;">
          <tr><td><div class="circle">V</div></td><td><div class="circle">A</div></td><td><div class="circle">W</div></td></tr>
          <tr><td>220</td><td>3.4</td><td>150</td></tr>
        </table>
        <div class="rectangle8">
          <div class="rectangle9">
            <h6>周运行</h6>
            <span>69.2时</span>
          </div>
          <div class="rectangle9">
            <h6>周能耗</h6>
            <span>1.32度</span>
          </div>
          <div class="rectangle9">
            <h6>能耗占比</h6>
            <span>8.5%</span>
          </div>
        </div>
        <v-chart class="chart" :option="option" />
      </div>
    </div>
  </div>
</template>

<script>
  import {d2CrudPlus} from 'd2-crud-plus'
  export default {
    name: 'deviceDetail',
    mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
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
          }
        }
      }
    },
  }
</script>

<style scoped>
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
  .rectangle9 {
    flex: 1;
    margin: 0px 5px;
    text-align: center;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 15px;
    font-weight: bold;
  }
  .rectangle8 .rectangle9:nth-of-type(1) {
    color: deepskyblue;
    border-left: 1px solid deepskyblue;
    border-right: 1px solid deepskyblue;
    border-bottom: 1px solid deepskyblue;
  }
  .rectangle8 .rectangle9:nth-of-type(2) {
    color: gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .rectangle8 .rectangle9:nth-of-type(3) {
    color: orange;
    border-left: 1px solid orange;
    border-right: 1px solid orange;
    border-bottom: 1px solid orange;
  }
  .chart {
    width: 300px;
    height: 130px;
  }
  .rectangle9 span{
    line-height: 30px;
    vertical-align: middle;
  }
  table tr td:nth-of-type(1) div
  {
  	border: 3px solid limegreen;
  	border-radius: 100%;
  	margin: auto;
  	width:30px;
  	height:30px;
  }
  table tr td:nth-of-type(2) div
  {
  	border: 3px solid deepskyblue;
  	border-radius: 100%;
  	margin: auto;
  	width:30px;
  	height:30px;
  }
  table tr td:nth-of-type(3) div
  {
  	border: 3px solid orange;
  	border-radius: 100%;
  	margin: auto;
  	width:30px;
  	height:30px;
  }
  table tr td:nth-of-type(1)
  {
  	color: limegreen;
  }
  table tr td:nth-of-type(2)
  {
  	color: deepskyblue;
  }
  table tr td:nth-of-type(3)
  {
  	color: orange;
  }
  h6 {
    padding: 8px;
    color: white;
    margin: 0px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .rectangle8 .rectangle9:nth-of-type(1) h6{
    background-color: deepskyblue;
  }
  .rectangle8 .rectangle9:nth-of-type(2) h6{
    background-color: gray;
  }
  .rectangle8 .rectangle9:nth-of-type(3) h6{
    background-color: orange;
  }
</style>
