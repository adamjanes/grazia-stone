import React, { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Paper,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core'

import UserInfoForm from './UserInfoForm'
import { Context as UserInfoContext} from '../contexts/UserInfoContext'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  appbar: {
    // flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    flex: 1,
    padding: '40px 40px',
  },
})

function App() {
  const classes = useStyles()
  const { state: { age, languages, country, name, formSubmitted } } = useContext(UserInfoContext)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense"></Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          {!formSubmitted ?  <UserInfoForm /> : `Hi! I'm ${name}, ${age} years old, and I'm from ${country}.`}
        </Paper>
      </Container>
    </div>
  )
}

export default App
