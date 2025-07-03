import { ReactNode } from "react";
//to rander the childern of root
const RootLayout =({childern}:{childern:ReactNode})=>{
    return(
        <div>{childern}</div>
    )
}

export default RootLayout