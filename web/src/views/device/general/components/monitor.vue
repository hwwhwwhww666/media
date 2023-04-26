<template>
  <div class="rectangle1">
    <h4>监控装置一览(18)</h4>
    <div class="rectangle2">
      <div class="rectangle4">
        <h5>智能插座(8)</h5>
        <table>
          <tr><td>1</td><td>2</td><td>3</td></tr>
          <tr><td>运行</td><td>待机</td><td>离线</td></tr>
        </table>
      </div>
      <div class="rectangle4">
        <h5>智能电表(2)</h5>
        <table>
          <tr><td>2</td><td>0</td><td>3</td></tr>
          <tr><td>运行</td><td>待机</td><td>离线</td></tr>
        </table>
      </div>
      <div class="rectangle4">
        <h5>智能插座(6)</h5>
        <table>
          <tr><td>4</td><td>2</td><td>0</td></tr>
          <tr><td>运行</td><td>待机</td><td>离线</td></tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {d2CrudPlus} from 'd2-crud-plus'
  export default {
    name: 'monitor',
    mixins: [d2CrudPlus.crud],
  }
</script>

<style scoped>
  .rectangle1 {
    height: 180px;
    flex: 40%;
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
  .rectangle4 {
    color: deepskyblue;
    flex: 33%;
    margin: 20px 5px;
    text-align: center;
    border-left: 1px solid dodgerblue;
    border-right: 1px solid dodgerblue;
    border-bottom: 1px solid dodgerblue;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 20px;
    font-weight: bold;
  }
  .rectangle4 table{
    width: 100%;
  }
  h4{
    background-color: dodgerblue;
    padding: 8px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    color: white;
  }
  h5{
    background-color: dodgerblue;
    padding: 10px;
    color: white;
    margin: 0px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  table tr td:nth-of-type(1)
  {
  	color: limegreen;
  }
  table tr td:nth-of-type(2)
  {
  	color: orange;
  }
  table tr td:nth-of-type(3)
  {
  	color: darkgray;
  }
</style>
