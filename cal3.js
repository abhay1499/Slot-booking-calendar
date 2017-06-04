var col=[];
var m;
var min=60;
var ic=5;
var count=[];

function main(){

//alert("hio");

	


 var row=(24*60)/min;
 var hr=0;
 var minute=0;

for(m=0;m<=row*7;m++){
count[m]=ic;
}

count[0]=10;
count[1]=11;

count[2]=12;
count[3]=13;count[4]=14;
// alert(row);
var d=0;

var cal=document.getElementById("calendar");
var head=document.getElementById("head");
//////////////Monday////////////////////


var dat = new Date();
var day=dat.getDay();
//alert(day);
var week=["SUN","MON","TUE","WED","THRUS","FRI","SAT"];



var l,r1=1000,r2=1010;
var ax=[];
var ay=[];
///*
for(l=0;l<7;l++){
ay[l] = document.createTextNode(week[day]);
ay[l].id=r1;
ax[l] = document.createElement("p");
ax[l].id=r2;
ax[l].appendChild(ay[l]);
head.appendChild(ax[l]);

//document.getElementById("a").style.width="50px";

var v1=document.getElementById(r2);
v1.style.width="50px";
v1.style.textAlign="center";
//v1.style.backgroundColor="blue";
if(l!=7)
v1.style.float="left";
r1++;r2++;day=(day+1)%7;

}
var br1 = document.createElement("br");        // Create a <button> element
       // Create a text node
cal.appendChild(br1);




var ab=[];
var i,j,c=0;
//alert(row);
//row=24;
var ul=document.createElement("ul");
ul.id="ul";
var li,tx;

for(j=1;j<=row;j++)
{
 li=document.createElement("li");
   if(hr<10 && minute==0)
 tx=document.createTextNode("0"+hr+".00");
else if(hr<10 && minute!=0)
tx=document.createTextNode("0"+hr+"."+minute);
else if( minute==0)
tx=document.createTextNode(+hr+".00");
else
tx=document.createTextNode(hr+"."+minute);



 li.appendChild(tx);
  ul.appendChild(li);
	for(i=1;i<=7;i++)
	{
var btn = document.createElement("BUTTON");
	ab[c]=btn;
	ab[c].id=c;
	//if(i==7){
/*
if(hr<10)
var t = document.createTextNode("0"+hr+"."+minute);        // Create a <button> element
else
var t = document.createTextNode(hr+"."+minute);       // Create a text node
btn.appendChild(t);  */ 
  
   //}

var t = document.createTextNode(count[c]);        // Create a <button> element
btn.appendChild(t);
                             // Append the text to <button>
//btn.style.height=100px;
//document.body.appendChild(btn); 

  cal.appendChild(btn);
    ab[c]=btn;
	ab[c].id=c;
	
var t=document.getElementById(c);

t.style.width="50px";
t.style.height="30px";
t.style.backgroundColor="green";
t.style.float="none";
t.style.border="0.1px solid black";
c++;

} //inner for loop

d=d+min;
hr=d/60;
hr=parseInt(hr);
minute=d%60;

var br = document.createElement("br");        // Create a <button> element
       // Create a text node
cal.appendChild(br);
//
}// outer for loop

var ts=document.getElementById("timeslot");


ts.appendChild(ul);
var v1
for(v1=0;v1<row;v1++){
	//document.getElementsByTagName("LI")[v1].style.marginTop="11.6px";
 document.getElementsByTagName("LI")[v1].style.paddingBottom="5.8px";
 document.getElementsByTagName("LI")[v1].style.paddingTop="6px";
 document.getElementsByTagName("LI")[v1].style.marginTop="0.1px";
 
        
}

document.getElementById("ul").marginTop="0px";

//document.getElementById("ul").style.listStyle=none;
//document.getElementById("ul").Style.Add("list-style", "none");

var time=dat.getHours();
time=time*60;
var over=0;
var ind=0;
 m=0;
//alert("I am herer");
for(m=0;m<=i*j;m++){
col[m]=-1;
}

while (over<=time ){
	over=over+min;
	document.getElementById(ind).style.backgroundColor="grey";
	document.getElementById(ind).disabled = true;
	//alert("rohan");
	col[ind]=5;
	ind =ind+7;
}
//alert("Hi");
//here
document.getElementById(10).style.backgroundColor="grey";
//ab[9].style.backgroundColor="blue";


var k;
for(k=0;k<i*j;k++){
document.getElementById(k).onclick = function()
{
	//var temp= 
  //alert(this.id);
var mod=this.id%7;
mod =(day+mod)%7;

var div=this.id/7;
div=parseInt(div);
	//callme(this.id,week[mod],div);
	callafter(this.id,week[mod],div);
};

}//for loop for on click

}//end of main


    function callme(g ,g2,g3){
//alert(col[g]);
	if (col[g]==-1){
		col[g]=1;
       document.getElementById(g).style.backgroundColor="red";
       g3=min*g3;
      alert("Time Slot Booked Sucessfully ON:-"+g2+"  at "+parseInt(g3/60)+"."+(g3%60) );
 //alert("Time Slot Booked Sucessfully ON:-");
	}
	else if(col[g] == 5){
		alert ("Time passed .Booking not possible!")
	}
else {
      col[g]==-1;
	alert ("Booking Cancelled" );
 document.getElementById(g).style.backgroundColor="green";

   }
}

function callafter(g ,g2,g3){

if(count[g]>1){
	count[g]--;

//var t = document.createTextNode(count[g]);        // Create a <button> element
document.getElementById(g).innerHTML=count[g];
if (parseInt((g3*min)/60) <10 && ((g3*min)%60) ==0 )
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at 0"+parseInt((g3*min)/60)+"."+((g3*min)%60)+"0" );
else if (parseInt((g3*min)/60) <10 && ((g3*min)%60) !=0 )
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at 0"+parseInt((g3*min)/60)+"."+((g3*min)%60) );
else if( ((g3*min)%60) ==0  )
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at "+parseInt((g3*min)/60)+"."+((g3*min)%60)+ "0");
else
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at 0"+parseInt((g3*min)/60)+"."+((g3*min)%60) );


}
else if (count[g]==1){
	document.getElementById(g).innerHTML="0";

	document.getElementById(g).style.backgroundColor="RED";
    
    count[g]--;
    if (parseInt((g3*min)/60) <10 && ((g3*min)%60) ==0 )
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at 0"+parseInt((g3*min)/60)+"."+((g3*min)%60)+"0" );
else if (parseInt((g3*min)/60) <10 && ((g3*min)%60) !=0 )
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at 0"+parseInt((g3*min)/60)+"."+((g3*min)%60) );
else if( ((g3*min)%60) ==0  )
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at "+parseInt((g3*min)/60)+"."+((g3*min)%60)+ "0");
else
alert("Time Slot Booked Sucessfully ON:-"+g2+"  at 0"+parseInt((g3*min)/60)+"."+((g3*min)%60) );


}
else if( count[g]==0) {
alert("SLOT FULL.NO FUTHER BOOKING POSSIBLE");
 
}

}

