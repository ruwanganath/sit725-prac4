$(document).ready(function(){

    $('#btnMessage').click(()=>{
        let message = $('#messageBox').val()
        let data={
            message
        }
        $.get('/message',data,function(){
            
        })          
    })

    setInterval(() => {
         //retreive messages
        $.get('/messages',function(messages){
            $('#messageList').empty();
            messages.forEach((msg) => {
                $('#messageList').append('<li class="collection-item">'+msg.message+'</li>');
            })       
        })
    }, 1000);
})