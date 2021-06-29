//var AWSURL = 'https://s3-ap-southeast-1.amazonaws.com/www.cartwire.co/widget/cw';
var elms = $(".cw_container");
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var scroll_enabled = true;
$(document).ready(function () {
	var win = $(window);
	var i = 0;

	if (window.matchMedia("(max-width: 767px)").matches) {
		// The viewport is less than 768 pixels wide
		$(".exampleSlider .item:first").addClass('active');
		$(".cw_product_list li").addClass('active');
	} else {
		// The viewport is at least 768 pixels wide
		//alert("This is a tablet or desktop.");
	}


	$(window).on('beforeunload', function () {

		$(window).scrollTop(0);
	});


	$(".cw_btn_load").click(function () {
		$(this).parents(".cw_container").children(".cw_product_list").children('li').removeClass("cw_hide");
		$(this).hide();
	});


	document.querySelectorAll('.slideBlock').forEach(item => {
		item.addEventListener('click', swipedetect(item, swipeHandler));
	});
	function swipeHandler(el, direction) {
		var leftSwipe = el.querySelector('.left');
		var rightSwipe = el.querySelector('.right');
		if (direction === 'left') {
			if (!leftSwipe.classList.contains('visible_arrow')) {
				leftSwipe.click();
			}
		} else if (direction === 'right') {
			if (!rightSwipe.classList.contains('visible_arrow')) {
				rightSwipe.click();
			}
		}
	};

	function swipedetect(el, callback) {

		var touchsurface = el,
			swipedir,
			startX,
			startY,
			distX,
			distY,
			threshold = 5, //required min distance traveled to be considered swipe
			restraint = 300, // maximum distance allowed at the same time in perpendicular direction
			allowedTime = 5000, // maximum time allowed to travel that distance
			elapsedTime,
			startTime,
			handleswipe = callback || function (el, swipedir) { }

		touchsurface.addEventListener('touchstart', function (e) {
			var touchobj = e.changedTouches[0]
			swipedir = 'none'
			startX = touchobj.pageX
			startY = touchobj.pageY
			startTime = new Date().getTime() // record time when finger first makes contact with surface
			//e.preventDefault()
		}, false)

		touchsurface.addEventListener('touchmove', function (e) {
			//e.preventDefault() // prevent scrolling when inside DIV
		}, false)

		touchsurface.addEventListener('touchend', function (e) {
			var touchobj = e.changedTouches[0]
			distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
			distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
			elapsedTime = new Date().getTime() - startTime // get time elapsed
			if (elapsedTime <= allowedTime) { // first condition for awipe met
				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
					swipedir = (distX < 0) ? 'right' : 'left' // if dist traveled is negative, it indicates left swipe
				}
				else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
					swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
				}
			}
			//alert(swipedir);
			handleswipe(el, swipedir)
			//e.preventDefault()
		}, false)
	};

});

function cwWidgetLoader() {
	var cwLoaderContainer = document.getElementById('siteLoader_cw');
	if (cwLoaderContainer != null) {
		cwLoaderContainer.parentNode.removeChild(cwLoaderContainer);
	}
	var loader = document.createElement("div");
	loader.id = "siteLoader_cw";
	loader.innerHTML = '';
	loader.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">		<circle cx = "84" cy = "50" r = "10" fill = "#b83128" >    <animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>    <animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#b83128;#fefefe;#e9b6ae;#ce6260;#b83128" begin="0s"></animate></circle ><circle cx="16" cy="50" r="10" fill="#b83128">  <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>  <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate></circle><circle cx="50" cy="50" r="10" fill="#ce6260">  <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate>  <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate></circle><circle cx="84" cy="50" r="10" fill="#e9b6ae">  <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate>  <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate></circle><circle cx="16" cy="50" r="10" fill="#fefefe">  <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate>  <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate></circle>';
	// document.body.appendChild(loader);
	$(loader).insertBefore(".cw_footer");
}
function loadsWidget(n, i) {
	cwWidgetLoader();
	if (n <= i) {
		$("#siteLoader_cw").hide();
	}

	setTimeout(function () {
		if (n > i) {

			elms[i].style.display = "block";
			elms[i].style.opacity = 1;

			elms[i].style.transition = "opacity 2s";

			clearTimeout(loadsWidget);
			$("#siteLoader_cw").hide();
			scroll_enabled = true;
		}
	}, 2000);
}
//loadsWidget();