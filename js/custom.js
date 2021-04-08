var AWSURL = 'https://s3-ap-southeast-1.amazonaws.com/www.cartwire.co/widget/cw';
var elms = $(".cw_container");
//$(document.body).on('touchmove', onScroll); // for mobile
//$(window).on('scroll', onScroll); 
$(document).ready(function () {
	$(".cw_container").hide();
	$(".cw_container").css("opacity", 0);
	$(".cw_container").css("transition", "opacity 2s");
	var n = elms.length;
	var win = $(window);
	var i = 0;
	
		$(document.body).on('touchmove',(function () {
			if ($(document).height() - win.height() <= win.scrollTop()) {
				loadsWidget(n, i);
				i++;

			}
		})
	); $(window).on('scroll',(function () {
			if ($(document).height() - win.height() <= win.scrollTop()) {
				loadsWidget(n, i);
				i++;

			}
		})
			);
	
});

function cwWidgetLoader() {
	var cwLoaderContainer = document.getElementById('siteLoader_cw');
	if (cwLoaderContainer != null) {
		cwLoaderContainer.parentNode.removeChild(cwLoaderContainer);
	}
	var loader = document.createElement("div");
	loader.id = "siteLoader_cw";
	loader.innerHTML = '';
	loader.innerHTML = '<div class="dialog_popup_loaderWrap_cw" style="position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(15, 15, 15, 0.8);opacity:.5;text-align:center;vertical-align:middle;z-index:999999999;text-align:center;"><span style="background:url(' + AWSURL + '/v2.0/images/processing.gif) no-repeat 0 0;width:60px;height:60px;display:block;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;"></span></div>';
	document.body.appendChild(loader);
}
function loadsWidget(n, i) {	
	cwWidgetLoader();
	if (n <= i) {
		$("#siteLoader_cw").hide();
	}
	
	setTimeout(function () {	
		if (n > i) {			

			elms[i].style.display = "block";
			window.setTimeout(function () {
				elms[i].style.opacity = 1;

				elms[i].style.transition="opacity 2s";
			}, 0);
		
			clearTimeout(loadsWidget);
			$("#siteLoader_cw").hide();
		}		
		}, 1000);	
}
//loadsWidget();