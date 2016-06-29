$(function(){
	//OPens the menu
	$('#menu').click(function(){
		$('.menu').addClass('flex');
	});
	//Uses the X to close the open modal
	$('#photo-x').click(function(){
		$('.modal').removeClass('flex');
	});
	//OPens the photos
		$('#photos').click(function(){
		$('.photos').addClass('flex');
	});
	//OPens the map
		$('#location').click(function(){
		$('.location').addClass('flex');
	});
	
	$('.thumbnail img').click(function(){
		var source = $(this).attr('src');
		$('.black-box').fadeIn('slow');
		$('.box-image').attr('src',source);
	})
	
	$('.black-box').click(function(){
			console.log('fsafss');
			$('.black-box').fadeOut('slow');
		})
	var photoDiv = $('.inside-photos').children();
	
	function photoTranslate() {
		var num = Math.floor(Math.random() * 12); 
		$(photoDiv[num]).addClass('wobble');
		setTimeout(function(){
			$(photoDiv[num]).removeClass('wobble');
			console.log(num);
		},1000);
	}
	window.setInterval(function(){
		photoTranslate();
	},3000)
});

