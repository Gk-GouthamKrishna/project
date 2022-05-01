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


var $fineform = $("#fine");
$("#save").click(function () {
    $.validator.addMethod("noSpace",function(value, element){
        return value == '' || value.trim().length != 0
    },"Spaces are not allowed");

    $.validator.addMethod("adnov", function(value, element) {
        return value == value.match(/^[0-9]+$/);
    },"Enter a valid Admission Number");

    $.validator.addMethod("amountv", function(value, element) {
        return value == value.match(/^[0-9]+$/);
    },"Enter a valid amount");
if($fineform.length){
    $fineform.validate({
        rules:{
            adno:{
                required: true,
                adnov: true,
                minlength: 6,
                noSpace: true
            },
                      
            amount:{
                required:true,
                amountv:true,
                noSpace:true
            }
        },
        messages:{
            adno:{
                required:'Admission Number is required',
                minlength: 'adno must be 6 characters long'
            },
            
            amount:{
                required: 'amount is required',
            
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
