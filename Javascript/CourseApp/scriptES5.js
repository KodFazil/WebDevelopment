function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

function UI() {

}

UI.prototype.addCourseToTable = function(course) {
    const list = document.getElementById("course-list");
    var html = 
    `<tr>
        <td><img src="imgDir/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger delete">Delete</a></td>
    </tr>`;
    list.innerHTML += html;    
}

UI.prototype.clearInputs = function() {
    document.getElementById("title").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("image").value = "";
}

UI.prototype.deleteCourse = function(element) {
    if (element.classList.contains("delete")) {
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showMessage = function(message, alertType) {
    const row = document.querySelector(".row");  
    var alert = `
        <div class="alert alert-${alertType}">
            ${message}
        </div>
    `;
    row.insertAdjacentHTML("beforebegin", alert);
    
    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 2500);
}

document.getElementById("new-course").addEventListener("submit", function(e) {
    
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;
    
    const course = new Course(title, instructor, image);
    //console.log(course);

    const ui = new UI();

    if (title === "" || instructor === "" ||image === "") {
        ui.showMessage("Please complete the form", "warning")
    }
    else {
        ui.addCourseToTable(course);
        ui.clearInputs();
        ui.showMessage("Course added successfully", "success");
    }
    e.preventDefault();
});

document.getElementById("course-list").addEventListener("click", function(e) {
    const ui = new UI();
    //console.log(e.target);
    ui.deleteCourse(e.target);
    ui.showMessage("Course deleted", "danger");
});