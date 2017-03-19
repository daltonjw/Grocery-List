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

//Adding items to the list
//On click of add item button
$("#add-item-button").on("click", function(event) {
  // Prevent Form from Refreshing
  event.preventDefault();
  // Get the input values from the html
  var localGroceryItem = $("#gocery-item-input").val().trim();
  //log values for testing purposes
  console.log(localGroceryItem);
  //Push localGroceryItem as value to firebase with timestamp as key
  database.ref().push().set(localGroceryItem);
  //Empty the html
  $("#gocery-item-input").val("");
});


//Displaying items in the html
//Every time the database changes, requery and rewrite all list items
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  var obj = snapshot.val();
  console.log(obj);
  //Loop over each item in the snapshot opbject returned by firebase
  for(var prop in obj) {
    //not sure if the following line will be useful at some point
    // if(obj.hasOwnProperty(prop))
    //log each value to the console for testing purposes
    console.log(obj[prop]);    
    var itemName = obj[prop];
    //building hmls to list object and appending "X" button
    var listItem = $("<p>");
    listItem.append(" " + itemName);
    // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
    // Give our button a data attribute called data-item-count and a class called "checkbox".
    // Lastly append a letter X inside.
    var closeItem = $("<button>");
    // closeItem.attr("data-item-count", itemCount);
    closeItem.addClass("checkbox");
    closeItem.append("X");
    listItem = listItem.prepend(closeItem);
    //Prepend each p tag and button to the div
    $("#grocery-list-div").prepend(listItem);
  }
});


//Deleting items from the database


