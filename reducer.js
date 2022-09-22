export const cartData = (data = [], action) => {
  switch(action.type){
    case "Add_To_Cart":
      // add to cart logic
      console.log("Add_To_Cart condition ", action);
      return [action.data, ...data];

      case "Remove_From_Cart":
      // remove from cart logic
      console.log("Remove_From_Cart condition ", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingItem = data.filter((item) => item.id !== action.data);
      console.log("Remaining items ",remainingItem);
      return [...remainingItem];

      case "Empty_Cart":
       // emptycart logic
       console.log("Empty_Cart condition ", action);
       data = [];
       return [...data];
      default:
        return data;
  }
};
