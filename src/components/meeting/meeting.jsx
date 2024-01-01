import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';

export default function Meeting(props) {
    const {  
        serviceName,
        dateTime,
        clientName,
        clientPhone,
        clientEmail
    } = props;

    const getColorByDate = (date) => {
        const currentDate = new Date();
        const meetingDate = new Date(date);

        // השוואת התאריך לתאריך הנוכחי על פי יום בחודש
        if (meetingDate.getDate() === currentDate.getDate() &&
            meetingDate.getMonth() === currentDate.getMonth() &&
            meetingDate.getFullYear() === currentDate.getFullYear()) {
            return "orange"; // צבע כתום לתאריך של היום
        } else if (meetingDate >= currentDate && meetingDate <= new Date(currentDate.setDate(currentDate.getDate() + 6))) {
            return "green"; // צבע ירוק לתאריכים של השבוע הנוכחי
        } else {
            return "blue"; // צבע כחול לתאריכים אחרים
        }
    };

    const textColor = getColorByDate(dateTime);

    const formatDateTime = (dateTime) => {
        const dateObj = new Date(dateTime);
        const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: 'numeric', minute: 'numeric' };

        const formattedDate = dateObj.toLocaleDateString(undefined, optionsDate);
        const formattedTime = dateObj.toLocaleTimeString(undefined, optionsTime);

        return { formattedDate, formattedTime };
    };

    const { formattedDate, formattedTime } = formatDateTime(dateTime);

    return (
        <>
            <Card sx={{ width: 320, margin: "20px", width: "220px" }}>
                <div>
                    <Typography level="title-lg">meeting</Typography>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                    <img
                        src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Truecolor-Studio-logo.jpg"
                        srcSet="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Truecolor-Studio-logo.jpg"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent >
                    <div>
                        <Typography fontSize="17px" fontWeight="lg" style={{ color: textColor ,GeolocationPosition}}>
                            serviceName: {serviceName} <br />
                            Date: {formattedDate} <br />
                            Time: {formattedTime} <br />
                            clientName: {clientName}<br />
                            clientPhone: {clientPhone}<br />
                            clientEmail: {clientEmail}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
