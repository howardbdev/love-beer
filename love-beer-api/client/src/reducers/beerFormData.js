const initialState = {
  name: "",
  brewer_name: "",
  style: "",
  image_url: "",
  description: "",
}

export default (state = initialState , action) => {
  switch (action.type) {
    case 'UPDATED_BEER_DATA':
      return action.beerFormData;
    default:
      return initialState;
  }
}
