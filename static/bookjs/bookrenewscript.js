$(function(){

    "use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });


var $renewform = $("#renewbook");
$("#save").click(function () {
    $.validator.addMethod("noSpace",function(value, element){
        return value == '' || value.trim().length != 0
    },"Spaces are not allowed");

    $.validator.addMethod("adnov", function(value, element) {
        return value == value.match(/^[0-9]+$/);
    },"Enter a valid User ID");

    $.validator.addMethod("isbnv", function(value, element) {
        return value == value.match(/^[a-zA-Z0-9]+$/);
    },"Enter a valid isbn");


if($renewform.length){
    $renewform.validate({
        rules:{
            adno:{
                required: true,
                adnov: true,
                minlength: 6,
                noSpace:true

            },
            isbn:{
                required: true,
                isbnv: true,
                minlength: 6,
                noSpace:true
            },
           
            date:{
                required:true
            }
        },
        messages:{
            adno:{
                required:'User ID is required',
                minlength: 'user id must be at least 6 characters long'
            },
            isbn:{
                required: 'ISBN is required',
                minlength: 'isbn must be at least 6 characters long'
            },
            date:{
                required: 'Date is required'
            }

        }
    })
    
}

})
});
$("#clear").click(function() {
    $("label.error").hide();
    $(".error").removeClass("error");
  });


    
