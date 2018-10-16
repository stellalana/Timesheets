
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




  });



