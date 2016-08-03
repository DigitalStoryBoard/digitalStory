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
    offset: 600,
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
  var nikoliaFadin = new ScrollMagic.Scene({
    triggerElement: '.page1-wrapper',
    triggerHook: 0.7,
    offset: 100,
  })
  .setTween(".page1-wrapper", {scale: 2})
  .setClassToggle('.page1-wrapper', 'fade-in') // add class to project01
  .addIndicators({
    name: 'fade Nikolia scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);


  var nikoliaPin = new ScrollMagic.Scene({
    triggerElement: '.page1-wrapper',
    triggerHook: 0,
    offset: 0,
    duration: 900
  })
  .setPin('#page1-wrapper', {pushFollowers: true})

  .addTo(controller);

///////////Page 2 ///////////////////////////



});
