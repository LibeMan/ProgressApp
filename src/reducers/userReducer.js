const userInfo = null

const userReducer = (state = userInfo, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.data
        default:
            return state
    }
}

export const setInfo = (userInfo) => {
    return {
        type: 'SET_USER',
        data: userInfo
    }
}

export default userReducer