window.onscroll = function() {shrinkMenu()};

function shrinkMenu(){
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
		document.querySelector(".logo").classList.add("logo-shrink");
		document.querySelector(".logo-text").classList.add("logo-text-shrink");
		
	}
	else{
		document.querySelector(".logo").classList.remove("logo-shrink");
		document.querySelector(".logo-text").classList.remove("logo-text-shrink");
	}
}

function startSection(){
	document.querySelector(".about-container").scrollIntoView({ behavior: 'smooth', block: 'end'});

}

const button = document.querySelector(".start-button");
button.addEventListener("click", startSection, false);



function toTop(){
	window.scrollTo(0,0);
	console.log("działa");
}
var arrow = document.querySelector(".to-top");
arrow.addEventListener("click",toTop, false);




