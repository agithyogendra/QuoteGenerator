$(document).ready(function(){
	var quote;
	var author;
	var i = 0;
	var color = ['#ff4444', '#00b0ff', '#aa66cc', '#00C851'];
	function getNewQuote(pickedColor){
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			dataType: 'jsonp',
			jsonp: 'jsonp',
			data:{
				method: 'getQuote',
				format: 'jsonp',
				lang: 'en'
			},
			success: function(response){
				$('body').css('background-color', pickedColor);
				quote = response.quoteText;
				$('#quote').html('<i class="fa fa-quote-left" aria-hidden="true"></i> ' + quote + ' <i class="fa fa-quote-right" aria-hidden="true"></i>').css('color', pickedColor);
				author = response.quoteAuthor;
				if(author){
					$('#author').text("Author: " + author);
				}else{
					$('#author').text("Author: Unknown");
				}
			}

		});
	};

		



	$('.getQuote').on('click', function(){
		getNewQuote(color[i]);
			i++;
		if(i == 4){
			i = 0;
		}

	});

});