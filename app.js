      

  // Create an initial itemCount variable
  var itemCount = 0;
  // Created an array to hold todos created by the user
  var groceryArray = [];
  // On Click event associated with the add-tp-do function
  $("#add-item").on("click", function() {
    // Get the to-do "value" from the textbox
    var itemName = $("#item").val().trim();
    // Create a new variable that will hold a "<p>" tag.
    // Then give it an ID in the following form:
    // "item-4" or "item-3" or "item-99", where the number is equal to itemCount.
    // Then append the item "value" as text to this <p> element.
    var listItem = $("<p>");
    listItem.attr("id", "item-" + itemCount);
    listItem.append(" " + itemName);
    // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
    // Give our button a data attribute called data-item-count and a class called "checkbox".
    // Lastly append the letter X inside.
    var closeItem = $("<button>");
    closeItem.attr("data-item-count", itemCount);
    closeItem.addClass("checkbox");
    closeItem.append("X");

    // -------------------------------------------------------------------------

    // Added the toDo task to the array in text format.
    groceryArray.push(itemName);
    console.log(groceryArray);
    // Emptied the localStorage
    localStorage.clear();
    // Converted the array into localStorage
    localStorage.setItem("grocery-list", JSON.stringify(groceryArray));

    // -------------------------------------------------------------------------

    // Append the button to the to do item
    listItem = listItem.prepend(closeItem);
    // Add the button and todo item to the grocery-list div
    $("#grocery-list").append(listItem);
    // Clear the textbox when done
    $("#item").val("");
    // Add to the itemCount
    itemCount++;
    // Prevent Form from Refreshing (return false)
    return false;
  });

  // When a user clicks a check box then delete the specific content
  // (NOTE: Pay attention to the unusual syntax here for the click event.
  // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
  $(document.body).on("click", ".checkbox", function() {
    // Get the itemNumber of the button from its data attribute.
    var itemNumber = $(this).data("item-count");
    // Empty the specific <p> element that previously held the todo item.
    $("#item-" + itemNumber).empty();
    // Deletes that same index from the array of toDos (to keep things matching)
    groceryArray.splice(itemNumber, 1);
    // Console log the values to confirm we have the right input
    console.log(itemNumber);
    console.log(groceryArray);
    // Emptied the localStorage
    localStorage.clear();
    // Converted the array into localStorage
    localStorage.setItem("grocery-list", JSON.stringify(groceryArray));
  });

  // --------------------------------------------------------------------------------------------------------

  // Reset the itemCount
  itemCount = 0;
  // By default take the localStorage content, convert it to an array,
  // and then use a for-loop to re-create the todolist
  $("#grocery-list").empty();
  // If Data exists inside of localStorage then loop through and display it.
  if (JSON.parse(localStorage.getItem("grocery-list"))) {
    var storedItems = JSON.parse(localStorage.getItem("grocery-list"));
    // Sets the global groceryArray variable equal to the storedItems
    groceryArray = storedItems;
    console.log(storedItems);
    for (var i = 0; i < storedItems.length; i++) {
      // Get the Todo "value" from the textbox
      var itemName = storedItems[itemCount];
      console.log(itemName);
      // Create a new todo <p> tag in jQuery  to hold a listItem
      // and give it a unique identifier based on what number it is in the list.
      // Then give it an ID of the form: "item-4" or "item-3" or "item-99", where the number is equal to itemCount.
      // Then append the todo text to this <p> element.
      var listItem = $("<p>");
      listItem.attr("id", "item-" + itemCount);
      listItem.append(" " + itemName);
      // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      // Give our button a data attribute called data-item-count and a class called "checkbox".
      // Lastly append a letter X inside.
      var closeItem = $("<button>");
      closeItem.attr("data-item-count", itemCount);
      closeItem.addClass("checkbox");
      closeItem.append("X");
      // Append the button to the listItem
      listItem = listItem.prepend(closeItem);
      // Add the button and listItem to the grocery-list div
      $("#grocery-list").append(listItem);
      itemCount++;
    }
  }