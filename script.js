var first;
var tab1Animation; 
var tab2Animation;
var tab3Animation; 
var video;

function initializeEnabler(){
	if (Enabler.isInitialized()) {
		onCreativeLoad();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, onCreativeLoad);
	}
}    
function exit() {
    Enabler.exit('Background Click')
}

function onCreativeLoad() {
    gsap.set("#container", {display:"block"});
    addListeners();
    initImageSlider();
    startAnimations();
}

function addListeners(){
    $('.bgclick1').mouseover(function(){
        gsap.to(".article_cta", {x:10});
        gsap.to(".hero_img1", {scale:1.3});
    })
    $('.bgclick1').mouseout(function(){
        gsap.to(".article_cta", {x:0});
        gsap.to(".hero_img1", {scale:1});
    })
    $('.bgclick2').mouseover(function(){
        gsap.to(".article_cta", {x:10});
        gsap.to(".hero_img2", {scale:1.3});
    })
    $('.bgclick2').mouseout(function(){
        gsap.to(".article_cta", {x:0});
        gsap.to(".hero_img2", {scale:1});
    })
    $('.bgclick3').mouseover(function(){
        gsap.to(".article_cta", {x:10});
        gsap.to(".hero_img3", {scale:1.3});
    })
    $('.bgclick3').mouseout(function(){
        gsap.to(".article_cta", {x:0});
        gsap.to(".hero_img3", {scale:1});
    })
    $('.bgclick4').mouseover(function(){
        gsap.to(".article_cta", {x:10});
        gsap.to(".hero_img4", {scale:1.3});
    })
    $('.bgclick4').mouseout(function(){
        gsap.to(".article_cta", {x:0});
        gsap.to(".hero_img4", {scale:1});
    })
    $('.bgclick5').mouseover(function(){
        gsap.to(".article_cta", {x:10});
        gsap.to(".hero_img5", {scale:1.3});
    })
    $('.bgclick5').mouseout(function(){
        gsap.to(".article_cta", {x:0});
        gsap.to(".hero_img5", {scale:1});
    })
    $('.bgclick').click(function(){
        bgExit();
    })
    $('.bgclick1').click(function(){
        bgExit1();
    })
    $('.bgclick2').click(function(){
        bgExit2();
    })
    $('.bgclick3').click(function(){
        bgExit3();
    })
    $('.bgclick4').click(function(){
        bgExit4();
    })
    $('.bgclick5').click(function(){
        bgExit5();
    })
}

function startAnimations(){
    gsap.to(".btn-prev-img", {left:"0px", opacity: 1});
    gsap.to(".btn-next-img", {right:"0px", opacity: 1});
}

function initImageSlider() {
    var autoAnimate; 

    var slideCount = $('.article-main-holder ul li div').length;
    slideWidth = $('.article-main-holder ul li div').width();
    var slideHeight = $('.article-main-holder ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.article-main-holder').css({ width: slideWidth, height: slideHeight });
    
    $('.article-main-holder ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('article-main-holder ul li:last-child').prependTo('.article-main-holder ul');

    setTimeout(function(){
        autoAnimate = setInterval(myautoAnimate, 5000);
    },500);

    setTimeout(function(){
        clearInterval(autoAnimate);
    },30000);

    function myautoAnimate() {
        moveRight();
    }

    $('.btn-prev-img').click(function(){
        moveLeft();
        clearInterval(autoAnimate);
        Enabler.counter("Previous Panel");
    });
    $('.btn-next-img').click(function(){
        moveRight();
        clearInterval(autoAnimate);
        Enabler.counter("Next Panel");
    });
}

function moveLeft() {
    $('.article-main-holder ul').animate({
        left: + slideWidth
    }, 500, "easeInQuad", function () {
        $('.article-main-holder ul li:last-child').prependTo('.article-main-holder ul');
        $('.article-main-holder ul').css('left', '');
    });
};
function moveRight() {
    $('.article-main-holder ul').animate({
        left: - slideWidth
    }, 500, "easeInQuad", function () {
        $('.article-main-holder ul li:first-child').appendTo('.article-main-holder ul');
        $('.article-main-holder ul').css('left', '');
    });
};
function bgExit(){
    Enabler.exit("Background Panel 1", "https://am.vontobel.com/en/insights/vescore-global-market-outlook-may-2021")
    // Enabler.exit("Background");
}
function bgExit1(){
    Enabler.exit("Background Panel 1", "https://am.vontobel.com/en/insights/vescore-global-market-outlook-may-2021")
    // Enabler.exit("Background Panel 1");
}
function bgExit2(){
    Enabler.exit("Background Panel 2", "https://am.vontobel.com/en/insights/investors-outlook-may-2021")
    // Enabler.exit("Background Panel 2");
}
function bgExit3(){
    Enabler.exit("Background Panel 3", "https://am.vontobel.com/en/insights/whats-happened-to-the-brexit-premium")
    // Enabler.exit("Background Panel 3");
}
function bgExit4(){
    Enabler.exit("Background Panel 4", "https://am.vontobel.com/en/insights/beware-of-a-second-wave-of-treasury-selling")
    // Enabler.exit("Background Panel 4");
}
function bgExit5(){
    Enabler.exit("Background Panel 5", "https://am.vontobel.com/en/insights/make-your-money-matter-creating-impact-through-public-equity")
    // Enabler.exit("Background Panel 5");
}

window.onload = initializeEnabler();
