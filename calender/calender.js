/**
 * Created by hp on 2016/9/30.
 */

var showDate=document.getElementById("showDate");
//console.log(showDate);
var today=new Date();
//console.log(today);
var year=today.getFullYear();
var month=today.getMonth()+1;
//�����Ǳ��µļ���
var day=today.getDate();
//������������յ�����
var startDay=today.getDay();
//ÿ���µ�����(����ϸ��µ�0��)
var nDays=new Date(year,month,0).getDate();
//console.log(nDays);
//console.log(startDay);
var numRow=0;
var i;
var html='';
html+="<table width=100% border=1>";
html+="<tr align=center>";
//���µ�һ���������յ�����
for(var i=0;i<startDay-1;i++){
    html+="<td style='background:lightgray'></td>";
    numRow++;
}
//console.log(numRow);
//ѭ�������µ�����
for(var j=1;j<=nDays;j++){
    //����
    if(j==day){
        html+="<td style='color:red;background: lightgoldenrodyellow' align=center>";
        html+=j;
    }else{
        html+="<td align=center>";
        html+=j;
    }
    html+="</td>";
    numRow++;
    //numRow:ÿһ�е��У����е�7ʱ;
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
