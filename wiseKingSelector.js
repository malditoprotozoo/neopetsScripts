// ==UserScript==
// @name          Wise Old King Selector
// @description   Selects automatically all the options of Grumpy Old King.
// @include       http://www.neopets.com/medieval/wiseking.phtml
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
});