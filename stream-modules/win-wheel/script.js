var degree = 5400 -360 - 360 - 360;
var clicks = 0.1;

$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		clicks = 0.1;
		$('#spin').addClass("spin");

		$('#inner-spin').addClass('animate');
		var el = document.getElementById('inner-spin');
		el.style.animation = 'none';
		el.offsetHeight; /* trigger reflow */
		el.style.animation = null; 

		var addegree = (Math.floor(Math.random() * 370) + 10) * 2;

		//transition: transform 8s cubic-bezier(.15,.65,.22,.98);

		$('#background').css({
			'transition-property': 'none',
			'transform': 'translateX(-50%) rotate(0deg)'
		});

		var newdegree = +degree + +addegree;

		setTimeout(() => {
			$('#background').css({
				'transition': 'transform 7s cubic-bezier(.15,.65,.22,1)',
				'transform': 'translateX(-50%) rotate(' + newdegree  + 'deg)'
			});
		}, 10);

		// var interval = setInterval(function(){ 
		// 	clicks += 0.03;
		// 	$('#spin').css("animation-duration", clicks + "s");
		// 	// console.log(clicks);
		// }, clicks * 2500);

		setTimeout(() => {
			$('#spin').addClass("spin-slower");
		}, 3000);

		setTimeout(() => {
			$('#spin').removeClass("spin-slower");
			$('#spin').addClass("spin-slowest");
		}, 4500);

		setTimeout(() => {
			$('#spin').removeClass("spin-slower");
			$('#spin').removeClass("spin-slowest");
			$('#spin').removeClass("spin");
		}, 6300);
	});	
});//DOCUMENT READY
	

