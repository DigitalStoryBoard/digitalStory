angular.module("threeQuestions", [])

.directive("landingPage", function(){
  return {
    templateUrl: "landingPage.html",
    controller: "landingCtrl"
  }
})
.controller("landingCtrl", function(){

  var flightpath = {
  			entry : {
  				type:"soft",
          values:
            [{x:-500, y:250},
            {x:-400, y:100},
            {x:-300, y:400}],
            autoRotate:false},
        looping : {
  				type:"soft",
          values:
            [{x:-100, y:250},
            {x:-400, y:100},
            {x:-300, y:400}],
            autoRotate:false},
            ease:Power1.easeInOut};


  var controller = new ScrollMagic.Controller();


  //////// cover page - landing page////////////////

  var coverFadeIn = new ScrollMagic.Scene({
    triggerElement: '.cover-wrapper',
    triggerHook: 1,
    offset: 600
  })
  .setClassToggle('.cover-wrapper', 'fade-in') // add class to project01
  .addTo(controller);


  var coverFadeOut = new ScrollMagic.Scene({
    triggerElement: '.cover-wrapper',
    triggerHook: .5,
    offset: 700
  })
  .setClassToggle('.cover-wrapper', 'fade-out') // add class to project01
  .addIndicators({
    name: 'cover scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  }) // this requires a plugin
  .addTo(controller);


  var coverTitleFadeIn = new ScrollMagic.Scene({})
  .setTween(TweenMax.from(".cover-title", 1.1, {opacity: 0, scale: 3, delay: 3, ease: Power2.easeOut, y: 0}))
  .addTo(controller);


  var coverMonkeyFadeIn = new ScrollMagic.Scene({})
  .setTween(TweenMax.from(".cover-monkey", .8, {opacity: 0, scale: 3, delay: 4, ease: Power2.easeIn, y: 0}))
  .addTo(controller);


  var coverBirdFadeIn = new ScrollMagic.Scene({})
  .setTween(TweenMax.from(".cover-bird", .5, {opacity: 0, scale: 2, delay: 5.5, ease: Power2.easeIn, y: 0}))
  .addTo(controller);


  var coverDogFadeIn = new ScrollMagic.Scene({})
  .setTween(TweenMax.from(".cover-dog", .5, {opacity: 0, scale: 2, delay: 6, ease: Power2.easeIn, y: 0}))
  .addTo(controller);

  var coverTitle2FadeIn = new ScrollMagic.Scene({})
  .setTween(TweenMax.from(".cover-title2", 1.1, {opacity: 0, scale: 3, delay: 6.5, ease: Power2.easeIn, y: 0}))
  .addTo(controller);

  var coverTitle3FadeIn = new ScrollMagic.Scene({})
  .setTween(TweenMax.from(".cover-title3", 1.1, {opacity: 0, scale: 3, delay: 8.5, ease: Power2.easeIn, y: 0}))
  .addTo(controller);



///////page 1 For Nikolia text/////////////////////////////

  var nikoliaFadinBg = new ScrollMagic.Scene({
    triggerElement: '.page1-bg',
    triggerHook: 0.7,
    offset: 100,
    duration: 300
  })
  .setTween(".page1-bg", {delay: 1.5, opacity: 1})
  .addIndicators({
    name: 'fade NikoliaBg scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var nikoliaFadinTxt = new ScrollMagic.Scene({
    triggerElement: '.page1-nikText',
    triggerHook: 0.7,
    offset: 0,
    duration: 0
  })
  .setTween(".page1-nikText", {opacity: 1, scale: 2})
  .addIndicators({
    name: 'fade NikoliaTxt scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var nikoliaPinBg = new ScrollMagic.Scene({
    triggerElement: '.page1-bg',
    triggerHook: 0,
    offset: 0,
    duration: 350
  })
  .setPin('.page1-bg', {pushFollowers: true})
  .addTo(controller);


  var nikoliaFadinBg = new ScrollMagic.Scene({
    triggerElement: '.page1-bg',
    triggerHook: 0.7,
    offset: 800,
    duration: 600
  })
  .setTween(".page1-bg", {opacity: 0})
  .setClassToggle('.page1-bg', 'fade-in') // add class to project01
  .addIndicators({
    name: 'fadeOut NikoliaBg scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


///////////Page 2 ///////////////////////////


  var page2PinBg = new ScrollMagic.Scene({
    triggerElement: '.page2-bg',
    triggerHook: 0,
    offset: 360,
    duration: 2700
  })
  .setPin('.page2-bg', {pushFollowers: true})
  .addTo(controller);


  var page2FadinBg = new ScrollMagic.Scene({
    triggerElement: '.page2-bg',
    triggerHook: 0.7,
    offset: 100,
    duration: 1000
  })
  .setTween(".page2-bg", 7, {delay: 2.2, opacity: 1})
  .addIndicators({
    name: 'fade page2Bg scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl = new TimelineMax({});
  tl.add( TweenMax.to(".page2-boy", 22, {opacity: 1,}))
  tl.add( TweenMax.to(".page2-text", 42, {delay: 1, opacity: 1}))
  tl.add( TweenMax.to(".page2-text", 12, {opacity: 0}))
  tl.add( TweenMax.to(".page2-text2", 42, {opacity: 1}))
  tl.add( TweenMax.to(".page2-text2", 12, {opacity: 0}))
  tl.add( TweenMax.to(".page2-monkey", 12, {opacity: 1}, '-=0.15'))
  tl.add( TweenMax.to(".page2-dog", 12, {opacity: 1}, '-=0.15'))
  tl.add( TweenMax.to(".page2-bird", 12, {opacity: 1}, '-=0.15'))
  tl.add( TweenMax.to(".page2-text3", 42, {delay: 1, opacity: 1}))
  tl.add( TweenMax.to(".page2-text3", 12, {opacity: 0}))
  tl.add( TweenMax.to(".page2-text4", 42, {opacity: 1}))
  tl.add( TweenMax.to(".page2-text4", 12, {opacity: 0}))
  tl.add( TweenMax.to(".page2-text5", 42, {opacity: 1}))
  tl.add( TweenMax.to(".page2-text5", 42, {opacity: 1}))
  tl.add( TweenMax.to(".page2-text5", 12, {opacity: 0}))
  tl.add( TweenMax.to(".page2-text6", 42, {opacity: 1}))
  tl.add( TweenMax.to(".page2-text6", 12, {opacity: 0}))
  tl.add( TweenMax.to(".page2-bg", 32, {opacity: 0}));


  var page2FadinBoy = new ScrollMagic.Scene({
    triggerElement: ".page2-bg",
    duration: 3000,
    triggerHook: 0.5,
    offset: 700
  })
  .addIndicators({
    name: 'fade page2animation scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl);


  ///////////Page 3 ///////////////////////////

  var page2PinKite = new ScrollMagic.Scene({
    triggerElement: '.page3-kite2',
    triggerHook: 1,
    offset: 650,
    duration: 9000
  })
  .setPin('.page3-kite2', {pushFollowers: true})
  .addIndicators({
    name: 'fade page2kite scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl2 = new TimelineMax({});
      tl2.add( TweenMax.to(".page3-kite2", 3, {opacity: 1, delay: 1}))
      tl2.add(TweenMax.to(".page3-kite2", 4, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut, delay: 38}))
      tl2.add(TweenMax.to(".page3-kite2", 8, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
      tl2.add( TweenMax.to(".page3-kite2", .5, {opacity: 0, delay: 0}));

  var page2kite2 = new ScrollMagic.Scene({
    triggerElement: ".page2-bg",
    duration: 3470,
    triggerHook: 0.5,
    offset: 675
  })
  .addIndicators({
    name: 'fade page2animation scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl2);


  var tl3 = new TimelineMax({});
      tl3.add( TweenMax.to(".page3-kite", .1, {opacity: 1, delay: .1}))
      tl3.add( TweenMax.to(".page3-kite", 5, {y: 800}))
      tl3.add( TweenMax.to(".page3-kite", .1, {opacity: 0}));

  var page2kite2 = new ScrollMagic.Scene({
    triggerElement: ".page3-kite",
    duration: 3650,
    triggerHook: 0.5,
    offset: -150
  })
  .addIndicators({
    name: 'fade page3kite',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl3);


  var page2PinBg = new ScrollMagic.Scene({
    triggerElement: '.page3-bg',
    triggerHook: .2,
    offset: 200,
    duration: 2000
  })
  .setPin('.page3-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pin page3wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl4 = new TimelineMax({});
      tl4.add( TweenMax.to(".page3-text", 1, {opacity: 1, x: 200}))
      tl4.add( TweenMax.to(".page3-text2", 1, {delay: 2, opacity: 1}))
      tl4.add( TweenMax.to(".page3-text3", 1, {x: -200, opacity: 1}))
      tl4.add( TweenMax.to(".page3-kite", 1, {opacity: 0, delay: 2}));

  var page3text2 = new ScrollMagic.Scene({
      triggerElement: ".page3-bg",
      duration: 2000,
      triggerHook: 0.5,
      offset: 700
    })
    .addIndicators({
      name: 'fade page3animationtext scene',
      colorTrigger: 'black',
      colorStart: '#75C695',
      colorEnd: 'pink'
    })
    .addTo(controller)
    .setTween(tl4);

///////////Page 4 ///////////////////////////


  var page4PinBg = new ScrollMagic.Scene({
    triggerElement: '.page4-bg',
    triggerHook: .2,
    offset: 200,
    duration: 4100
  })
  .setPin('.page4-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pin page4wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl5 = new TimelineMax({});
      tl5.add( TweenMax.to(".page4-pane1", 3, {delay: 2, opacity: 1, y: -500}))
      tl5.add( TweenMax.to(".page4-text", 3, {delay: 2, opacity: 1}))
      tl5.add( TweenMax.to(".page4-pane2", 3, {delay: 2, opacity: 1, y: 500}))
      tl5.add( TweenMax.to(".page4-text2", 3, {delay: 2, opacity: 1}))
      tl5.add( TweenMax.to(".page4-pane3", 3, {delay: 2, opacity: 1, y: -500}))
      tl5.add( TweenMax.to(".page4-text3", 3, {opacity: 1}))
      tl5.add( TweenMax.to(".page4-pane2-coconut", 4, {delay: 5, opacity: 1, y: 499,}))
      tl5.add( TweenMax.to(".page4-pane2-coconut", 1, {opacity: 0}))
      tl5.add( TweenMax.to(".page4-bg", 10, {delay: 2, opacity: 0}));


  var page4anim = new ScrollMagic.Scene({
    triggerElement: ".page4-bg",
    duration: 6000,
    triggerHook: 0.5,
    offset: 50
  })
  .addIndicators({
    name: 'fade page4animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl5);


///////////Page 5 ///////////////////////////

  var page5PinBg = new ScrollMagic.Scene({
    triggerElement: '.page5-bg',
    triggerHook: .5,
    offset: -100,
    duration: 3000
  })
  .setPin('.page5-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pin page5wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl6 = new TimelineMax({});
      tl6.add( TweenMax.to(".page5-bg", .5, {opacity: 1, y: -500}))
      tl6.add( TweenMax.to(".page5-text", .6, {opacity: 1}))
      tl6.add( TweenMax.to(".page5-bg", .3, {opacity: 0}));

  var page5anim = new ScrollMagic.Scene({
    triggerElement: ".page5-bg",
    duration: 2900,
    triggerHook: 0.5,
    offset: 50
  })
  .addIndicators({
    name: 'fade page5animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl6);


  //////////////page6//////////////////

  var page6PinBg = new ScrollMagic.Scene({
    triggerElement: '.page6-bg',
    triggerHook: .2,
    offset: -250,
    duration: 2800
  })
  .setPin('.page6-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pin page6wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl7 = new TimelineMax({});
      tl7.add( TweenMax.to(".page6-pane2", 3, {opacity: 1, y: -500}))
      tl7.add( TweenMax.to(".page6-text2", 1, {opacity: 1}))
      tl7.add( TweenMax.to(".page6-pane1", 3, {opacity: 1, x: 500}))
      tl7.add( TweenMax.to(".page6-text", 3, {opacity: 1}))
      tl7.add( TweenMax.to(".page6-pane3", 3, {opacity: 1, x: -500}))
      tl7.add( TweenMax.to(".page6-text3", 3, {opacity: 1}))
      tl7.add( TweenMax.to(".page6-bg", 2, {opacity: 0}));

  var page6anim = new ScrollMagic.Scene({
    triggerElement: ".page6-bg",
    duration: 3000,
    triggerHook: 0.5,
    offset: 50
  })
  .addIndicators({
    name: 'fade page6animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl7);


//////////////////////page7///////////////////

  var page7PinBg = new ScrollMagic.Scene({
    triggerElement: '.page7-bg',
    triggerHook: .5,
    offset: 410,
    duration: 5000
  })
  .setPin('.page7-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pin page7wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl8 = new TimelineMax({});
      tl8.add( TweenMax.to(".page7-bg", 3, {opacity: 1, delay: .6}))
      tl8.add( TweenMax.to(".page7-animals-tree", 5, {x: -20}), '-=3')
      tl8.add( TweenMax.to(".page7-cloudsLeft", 5, {scale: 1.4, opacity: 1, x: 15}), '-=5')
      tl8.add( TweenMax.to(".page7-cloudsRight", 5, {scale: 1.4, opacity: 1}), '-=5')
      tl8.add( TweenMax.to(".page7-cloudsMiddle", 5, {scale: 1.4, opacity: 1, x: -25}), '-=5')
      tl8.add( TweenMax.to(".page7-bird", 7, {opacity: 1, y: -50}), '-=5')
      tl8.add( TweenMax.to(".page7-text", 3, {opacity: 1, ease: Power2.easeIn, y: 0}), '-=7')
      tl8.add( TweenMax.to(".page7-text", 3, {opacity: 1}, '-=3'));;

  var page7anim = new ScrollMagic.Scene({
    triggerElement: ".page7-bg",
    duration: 6000,
    triggerHook: 0.1,
    offset: 250
  })
  .addIndicators({
    name: 'fade page7animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl8);


  var page72anim = new ScrollMagic.Scene({
    triggerElement: ".page7-bg",
    duration: 4000,
    triggerHook: 0.1,
    offset: 250
  })
  .addIndicators({
    name: 'fade page7animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(".page7-bg", 1, {opacity: 0, delay: 3.5});


  //////////////////////page8///////////////////

  var page8PinBg = new ScrollMagic.Scene({
    triggerElement: '.page8-bg',
    triggerHook: .5,
    offset: 410,
    duration: 5000
  })
  .setPin('.page8-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pin page7wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl9 = new TimelineMax({});
      tl9.add( TweenMax.to(".page8-bg", 1, {opacity: 1}))
      tl9.add( TweenMax.to(".page8-sea-kid", 5, {x: -30, delay: .4}), '-=1')
      tl9.add( TweenMax.to(".page8-cloudsLeft", 5, {scale: 1.2, opacity: 1, x: 25}), '-=5')
      tl9.add( TweenMax.to(".page8-cloudsRight", 5, {scale: 1.2, opacity: 1}), '-=5')
      tl9.add( TweenMax.to(".page8-cloudsMiddle", 5, {scale: 1.2, opacity: 1, x: -35}), '-=5')
      tl9.add( TweenMax.to(".page8-bird", 7, {opacity: 1, y: -40}), '-=5')
      tl9.add( TweenMax.to(".page8-text", 1, {opacity: 1, ease: Power2.easeIn, y: 0}), '-=8')
      tl9.add( TweenMax.to(".page8-text", 1, {opacity: 1}, '-=3'));;

  var page8anim = new ScrollMagic.Scene({
    triggerElement: ".page8-bg",
    duration: 8000,
    triggerHook: 0.1,
    offset: 250
    })
  .addIndicators({
    name: 'fade page8animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
    })
  .addTo(controller)
  .setTween(tl9);


  var page82anim = new ScrollMagic.Scene({
    triggerElement: ".page8-bg",
    duration: 5000,
    triggerHook: 0.1,
    offset: 250
    })
  .addIndicators({
    name: 'fade page8animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
    })
  .addTo(controller)
  .setTween(".page8-bg", .3, {delay: 1, opacity: 0});


  //////////////////////page9///////////////////

  var page9PauseBg = new ScrollMagic.Scene({
    triggerElement: '.page9-bg',
    triggerHook: .5,
    offset: 4000,
    duration: 5000
    })
  .setPin('.page9-bg', {pushFollowers: true})
  .addIndicators({
    name: 'pause page9wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
    })
  .addTo(controller);


  var page9PinBg = new ScrollMagic.Scene({
    triggerElement: '.page9-bg',
    triggerHook: .5,
    offset: 400,
    duration: 5000
    })
  .setPin('.page9-bg', {delay: 5, pushFollowers: true})
  .addIndicators({
    name: 'pin page9wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
    })
  .addTo(controller);


  var tl10 = new TimelineMax({});
  tl10.add( TweenMax.to(".page9-bg", 2, {opacity: 1, delay: 1}))
  tl10.add( TweenMax.from(".page9-nikolia", 5, {scale: 1.5, x: -30}), '-=2')
  tl10.add( TweenMax.to(".page9-clouds", 5, {scale: 1.2, opacity: 1, x: 25}), '-=5')
  tl10.add( TweenMax.from(".page9-trees", 5, {scale: 1.2, opacity: 0}), '-=5')
  tl10.add( TweenMax.to(".page9-text", 2, {opacity: 1, ease: Power2.easeIn, y: 0}), '-=8')
  tl10.add( TweenMax.to(".page9-text", 1, {opacity: 1}, '-=3'));;

  var page9anim = new ScrollMagic.Scene({
    triggerElement: ".page9-bg",
    duration: 5000,
    triggerHook: 0.5,
    offset: -1000
  })
  .addIndicators({
    name: 'fade page9animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl10);


  var page92anim = new ScrollMagic.Scene({
    triggerElement: ".page9-bg",
    duration: 7000,
    triggerHook: 0.5,
    offset: 0
  })
  .addIndicators({
    name: 'fade page92animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(".page9-bg", 1, {opacity: 0, delay: 4});


  //////////////////////page10///////////////////

  var page10PinBg = new ScrollMagic.Scene({
    triggerElement: '.page10-bg',
    triggerHook: .5,
    offset: 400,
    duration: 10000
  })
  .setPin('.page10-bg', {delay: 5, pushFollowers: true})
  .addIndicators({
    name: 'pin page10wrapper',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var tl11 = new TimelineMax({});
      tl11.add( TweenMax.to(".page10-bg", 1, {opacity: 1}))
      tl11.add( TweenMax.to(".page10-text", 18, {y: -1000}), '-=1')
      tl11.add( TweenMax.to(".page10-boy", 2, {opacity: 1}), '-=14')
      tl11.add( TweenMax.to(".page10-boy", 13, {y: -1000}), '-=15')
      tl11.add( TweenMax.to(".page10-turtle", 9, {y: -1100}), '-=14')
      tl11.add( TweenMax.to(".page10-boy", 1, {opacity: 0}), '-=10')
      tl11.add( TweenMax.to(".page10-turtle", 1, {opacity: 0}), '-=10')

      tl11.add( TweenMax.to(".page10-text", 1, {opacity: 0}), '-=10')
      tl11.add( TweenMax.to(".page10-nikolia", 3, {opacity: 1}), '-=8')
      tl11.add( TweenMax.to(".page10-nikolia", 11, {y: -500}), '-=8')
      tl11.add( TweenMax.to(".page10-text2", 2, {opacity: 1}), '-=12')
      tl11.add( TweenMax.to(".page10-text2", 10, {y: -600, delay: 10}), '-=22.5');

  var page9anim = new ScrollMagic.Scene({
    triggerElement: ".page10-bg",
    duration: 10000,
    triggerHook: 0.5,
    offset: 400
  })
  .addIndicators({
    name: 'fade page10animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(tl11);


  var page102anim = new ScrollMagic.Scene({
    triggerElement: ".page10-bg",
    duration: 10000,
    triggerHook: 0.5,
    offset: 0,
  })
  .addIndicators({
    name: 'fade page102animationtext scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller)
  .setTween(".page10-bg", 1, {opacity: 0, delay: 4});



});
