
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="src/assets/js/videopopup.js"></script>
<link rel="stylesheet" type="text/css" href="src/assets/css/videopopup.css" media="screen" />	
    <script type="text/javascript">
    $(function() {
        $('#vidBox').VideoPopUp({
            backgroundColor: "#17212a",
			opener: "video1",
            idvideo: "v1",
			pausevideo: false
        });
    });
</script>
<div id="vidBox"><div id="videCont">
<video id="v1" loop controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
<source src="dist/live/videos/mov_bb.mp4" type="video/mp4">
<source src="dist/live/videos/mov_bb.ogg" type="video/ogg">
</video> <a href="javascript:void(0)" id="video1">Let&rsquo;s chat ✌️</a> 
