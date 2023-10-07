$(function () {
    $('#range-slider').on('input change',function(){
      
        $('.text').css('font-size',$(this).val()*1+'px')
             $('.value').text($(this).val()*1 + 'px')
    })
})