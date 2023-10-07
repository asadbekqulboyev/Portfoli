$(
    function(){
       $('.generate-btn').click(

        function(){
    var  randomcolor = ""
    var charackters = '0123456789abcdef'
    for (let i = 0; i < 6; i++) {
        randomcolor = randomcolor + charackters[Math.floor(Math.random()*16)];
        
    }
    // endi rang code qoshamiz inputning qiymatiga
    $("#inputField").val("#" + randomcolor)
    // endi shu codlar orqali inputning qiymati va borderini rangini o'zgartiramiz
    $("#inputField").css({
        color : '#'+randomcolor,
        borderColor: '#'+randomcolor})

        // endi shu codlar div blockni fon rangini va copy tugmasi fon  rangini o'zgartiramiz
      $('.copy-btn ,.color-preview').css('background-color', '#'+ randomcolor)
       });
       function add() {
         $(".alert-message").addClass("slide-effect")
       }
       function remove() {
        $(".alert-message").removeClass("slide-effect")
      }
      // endi ranglarni copy qilamiz loyihamizga qo'shish uchun
      $(".copy-btn").click(
        function(){
            $("#inputField").select()
            document.execCommand("copy")
            //classni shu funksiyaga qo'shamiz
            add()
            setTimeout(remove,2000);

            //span tegi ichida tanlagan rang kodi ko'rinsin
   $('.span').text($("#inputField").val())

        }
      )
    }
)