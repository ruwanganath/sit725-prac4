//retreive messages
var displayMessages = function(){
    $.get('/messages',function(messages){
        messages.forEach((msg) => {
            $('#messageList').append('<li class="collection-item">'+msg.message+'</li>');

        });         
    }) 
}

$(document).ready(function(){

    displayMessages();

    $('#btnMessage').click(()=>{
        let message = $('#messageBox').val()
        let data={
            message
        }
        $.get('/message',data,function(){
            
        })

        $('#messageList').empty();
        displayMessages();
          
    })

})



