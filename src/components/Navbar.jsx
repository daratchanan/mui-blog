import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
   toobar: {
      display: "flex",
      justifyContent: "space-between"
   },
   logoLg: {
      [theme.breakpoints.down("xs")]: {
         display: "none"
      }
   },
   logoSm: {
      [theme.breakpoints.up("sm")]: {
         display: "none"
      }
   },
   search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("xs")]: {
         display: props => props.open ? "flex" : "none",
         width: "70%"
      }
   },
   input: {
      color: "white",
      marginLeft: theme.spacing(1)
   },
   cancel: {
      [theme.breakpoints.up("sm")]: {
         display: "none"
      }
   },
   icons: {
      alignItems: "center",
      display: props => props.open ? "none" : "flex",
   },
   searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         display: "none"
      }
   },
   badge: {
      marginRight: theme.spacing(2)
   },

}));

const Navbar = () => {
   const [open, setOpen] = useState(false);
   const classes = useStyles({ open });

   return (
      <AppBar >
         <Toolbar className={classes.toobar}>
            <Typography variant="h6" className={classes.logoLg}>
               Natty Dev
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
               NAT
            </Typography>
            <div className={classes.search}>
               <Search />
               <InputBase
                  className={classes.input}
                  placeholder="Search..."
               />
               <Cancel
                  className={classes.cancel}
                  onClick={() => setOpen(false)}
               />
            </div>

            <div className={classes.icons}>
               <Search
                  className={classes.searchButton}
                  onClick={() => setOpen(true)}
               />
               <Badge badgeContent={4} color="secondary" className={classes.badge}>
                  <Mail />
               </Badge>
               <Badge badgeContent={2} color="secondary" className={classes.badge}>
                  <Notifications />
               </Badge>
               <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/-uAEOvtkz8Yk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnW8S_6l1D1owRD3KfrGg0ipaDwZQ/photo.jpg?sz=46" />
            </div>

         </Toolbar>
      </AppBar>
   )
};

export default Navbar;