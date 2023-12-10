export const SET_USER = 'SET_USER';
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_TOKEN_AUTHENTICATION = 'SET_TOKEN_AUTHENTICATION';

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const setAge = age => dispatch => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};


export const setAuthentication = authentication => dispatch => {
  dispatch({
    type: SET_TOKEN_AUTHENTICATION,
    payload: authentication,
  });
};