//menu toggle
$(document).ready( function () { 
let forms = $('form.form'),
inputVal= $("input"),
scrolVal = $(".main").offset().top,
inpuTtest =[ /^[A-Za-z]{2,}$/ , /@gmail/ , /[0-9]{5,}/]

// menu list uchun yozilgan kod 
$(function(){
    $(".toggle-btn").click( function () {
        $(this).toggleClass('active')
        $('.menu-list').toggleClass('activ')
    })
})
// menyuning scroll holati uchun yozildi
$(window).scroll( function () {
let scrollwin = $(window).scrollTop()
if (scrolVal <= scrollwin) {
$("header.header").animate(
$("header.header").css({background: '#fff3fd'}),1000)
$(".menu-list li a").css('color', '#033eff')
}else{  
$(".menu-list li a").css('color', '#fff')
$('header.header').css("background", '#ffe0f9')
}})

// statisik malumotlarga urg'u uchun yozildi
$(".tex").hover (
    function () {
        $(".column.right").css({background:'#2f86ff7d'} )
    }, 
    function () {
        $(".column.right").css({background:'none'} )
    }
) 
$(".btn.btn-succes a").hover(function () {
    $(".malumot-title").css({
        color:'gold'
    })
$(".btn-succes a").css({
    color:'gold'
})
   
$(".corusel-malumot").css(
{background:'none'}  )
 },
function name() {
$(".malumot-title").css({
color:'white'
})
$(".btn-succes a").css({
color:'white'
})
$(".corusel-malumot").css(
{background:'#4e02ffb3'})

})

// let inputVal= $("input")


function inputStyle(){
$(".exit").click( function(){
 $(".screen-OK").css({display:'none'})
$("form.form").css({display:'block'})
})
}
inputStyle()

$("input").keyup(()=>{
if( inpuTtest[0].test(inputVal[0].value)){
    $("#input-btn").css({textDecoration: "none"})
$("input:eq(0)").css({outline:'2px solid rgb(85, 128, 255)'})
}else{
     $("#input-btn").css({textDecoration: "line-through"} )
   $("input:eq(0)").css({outline:'2px solid red'})
}});

$("input:eq(2)").keyup(()=>{
if(inpuTtest[1].test(inputVal[2].value)){
$("#input-btn").css({textDecoration: "none"})
$("input:eq(2)").css({outline:'2px solid rgb(85, 128, 255)'})
}else{
$("#input-btn").css({textDecoration: "line-through"} )
   $("input:eq(2)").css({outline:'2px solid red'})}
});


$("input:eq(1)").keyup(()=>{
if(inpuTtest[2].test(inputVal[1].value)){
    $("#input-btn").css({textDecoration: "none"})
$("#tel").css({outline:'2px solid rgb(85, 128, 255)'})
}else{
 $("#input-btn").css({textDecoration: "line-through"} )
   $("#tel").css({outline:'2px solid red'})}    
});

$("#input-btn").click(
    function(){
    let msgt=$("#msgtext").val()
   if(inputVal[0].value !=='') {
    
    localStorage.setItem( 'ism', JSON.stringify(inputVal[0].value) )
    $('.user-Name').text(JSON.parse(localStorage.getItem('ism')))
   }
   if(inputVal[1].value !=='') {
    localStorage.setItem( 'telefon:', JSON.stringify(inputVal[1].value) )
    $('.number-val').text(JSON.parse(localStorage.getItem('telefon:')))
   }
   
   if(msgt !=='') {

    localStorage.setItem( 'Xabar',JSON.stringify(msgt) )
    $(".user-message").text(JSON.parse(localStorage.getItem( 'Xabar')))
   }
if (inputVal[0].value!==''&& inputVal[1].value!=='' &&inputVal[2].value!=='') {
    $(".screen-OK ").css({
        display: 'block'
    })
    $(".form").css({
        display: 'none'
    })
}else{
    $(".screen-OK ").css({
        display: 'none'
    })
}
if(inputVal.value===''){
inputVal[a].focus()
this.style.textDecoration = "line-through"
$(".screen-OK ").css({
    display: 'none'
})
}else{
    this.style.textDecoration = "none"
}

})



})