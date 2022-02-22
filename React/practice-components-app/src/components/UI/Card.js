import classes from "./Card.module.css";

const Card = (props) => {

    // div ler arasındaki props.children <Card><Card/> arasına gelecekler için  
    return (
        <div className={` ${classes.card} ${props.className} `}>
            {props.children}
        </div>
    );

}

export default Card;