import { observer } from "mobx-react";
import Details from "./details"
import Button from '@mui/joy/Button';
import UpdateDetails from "./updateDetails"
import AppStore from "./classes/appStore"
import Login from "../components/login"
import AlertError from "../components/alertErorr"
import ShowService from "./services/showService";
import AddMeeting from "./meeting/addMeeting";
const BusinessUser = (observer(() => {
    return (<>
        <Details></Details>
        <ShowService></ShowService>
        {AppStore.getIsAddMeeting &&  <AddMeeting/>}

    </>)
}))

export default BusinessUser