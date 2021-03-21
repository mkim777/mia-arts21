let headerCounter = 0;
let subheaderCounter = 0;
let poemCounter = 0;

if (window.innerWidth > 768) {
  if (headerCounter == 0) {
    $(".header").mouseover(function() {
      $(".header").fadeTo(800, 1);
      headerCounter++;
    });
    $(".gunpowder-header").mouseover(function() {
      $(".gunpowder-header").fadeTo(800, 1);
      headerCounter++;
    });
  }

  if (subheaderCounter == 0) {
    $(".subheader").mouseover(function() {
      $(".subheader").fadeTo(800, 1);
      subheaderCounter++;
    });
    $(".gunpowder-subheader").mouseover(function() {
      $(".gunpowder-subheader").fadeTo(800, 1);
      subheaderCounter++;
    });
  }

  if (poemCounter == 0) {
    $(".poem").mouseover(function() {
      $(".poem").fadeTo(800, 1);
      poemCounter++;
    });
    $(".gunpowder-poem").mouseover(function() {
      $(".gunpowder-poem").fadeTo(800, 1);
      poemCounter++;
    });
  }
}