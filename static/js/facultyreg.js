$(function() {
    var $facultyform=$("#facultyform")
    
    $.validator.addMethod("mailv",function(value,element){
        return value == value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    },"Please enter a valid email id");

    $.validator.addMethod("passv", function(value, element) {
        return value == value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
    },"Weak password! Eg: Faculty@123");

    $.validator.addMethod("namev", function(value, element) {
        return value == value.match(/^[a-zA-Z ]+$/);
    },"Only Characters Allowed.");
    
    $.validator.addMethod("phonev", function(value, element) {
        return value == value.match(/^\d*(?:\.\d{1,2})?$/)
    },"Please enter a valid mobile no.");
    

    if($facultyform.length){
        $facultyform.validate({
            rules:{
                name:{
                    required: true,
                    namev: true
                },
                fid:{
                    required: true,
                    minlength:6
                
                },
                
                email:{
                    required: true,
                    mailv: true
                },
                phone:{
                    required:true,
                    phonev: true
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
                        
                        name:{
                            required:"Please enter Faculty Name!"
                        },
                        fid:{
                            required:"Please enter faculty id!",
                            minlength:"Faculty id must be min 6 characters long"
                        },
                        email:{
                            required:"Please enter email id!"
                        },
                        phone:{
                            required:"Please enter Contact no!"
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