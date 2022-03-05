---
title: VIDEO GALLERY
category: Video
comment: false
---

   <div class="container">
        <div class="videos">
            <video class="active" src="https://previews.customer.envatousercontent.com/files/24f4d0f3-6aa2-4f33-8124-40a5d9608e4a/video_preview_h264.mp4" muted></video>
            <video src="https://previews.customer.envatousercontent.com/files/98549940-01d7-46dd-bb95-49928e091e3e/video_preview_h264.mp4" muted></video>
            <video src="https://alfazzafashion.github.io/assets/videos/vid2.mp4" muted></video>
            <video src="https://alfazzafashion.github.io/assets/videos/vid3.mp4" muted></video>
        </div>
        <div class="main-video">
            <video src="https://previews.customer.envatousercontent.com/files/98549940-01d7-46dd-bb95-49928e091e3e/video_preview_h264.mp4" muted controls autoplay></video>
        </div>
    <div class="overlay">
    </div>
    </div>

<script>
   $(document).ready(function(){
      $('.videos video').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
            var src = $(this).attr('src');
               $('.main-video video').attr('src',src);
            });
         });
</script>
