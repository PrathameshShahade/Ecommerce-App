import {createSlice} from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        products: [],
        quantity:0,
        total:0,
    },
    reducers:{
        addProductw:(state , action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        clearWishlist:(state)=>{
            state.products=[];
            state.quantity=0;
            state.total=0;
           }
    },
});


export const { addProductw, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;