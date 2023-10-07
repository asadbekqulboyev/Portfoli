
    $(window).on("scroll" , function () {
   var parallax = $(".parallax")
    var scrolls = $(this).scrollTop()
    
   parallax.css("transform","translateY("+ scrolls * 0.2+"px" + ")")

})
