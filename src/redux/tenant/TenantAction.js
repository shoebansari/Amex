import actionType from "../actionType"

const addTenant=(payload)=>{
    return{
        type: actionType.ADD_TENANT_LIST,
        payload,
    }
}

export {addTenant}