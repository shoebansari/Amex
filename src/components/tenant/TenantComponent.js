import { useState } from "react"

const TenantComponent=({tenantList,addTenant})=>{
    const [name, setName]= useState('')

    console.log('tenantList-->12', tenantList)
    const onSave=()=>{
        console.log(name)
        addTenant(name)
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=>onSave()}>Save</button>
        </div>
    )
}

export default TenantComponent