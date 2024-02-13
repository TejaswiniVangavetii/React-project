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

export const ErrorAlert = (errortitle, errormsg, errorType) => {
    if (errorType === 'Error') {
      return (
          <>
            {errormsg !== null && (
              <div
                className="alert alert-danger"
                style={{ backgroundColor: '#ed7000', color: 'white' }}
                role="alert"
              >
              <h3>{errortitle}</h3>
              {errormsg}
              </div>
            )}
          </>
      );
    } else {
      return (
        <>
          {errormsg !== null && (
            <div
              className="alert alert-danger"
              style={{ backgroundColor: '#61dafb', color: 'white' }}
              role="alert"
            >
            <h3>{errortitle}</h3>
            {errormsg}
            </div>
          )}
        </>
      );
    }
}
