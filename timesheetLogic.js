
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAEdfl3Yqf9Z-UEBG4JwhQiVQErwBSn-28",
    authDomain: "timesheet-2701e.firebaseapp.com",
    databaseURL: "https://timesheet-2701e.firebaseio.com",
    projectId: "timesheet-2701e",
    storageBucket: "timesheet-2701e.appspot.com",
    messagingSenderId: "70598237485"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate = 0;
var totalBilled = 0;


$("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
    name = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate= $("#start-input").val().trim();
    monthlyRate = $("#rate-input").val().trim();
    console.log(name, role, startDate, monthlyRate);
    $("#employee-table").append('<tr>' + '<td scope="col">' + name + '</td>' + '<td scope="col">' + role + '</td>'+ '<td scope="col">' + startDate + '</td>'+ '<td scope="col">' + monthsWorked + '</td>'+ '<td scope="col">' + monthlyRate + '</td>'+ '<td scope="col">' + totalBilled + '</td>');

      // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
  var database = firebase.database();

  // Initial Values
  var name = "";
  var role = "";
  var age = 0;
  var comment = "";

  // Capture Button Click
  $("#add-user").on("click", function(event) {
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    age = $("#age-input").val().trim();
    comment = $("#comment-input").val().trim();

    // Code for the push
    database.ref().push({

      name: name,
      role: role,
      age: age,
      comment: comment,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
});
  // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
  $(document).ready(function() {
  database.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().age);
    console.log(childSnapshot.val().comment);
    console.log(childSnapshot.val().joinDate);

    // full list of items to the well
    $("#employee-table").append('<tr>' + '<td scope="col">' + childSnapshot.val().name + '</td>' + '<td scope="col">' + childSnapshot.val().role + '</td>'+ '<td scope="col">' + childSnapshot.val().startDate + '</td>'+ '<td scope="col">' + childSnapshot.val().monthsWorked + '</td>'+ '<td scope="col">' + childSnapshot.val().monthlyRate + '</td>'+ '<td scope="col">' + childSnapshot.val().totalBilled + '</td>');
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
  });



