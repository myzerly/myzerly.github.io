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
    title: "Assumptions suck; it’s time to get some real answers",
    lessonImage: "img/lessons/user-testing.png",
    lessonLink: "http://zurb.com/university/lessons/assumptions-suck-it-s-time-to-get-some-real-answers",
    shortDescription: "Building something on a stack of assumptions gets you into trouble later on in a project, usually resulting in a couple iterations that could have been avoided. We design for people, not just ourselves! The good news is that it’s a lot easier than you think to keep your assumptions in check with some good ol’ user testing."
  },
  {
    title: "Navigating to Success: Sketching Navigational Components",
    lessonImage: "img/lessons/navigation-sketching.png",
    lessonLink: "http://zurb.com/university/lessons/navigating-to-success-sketching-navigational-components",
    shortDescription: "We're going to focus on navigation this time around and the basics to make that nav help you give context to the rest of the sketch. Sketching navs consistently across multiple sketches makes it easier to convey your ideas and communicate your point to stakeholders."
  },
  {
    title: "Creating a Believable User: The Quick Guide to Personas",
    lessonImage: "img/lessons/persona.png",
    lessonLink: "http://zurb.com/university/lessons/creating-a-believable-user-the-quick-guide-to-personas",
    shortDescription: "Personas aren't always necessary, but when we're trying to figure out different angles of attack when solving tough customer interactions, they help us take a look into what our potential users want and need. Check out this lesson to learn how to make some killer personas!"
  },
  {
    title: "Get Your Ideas Rolling: Building Momentum Through Iteration",
    lessonImage: "img/lessons/notable-lesson-iteration.png",
    lessonLink: "https://zurb.com/expo/lessons/get-your-ideas-rolling-building-momentum-through-iteration",
    shortDescription: "Sketching is a great way to convey basic ideas when talking about page layouts of all sizes and natures. We all have ideas, but if we don't draw them consistently, it's really hard to show your vision. This is a 'how to' for sketching basic UI elements."
  }
  
  
];

//Data for the work populating using ng-repeat
app.controller('workController', function($scope){
  $scope.work = work;
});

var work = [
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
    title: "Assumptions suck; it’s time to get some real answers",
    lessonImage: "img/lessons/user-testing.png",
    lessonLink: "http://zurb.com/university/lessons/assumptions-suck-it-s-time-to-get-some-real-answers",
    shortDescription: "Building something on a stack of assumptions gets you into trouble later on in a project, usually resulting in a couple iterations that could have been avoided. We design for people, not just ourselves! The good news is that it’s a lot easier than you think to keep your assumptions in check with some good ol’ user testing."
  },
  {
    title: "Navigating to Success: Sketching Navigational Components",
    lessonImage: "img/lessons/navigation-sketching.png",
    lessonLink: "http://zurb.com/university/lessons/navigating-to-success-sketching-navigational-components",
    shortDescription: "We're going to focus on navigation this time around and the basics to make that nav help you give context to the rest of the sketch. Sketching navs consistently across multiple sketches makes it easier to convey your ideas and communicate your point to stakeholders."
  },
  {
    title: "Creating a Believable User: The Quick Guide to Personas",
    lessonImage: "img/lessons/persona.png",
    lessonLink: "http://zurb.com/university/lessons/creating-a-believable-user-the-quick-guide-to-personas",
    shortDescription: "Personas aren't always necessary, but when we're trying to figure out different angles of attack when solving tough customer interactions, they help us take a look into what our potential users want and need. Check out this lesson to learn how to make some killer personas!"
  },
  {
    title: "Get Your Ideas Rolling: Building Momentum Through Iteration",
    lessonImage: "img/lessons/notable-lesson-iteration.png",
    lessonLink: "https://zurb.com/expo/lessons/get-your-ideas-rolling-building-momentum-through-iteration",
    shortDescription: "Sketching is a great way to convey basic ideas when talking about page layouts of all sizes and natures. We all have ideas, but if we don't draw them consistently, it's really hard to show your vision. This is a 'how to' for sketching basic UI elements."
  }

];


})();