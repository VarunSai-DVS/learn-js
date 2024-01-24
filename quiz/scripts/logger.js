// Define a JavaScript function called logMsg() that can be used to log an error message for
// any object that contains the property errMsg.

function logMsg() {

    console.log(this.errMsg)
}

error1 = {
    errMsg: "This is an error"
}

error2 = {
    errMsg: "This is an error from error 2"
}

logMsg.apply(error1)
logMsg.apply(error2)

