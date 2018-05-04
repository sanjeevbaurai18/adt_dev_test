
(function() {
var jsonData = null;	
 
   var user="dev_interview";
   var password="asdf1234";
   $.ajax
		({
		  type: "get",
		  url: "https://atd.atdtravel.com/api/products",
		  dataType: 'json',
		  async: false,
		  username: user,
          password: password,
          crossDomain: true,
		  success: function (done){
		        console.log(done);
		         getProductImages();
		   },
		  error: function(error){
		  	console.log(error);
		  } 
		});
   
    function getProductImages(){
    $.ajax({
                   url: "https://atd.atdtravel.com/api/products/485",
                   type:"get",
                   async:false,
                   username: user,
                   password: password,
                    crossDomain: true,
                   dataType: "json",
                   success: function(data) {
                       console.log(data);
                      var photos=data.photos;
                      var related_products=data.related_products;
                       //jsonData=data;
                       setImages1(photos);
                       //setImages2(photos);
                       setImages3(related_products);
                   },
                   error:function(error){
                     alert(2); 	
                   }
               });	
       
     }
    
    
    var slides_sml = document.querySelectorAll('#slides_sml .slide');
    var slides_mid = document.querySelectorAll('#slides_mid .slide');
    function setImages1(photos){
    	var mhtml = '', mhtml1='';
    	$.each(photos, function(index, value){
    		mhtml += '<li class="slide"><img src="'+value.img_sml+'" />';
    		mhtml += '</li>';
    		mhtml1 += '<li class="slide"><img src="'+value.img_med+'" />';
    		mhtml1 += '</li>';
     });
   //append DOM only one time.
      $('#slides_sml').append($(mhtml));	
      $('#slides_mid').append($(mhtml1));	
    }
     
 
     var slides_full = document.querySelectorAll('#slides_full .slide');
        function setImages3(related_products){
        	var mhtml = '';
            $.each(related_products, function(index, value){
                console.log(index, value.img);
                mhtml += '<li class="slide"><img src="'+value.img+'" />';
                mhtml += '</li>';
         });
         $('#slides_full').append($(mhtml));	
        }
    	
    
    
    var slides1 = document.querySelectorAll('#slides_sml .slide');
    var slides2= document.querySelectorAll('#slides_mid .slide');
    var slides3 = document.querySelectorAll('#slides_full .slide');
    var currentSlide1 = 0,currentSlide2 = 0,currentSlide3 = 0;
    var slideInterval = setInterval(nextSlide,2000);
    
    function nextSlide() {
        slides1[currentSlide1].className = 'slide';
        slides2[currentSlide2].className = 'slide';
        slides3[currentSlide3].className = 'slide';
        currentSlide1 = (currentSlide1+1)%slides1.length;
        slides1[currentSlide1].className = 'slide showing';
         currentSlide2 = (currentSlide2+1)%slides2.length;
        slides2[currentSlide2].className = 'slide showing';
         currentSlide3 = (currentSlide3+1)%slides3.length;
        slides3[currentSlide3].className = 'slide showing';
    }
    

})();
