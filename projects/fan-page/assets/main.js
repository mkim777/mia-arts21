let headerCounter = 0;
let subheaderCounter = 0;
let poemCounter = 0;

if (headerCounter == 0) {
	$(".header").mouseover(function() {
		$(".header").fadeTo(800, 1);
		headerCounter++;
	});
}

if (subheaderCounter == 0) {
  $(".subheader").mouseover(function() {
    $(".subheader").fadeTo(800, 1);
    subheaderCounter++;
  });
}

if (poemCounter == 0) {
  $(".poem").mouseover(function() {
    $(".poem").fadeTo(800, 1);
    poemCounter++;
  });
}