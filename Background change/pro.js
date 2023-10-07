$(()=>{
    $('#color-range').on('input chnge',function () {
        //rang tanlanganda bodyning backgrountiga tasir qilsin
        
        $('body').css(
        'background-color',$(this).val() )
if ($('#color-range').val()<= '#242424' ){
    $('h1').css( 'color', 'white')
}else{
    $('h1').css( 'color', 'black') 

}
    })
})