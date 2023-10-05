import Button from 'react-bootstrap/Button';
import './cartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from 'antd';

const CartWidget = () => {
    return (
        <div className='cart-button'> 
        <Badge count={5} showZero>
        <FaShoppingCart className='shoppingCartIcon' />
    </Badge>
        </div>
    )
}

export default CartWidget