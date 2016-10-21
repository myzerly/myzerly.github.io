//AngularJS code
(function(){
var app = angular.module('portfolioSite', [ ]);

//Data for the work populating using ng-repeat
app.controller('workController', function($scope){
  $scope.work = work;
});

//Data for the work populating using ng-repeat
app.controller('visualsController', function($scope){
  $scope.visuals = visuals;
});

//Data for the work populating using ng-repeat
app.controller('casesController', function($scope){
  $scope.cases = cases;
});

//Attempting to animate hiding/ showing of work
(function(angular) {
  'use strict';
angular.module('ngAnimateChildren', ['ngAnimate'])
  .controller('MainController', function MainController() {
    this.animateChildren = false;
    this.enterElement = false;
  });
})(window.angular);


var work = [
  {
    imageTile: "tile-prototype",
    buttonCopy: "See More",
    tileTitle: "Case Study: Notable Prototypes",
    lessonLink: "case_study.html"
  },
  {
    imageTile: "tile-navigation",
    buttonCopy: "Read More",
    tileTitle: "Sketching Navigational Components",
    lessonLink: "lessons/navigation.html"
  },
  {
    imageTile: "tile-persona",
    buttonCopy: "Read More",
    tileTitle: "Creating Believable Personas",
    lessonLink: "lessons/personas.html"
  },
  {
    imageTile: "tile-redo-momentum",
    buttonCopy: "Read More",
    tileTitle: "Building Momentum Through Iteration",
    lessonLink: "lessons/iteration.html"
  },
  {
    imageTile: "tile-sketching",
    buttonCopy: "Read More",
    tileTitle: "Consistent Sketching",
    lessonLink: "lessons/consistent_sketching.html"
  },
  {
    imageTile: "tile-testing",
    buttonCopy: "Read More",
    tileTitle: "User Testing",
    lessonLink: "lessons/user_testing.html"
  },
  {
    imageTile: "tile-timeboxing",
    buttonCopy: "Read More",
    tileTitle: "Timeboxing",
    lessonLink: "lessons/time_box.html"
  }
];

// var visuals = [
//   {
//     imageTile: "tile-athletigen",
//     buttonCopy: "Upon Request",
//     tileTitle: "Visual Direction: Athletigen",
//     visualLink: "mailto:nic.edwrds@gmail.com?Subject=%20I'm%20Interested%20in%20Seeing%20Your%20Visuals!"
//   },
//   {
//     imageTile: "tile-equinix",
//     buttonCopy: "Upon Request",
//     tileTitle: "Visual Direction: Equinix",
//     visualLink: "mailto:nic.edwrds@gmail.com?Subject=%20I'm%20Interested%20in%20Seeing%20Your%20Visuals!"
//   }
// ];

// var cases = [
//   {
//     imageTile: "tile-prototype",
//     buttonCopy: "See More",
//     tileTitle: "Case Study: Notable Prototypes",
//     caseLink: "case_study.html"
//   },
//   {
//     imageTile: "tile-health",
//     buttonCopy: "Keynote Slides",
//     tileTitle: "Design Challenge: Apple Health",
//     caseLink: "img/apple-health.pdf"
//   }
// ];


})();
