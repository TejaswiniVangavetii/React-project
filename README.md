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


https://app.requestly.io/emailAction?apiKey=AIzaSyC2WOxTtgKH554wCezEJ4plxnMNXaUSFXY&mode=signIn&oobCode=BgpbqubKSoVU71tcrsrGoAixc1Qk4Ux_XgLnL1LMUj4AAAGNs9N4Lw&continueUrl=https://app.requestly.io/home&lang=en


castor.hennessy@farmoaks.com



else if (callback.type === 'TextOutputCallback' && data.callbacks[0].output[1].name === 'messageType' && data.callbacks[0].output[1].value === '2') {
        dispatch(setState({ key: 'authSuccess', value: false }))
        dispatch(setState({ key: 'errorMsg', value: msgList[callback.output[0].value].msg }))
        dispatch(setState({ key: 'errorTitle', value: msgList[callback.output[0].value].title }))
        dispatch(setState({ key: 'errorType', value: msgList[callback.output[0].value].type }))
        dispatch(setState({ key: 'disableLoginSubmitButton', value: false }))
        if (msgList[callback.output[0].value].type === 'Error') {
        const resubmitResponse = amrest.post('/vzauth/json/realms/root/realms/' + rootState1.realm + '/authenticate?authIndexType=service&authIndexValue=' + rootState1.amService + '&service=' + rootState1.amService + '&goto=' + rootState1.gotoUrl + '&gotoOnFail=' + rootState1.gotoOnFailUrl + '&txid=' + rootState1.txId, data, rootState1.options);
        console.log("resubmitResponse= ", resubmitResponse);
        }
      }
