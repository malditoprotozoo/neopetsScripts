// ==UserScript==
// @name          Lunar Temple Resolver
// @description   Selects automatically the right answer on the Lunar Temple Puzzle.
// @include       http://www.neopets.com/shenkuu/lunar/?show=puzzle
// @version       1
// ==/UserScript==

$(document).ready(function() {
  let linkAngle = swf.attributes.swf;
  let regex = /\d+/g;
  let portion = linkAngle.substring(90,100);
  let angle = Number(portion.match(regex));
  let moonPhase = Math.round(angle / 22.5);
  console.log(angle);
  /* let phases = $('[name="phase_choice"]');
  let allPhases = $('[name="phase_choice"]').length;
  for (let i = 0; i < allPhases; i++) {
    if (Number($(phases[i]).attr('value')) === moonPhase) {
      $(phases[i]).prop('checked', true );
    }
  } */
});