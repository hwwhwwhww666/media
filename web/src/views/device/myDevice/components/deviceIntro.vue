<template>
  <div class="rectangle2">
    <img src="http://photocdn.sohu.com/20150827/Img419916443.jpg" style="float: left;" width="300px" height="230px"/>
      <div class="rectangle3">
        <table border="1" cellspacing="0" cellpadding="10" style="width: 440px;height: 90px;">
          <tr><th>品牌</th><th>型号</th><th>规格</th></tr>
          <tr><td>惠普(HP)</td><td>T-0429-032</td><td>黑白激光一体机</td></tr>
        </table>
        <div class="rectangle4">
          <span style="width: 80px;color: limegreen;font-weight: bold;font-size: 20px;">运行中</span>
          <span style="width: 80px;color: black;font-weight: bold;font-size: 10px;"><div><i class="el-icon-data-line" style="font-size: 45px;"></i></div>实时</span>
          <table style="margin: 10px 0px;text-align: center;flex: 1;">
            <tr><td><div class="circle">V</div></td><td><div class="circle">A</div></td><td><div class="circle">W</div></td></tr>
            <tr><td>220</td><td>3.4</td><td>150</td></tr>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'deviceIntro',
    mixins: [d2CrudPlus.crud],
    }
</script>

<style scoped>
  .rectangle2{
    flex: 60%;
    height: 250px;
    padding: 10px;
    border: 1px solid black;
    border-bottom-left-radius: 7px;
  }
  .rectangle3{
    display: flex;
    flex-direction: column;
    align-content: stretch;
    height: 230px;
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
</style>