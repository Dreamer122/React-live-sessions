export const filter_values = (productlist,searchText) => {
    const filtered_products = productlist.filter((value) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase());
    });
    return filtered_products
    
  };