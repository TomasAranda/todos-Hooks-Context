import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useLocalStorageState from './hooks/useLocalStorageState';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './TodoList';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BrightnessIconLight from '@material-ui/icons/Brightness7';
import BrightnessIconDark from '@material-ui/icons/Brightness4';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import NewTodoForm from './NewTodoForm';
import Paper from '@material-ui/core/Paper';
import { TodosProvider } from './contexts/todos.context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  title: {
    flexGrow: 1,
  },
  offset: {
    paddingTop: '1.5rem',
    marginTop: '56px',
    paddingBottom: '20px',
    minHeight: 'calc(100vh - 56px)',
    [theme.breakpoints.up("sm")]: {
      minHeight: 'calc(100vh - 64px)',
      marginTop: '64px'
    }
  },
  icon: {
    color: '#fff'
  }
}));

export default function TodosApp() {
  const [darkTheme, setDarkTheme] = useLocalStorageState('theme', false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }
  const palletType = darkTheme ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper square elevation={0}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Todos with Hooks
            </Typography>
            <IconButton className={classes.icon} onClick={toggleTheme}>
              {darkTheme ? <BrightnessIconLight /> : <BrightnessIconDark />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid className={classes.offset} container justify='center'>
          <Grid item xs={11} md={8} lg={6}>
            <TodosProvider>
              <NewTodoForm />
              <TodoList />
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper >
    </ThemeProvider>
  );
}