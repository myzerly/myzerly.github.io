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
    tileTitle: "Consistent Sketching",
    lessonLink: "http://zurb.com/university/lessons/sketched-out-a-guide-for-consistent-sketches"
  },
  {
    imageTile: "tile-testing",
    buttonCopy: "Read More",
    tileTitle: "User Testing",
    lessonLink: "http://zurb.com/university/lessons/assumptions-suck-it-s-time-to-get-some-real-answers"
  },
  {
    imageTile: "tile-timeboxing",
    buttonCopy: "Read More",
    tileTitle: "Timeboxing",
    lessonLink: "http://zurb.com/university/lessons/boxin-up-that-time-timeboxing-for-the-big-win"
  }

];

var visuals = [
  {
    imageTile: "tile-athletigen",
    buttonCopy: "Upon Request",
    tileTitle: "Visual Direction: Athletigen",
    visualLink: "mailto:nic.edwrds@gmail.com?Subject=%20I'm%20Interested%20in%20Seeing%20Your%20Visuals!"
  },
  {
    imageTile: "tile-equinix",
    buttonCopy: "Upon Request",
    tileTitle: "Visual Direction: Equinix",
    visualLink: "mailto:nic.edwrds@gmail.com?Subject=%20I'm%20Interested%20in%20Seeing%20Your%20Visuals!"
  }
];

var cases = [
  {
    imageTile: "tile-prototype",
    buttonCopy: "See More",
    tileTitle: "Case Study: Notable Prototypes",
    caseLink: "case_study.html"
  },
  {
    imageTile: "tile-health",
    buttonCopy: "Keynote Slides",
    tileTitle: "Design Challenge: Apple Health",
    caseLink: "http://myzerly.com/img/apple-health.pdf"
  }
];


})();