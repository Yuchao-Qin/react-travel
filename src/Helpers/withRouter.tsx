import React from "react";
import { useNavigate , NavigateFunction} from "react-router-dom";
export interface RouteComponentProps {
    navigate:NavigateFunction
}
export const withRouter = (Component:any) => {
    const Wrapper = (props:any) => {
        console.log(props,'props')
        const navigate = useNavigate()
        return <Component navigate={navigate} {...props}/>
    }
   return Wrapper;
}