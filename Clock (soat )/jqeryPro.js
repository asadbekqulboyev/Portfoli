$(document).ready(function () {
   function showTime() {
    let date = new Date()
     
    // data typelarining ichidan soat ,minut va secunlarni ajratib olamiz
let hourse = date.getHours();
let minute = date.getMinutes();
let secund = date.getSeconds();

// 'AM' va 'PM'larni sozlash
let session = "AM"

if(hourse ==  0){
hourse = 12 
}
if (hourse >=12 ) {
    session = 'PM'
}
if (hourse >12 ) {
    hourse = hourse - 12
}
 hourse = hourse < 10? '0'+ hourse : hourse
 minute = minute < 10? '0'+ minute : minute
 secund= secund < 10? '0'+ secund : secund


 $('#hourse').text(hourse)
 $('#min').text(minute)
 $('#sec').text(secund)
 $('#period').text(session)
// SHu vaqt oralig'ida qiymatlar ekranga uzatilsin
setTimeout(showTime , 1000);
   }
   showTime()

    

});