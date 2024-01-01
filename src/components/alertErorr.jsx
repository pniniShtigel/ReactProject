import Button from '@mui/joy/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppStore from './classes/appStore';
export default function AlertErorr() {
    return (
        <>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                worng username or passward <strong>check it out!</strong>
                <Button onClick={()=>AppStore.setIsErrorLogin(false)}>try again</Button>
            </Alert>

        </>
    )
}