//This is React Project
parcel:

-Dev build
-



React can do faster DOM manipulation
we have Virtual DOM

#React Hooks
Normal JS Utility function
-UseState() - whenever a state variable changes/updates react will rerender the component
-UseEffect()


# 2 types of Routings in Web app
1. Client Side Routing
2. Server Side Routing 

export const authenticateUser = createAsyncThunk('authenticateUser', async (payload, { dispatch, getState }) => {
  const rootState1 = getState().login;
  dispatch(setState({ key: 'errorMsg', value: null }))
  dispatch(setState({ key: 'errorTitle', value: null }))
  dispatch(setState({ key: 'errorType', value: null }))
  try {
    const response = await amrest.post('/vzauth/json/realms/root/realms/' + rootState1.realm + '/authenticate?authIndexType=service&authIndexValue=' + rootState1.amService + '&service=' + rootState1.amService + '&goto=' + rootState1.gotoUrl + '&gotoOnFail=' + rootState1.gotoOnFailUrl + '&txid=' + rootState1.txId, payload, rootState1.options);
    console.log("response", response)
    let data = response.data;
    dispatch(setState({ key: 'authResponse', value: data }))
    dispatch(setState({ key: 'callbacks', value: data.callbacks }))
    console.log("data", data);
    data.callbacks.forEach(callback => {
      if (callback.type === 'HiddenValueCallback' && callback.input[0].name === 'IDToken2' && callback.input[0].value === 'duo_response' && callback.output[1].value === 'duo_response') {
        if (data.callbacks[0].type === 'TextOutputCallback' && data.callbacks[0].output[0].name === 'message') {
          const message = data.callbacks[0].output[0].value;
          dispatch(setState({ key: 'setTokenCallMade', value: true }))
          dispatch(setState({ key: 'duoSigRequest', value: message }))
        }
      } else if (data.header === 'PIN and One Time Passcode Verification') {
        dispatch(setState({ key: 'rsaHeader', value: data.header }))
        dispatch(setState({ key: 'rsaTextmsg1', value: "NOTE: Must have RSA hard token to continue." }))
        dispatch(setState({ key: 'rsaTextmsg2', value: "WARNING to First Time Users: if you have not created your PIN yet, enter the RSA hard token passcode displayed to continue." }))
        dispatch(setState({ key: 'rsaTextmsg3', value: "For further assistance, contact +1(888)-624-7821 Option 1 | Option 2 | Option 1." }))
        dispatch(setState({ key: 'rsaPlaceHolder', value: "Enter your PIN followed by your Passcode" }))
        dispatch(setState({ key: 'rsaButton', value: "LEAVE" }))
        dispatch(setState({ key: 'rsaSecondButton', value: "SUBMIT" }))
        dispatch(setState({ key: 'rsaToken', value: true }))
        dispatch(setState({ key: 'rsatokenRetry', value: false }))
      } else if (callback.type === 'PasswordCallback' && callback.input[0].name === 'IDToken1' && callback.output[0].value === 'One Time Password') {
        dispatch(setState({ key: 'rsaHeader', value: "PIN and One Time Passcode Verification" }))
        dispatch(setState({ key: 'rsaPlaceHolder', value: "Please enter the passcode displayed on your token" }))
        dispatch(setState({ key: 'rsaTextmsg1', value: "NOTE: Must have RSA hard token to continue." }))
        dispatch(setState({ key: 'rsaTextmsg2', value: "WARNING to First Time Users: if you have not created your PIN yet, enter the RSA hard token passcode displayed to continue." }))
        dispatch(setState({ key: 'rsaTextmsg3', value: "For further assistance, contact +1(888)-624-7821 Option 1 | Option 2 | Option 1." }))
        dispatch(setState({ key: 'rsaToken', value: true }))
        dispatch(setState({ key: 'rsatokenRetry', value: false }))
      } else if (callback.type === 'TextOutputCallback' && callback.output[0].value === 'PIN_REQUIRED') {
        dispatch(setState({ key: 'rsaHeader', value: "PIN Setup" }))
        dispatch(setState({ key: 'rsaTextmsg2', value: "Your PIN should be at least 4 digits and at most 8 digits long." }))
        dispatch(setState({ key: 'rsaTextmsg3', value: "For further assistance, contact +1(888)-624-7821 Option 1 | Option 2 | Option 1." }))
        dispatch(setState({ key: 'rsaPlaceHolder', value: "Enter new PIN,containing 4 to 8 digits" }))
        dispatch(setState({ key: 'errorMsg', value: msgList[callback.output[0].value].msg }))
        dispatch(setState({ key: 'errorTitle', value: msgList[callback.output[0].value].title }))
        dispatch(setState({ key: 'errorType', value: msgList[callback.output[0].value].type }))
        dispatch(setState({ key: 'rsaButton', value: "SUBMIT PIN" }))
        dispatch(setState({ key: 'rsaToken', value: true }))
      } else if (callback.type === 'TextOutputCallback' && callback.output[0].value === 'NEXT_PASSCODE_AFTER_PIN_REQUIRED') {
        dispatch(setState({ key: 'rsaHeader', value: "PIN and Passcode Validation" }))
        dispatch(setState({ key: 'rsaTextmsg2', value: "Wait for the passcode on your token to change, then enter your PIN and the new Passcode" }))
        dispatch(setState({ key: 'rsaTextmsg3', value: "For further assistance, contact +1(888)-624-7821 Option 1 | Option 2 | Option 1." }))
        dispatch(setState({ key: 'rsaPlaceHolder', value: "Enter your PIN and the next Passcode displayed on your token" }))
        dispatch(setState({ key: 'errorMsg', value: msgList[callback.output[0].value].msg }))
        dispatch(setState({ key: 'errorTitle', value: msgList[callback.output[0].value].title }))
        dispatch(setState({ key: 'errorType', value: msgList[callback.output[0].value].type }))
        dispatch(setState({ key: 'rsaButton', value: "SUBMIT" }))
        dispatch(setState({ key: 'rsaToken', value: true }))
      } else if (data.header === 'One Time Passcode Verification Failure') {
        dispatch(setState({ key: 'rsaHeader', value: "One Time Passcode Verification Failure" }));
        dispatch(setState({ key: 'rsaTextmsg2', value: "Your One Time Passcode Validation Failed. Try again with the next available code." }))
        dispatch(setState({ key: 'rsaButton', value: "RETRY" }))
        dispatch(setState({ key: 'rsaTextmsg3', value: "For further assistance, contact +1(888)-624-7821 Option 1 | Option 2 | Option 1." }))

      } else if (callback.type === 'ChoiceCallback' && callback.output[0].name === 'prompt' && callback.output[0].value === "You're entering the Federal boundary.") {
        dispatch(setState({ key: 'authSuccess', value: true }))
        dispatch(setState({ key: 'rsaToken', value: true }))
      } else if (callback.type === 'TextOutputCallback' && data.callbacks[0].output[1].name === 'messageType' && data.callbacks[0].output[1].value === '2') {
        dispatch(setState({ key: 'authSuccess', value: false }))
        dispatch(setState({ key: 'errorMsg', value: msgList[callback.output[0].value].msg }))
        dispatch(setState({ key: 'errorTitle', value: msgList[callback.output[0].value].title }))
        dispatch(setState({ key: 'errorType', value: msgList[callback.output[0].value].type }))
        dispatch(setState({ key: 'disableLoginSubmitButton', value: false }))
      }
    });

  } catch (err) {

    if (err.response.data.code === 401 && err.response.data.reason === "Unauthorized") {
      dispatch(setState({ key: 'errorTitle', value: err.response.data.message }))
    }
    dispatch(setState({ key: 'loader', value: false }))
    dispatch(setState({ key: 'authSuccess', value: false }))
    dispatch(setState({ key: 'callbacks', value: getState.loginCallbacks }))
    dispatch(setState({ key: 'goBackToLogin', value: true }))
    dispatch(setState({ key: 'disableLoginSubmitButton', value: false }))
    dispatch(setState({ key: 'rsaToken', value: false }))
    dispatch(setState({ key: 'rsatokenRetry', value: false }))
    throw err;
  }
});
