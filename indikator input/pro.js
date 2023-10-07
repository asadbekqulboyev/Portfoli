$(document).ready(function () {
    $(".text").keyup(function () { 

        var input= $(this).val()
        var maxis =$(this).attr('maxlength')
var vals = (input.length*100)/maxis
if(maxis==50){
$(".ind-1:eq(1)").css({
    width: vals+"%"
})
}
if(maxis==30){
    $(".ind-1:eq(2)").css({
        width: vals+"%"
    })
    }
    if(maxis==20){
        $(".ind-1:eq(0)").css({
            width: vals+"%"
        })
        }



    })

});