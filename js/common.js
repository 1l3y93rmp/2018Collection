$(function(){var o=$("div.videoMask>h1");var i;var t;var n=$("video");var a=$("div.videoMask");var e=$("section>div>h2");var r=[];var s=$(".rotateGlasses");var v=s.innerWidth();var f=$(".go");var u=$(window);var c=$("html, body");function d(){r=[];e.map(function(o,i){r.push($(i).offset().top)})}function h(){i=o.innerHeight();t=o.innerWidth();if(t>i){n.o("width",t);n.i("height")}else{n.o("height",i);n.i("width")}}function p(o){for(var i=0;i<r.length;i++){if(o>r[i]&&o-800<r[i]){e.s(i).t({position:"fixed",opacity:1})}else{e.s(i).t({opacity:0,position:""})}}}function g(o){if(o+$(window).innerHeight()>$(".About").offset().top){a.t({bottom:120,position:"absolute",top:"auto",height:"auto"})}else{a.t({bottom:"",position:"",top:"",height:""})}}function l(){f.v(function(){$(this).u("top")},function(){$(this).h("top")})}function b(){var o=new UAParser;var i=o.getResult();var t=i.$.name;if(t==="Edge"||t==="ie"){n.hide();$(".videoMask").t("background","none")}}function w(){b();AOS.init();h();d();f.click(function(){c.stop().animate({scrollTop:0},800,"swing")});u.resize(function(){h();d()});var t=0;var n=0;u.scroll(function(){var o=$(this).scrollTop();p(o);g(o);l();var i=s.t("background-position-x");if(n<=o){t++}else{t--}if(t==5){s.t("background-position-x",parseInt(i)+v);t=0}if(t==-5){s.t("background-position-x",parseInt(i)-v);t=0}if(Math.round(o+1)===Math.round(c.innerHeight()-u.height())){f.g("mouseenter mouseleave");f.u("top")}if(o==0){f.h("top");l()}})}w()});