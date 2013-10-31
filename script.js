$(document).ready(init);

var siteArray = new Array;
siteArray[1] = "http://stephanconzen.com/portal/samples/febreze/index.html";
siteArray[2] = "http://stephanconzen.com/portal/samples/holistica/index.html";
siteArray[3] = "http://stephanconzen.com/portal/samples/panasonic/index.html";
siteArray[4] = "http://stephanconzen.com/portal/samples/suprafly/index.html";
siteArray[5] = "http://stephanconzen.com/portal/samples/skidurham/index.html";
siteArray[6] = "http://stephanconzen.com/portal/samples/wicked/index.html";

var site = "";
	
// initialize site
function init(){
	$(".links").click(function(){
		change();
	});
	$(".links").click(function(){
		site = $(this).attr("id");
		sites(site)
	});
}

// adjusts nav
function change(site){
	$(".links").hide();
	$("#nav").animate({
		height:1080,
		width:325,
		marginTop: 0,
		marginBottom: 0,
		marginLeft:140
		},500);
	$("#home").css({
		height: 150,
		marginLeft: 0
		});
	$(".links").css({
		height: 150, 
		marginLeft: 0
		});
	$("#home").delay(500).fadeIn();
	$(".links").delay(500).fadeIn();
	$("#home").css({marginLeft:62});
	$("#one").css({marginLeft:37});
	$("#two").css({marginLeft:64});
	$("#three").css({marginLeft:12});
	$("#four").css({marginLeft:97});
	$("#five").css({marginLeft:32});
	$("#six").css({marginLeft:29});
	$("#home").click(function(){reset();});
	$(".links").unbind();
	$(".links").click(function(){
		site = $(this).attr("id");
		sites(site)
	});
}

// displays site
function sites(site){
	if(site == 'one'){site = 1;}
	else if(site == 'two'){site = 2;}
	else if(site == 'three'){site = 3;}
	else if(site == 'four'){site = 4;}
	else if(site == 'five'){site = 5;}
	else if(site == 'six'){site = 6;}
	$("#site").attr('src',siteArray[site]);
	animation();
	$("#content").delay(500).fadeIn();
}

// removes site, resets nav
function reset(){
	$(".links").hide();
	$("#content").hide();
	$("#home").unbind('click');
	$("#home").hide();
	$("#nav").animate({
		height:360,
		width:1920,
		marginTop: 360,
		marginLeft: 0,
		marginBottom: 360
		},500);
	$(".links").css({
		height: 360, 
		marginLeft: 20,
		marginRight: 20
		});
	$(".links").delay(500).fadeIn();
	$("#one").css({marginLeft:140});
	init();
}

// shutter animation
function animation(){

}