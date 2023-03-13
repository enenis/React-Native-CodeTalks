const authErrorCode=(errorCode)=>{
    switch (errorCode) {
        case "auth/invalid-email":
           return "Email adresi geçersiz!"
    
        default:
            return errorCode
    }
}

export default authErrorCode

