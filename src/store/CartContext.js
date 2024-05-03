import react from "react";

const CartContext = react.createContext({
    cartItems:[],
    sumPrice:0,
    sumNumber:0,

    addSum: ()=>{

    },

    subSum: ()=>{

    },

    clearCartData: ()=>{
        
    }

})

export default CartContext;
