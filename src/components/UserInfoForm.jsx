import React, { useContext, useState } from 'react'
import {
  Paper,
  Typography,
  Button,
  Grid,
  makeStyles,
  TextField,
  Slider,
  FormGroup,
} from '@material-ui/core'

import { Context as UserInfoContext } from '../contexts/UserInfoContext'

const useStyles = makeStyles({
  formGroup: {
    paddingBottom: 20,
    maxWidth: '600px',
  },
})

const UserInfoForm = () => {
  const classes = useStyles()
  const { state, addUserInfo } = useContext(UserInfoContext)

  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [languages, setLanguages] = useState('')

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Tell us about yourself!
      </Typography>
      <FormGroup className={classes.formGroup}>
        <TextField
          label="Your name"
          type="text"
          variant="outlined"
          fullWidth
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <TextField
          label="Your age"
          type="text"
          variant="outlined"
          fullWidth
          value={age}
          onChange={event => setAge(event.target.value)}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <TextField
          label="Your country"
          type="text"
          variant="outlined"
          fullWidth
          value={country}
          onChange={event => setCountry(event.target.value)}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <TextField
          label="Your languages"
          type="text"
          variant="outlined"
          fullWidth
          value={languages}
          onChange={event => setLanguages(event.target.value)}
        />
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={(event) => {
            addUserInfo({ name, age, country, languages })
          }}
        >
          Submit
        </Button>
      </FormGroup>
    </>
  )
}

export default UserInfoForm
