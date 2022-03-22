'use strict';

var width = $(window).width();
window.onscroll = function(){
	if ((width >= 1000)){
		if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			$("#header").css("background","#fff");
			$("#header").css("color","#000");
			$("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
			$("#header").css("padding","4vh 4vw");
			$("#navigation a").hover(function(){
			    $(this).css("border-bottom","2px solid rgb(44, 98, 255)");
			},function(){
			    $(this).css("border-bottom","2px solid transparent");
			});
		}else{
			$("#header").css("background","transparent");
			$("#header").css("color","#fff");
			$("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
			$("#header").css("padding","6vh 4vw");
			$("#navigation a").hover(function(){
			    $(this).css("border-bottom","2px solid #fff");
			},function(){
			    $(this).css("border-bottom","2px solid transparent");
			});
		}
	}
}

function magnify(imglink){
	$("#img_here").css("background",`url('${imglink}') center center`);
	$("#magnify").css("display","flex");
	$("#magnify").addClass("animated fadeIn");
	setTimeout(function(){
		$("#magnify").removeClass("animated fadeIn");
	},800);
}

function closemagnify(){
	$("#magnify").addClass("animated fadeOut");
	setTimeout(function(){
		$("#magnify").css("display","none");
		$("#magnify").removeClass("animated fadeOut");
		$("#img_here").css("background",`url('') center center`);
	},800);
}

$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('body,html').animate({
				scrollTop: $(hash).offset().top
			}, 1800, function(){
				window.location.hash = hash;
	   		});
	   	}
	  });
	myStart();
});

function myStart() {

	// Get the list of files on the repo
	let repoName = "osullivan-painters";
	let userName = "osullivanandrew5";
	let branchName = "master";
	let fullURL = `https://api.github.com/repos/${userName}/${repoName}/git/trees/${branchName}?recursive=1`;

	// Set the global configs to synchronous 
	$.ajaxSetup({ async: false });
	$.getJSON(fullURL, function(dataIn) {

		// Extract all paths
		let listAllFiles = dataIn.tree.map(dictIn => dictIn.path);

		// Extract only images
		let listImagesAll = listAllFiles.filter((inStr) => inStr.startsWith("media/pics/"));
		let listImages = listImagesAll.filter((eachIn) => (eachIn.includes(".")));

		// Chose single random image
		let now = (new Date()).getTime();
		let randomImage = listImages[ Math.floor( Math.random() * listImages.length ) ];

		// Change first main image
		$("#rightImage").css("background", `linear-gradient(0deg, rgba(44, 98, 255, 0) 60%, rgba(44, 98, 255, 0.8) 80%), url("./${randomImage}?time=${now}")`);
		$("#rightImage").css("background-size", "cover");
		$("#rightImage").css("background-repeat", "no-repeat");

		// Iterate the pics list and populate the website
		for (let index = 0; index < listImages.length; ++index) {
			let builtTag = `<img onclick="magnify($(this).attr('src'))" src="${listImages[index]}"/>`
			$("#photos").append(builtTag)
		}

	});

	// Set load functions
	function loaded() {
		setTimeout(function(){
			$("#loading").addClass("animated fadeOut");
			setTimeout(function(){
			$("#loading").removeClass("animated fadeOut");
			$("#loading").css("display","none");
			},800);
		},1650);
	}

	// Remove spinner when loaded
	$(window).on("load", loaded);

}
