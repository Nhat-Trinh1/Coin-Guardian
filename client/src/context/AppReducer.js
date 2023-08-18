// Specify the app's state changes in response to certain actions
// spread out state so you do not mutate the original state
// the state from this gets returned to the GlobalProvider component
export default (state, action) => {
  switch(action.type) {
    // reassign transactions to an array without the passed in id
    case 'GET_TRANSACTION':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(element => element._id !== action.payload)
      }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload]
        }
        case 'GET_GOAL':
          return {
            ...state,
            loading: false,
            goal: action.payload
          }
        case 'SET_GOAL':
          return {
            ...state,
            goal: action.payload
          }
          case 'RESET_TRANSACTIONS':
            return {
              ...state,
              transactions: action.payload
            }
        case 'ERROR_TRANSACTION':
          return {
            ...state,
            error: action.payload
          }
    default:
      return state;
  }
}