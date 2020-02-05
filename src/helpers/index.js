
export const getFormatedPrice = value => {
    const price = new Intl.NumberFormat("sr-RS", {
      style: "currency",
      currency: "EUR"
    }).format(value);
    return price;
  };


  export const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
  }
  
  export const getMaxValue=(items, value) => {   
    return Math.max(...items.map(item => item[value]));
  }