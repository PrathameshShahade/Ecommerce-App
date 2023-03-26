import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state , action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity ;
        },
        deleteProduct: (state, action) => {
            const productId = action.payload;
            const productToRemove = state.products.find(product => product._id === productId);
            if (!productToRemove) {
              return;
            }
            state.products = state.products.filter(product => product._id !== productId);
            state.quantity -= productToRemove.quantity;
            state.total -= productToRemove.price * productToRemove.quantity;
          },
        clearCart:(state)=>{
            state.products=[];
            state.quantity=0;
            state.total=0;
           }
    },
});


export const { addProduct ,clearCart, deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;