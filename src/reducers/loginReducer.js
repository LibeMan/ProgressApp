
const user = null

const loginReducer = (state = user, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.user === null){
                return null
            } else {
                const user = action.user
                return user
            }
            
        default:
            return state
    }
}

export const setLogin = user => {
    return async dispatch => {
        
        dispatch({
          type:'LOGIN',
          user
        })
    }
}

export default loginReducer