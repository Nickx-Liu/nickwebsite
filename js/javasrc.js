// Return to Top Button

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#Button').fadeIn();
		} else {
			$('#Button').fadeOut();
		}
	});
	$('#Button').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

// Nav Menu Overlay

function openNav1() {
    document.getElementById("anim1").style.height = "100%";
}

function closeNav1() {
    document.getElementById("anim1").style.height = "0%";
}

function openNav2() {
    document.getElementById("anim2").style.height = "100%";
}

function closeNav2() {
    document.getElementById("anim2").style.height = "0%";
}

function openNav3() {
    document.getElementById("anim3").style.height = "100%";
}

function closeNav3() {
    document.getElementById("anim3").style.height = "0%";
}

