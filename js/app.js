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


var work = [
  {
    imageTile: "tile-navigation",
    buttonCopy: "Read More",
    tileTitle: "Sketching Navigational Components",
    lessonLink: "http://zurb.com/university/lessons/navigating-to-success-sketching-navigational-components"
  },
  {
    imageTile: "tile-persona",
    buttonCopy: "Read More",
    tileTitle: "Creating Believable Personas",
    lessonLink: "http://zurb.com/university/lessons/creating-a-believable-user-the-quick-guide-to-personas"
  },
  {
    imageTile: "tile-redo-momentum",
    buttonCopy: "Read More",
    tileTitle: "Building Momentum Through Iteration",
    lessonLink: "https://zurb.com/expo/lessons/get-your-ideas-rolling-building-momentum-through-iteration"
  },
  {
    imageTile: "tile-sketching",
    buttonCopy: "Read More",
    tileTitle: "A Guide to Consisten Sketches",
    lessonLink: "http://zurb.com/university/lessons/sketched-out-a-guide-for-consistent-sketches"
  },
  {
    imageTile: "tile-testing",
    buttonCopy: "Read More",
    tileTitle: "The How-to for User Testing",
    lessonLink: "http://zurb.com/university/lessons/assumptions-suck-it-s-time-to-get-some-real-answers"
  },
  {
    imageTile: "tile-timeboxing",
    buttonCopy: "Read More",
    tileTitle: "Methods for Effective Timeboxing",
    lessonLink: "http://zurb.com/university/lessons/boxin-up-that-time-timeboxing-for-the-big-win"
  }

];

var visuals = [
  {
    imageTile: "tile-athletigen",
    buttonCopy: "See More",
    tileTitle: "Visual Direction: Athletigen",
    visualLink: "athletigen.html"
  },
  {
    imageTile: "tile-equinix",
    buttonCopy: "See More",
    tileTitle: "Visual Direction: Equinix",
    visualLink: "#"
  }
];

var cases = [
  {
    imageTile: "tile-prototype",
    buttonCopy: "See More",
    tileTitle: "Case Study: Notable Prototypes",
    caseLink: "case_study.html"
  }
];


})();