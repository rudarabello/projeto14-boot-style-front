import { useContext, useState } from "react";
import { CartOutline } from "react-ionicons";
import onClickOutside from "react-onclickoutside";
import Context from "../contexts/Context";
import Cart from "./Cart";

function DisplayCart() {
    const { data } = useContext(Context)
    const [showCart, setShowCart] = useState(false);
    
    const toggle = () => {
        if (data.token) {
            if (showCart === false) {
                setShowCart(true);
            } else {setShowCart(false)};
        } else {
            alert("Você não está logado!");
        }
        
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