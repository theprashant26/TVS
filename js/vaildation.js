$(document).ready(function(){
        $("#button").click(function(event){
           
        event.preventDefault();
        var email = $("#form1 #cemail1").val();
        var phone = $("#form1 #cmobile").val();
        
        var p_name = $("#form1 #cname").val();
        var p_service = $("#form1 #cc").val();
        
        if (p_name=="")
    {
    alert("Enter Your Name");
    $( "#form1 #cname" ).focus();
    return false;
    }
     if (p_service=="")
    {
    alert("Select Country Code");
    $( "#form1 #cc" ).focus();
    return false;
    }
    if (phone=="")
    {
        alert("Enter Your Mobile Number");
    $( "#form1 #cmobile" ).focus();
        return false;
    }
    if (isNaN(phone))
    {
    alert("Enter Numeric Value Only.");
    $( "#form1 #cmobile" ).focus();
    return false;
    }
var myStringm=phone;
    if ( myStringm.length!=10)
    {
    alert("Enter Mobile 10 digit Number");
    $( "#form1 #cmobile" ).focus();
    return false;
    }
    
    if (email=="")
    {
    alert("Enter Your Email");
    $( "#form1 #cemail1" ).focus();
    return false;
    }   
    
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1)
    {
        alert("Please Enter Valid email ID ");
        return false;
    }
    var email1 = document.getElementById('cemail1');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email1.value)) {
    alert('Please provide a valid email address');
    document.getElementById("cemail1").focus();
    $( "#form1 #cemail1" ).focus();
    return false;
    }
    
    $("#form1").submit();
        });
    });


$(document).ready(function(){
        $("#button2").click(function(event){
           
        event.preventDefault();
        var email = $("#form2 #cemail2").val();
        var phone = $("#form2 #cmobile").val();
        
        var p_name = $("#form2 #cname1").val();
        var p_service = $("#form2 #cc").val();
        
        if (p_name=="")
    {
    alert("Enter Your Name");
    $( "#form2 #cname1" ).focus();
    return false;
    }
     if (p_service=="")
    {
    alert("Select Country Code");
    $( "#form2 #cc" ).focus();
    return false;
    }
    if (phone=="")
    {
        alert("Enter Your Mobile Number");
    $( "#form2 #cmobile" ).focus();
        return false;
    }
    if (isNaN(phone))
    {
    alert("Enter Numeric Value Only.");
    $( "#form2 #cmobile" ).focus();
    return false;
    }
    /*var myStringm=phone;
    if ( myStringm.length!=10)
    {
    alert("Enter Mobile 10 digit Number");
    return false;
    }*/
     if (email=="")
    {
    alert("Enter Your Email");
    $( "#form2 #cemail2" ).focus();
    return false;
    }   
    
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1)
    {
        alert("Plz Enter Valid email ID ");
    $( "#form2 #cemail2" ).focus();
        return false;
    }
    var email1 = document.getElementById('cemail2');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email1.value)) {
    $( "#form2 #cemail2" ).focus();
   alert('Please provide a valid email address');
    return false;
    }

    $("#form2").submit();
        });
    });




$(document).ready(function(){
        $("#button3").click(function(event){
           
        event.preventDefault();
        var email = $("#form3 #cemail3").val();
        var phone = $("#form3 #cmobile").val();
        
        var p_name = $("#form3 #cname").val();
        var p_service = $("#form3 #cc").val();
        
        if (p_name=="")
    {
    alert("Enter Your Name");
    $( "#form3 #cname" ).focus();
    return false;
    }
     if (p_service=="")
    {
    alert("Select Country Code");
    $( "#form3 #cc" ).focus();
    return false;
    }
    if (phone=="")
    {
        alert("Enter Your Mobile Number");
    $( "#form3 #cmobile" ).focus();
        return false;
    }
    if (isNaN(phone))
    {
    alert("Enter Numeric Value Only.");
    $( "#form3 #cmobile" ).focus();
    return false;
    }
    /*var myStringm=phone;
    if ( myStringm.length!=10)
    {
    alert("Enter Mobile 10 digit Number");
    return false;
    }*/
     if (email=="")
    {
    alert("Enter Your Email");
    $( "#form3 #cemail3" ).focus();
    return false;
    }   
    
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1)
    {
        alert("Plz Enter Valid email ID ");
    $( "#form3 #cemail3" ).focus();
    return false;
    }
    var email1 = document.getElementById('cemail3');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email1.value)) {
    alert('Please provide a valid email address');
    $( "#form3 #cemail3" ).focus();
    return false;
    }
    $("#form3").submit();
        });
    });



 $(document).ready(function(){
        $("#button4").click(function(event){
           
        event.preventDefault();
        var email = $("#form4 #cemail4").val();
        var phone = $("#form4 #cmobile").val();
        
        var p_name = $("#form4 #cname2").val();
        var p_service = $("#form4 #cc").val();
        
        if (p_name=="")
    {
    alert("Enter Your Name");
    $( "#form4 #cname2" ).focus();
    return false;
    }
     if (p_service=="")
    {
    alert("Select Country Code");
    $( "#form4 #cc" ).focus();
    return false;
    }
    if (phone=="")
    {
        alert("Enter Your Mobile Number");
    $( "#form4 #cmobile" ).focus();
        return false;
    }
    if (isNaN(phone))
    {
    alert("Enter Numeric Value Only.");
    $( "#form4 #cmobile" ).focus();
    return false;
    }
    /*var myStringm=phone;
    if ( myStringm.length!=10)
    {
    alert("Enter Mobile 10 digit Number");
    return false;
    }*/
     if (email=="")
    {
    alert("Enter Your Email");
    $( "#form4 #cemail4" ).focus();
    return false;
    }   
    
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1)
    {
        alert("Plz Enter Valid email ID ");
    $( "#form4 #cemail4" ).focus();
    return false;
    }
    var email1 = document.getElementById('cemail4');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email1.value)) {
    $( "#form4 #cemail4" ).focus();
    alert('Please provide a valid email address');
    return false;
    }
    
    $("#form4").submit();
        });
    });
    $(document).ready(function(){
        $("#button5").click(function(event){
           
        event.preventDefault();
        var email = $("#form5 #cemail5").val();
        var phone = $("#form5 #cmobile").val();
        
        var p_name = $("#form5 #cname4").val();
        var p_service = $("#form5 #cc").val();
        
        if (p_name=="")
    {
    alert("Enter Your Name");
    $( "#form5 #cname4" ).focus();
    return false;
    }
     if (p_service=="")
    {
    alert("Select Country Code");
    $( "#form5 #cc" ).focus();
    return false;
    }
    if (phone=="")
    {
        alert("Enter Your Mobile Number");
    $( "#form5 #cmobile" ).focus();
        return false;
    }
    if (isNaN(phone))
    {
    alert("Enter Numeric Value Only.");
    $( "#form5 #cmobile" ).focus();
    return false;
    }
    /*var myStringm=phone;
    if ( myStringm.length!=10)
    {
    alert("Enter Mobile 10 digit Number");
    return false;
    }*/
     if (email=="")
    {
    alert("Enter Your Email");
    $( "#form5 #cemail5" ).focus();
    return false;
    }   
    
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1)
    {
        alert("Plz Enter Valid email ID ");
    $( "#form5 #cemail5" ).focus();
        return false;
    }
    var email1 = document.getElementById('cemail5');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email1.value)) {
    $( "#form5 #cemail5" ).focus();
   alert('Please provide a valid email address');
    return false;
    }

    $("#form5").submit();
        });
    });




    function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}




function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
  }
}



function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more"; 
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less"; 
    moreText3.style.display = "inline";
  }
}

$(document).ready(function(){ 

  $("#cname").blur(function() {     
    $.ajax({
    type: "POST",
    url: "autocomplete.php",
    data:'keyword='+$(this).val(),
    success: function(adata){
     if(adata == "error") {
     $('#cname').val('');
    alert('Please Enter a Vaild Name');
                            }
    }
    });
  });
});
$(document).ready(function(){ 
  $("#cname1").blur(function() {     
    $.ajax({
    type: "POST",
    url: "autocomplete.php",
    data:'keyword='+$(this).val(),
    success: function(adata){
     if(adata == "error") {
     $('#cname1').val('');
    alert('Please Enter a Vaild Name');
                            }
    }
    });
  });
});
$(document).ready(function(){ 
  $("#cname2").blur(function() {     
    $.ajax({
    type: "POST",
    url: "autocomplete.php",
    data:'keyword='+$(this).val(),
    success: function(adata){
     if(adata == "error") {
     $('#cname2').val('');
    alert('Please Enter a Vaild Name');
                            }
    }
    });
  });
});
$(document).ready(function(){ 
  $("#cname4").blur(function() {     
    $.ajax({
    type: "POST",
    url: "autocomplete.php",
    data:'keyword='+$(this).val(),
    success: function(adata){
     if(adata == "error") {
     $('#cname4').val('');
    alert('Please Enter a Vaild Name');
                            }
    }
    });
  });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
    $(document).ready(function() {
        var stickyNavTop = $('header').offset().top;               
        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top                     
            if (scrollTop > stickyNavTop) { 
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky'); 
            }
        };
        
        
        stickyNav();            
        $(window).scroll(function() {
            stickyNav();
        });     
        
    });