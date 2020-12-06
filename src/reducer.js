export const initialState = {
  user: null,
  cartProducts: [],
  products: Array.from(new Array(20)).map((item, index) => {
    return {
      image: `https://source.unsplash.com/300x200/?cooked,food&sig=${Math.floor(
        Math.random() * 1000000
      )}`,
      title: "Product",
      id: Math.floor(Math.random() * 20),
      desc: [
        "First, we eat. Then, we do everything else.",
        "I’m not drooling, you are!",
        "Live, love, eat.",
        "Made with love.",
        "Good food never fail in bringing people together.",
        "The chief ingredient in yummy food is love.",
        "Good people, good food, good time.",
      ][Math.floor(Math.random() * 7)],
    };
  }),
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_CARTPRODUCTS: "SET_CARTPRODUCTS",
  SET_PRODUCTS: "SET_PRODUCTS",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_CARTPRODUCTS:
      return {
        ...state,
        cartProducts: action.cartProducts,
      };
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default reducer;
