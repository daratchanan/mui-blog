import { Card, CardActions, CardMedia, CardContent, Typography, CardActionArea, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   card: {
      marginBottom:theme.spacing(5)
   },
   media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
         height: 150,
      }
   },
   
   
}))

export default function Post() {
   const classes = useStyles();

   return (
      <Card className={classes.card}>
         <CardActionArea>
            <CardMedia
               className={classes.media}
               image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               title="My post"
            />
            <CardContent>
               <Typography gutterBottom variant="h5">My First Post</Typography>
               <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi aut atque perferendis optio possimus cum quas at. Magnam mollitia minima quibusdam dolores necessitatibus. Aperiam commodi corrupti tempore iusto cupiditate!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi aut atque perferendis optio possimus cum quas at. Magnam mollitia minima quibusdam dolores necessitatibus. Aperiam commodi corrupti tempore iusto cupiditate!
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
         </CardActions>
      </Card>
   )
}
