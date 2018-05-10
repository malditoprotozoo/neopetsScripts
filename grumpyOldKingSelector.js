// ==UserScript==
// @name          Grumpy Old King Selector
// @description   Selects automatically all the options of Grumpy Old King.
// @include       http://www.neopets.com/medieval/grumpyking.phtml
// @version       1
// ==/UserScript==

$(document).ready(function() {
	var generateRandomNumber = function(element) {
		var num = $(element).children().length - 1;
		return Math.floor((Math.random() * num) +1);
	};

	$("#qp1").children()[generateRandomNumber("#qp1")].selected = true;
	$("#qp2").children()[generateRandomNumber("#qp2")].selected = true;
	$("#qp3").children()[generateRandomNumber("#qp3")].selected = true;
	$("#qp4").children()[generateRandomNumber("#qp4")].selected = true;
	$("#qp5").children()[generateRandomNumber("#qp5")].selected = true;
	$("#qp6").children()[generateRandomNumber("#qp6")].selected = true;
	$("#qp7").children()[generateRandomNumber("#qp7")].selected = true;
	$("#qp8").children()[generateRandomNumber("#qp8")].selected = true;
	$("#qp9").children()[generateRandomNumber("#qp9")].selected = true;
	$("#qp10").children()[generateRandomNumber("#qp10")].selected = true;
	$("#ap1").children()[generateRandomNumber("#ap1")].selected = true;
	$("#ap2").children()[generateRandomNumber("#ap2")].selected = true;
	$("#ap3").children()[generateRandomNumber("#ap3")].selected = true;
	$("#ap4").children()[generateRandomNumber("#ap4")].selected = true;
	$("#ap5").children()[generateRandomNumber("#ap5")].selected = true;
	$("#ap6").children()[generateRandomNumber("#ap6")].selected = true;
	$("#ap7").children()[generateRandomNumber("#ap7")].selected = true;
	$("#ap8").children()[generateRandomNumber("#ap8")].selected = true;
});