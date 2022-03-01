---
title: Hot Girl Footage!
category: Video
comment: false
---

<div class="container">
  <div class="videos">
  <video class="active" src="https://previews.customer.envatousercontent.com/files/e3ec9b2a-7acf-47df-a0ee-2c433fa5d2db/video_preview_h264.mp4" width="300" preload="none" autoplay="" muted="" loop="" playsinline="" webkit-playsinline=""></video>
            <video src="https://previews.customer.envatousercontent.com/files/98549940-01d7-46dd-bb95-49928e091e3e/video_preview_h264.mp4" muted></video>
            <video src="https://previews.customer.envatousercontent.com/files/24f4d0f3-6aa2-4f33-8124-40a5d9608e4a/video_preview_h264.mp4" muted></video>
            <video src="https://previews.customer.envatousercontent.com/files/98549940-01d7-46dd-bb95-49928e091e3e/video_preview_h264.mp4" muted></video>
        </div>
        <div class="main-video">
            <video src="https://previews.customer.envatousercontent.com/files/e3ec9b2a-7acf-47df-a0ee-2c433fa5d2db/video_preview_h264.mp4" muted controls autoplay></video>
        </div>
    </div>
<link rel="stylesheet" href="{{site.url}}{{site.baseurl}}/src/assets/css/style.css" type="text/css"/>
<script href="{{site.url}}{{site.baseurl}}/src/assets/css/style.js" type="text/javascript"/>
<script>
        $(document).ready(function(){

            $('.videos video').click(function(){

                $(this).addClass('active').siblings().removeClass('active');

                var src = $(this).attr('src');
                $('.main-video video').attr('src',src);
            });
        });
