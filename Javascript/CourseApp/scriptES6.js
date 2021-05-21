class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random()*1000); 
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI {
    constructor() {
    }

    addCourseToTable(course) {
        const list = document.getElementById("course-list");
        var html = 
        `<tr>
            <td><img src="imgDir/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" data-id="${course.courseId}" class="btn btn-danger delete">Delete</a></td>
        </tr>`;
        list.innerHTML += html;
    }

    clearInputs() {
        document.getElementById("title").value = "";
        document.getElementById("instructor").value = "";
        document.getElementById("image").value = "";
    }

    deleteCourse(element) {
        if (element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
            Storage.deleteCourseFromLS(element);
            const ui = new UI();
            ui.showMessage("Course deleted", "danger");
        }
    }

    showMessage(message, alertType) {
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
}

class Storage {

    static getCourses() {
        let courses;
        if (localStorage.getItem("courses") === null) {
            courses = [];
        }
        else {
            courses = JSON.parse(localStorage.getItem("courses"));       
        }
        return courses;
    }

    static displayCourses() {
        const courses = Storage.getCourses();
        const ui = new UI();
        courses.forEach(course => {
            ui.addCourseToTable(course);
        });
    }

    static addCourseToLS(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));
    }

    static deleteCourseFromLS(element) {
        const courseId = element.getAttribute("data-id");
        const courses = Storage.getCourses();
        courses.forEach((course, index) => {
            if (course.courseId == courseId) {
                courses.splice(index, 1);
            }
        });
        localStorage.setItem("courses", JSON.stringify(courses));
    }
        
}

document.addEventListener("DOMContentLoaded", Storage.displayCourses());


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
        Storage.addCourseToLS(course);
        ui.clearInputs();
        ui.showMessage("Course added successfully", "success");
    }
    e.preventDefault();
});

document.getElementById("course-list").addEventListener("click", function(e) {
    const ui = new UI();
    //console.log(e.target);
    ui.deleteCourse(e.target); // this includes deleting from LS
});