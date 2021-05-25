const profile = new Profile();
const searchInput = document.getElementById("searchProfile");
const ui = new UI();

searchInput.addEventListener("keyup", (event) => {
    ui.clear();
    let text = event.target.value;
    if (text !== "") {
        profile.getProfile(text)
        .then(result => {
            if (result.profile.length === 0) {
                ui.showAlert(text);
            }
            else {
                ui.showProfile(result.profile[0]);
                ui.showTodo(result.todo);
                //console.log(result.profile)
                //console.log(result.profile[0]);
            }
        })
        .catch(err => {
            ui.showAlert(text);
        })
    }
});