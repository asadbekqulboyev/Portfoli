$( 
    function() {

        function add() {
          $ ('.copied').addClass('animation-effect') 
        }
        function remove() {
            $ ('.copied').removeClass('animation-effect') 
          }
          
        $('.copy-btn').click( function () {
            
           
            $('#textField').select()
            document.execCommand('copy')
            add()
            setTimeout(remove , 800)
        
        }  )
        
      
     }
    )