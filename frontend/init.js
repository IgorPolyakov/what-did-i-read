$(function(){
  M.AutoInit();
  var editBook = function(){
     M.toast({html: 'Book Edited'})
  }
  var deleteBook = function(){
     M.toast({html: 'Book Deleted'})
  };
  $('#callCreate1').click(function(){
    $('#createModal').css('display','block');
    $('#createModal').css('z-index','99999');
  });
  $('#callCreate2').click(function(){
    $('#createModal').css('display','block');
    $('#createModal').css('z-index','99999');
  });
  $('#closeCreate1').click(function(){
    $('#createModal').css('display','none');
  });
  $('#closeCreate2').click(function(){
    $('#createModal').css('display','none');
  });
});
