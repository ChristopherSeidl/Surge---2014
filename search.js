// JavaScript Document
//Fix record id bug

var pricepermegawatt = 52.26;
var submitB = false;
var compareB = false;
var cvalue = 0;
var svaule = 0;

function submit(){
	submitB = true;
	var search = document.getElementById("search").value;
	svalue = 0;
	for(var x = 0; x<monitor.length;x++){
		if(monitor[x][1].toLowerCase().search(search.toLowerCase())!==-1){
			svalue=x;
		}
	}
	if(monitor[svalue][1]!=="Brand Name"){
		submitB=true;
		document.getElementById('res-left').innerHTML="<p>Model: "+monitor[svalue][1]+"</p><p>Star Rating: "+stars(monitor[svalue][2])+"</p><p>Price per hour: $"+(monitor[svalue][3]*(pricepermegawatt/1000)).toFixed(4)+"</p><p>Price per month: $"+(monitor[svalue][3]*(pricepermegawatt/1000)*730).toFixed(2)+"</p><p>Price per year: $"+(monitor[svalue][3]*(pricepermegawatt/1000)*8765).toFixed(2)+"</p><p>Brand: "+monitor[svalue][0]+"</p>"
	}else{
		submitB=false;
		document.getElementById('res-left').innerHTML="<p>No Results</p>";
	}
	console.log(search);
	if(submitB==true&&compareB==true){
		best();
	}
	document.getElementById("search").value="";
}
function compare(){
	var search = document.getElementById("search").value;
	cvalue = 0;
	for(var x = 0; x<monitor.length;x++){
		if(monitor[x][1].toLowerCase().search(search.toLowerCase())!==-1){
			cvalue=x;
		}
	}
	if(monitor[cvalue][1]!=="Brand Name"){
		compareB = true;
		document.getElementById('res-right').innerHTML="<p>Model: "+monitor[cvalue][1]+"</p><p>Star Rating: "+stars(monitor[cvalue][2])+"</p><p>Price per hour: $"+(monitor[cvalue][3]*(pricepermegawatt/1000)).toFixed(4)+"</p><p>Price per month: $"+(monitor[cvalue][3]*(pricepermegawatt/1000)*730).toFixed(2)+"</p><p>Price per year: $"+(monitor[cvalue][3]*(pricepermegawatt/1000)*8765).toFixed(2)+"</p><p>Brand: "+monitor[cvalue][0]+"</p>";
	}else{
		compareB=false;
		document.getElementById('res-right').innerHTML="<p>No Results</p>";
	}
	console.log(search);
	if(submitB==true&&compareB==true){
		best();
	}
}
function best(){
	if((monitor[svalue][5]*(pricepermegawatt/1000))>(monitor[cvalue][3]*(pricepermegawatt/1000))){
		document.getElementById('best').innerHTML="<p>The right is the best value</p>";	
	}else if((monitor[svalue][5]*(pricepermegawatt/1000))<(monitor[cvalue][3]*(pricepermegawatt/1000))){
		document.getElementById('best').innerHTML="<p>The left is the best value</p>";
	}else{
		document.getElementById('best').innerHTML="<p><strong>They are equal</strong></p>";
	}
}
function similar(first,second) {
    return 100;
}
function stars(value){
	if(value<0.5){
		return "<img src='stars/0.png' alt='"+value+"'/>";
	}else if(value<1){
		return "<img src='stars/0-5.png' alt='"+value+"'/>";
	}else if(value<1.5){
		return "<img src='stars/1.png' alt='"+value+"'/>";
	}else if(value<2){
		return "<img src='stars/1-5.png' alt='"+value+"'/>";
	}else if(value<2.5){
		return "<img src='stars/2.png' alt='"+value+"'/>";
	}else if(value<3){
		return "<img src='stars/2-5.png' alt='"+value+"'/>";
	}else if(value<3.5){
		return "<img src='stars/3.png' alt='"+value+"'/>";
	}else if(value<4){
		return "<img src='stars/3-5.png' alt='"+value+"'/>";
	}else if(value<4.5){
		return "<img src='stars/4.png' alt='"+value+"'/>";
	}else if(value<5){
		return "<img src='stars/4-5.png' alt='"+value+"'/>";
	}else if(value<5.5){
		return "<img src='stars/5.png' alt='"+value+"'/>";
	}else if(value<6){
		return "<img src='stars/5-5.png' alt='"+value+"'/>";
	}else if(value<6.5){
		return "<img src='stars/6.png' alt='"+value+"'/>";
	}else if(value<7){
		return "<img src='stars/6-5.png' alt='"+value+"'/>";
	}else if(value<7.5){
		return "<img src='stars/7.png' alt='"+value+"'/>";
	}else if(value<8){
		return "<img src='stars/7-5.png' alt='"+value+"'/>";
	}else if(value<8.5){
		return "<img src='stars/8.png' alt='"+value+"'/>";
	}else if(value<9){
		return "<img src='stars/8-5.png' alt='"+value+"'/>";
	}else if(value<9.5){
		return "<img src='stars/9.png' alt='"+value+"'/>";
	}else if(value<10){
		return "<img src='stars/9-5.png' alt='"+value+"'/>";
	}else if(value<10.5){
		return "<img src='stars/10.png' alt='"+value+"'/>";
	}else if(value<11){
		return "<img src='stars/10-5.png' alt='"+value+"'/>";
	}else if(value<11.5){
		return "<img src='stars/11.png' alt='"+value+"'/>";
	}else if(value<12){
		return "<img src='stars/11-5.png' alt='"+value+"'/>";
	}else if(value<12.5){
		return "<img src='stars/12.png' alt='"+value+"'/>";
	}else{
		return value;
	}
}

document.onkeypress = function (e) {
    e = e || window.event;
    if(e.keyCode == 13){
    	submit();
    }
    // use e.keyCode
};
function background(s){
	if(s=="night"){
		document.body.style.backgroundImage="url('wallpaper/stardust.png')";
		document.body.style.color="white";
	}else if(s=="day"){
		document.body.style.backgroundImage="url('wallpaper/wallpaper.jpg')";
		document.body.style.color="black";
	}else{
		document.body.style.backgroundImage="url('"+s+"')";
	}
	
}
/*
Hours use per by product
	Fridge: 24 hour per day * 365 days = 8760 hours per year
	Freezer: 24 hour per day * 365 days = 8760 hours per year
	Monitor (Active Standby): 24 hour per day * 365 days = 8760 hours per year
	Heater: 5 hours per day * 90 days = 450 hours per year
	Air Conditioner: 5 hours per day * 90 days = 450 hours per year
	Dish Washer: 1 cycle per day * 365 days = 365 hours per year
	Washing Machine: 1 cycle per day * 365 days = 365 hours per year
	Clothes Dryer: 1 cycle per week * 52 weeks = 52 hours per year
*/
