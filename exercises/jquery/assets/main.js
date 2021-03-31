$(function() {
	let counter = 0;

	$(".button").click(function() {
		if (counter % 2 == 0) {
			$(".owl").fadeTo(800, 1);
			$(".hoos-there").delay(300).fadeTo(800, 1)
		} else {
			$(".no-one").fadeTo(800, 1);
		}
	});

	$(".switch").click(function() {
		if (counter % 2 == 1) {
			document.body.style.backgroundColor = "#00052b";
			$(".no-one").fadeTo(400, 0);
			counter++;
		} else {
			document.body.style.backgroundColor = "#fff5b8";
			$(".owl").fadeTo(400, 0);
			$(".hoos-there").fadeTo(400, 0);
			counter++;
		}
	});
});