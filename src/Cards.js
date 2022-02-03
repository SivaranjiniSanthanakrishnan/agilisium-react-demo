import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {

  const [renderChild, setRenderChild] = React.useState(true);

  React.useEffect(() => {
    return() => {
      console.log("Unmounting phase of Card Functional Component")
    }
  }, [])

  const handleToggle = () => {
    props.toggleComponent(!renderChild);
    setRenderChild(!renderChild);
  }
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.subHeading}
        </Typography>
        <Typography variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2">
          {props.functionalities}
        </Typography>
      </CardContent>
      <CardActions>
        {props.toggleComponent ? 
          <Button size="small" onClick={() => handleToggle()}>Toggle</Button> :
          <Button> LEARN MORE</Button>
        }
        
      </CardActions>
    </Card>
  );
}
