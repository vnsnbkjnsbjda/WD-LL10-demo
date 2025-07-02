/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  if (username[0] === "@") {
    str = username + ": " + comment;
  } else {
    str = "@" + username + ": " + comment;
  }

  if (addToStart === true) {
    comments.unshift(str);
  } else {
    comments.push(str);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage() {
  const winner = pickWinner();
  const message = `Congratulations ${winner[0]}! You have won the giveaway! 🎉 ${winner[0]} said: ${winner[1]}`;
  console.log(message);
  // Display the message in the UI or alert
  alert(message);
}

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  // Generate a random index based on the number of comments
  const randomIndex = Math.floor(Math.random() * comments.length);
  // Return the comment at the random index
  return comments[randomIndex].split(": ");
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  randEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("winner-emoji").innerText = randEmoji;
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  return comments.reverse();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
  return comments.splice(index, 1);
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {
  return comments.filter((comment) => {
    // Split the comment by colon to get the username and the comment text
    const parts = comment.split(": ");
    // Check if the comment text contains only emojis
    return (
      !parts[1] ||
      !parts[1].trim() ||
      !parts[1].split(" ").every((word) => emojis.includes(word))
    );
  });
}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {
  // Check if searchUsers is true or false
  if (searchUsers) {
    // Filter comments by username
    return comments.filter((comment) => {
      const username = comment.split(": ")[0];
      return username.toLowerCase().includes(searchTerm.toLowerCase());
    });
  } else {
    // Filter comments by content
    return comments.filter((comment) => {
      const content = comment.split(": ")[1];
      return (
        content && content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
