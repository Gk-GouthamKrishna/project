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


var $addbookform = $("#addbook");

$("#save").click(function () {
    $.validator.addMethod("noSpace",function(value, element){
        return value == '' || value.trim().length != 0
    },"Spaces are not allowed");

    $.validator.addMethod("authorv", function(value, element) {
        return value == value.match(/^[a-zA-Z ]+$/);
    },"Enter a valid author");
    
    

    $.validator.addMethod("namev", function(value, element) {
        return value == value.match(/^[a-zA-Z ]+$/);
    },"Enter a valid book name.");

    $.validator.addMethod("categoryv", function(value, element) {
        return value == value.match(/^[A-Za-z\s]+$/);
    },"Enter a valid category.");

    $.validator.addMethod("publicationv", function(value, element) {
        return value == value.match(/^[a-zA-Z ]+$/);
    },"Enter a valid Publication.");

    $.validator.addMethod("isbnv", function(value, element) {
        return value == value.match(/^[a-zA-Z0-9]+$/);
    },"Enter a valid isbn");

    $.validator.addMethod("bookidv", function(value, element) {
        return value == value.match(/^[a-zA-Z0-9]+$/);
    },"Enter a valid book ID");
    $.validator.addMethod("racknov", function(value, element) {
        return value == value.match(/^[a-zA-Z0-9]+$/);
    },"Enter a valid rack number");


if($addbookform.length){
    $addbookform.validate({
        rules:{
            bookid:{
                required: true,
                noSpace: true,
                minlength: 3,
                bookidv: true
                
                
            },
            name:{
                required: true,
                noSpace: true,
                minlength: 3,
                namev:true
                
            },
            author:{
                required: true,
                noSpace: true,
                minlength: 3,
                authorv: true
            },
            publication:{
                required: true,
                noSpace: true,
                minlength: 3,
                publicationv: true
            },
            isbn:{
                required:true,
                noSpace: true,
                minlength: 6,
                isbnv:true
            },
            category:{
                required:true,
                noSpace: true,
                minlength: 5,
                categoryv:true
            },
            rackno:{
                required:true,
                noSpace: true,
                minlength:5,
                racknov:true
            }
        },
        messages:{
            bookid:{
                required:'Book Id is required',
                minlength: "Book Id must be at least 3 characters long"
                
                
            },
            name:{
                required: 'Book name is required',
                minlength: "Book name must be at least 3 characters long"
            },
            author:{
                required: 'Author is required',
                minlength: "Author must be at least 3 characters long"
            },
            publication:{
                required: 'Publication is required',
                minlength: "Publication must be at least 3 characters long"
            },
            isbn:{
                required:'lsbn is required',
                minlength: "ISBN must be 6 characters long"
            },
            category:{
                required:'category is required',
                minlength: "Category must be at least 3 characters long"
            },
            rackno:{
                required:'rack number is required',
                minlength: "racknumbaer must be at least 5 characters long"
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
