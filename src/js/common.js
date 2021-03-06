$(function() {
    var $videoMask = $('div.videoMask>h1')
    var $videoMaskHeight
    var $videoMaskWidth
    var $video = $('video')
    var $divVideoMask = $('div.videoMask')
    var $h2Title= $('section>div>h2')
    var h2OffsetTop = []
    var $rotateGlasses = $('.rotateGlasses')
    var $glassesWidth = $rotateGlasses.innerWidth()
    var $go = $('.go')
    var $window = $(window)
    var $body = $('html, body')

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
                    'opacity': 0,
                    'position': ''
                })
            }
        }
    }

    function stickyTitle (p) {
        if (p + $(window).innerHeight() > $('.About').offset().top){
            $divVideoMask.css({
                'bottom': 120,
                'position': 'absolute',
                'top': 'auto',
                'height': 'auto'})
        } else {
            $divVideoMask.css({
                'bottom': '',
                'position': '',
                'top': '',
                'height': ''})
        }
    }

    function gotopHover () {
        $go.hover(function(){
            $(this).addClass('top')
        },function(){
            $(this).removeClass('top')
        })
    }

    function chackBrowser () {
        var parser = new UAParser();
        var result = parser.getResult();

        var name = result.browser.name;

        if (name === 'Edge' || name === 'ie'){
            $video.hide()
            $('.videoMask').css('background','none')
        }
    }

    function init () {

        chackBrowser()
        AOS.init()
        chackVideoMask()
        chackh2TitleTop()
        
        $go.click(function(){
            $body.stop().animate({scrollTop:0}, 800, 'swing')
        })

        $window.resize(function(){
            chackVideoMask()
            chackh2TitleTop()
        });
        var k = 0
        var t = 0
        $window.scroll(function(){
            var p = $(this).scrollTop()
            opacityTitle(p)
            stickyTitle(p)
            gotopHover()
            
            var nowglassesPosition = $rotateGlasses.css('background-position-x')
            

            if (t <= p) { k++ } else { k-- }

            if (k == 5) {
                $rotateGlasses.css('background-position-x', parseInt(nowglassesPosition)+$glassesWidth)
                k=0
            }

            if (k == -5) {
                $rotateGlasses.css('background-position-x', parseInt(nowglassesPosition)-$glassesWidth)
                k=0
            }
            if (Math.round(p+1) === Math.round($body.innerHeight() - $window.height())){
                $go.off('mouseenter mouseleave')
                $go.addClass('top')
            }

            if (p == 0){
                $go.removeClass('top')
                gotopHover()
            }
        });

    }

    init()


});