//AngularJS code
(function(){
var app = angular.module('portfolioSite', [ ]);

//Data for the lessons populating using ng-repeat
app.controller('lessonController', function($scope){
  $scope.lessons = lessons;
});

var lessons = [
  {
    title: "Sketched Out: A Guide for Consistent Sketches",
    lessonImage: "img/lessons/sketch-lesson.png",
    lessonLink: "http://zurb.com/university/lessons/sketched-out-a-guide-for-consistent-sketches ",
    shortDescription: "Sketching is a great way to convey basic ideas when talking about page layouts of all sizes and natures. We all have ideas, but if we don't draw them consistently, it's really hard to show your vision. This is a 'how to' for sketching basic UI elements."
  },
  {
    title: "Boxin’ Up That Time: Timeboxing for the Win",
    lessonImage: "img/lessons/timebox.png",
    lessonLink: "http://zurb.com/university/lessons/boxin-up-that-time-timeboxing-for-the-big-win",
    shortDescription: "Sometimes we look at what seems to be an insurmountable task, and we ask ourselves, “How am I going to get through this?” The short answer is timeboxing, but how should we approach it? We’ll explore a couple tips and tricks to timebox more effectively and better define this strategy."
  },
  {
    title: "Navigating to Success: Sketching Navigational Components",
    lessonImage: "img/lessons/navigation-sketching.png",
    lessonLink: "http://zurb.com/university/lessons/navigating-to-success-sketching-navigational-components",
    shortDescription: "We're going to focus on navigation this time around and the basics to make that nav help you give context to the rest of the sketch. Sketching navs consistently across multiple sketches makes it easier to convey your ideas and communicate your point to stakeholders."
  },
  {
    title: "Get Your Ideas Rolling: Building Momentum Through Iteration",
    lessonImage: "img/lessons/notable-lesson-iteration.png",
    lessonLink: "www.qwerqwerqwer.com",
    shortDescription: "Sketching is a great way to convey basic ideas when talking about page layouts of all sizes and natures. We all have ideas, but if we don't draw them consistently, it's really hard to show your vision. This is a 'how to' for sketching basic UI elements."
  },
  {
  	
  }
];

//About me page 'overheard' from linkedin recommendations
// app.controller('lessonController', function($scope){
//     $scope.recommendations = recommendations;
// 	});

// var recommendations = [
//   {}
//   ]



})();