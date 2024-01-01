import { observer } from "mobx-react";
import Details from "./details"
import UpdateDetails from "./updateDetails"
import AppStore from "./classes/appStore"
import Login from "../components/login"
import AlertError from "../components/alertErorr"
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import AddService from "./services/addService";
import { Link, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
const BusinessAdmin = (observer(() => {
   
    return (<>

        {AppStore.getIsLogin ? AppStore.getIsEditData ? <UpdateDetails /> :
            <Details /> : AppStore.getIsErrorLogin ? <AlertError /> : <Login />}

        {AppStore.getIsLogin && 
        <Stack spacing={2}>
        <ButtonGroup variant="soft" size="sm" aria-label="neutral button group" color="success">
          
        <Link to={"./meetings"}>
        <Button >show meetings</Button>
        </Link>
        <Link to={"./services"}>
        <Button >show services </Button>

        </Link>
        </ButtonGroup>
        <Outlet></Outlet>
        </Stack>}
        {AppStore.getIsAddService && <AddService />}
       

    </>)
}))

export default BusinessAdmin