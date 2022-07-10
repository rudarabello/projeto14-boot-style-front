import { useState, useContext } from "react";
import { CartOutline } from "react-ionicons";
import onClickOutside from "react-onclickoutside";
import Context from "../contexts/Context";
import Cart from "./Cart";

function DisplayCart() {
    const [showCart, setShowCart] = useState(false);
    const { userCart } = useContext(Context)

    const toggle = () => {
        if (showCart === false) {
            setShowCart(true);
            console.log(userCart);
        } else {setShowCart(false)};
    }

    Cart.handleClickOutside = () => setShowCart(false);

    return (
        <div>
            <CartOutline onClick={toggle}
                    color={'#00000'}
                    height="50px"
                    width="50px" />
            { showCart ? <Cart /> : null }
        </div>
    )
}

const clickOutsideCart = {
    handleClickOutside: () => Cart.handleClickOutside,
};

export default onClickOutside(DisplayCart, clickOutsideCart);