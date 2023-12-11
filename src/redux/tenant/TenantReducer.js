import actionType from "../actionType"

const initialState = {
    list: []
}

const TenantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TENANT_LIST:
            const list = action.payload
            return {
                ...state,
                list:[...state.list,list]
            }
        default:
            return state
    }
}

export default TenantReducer;