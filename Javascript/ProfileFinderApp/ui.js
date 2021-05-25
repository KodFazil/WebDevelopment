class UI {
    constructor() {
        this.profileContainer = document.querySelector("#profileContainer")
        this.alert = document.querySelector("#alert");
    }

    showProfile(profile) {
        var html = 
        `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail">
                    </a>
                </div>
                <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            namee = ${profile.name}
                        </li>
                        <li class="list-group-item">
                            username = ${profile.username}
                        </li>
                        <li class="list-group-item">
                            email = ${profile.email}
                        </li>
                        <li class="list-group-item">
                            address (city) = ${profile.address.city}
                        </li>
                        <li class="list-group-item">
                            phone = ${profile.phone}
                        </li>
                        <li class="list-group-item">
                            company = ${profile.company}
                        </li>
                    </ul>
                    <h4>Todo List</h4>
                    <ul id="todo-list" class="list-group">

                    </ul>
                </div>
            </div>
        </div>
        `
        
        this.profileContainer.innerHTML = html;
    }

    showTodo(todos) {
        var html = "";
        todos.forEach((element, index)  => {
            if (element.completed) {
                html +=
                `
                <li class="list-group-item bg-success">
                    Todo ${index + 1}-)  ${element.title}
                </li>
                `;
            }
            else {
                html +=
                `
                <li class="list-group-item bg bg-danger">
                    Todo ${index + 1}-)  ${element.title}
                </li>
                `;
            }
        });  

        this.profileContainer.querySelector("#todo-list").innerHTML = html;
    }

    showAlert(text) {
        this.alert.innerHTML = `${text} is not found`;
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }

}