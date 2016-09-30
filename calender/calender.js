/**
 * Created by hp on 2016/9/30.
 */

var showDate=document.getElementById("showDate");
//console.log(showDate);
var today=new Date();
//console.log(today);
var year=today.getFullYear();
var month=today.getMonth()+1;
//今天是本月的几号
var day=today.getDate();
//今天距离星期日的天数
var startDay=today.getDay();
//每个月的天数(求的上个月的0天)
var nDays=new Date(year,month,0).getDate();
//console.log(nDays);
//console.log(startDay);
var numRow=0;
var i;
var html='';
html+="<table width=100% border=1>";
html+="<tr align=center>";
//本月第一天离星期日的天数
for(var i=0;i<startDay-1;i++){
    html+="<td style='background:lightgray'></td>";
    numRow++;
}
//console.log(numRow);
//循环出本月的天数
for(var j=1;j<=nDays;j++){
    //今天
    if(j==day){
        html+="<td style='color:red;background: lightgoldenrodyellow' align=center>";
        html+=j;
    }else{
        html+="<td align=center>";
        html+=j;
    }
    html+="</td>";
    numRow++;
    //numRow:每一行的列，当列到7时;
    if(numRow==7){
        numRow=0;
        html+="</tr><tr>"
    }
}
html+="</tr></table>";
var container=document.getElementById("container");
container.innerHTML=html;
var showDate=document.getElementById("showDate");
showDate.innerHTML=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
console.log(html);
