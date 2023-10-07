$(document).ready(function() {

    $('.input-field').fucusout(
        function () {
            let inputValue = $(this).val();
            console.log(inputValue);
            if (inputValue ==='') {
               $(this).removeClass('has-value')
            } else {
               
                $(this).addClass('has-value')
            }

        }
    )
})