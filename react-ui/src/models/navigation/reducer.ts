import * as navigationActionTypes from './action-types'

const initialState = {
    page: ''
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case navigationActionTypes.NAVIGATE: {
            return {
                ...state,
                navigation: {
                    page: action.page
                }
            }
        }
        default: {
            return state
        }
    }
    
}

export default {
    navigation
}