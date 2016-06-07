$(function(){
	//$('.modal div').hide();
	$('#menu').click(function(){
		$('.menu').addClass('flex');
	});
	$('#photo-x').click(function(){
		$('.modal').removeClass('flex');
	});
		$('#photos').click(function(){
			console.log('afafafaf');
		$('.photos').addClass('flex');
	});
		$('#location').click(function(){
			console.log('afafafaf');
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

