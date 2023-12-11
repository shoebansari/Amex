import {connect} from 'react-redux';
import TenantComponent from './TenantComponent';

import { addTenant } from "../../redux/tenant/TenantAction"
import {getTenantList} from '../../redux/tenant/TenantSelector'

const mapStatetoProps=(state)=>{

  return{
    tenantList:getTenantList(state)
  }
}

const mapDispatchToProps={
    addTenant
}

export default connect(mapStatetoProps,mapDispatchToProps)(TenantComponent)