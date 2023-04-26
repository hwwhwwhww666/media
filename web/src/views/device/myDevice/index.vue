<template>
  <d2-container :class="{'page-compact':crud.pageOptions.compact}">
    <div class="top_container">
      <h4 style="padding: 10px;background-color: #F8F8F8;border: 1px solid black;border-top-left-radius: 7px;border-top-right-radius: 7px;">智能插座(办公室2011打印机)</h4>
      <div class="rectangle1">
        <device-intro></device-intro>
        <device-status></device-status>
      </div>
    </div>
    <div class="middle_container">
      <control-panel style="margin-right: 10px"></control-panel>
      <warn style="margin-left: 10px;"></warn>
    </div>
    <div class="bottom_container">
      <function-time></function-time>
      <average-consume style="margin: 0px 10px;"></average-consume>
      <function-status></function-status>
    </div>
  </d2-container>
</template>

<script>
import { d2CrudPlus } from 'd2-crud-plus'
import deviceIntro from './components/deviceIntro'
import deviceStatus from './components/deviceStatus'
import controlPanel from './components/controlPanel'
import warn from './components/warn'
import functionTime from './components/functionTime'
import averageConsume from './components/averageConsume'
import functionStatus from './components/functionStatus'
export default {
  name: 'myDevice',
  mixins: [d2CrudPlus.crud],
  components: {deviceIntro,deviceStatus,controlPanel,warn,functionTime,averageConsume,functionStatus},
  }
</script>

<style scoped>
  .rectangle1{
    display: flex;
    flex-direction: row;
  }
  .rectangle2{
    flex: 60%;
    height: 250px;
    padding: 10px;
    border: 1px solid black;
    border-bottom-left-radius: 7px;
  }
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
  .rectangle4{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 140px;
    text-align: center;
  }
  .rectangle4 table tr td:nth-of-type(1) div
  {
  	border: 3px solid limegreen;
  	border-radius: 100%;
  	margin: auto;
  	width:30px;
  	height:30px;
  }
  .rectangle4 table tr td:nth-of-type(2) div
  {
  	border: 3px solid deepskyblue;
  	border-radius: 100%;
  	margin: auto;
  	width:30px;
  	height:30px;
  }
  .rectangle4 table tr td:nth-of-type(3) div
  {
  	border: 3px solid orange;
  	border-radius: 100%;
  	margin: auto;
  	width:30px;
  	height:30px;
  }
  .rectangle4 table tr td:nth-of-type(1)
  {
  	color: limegreen;
  }
  .rectangle4 table tr td:nth-of-type(2)
  {
  	color: deepskyblue;
  }
  .rectangle4 table tr td:nth-of-type(3)
  {
  	color: orange;
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
  .rectangle3 .rectangle5:nth-of-type(1) h5{
    background-color: limegreen;
  }
  .rectangle3 .rectangle5:nth-of-type(2) h5{
    background-color: deepskyblue;
  }
  .rectangle3 .rectangle5:nth-of-type(3) h5{
    background-color: orange;
  }
  .rectangle3 .rectangle5:nth-of-type(4) h5{
    background-color: gray;
  }
  .rectangle3 .rectangle5:nth-of-type(5) h5{
    background-color: gray;
  }
  .rectangle3 .rectangle5:nth-of-type(6) h5{
    background-color: crimson;
  }
  .rectangle3 .rectangle5:nth-of-type(1) {
    color: limegreen;
    border-left: 1px solid limegreen;
    border-right: 1px solid limegreen;
    border-bottom: 1px solid limegreen;
  }
  .rectangle3 .rectangle5:nth-of-type(2) {
    color: deepskyblue;
    border-left: 1px solid deepskyblue;
    border-right: 1px solid deepskyblue;
    border-bottom: 1px solid deepskyblue;
  }
  .rectangle3 .rectangle5:nth-of-type(3) {
    color: orange;
    border-left: 1px solid orange;
    border-right: 1px solid orange;
    border-bottom: 1px solid orange;
  }
  .rectangle3 .rectangle5:nth-of-type(4) {
    color: gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .rectangle3 .rectangle5:nth-of-type(5) {
    color: gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .rectangle3 .rectangle5:nth-of-type(6) {
    color: crimson;
    border-left: 1px solid crimson;
    border-right: 1px solid crimson;
    border-bottom: 1px solid crimson;
  }
  .rectangle5 span{
    line-height: 50px;
  }
  .middle_container{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .rectangle6 {
    flex: 55%;
    margin-right: 10px;
  }
  .rectangle7 {
    flex: 45%;
    margin-left: 10px;
  }
  .bottom_container{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    flex: 100%;
  }
  .bottom_container_index1{
    flex: 35%;

  }
  .bottom_container_index2{
    flex: 35%;
    margin: 0px 10px;

  }
  .bottom_container_index3{
    flex: 30%;

  }
  .chart{
    height: 300px;
    border: 1px solid black;
  }
</style>
