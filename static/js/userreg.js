$(function() {
    var $registerform=$("#regform")
    $.validator.addMethod("mailv",function(value,element){
        return value == value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    },"Please enter a valid email id");

    $.validator.addMethod("passv", function(value, element) {
        return value == value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
    },"Weak password! eg: Student@123");

    $.validator.addMethod("namev", function(value, element) {
        return value == value.match(/^[a-zA-Z ]+$/);
    },"Only Characters Allowed.");
    
    $.validator.addMethod("phonev", function(value, element) {
        return value == value.match(/^\d*(?:\.\d{1,2})?$/)
    },"Please enter a valid mobile no.");
    

    if($registerform.length){
        $registerform.validate({
            rules:{
                admno:{
                    required: true,
                    minlength: 6
                },
                name:{
                    required: true,
                    namev: true
                },
                admyr:{
                    
                },
                email:{
                    required: true,
                    mailv: true
                },
                phone:{
                    required:true,
                    phonev: true,
                    minlength:10
                },
                pwd:{
                    required:true,
                    passv:true
                    
                },
                rpwd:{
                    required:true,
                    equalTo:'#pwd'
                }

                    },
                    messages:{
                        admno:{
                            required:"Please enter admission number!",
                            minlength:"Admission no must be atleast 6 characters long"
                        },
                        name:{
                            required:"Please enter your Name!"
                        },
                        admyr:{
                            selectReq: "Please select an option !"
                        },
                        email:{
                            required:"Please enter your email id!"
                        },
                        phone:{
                            required:"Please enter your Contact no!",
                            minlength:"Phone number must be min 10 digits"
                        },
                        pwd:{
                            required:"Please enter password!"
                        },
                        rpwd:{
                            required:"Please re-enter password!",
                            equalTo:"Password Mismatch !"
                        }   

            }
        })
    }
})