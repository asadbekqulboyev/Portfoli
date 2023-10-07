$(function () {
   $('.tab').on('click', function(){
    $(this).addClass('is_activ').siblings().removeClass('is_activ')
    let indicator = $(".tab-indicator")
    let tabPosition = $(this).position()
   indicator.css({
    left: tabPosition.left
   })
   }) 
})