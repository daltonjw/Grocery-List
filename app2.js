// Initialize Firebase
var config = {
	apiKey: "AIzaSyC7coLIY6pX2ntPwZPv58WpKXgBlo4BATY",
	authDomain: "grocery-list-app-3f7ee.firebaseapp.com",
	databaseURL: "https://grocery-list-app-3f7ee.firebaseio.com",
	storageBucket: "grocery-list-app-3f7ee.appspot.com",
	messagingSenderId: "255300093561"
};

firebase.initializeApp(config);

//Create variable to reference database
var database = firebase.database();

//On click of add item button
$("#add-item-button").on("click", function(event) {
  // Prevent Form from Refreshing
  event.preventDefault();
  // Get the input values
  var localGroceryItem = $("#gocery-item-input").val().trim();
  //log values for testing purposes
  console.log(localGroceryItem);
  database.ref().push({
    name: localGroceryItem
  });

  //
  var localGroceryItem = $("#gocery-item-input").val().trim();
    // Prevent Form from Refreshing (return false)
    // return false;
});

