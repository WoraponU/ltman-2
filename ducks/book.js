const ADD_BOOK = 'ADD_BOOK'

const initialState = {
  books: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      }
    default:
      return state
  }
}
export const addBook = data => {
  return {
    type: ADD_BOOK,
    payload: data
  }
}
