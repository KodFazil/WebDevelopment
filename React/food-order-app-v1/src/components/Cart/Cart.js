import classes from "./Cart.module.css";

const Cart = (props) => {

    const cartItems = <ul>
        {
            [ {id: "c1", name: "yemek", amount: 5, price: 14} ].map( (item) => 
            (<li>{item.name}</li>) )
        }
    </ul>

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>50</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );

}

export default Cart;