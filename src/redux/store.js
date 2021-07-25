import { createStore } from 'redux';

const initialState = {
    stores: true,
    location: 'Pa'
}
const reducer = (state = initialState ,action) => {
    return state;
}

export const store = createStore(reducer);