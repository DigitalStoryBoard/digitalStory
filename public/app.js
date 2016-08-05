angular.module("threeQuestions", [])

.directive("landingPage", function(){
  return {
    templateUrl: "landingPage.html",
    controller: "landingCtrl"
  }
})
.controller("landingCtrl", function(){




  var controller = new ScrollMagic.Controller();

  //////// cover page - landing page////////////////
  var coverFadeIn = new ScrollMagic.Scene({
    triggerElement: '.cover-wrapper',
    triggerHook: 1,
    offset: 600,

  })

  .setClassToggle('.cover-wrapper', 'fade-in') // add class to project01
  .addTo(controller);

  var coverFadeOut = new ScrollMagic.Scene({
    triggerElement: '.cover-wrapper',
    triggerHook: .5,
    offset: 700,
  })

  .setClassToggle('.cover-wrapper', 'fade-out') // add class to project01
  .addIndicators({
    name: 'cover scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  }) // this requires a plugin
  .addTo(controller);


  var coverTitleFadeIn = new ScrollMagic.Scene({
  })
  .setTween(TweenMax.from(".cover-title", 1.5, {opacity: 0, scale: 3, delay: 4, ease: Power2.easeOut, y: 0 }))
  .addTo(controller);


  var coverMonkeyFadeIn = new ScrollMagic.Scene({
  })
  .setTween(TweenMax.from(".cover-monkey", .8, {opacity: 0, scale: 3, delay: 6, ease: Power2.easeIn, y: 0 }))
  .addTo(controller);


  var coverBirdFadeIn = new ScrollMagic.Scene({
  })
  .setTween(TweenMax.from(".cover-bird", .5, {opacity: 0, scale: 2, delay: 7, ease: Power2.easeIn, y: 0 }))
  .addTo(controller);


  var coverDogFadeIn = new ScrollMagic.Scene({
  })
  .setTween(TweenMax.from(".cover-dog", .5, {opacity: 0, scale: 2, delay: 7.5, ease: Power2.easeIn, y: 0 }))
  .addTo(controller);

  var coverTitle2FadeIn = new ScrollMagic.Scene({
  })
  .setTween(TweenMax.from(".cover-title2", 1.5, {opacity: 0, scale: 3, delay: 8.5, ease: Power2.easeIn, y: 0 }))
  .addTo(controller);

  var coverTitle3FadeIn = new ScrollMagic.Scene({
  })
  .setTween(TweenMax.from(".cover-title3", 1.5, {opacity: 0, scale: 3, delay: 10.5, ease: Power2.easeIn, y: 0 }))
  .addTo(controller);




///////page 1 For Nikolia text/////////////////////////////
  var nikoliaFadinBg = new ScrollMagic.Scene({
    triggerElement: '.page1-bg',
    triggerHook: 0.7,
    offset: 100,
    duration: 300,
  })
  .setTween(".page1-bg", {opacity: 1, delay: 1.5})
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
    duration: 1200,
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
    duration: 500
  })
  .setPin('.page1-bg', {pushFollowers: true})

  .addTo(controller);

  var nikoliaFadinBg = new ScrollMagic.Scene({
    triggerElement: '.page1-bg',
    triggerHook: 0.7,
    offset: 800,
    duration: 800,
  })
  .setTween(".page1-bg", {opacity: 0, delay: 1.5})
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
  duration: 3000
})
.setPin('.page2-bg', {pushFollowers: true})

.addTo(controller);

var page2FadinBg = new ScrollMagic.Scene({
  triggerElement: '.page2-bg',
  triggerHook: 0.7,
  offset: 100,
  duration: 1000,
})
.setTween(".page2-bg", 7, {opacity: 1, delay: 2.2})
// .setClassToggle('.page2-bg', 'fade-in') // add class to project01
.addIndicators({
  name: 'fade page2Bg scene',
  colorTrigger: 'black',
  colorStart: '#75C695',
  colorEnd: 'pink'
})
.addTo(controller);



// // Scene
// var scene3 = new ScrollScene({triggerElement: "#screen4 .imacInner", triggerHook: 'onLeave'})
//     .addTo(controller)
//     .setTween(fallAnimation);



var tl = new TimelineMax({});
tl.add( TweenMax.to(".page2-boy", 12, {opacity: 1, delay: 2}))
tl.add( TweenMax.to(".page2-text", 22, {opacity: 1, delay: 1}))
tl.add( TweenMax.to(".page2-text", 12, {opacity: 0}))
tl.add( TweenMax.to(".page2-text2", 22, {opacity: 1}))
tl.add( TweenMax.to(".page2-text2", 12, {opacity: 0}))

tl.add( TweenMax.to(".page2-monkey", 12, {opacity: 1}, '-=5'))
tl.add( TweenMax.to(".page2-dog", 12, {opacity: 1}, '-=5'))
tl.add( TweenMax.to(".page2-bird", 12, {opacity: 1}, '-=5'))

tl.add( TweenMax.to(".page2-text3", 22, {opacity: 1, delay: 1}))
tl.add( TweenMax.to(".page2-text3", 12, {opacity: 0}))
tl.add( TweenMax.to(".page2-text4", 22, {opacity: 1}))
tl.add( TweenMax.to(".page2-text4", 12, {opacity: 0}))

tl.add( TweenMax.to(".page2-text5", 22, {opacity: 1}))
tl.add( TweenMax.to(".page2-text5", 12, {opacity: 0}))
tl.add( TweenMax.to(".page2-text6", 22, {opacity: 1}))
tl.add( TweenMax.to(".page2-text6", 12, {opacity: 0}));




var page2FadinBoy = new ScrollMagic.Scene({
  triggerElement: ".page2-bg",
  duration: 3000,
  triggerHook: 0.5,
  offset: 700,
})
// .setClassToggle('.page2-boy', 'fade-in') // add class to project01
.addIndicators({
  name: 'fade page2animation scene',
  colorTrigger: 'black',
  colorStart: '#75C695',
  colorEnd: 'pink'
})
.addTo(controller)
.setTween(tl);






});
