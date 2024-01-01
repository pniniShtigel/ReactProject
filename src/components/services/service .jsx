import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
export default function Service(props) {
    const {
        name,
        description,
    } = props;

    return (
        <>
            <Card sx={{ width: 320, margin:"20px", width:"220px"}}>
                <div>
                    <Typography level="title-lg">service</Typography>

                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                    <img
                        src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Truecolor-Studio-logo.jpg"
                        srcSet="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Truecolor-Studio-logo.jpg"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent orientation="horizontal">
                    <div>

                        <Typography fontSize="17px" fontWeight="lg">
                            name: {name} <br />
                            description: {description} <br />

                        </Typography>
                    </div>

                </CardContent>
            </Card>


            

        </>
    )
}