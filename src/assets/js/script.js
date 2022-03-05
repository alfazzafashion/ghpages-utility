/*JS FOR SCROLLING THE ROW OF THUMBNAILS*/ 
$(document).ready(function () {
  $('.vid-item').each(function(index){
    $(this).on('click', function(){
      var current_index = index+1;
      $('.vid-item .thumb').removeClass('active');
      $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
    });
  });
});

/*JS FOR CHANGE THE ROW OF THUMBNAILS*/ 
$(document).ready(function(){
  $('.videos video').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
      var src = $(this).attr('src');
      $('.main-video video').attr('src',src);
  });
});
