$(document).ready(function() {

// Fix NavBar when scroll down
$(window).on('scroll', function() {
	var innerH = $(window).innerHeight();
	var x = $('.section-2').offset();
	var scroll = $(window).scrollTop();
	if ( scroll > x.top-scroll ) {
		$('.navbar').addClass('active');
	}
	else {
		$('.navbar').removeClass('active');
	}
});

// Counter nuber animation
var nCoun = function(selector){
	$(selector).each(function(){
		$(this).animate({
			Counter: $(this).text()
		}, {
      		duration: 1000,    // A string or number determining how long the animation will run.
      		easing: "swing",  // A string indicating which easing function to use for the transition.
      		/* A function to be called for each animated property of each animated element. 
            * This function provides an opportunity to
            *  modify the Tween object to change the value of the property before it is set.*/
         step: function(value){    
         	$(this).text(Math.ceil(value));
         }
     });
	});
};

let a = 0;
$(window).on("scroll", function() {
	  // The .offset() method allows us to retrieve the current position of an element  relative to the document
	let oTop = $(".numbers").offset().top - window.innerHeight;
	let scroll = $(window).scrollTop();
	if (a == 0 && scroll >= oTop) {
		a++;
		nCoun(".rect > h1");
	}
})

});

