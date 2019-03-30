export const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'updateUser':
      return action.payload;
      break;
    default:
      return state;
  }
}