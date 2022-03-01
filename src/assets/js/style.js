        $(document).ready(function(){

            $('.videos video').click(function(){

                $(this).addClass('active').siblings().removeClass('active');

                var src = $(this).attr('src');
                $('.main-video video').attr('src',src);
            });
        });
