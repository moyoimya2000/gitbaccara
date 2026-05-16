let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listVideo.forEach(video =>{
    video.onclick = () =>{ 
		document.getElementById("zapoln").style.display = "none";
		document.getElementById("pokaz").style.display = "block";
		listVideo.forEach(vid => vid.classList.remove('active'));
		video.classList.add('active');
		if(video.classList.contains('active')){
			let src = video.children[0].getAttribute('src');
			mainVideo.src = src;
			let text = video.children[1].innerHTML;
			title.innerHTML	= text;
		};
	};
});

function ubrat(){
	document.getElementById("pokaz").style.display = "none";
	document.getElementById("zapoln").style.display = "block";
}
function vernut(){
	document.getElementById("pokaz").style.display = "block";
	document.getElementById("zapoln").style.display = "none";
}

var a;
function mychfont()
{
if(a==1) { document.getElementById("zapoln").style.fontFamily = "Monofur"; 
return a=0; }
else{ document.getElementById("zapoln").style.fontFamily = "Whipsmart"; 

return a=1; }
}
var a1;
function mychfont1()
{
if(a1==1) { document.getElementById("myNav1").style.fontFamily = "Marta"; 
document.getElementById("skrit").style.display = "inline";
return a1=0; }
else{ document.getElementById("myNav1").style.fontFamily = "MonAmourOne"; 
document.getElementById("skrit").style.display = "none";
return a1=1; }
}
var a2;
function mychfont2()
{
if(a2==1) { document.getElementById("myNav2").style.fontFamily = "UKIJQolyazma"; 
return a2=0; }
else{ document.getElementById("myNav2").style.fontFamily = "Avatar"; 
return a2=1; }
}

