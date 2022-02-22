import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    // username input değişiklikleri için başta boş string atayan state
    const [enteredUsername, setEnteredUsername] = useState("");
    // handler etmesi için fonksiyon
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    // userage input değişiklikleri için state başta boş string atayan 
    const [enteredUserage, setEnteredUserage] = useState("");
    // handler etmesi için fonksiyon
    const userageChangeHandler = (event) => {
        setEnteredUserage(event.target.value);
    }
    // error durumu için
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();
        console.log("name " + enteredUsername + " age " + enteredUserage);
        if (enteredUsername.trim().length === 0 || 
            enteredUserage.trim().length === 0  || 
            +enteredUserage < 1) {
                console.log("invalid input girildi..");
                setError({
                    title: "invalid innput",
                    message: "entered invalid input" 
                });
                return;
            }
        const userData = {
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredUserage
        };
        props.onAddUsersList(userData);    
        // inputlar alındıktan sonra kutucukların içlerini boşaltma
        setEnteredUsername("");
        setEnteredUserage("");
    } 

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal onErrorHandler={errorHandler} errorTitle={error.title} errorMessage={error.message} />}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username-label">Name:</label>
                <input id="usernamee" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="username-age" >Age:</label>
                <input id="userage" type="number" value={enteredUserage} onChange={userageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
            </Card>
        </div>
    );

}

export default AddUser;