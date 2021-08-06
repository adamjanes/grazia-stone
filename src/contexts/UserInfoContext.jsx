import createDataContext from './createDataContext'

const ADD_USERINFO = 'ADD_USERINFO'

const initialState = {
  name: 'Grace',
  age: 30,
  country: 'Italy',
  languages: ['Italian', 'English', 'German'],
  formSubmitted: false,
}

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case ADD_USERINFO:
      const {
        payload: { name, age, country, languages },
      } = action
      return { ...state, name, age, country, languages, formSubmitted: true }
    default:
      return state
  }
}

const addUserInfo = dispatch => async payload => {
  try {
    dispatch({ type: 'ADD_USERINFO', payload })
  } catch (err) {
    console.log('Err!')
  }
}

export const { Provider, Context } = createDataContext(userInfoReducer, { addUserInfo }, initialState)
