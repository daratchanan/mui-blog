import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	}
}));

const Rightbar = () => {
	const classes = useStyles();

	return (
    <Container className={classes.container}>
		 Rightbar
	 </Container>
  )
};

export default Rightbar;