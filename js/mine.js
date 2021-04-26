var i = document.querySelectorAll(".faq .contener_faq section article div"),
    div  = document.querySelectorAll(".faq .contener_faq section>div");
    var u;

        function b(u){
        i[u].classList.toggle("rotat");
         var v = div[u].scrollHeight;
         if(div[u].style.maxHeight == 0){
            div[u].style.maxHeight = v + "px";
            div[u].style.overflow = "visable";
         }
         else{

            div[u].style.maxHeight = null;
            div[u].style.overflow = "hidden";
         }  
    
    i[0].onclick = function() {
        b(0);
    };
    i[1].onclick = function() {
        b(1);
    };
    i[2].onclick = function() {
        b(1);
    };
    i[2].onclick = function() {
        b(2);
    };
    i[3].onclick = function() {
        b(3);
    };
    i[4].onclick = function() {
        b(4);
    };
    i[5].onclick = function() {
        b(5);
    };

// portfolio

var li = document.querySelectorAll(".portfolio ul li"),
     section = document.querySelectorAll(".contener_portfolio section"),
     n;

     function v(n) {

       
     }
  

     li[0].onclick = function() {
      v(0);
     };

   
window.onresize
    // arrow

     var arrow =document.querySelector(".design_by .fa-arrow-up");
     window.onscroll = function () {
                    if(window.pageYOffset <= 400){

                        arrow.style.display = "none";
                    }
                    else{
                        arrow.style.display = "block";
                    }
         };

         arrow.onclick = function() {
            window.scrollTo(0,0);
           };