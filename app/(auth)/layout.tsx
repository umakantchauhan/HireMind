import { ReactNode } from "react";
//to rander the childern of auth
const AuthLayout =({children}:{children:ReactNode})=>{
    return(
        <div className="auth-layout">{children}</div>
    )
}

export default AuthLayout
//why the (auth) in bracket see the screenshooot