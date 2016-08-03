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

///////page 1 For Nikolia text/////////////////////////////
  // var nikoliaFadin = new ScrollMagic.Scene({
  //   triggerElement: '.page1-wrapper',
  //   triggerHook: 0.7,
  //   offset: 100,
  // })
  // .setTween(".page1-wrapper", {scale: 2})
  // .setClassToggle('.page1-wrapper', 'fade-in') // add class to project01
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'black',
  //   colorStart: '#75C695',
  //   colorEnd: 'pink'
  // })
  // .addTo(controller);
  //
  //
  // var nikoliaPin = new ScrollMagic.Scene({
  //   triggerElement: '.page1-wrapper',
  //   triggerHook: 0,
  //   offset: 0,
  //   duration: 900
  // })
  // .setPin('#page1-wrapper', {pushFollowers: true})
  //
  // .addTo(controller);


///////////Page 2 ///////////////////////////



});
