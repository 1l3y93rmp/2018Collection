$(function() {
    var $videoMask = $('div.videoMask>h1')
    var $videoMaskHeight
    var $videoMaskWidth
    var $video = $('video')
    var $h2Title= $('section>div>h2')
    var h2OffsetTop = []

    function chackh2TitleTop () {
        h2OffsetTop = []
        $h2Title.map(function(index, node){
            h2OffsetTop.push($(node).offset().top)
        })
    }

    function chackVideoMask () {
        $videoMaskHeight = $videoMask.innerHeight()
        $videoMaskWidth = $videoMask.innerWidth()
        if ($videoMaskWidth > $videoMaskHeight) {
            $video.attr('width', $videoMaskWidth)
            $video.removeAttr('height')
        } else {
            $video.attr('height', $videoMaskHeight)
            $video.removeAttr('width')
        }
        
    }

    function opacityTitle (p) {
        
        for (var i = 0 ;i<h2OffsetTop.length; i++) {
            if (p > h2OffsetTop[i] && p - 800 < h2OffsetTop[i]) {
                $h2Title.eq(i).css({
                    'position': 'fixed',
                    'opacity': 1
                })
            } else {
                $h2Title.eq(i).css({
                    'opacity': 0
                })
            }
        }
    }

    function init () {
        AOS.init()
        chackVideoMask()
        chackh2TitleTop()
        $(window).resize(function(){
            chackVideoMask()
            chackh2TitleTop()
        });

        $(window).scroll(function(){
            var p = $(this).scrollTop()
            opacityTitle(p)
            if (p + $(window).innerHeight() > $('.About').offset().top){
                $('div.videoMask, video').css({
                    'bottom': 120,
                    'position': 'absolute',
                    'top': 'auto',
                    'height': 'auto'})
            } else {
                $('div.videoMask, video').removeAttr('style')
            }
        });

    }

    init()


});