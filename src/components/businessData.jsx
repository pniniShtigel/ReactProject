import { observer } from "mobx-react";
import Details from "./details"
import UpdateDetails from "./updateDetails"
import AppStore from "./classes/appStore"
import Login from "../components/login"
import AlertError from "../components/alertErorr"
const BusinessData=(observer(()=>{
    return(<>
            {AppStore.getIsLogin ? AppStore.getIsEditData?<UpdateDetails/>:<Details/> :AppStore.getIsErrorLogin ?<AlertError/>:<Login/>}
        
            {/* {AppStore.isLogin &&  setEditForm(!editForm)} */}

    </>)
}))

export default  BusinessData