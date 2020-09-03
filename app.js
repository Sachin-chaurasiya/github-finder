// init Github
const github = new Github();
//init UI
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", (e) => {
  //Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert'
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show profile
        console.log(data.profile);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
