export const initialState = {
    basket: [{
        id:"1234",
        title:"AmazonBasics 12-Sheet Cross-Cut Paper, CD and Credit Card Shredder",
        price:10.51,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"

    }],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            }
        break;

        case 'REMOVE_FROM_BASKET':
            return {state}
        break;

        default:
            return state;

    }

}

export default reducer;