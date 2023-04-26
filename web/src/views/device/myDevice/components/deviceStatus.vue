<template>
  <div class="rectangle3">
    <div class="rectangle5">
      <h5>日均运行时长</h5>
      <span>9.2小时</span>
    </div>
    <div class="rectangle5">
      <h5>日均时长</h5>
      <span>0.32度</span>
    </div>
    <div class="rectangle5">
      <h5>活跃时间段</h5>
      <span>9:00-11:00</span>
    </div>
    <div class="rectangle5">
      <h5>总运行时长</h5>
      <span>3天6小时</span>
    </div>
    <div class="rectangle5">
      <h5>本月能耗</h5>
      <span>6.34度</span>
    </div>
    <div class="rectangle5">
      <h5>本月报警</h5>
      <span>2</span>
    </div>
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'deviceSatus',
    mixins: [d2CrudPlus.crud],
    }
</script>

<style scoped>
  .rectangle3{
    display: flex;
    flex: 40%;
    flex-direction: row;
    flex-wrap: wrap;
    height: 250px;
    border: 1px solid black;
    border-bottom-right-radius: 7px;
    padding: 15px;
    padding-top: 0px;
  }
  .rectangle5 {
    flex: 25%;
    height: 40%;
    margin: 15px;
    text-align: center;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 20px;
    font-weight: bold;
  }
  h5{
    margin: 0px;
    padding: 10px;
    color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .rectangle5:nth-of-type(1) h5{
    background-color: limegreen;
  }
  .rectangle5:nth-of-type(2) h5{
    background-color: deepskyblue;
  }
  .rectangle5:nth-of-type(3) h5{
    background-color: orange;
  }
  .rectangle5:nth-of-type(4) h5{
    background-color: gray;
  }
  .rectangle5:nth-of-type(5) h5{
    background-color: gray;
  }
  .rectangle5:nth-of-type(6) h5{
    background-color: crimson;
  }
  .rectangle5:nth-of-type(1) {
    color: limegreen;
    border-left: 1px solid limegreen;
    border-right: 1px solid limegreen;
    border-bottom: 1px solid limegreen;
  }
  .rectangle5:nth-of-type(2) {
    color: deepskyblue;
    border-left: 1px solid deepskyblue;
    border-right: 1px solid deepskyblue;
    border-bottom: 1px solid deepskyblue;
  }
  .rectangle5:nth-of-type(3) {
    color: orange;
    border-left: 1px solid orange;
    border-right: 1px solid orange;
    border-bottom: 1px solid orange;
  }
  .rectangle5:nth-of-type(4) {
    color: gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .rectangle5:nth-of-type(5) {
    color: gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .rectangle5:nth-of-type(6) {
    color: crimson;
    border-left: 1px solid crimson;
    border-right: 1px solid crimson;
    border-bottom: 1px solid crimson;
  }
  .rectangle5 span{
    line-height: 50px;
  }
</style>