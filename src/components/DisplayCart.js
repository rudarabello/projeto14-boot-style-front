import { useState } from "react";
import { CartOutline } from "react-ionicons";
import onClickOutside from "react-onclickoutside";
import Cart from "./Cart";

function DisplayCart() {
    const [showCart, setShowCart] = useState(false);
    const toggle = () => {
        if (showCart === false) {
            setShowCart(true);
        } else {setShowCart(false)};
    }

    Cart.handleClickOutside = () => setShowCart(false);

    return (
        <div>
            <CartOutline onClick={toggle}
                    color={'#00000'}
                    height="35px"
                    width="35px" />
            { showCart ? <Cart /> : "" }
        </div>
    )
}

const clickOutsideCart = {
    handleClickOutside: () => Cart.handleClickOutside,
};

export default onClickOutside(DisplayCart, clickOutsideCart);