import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useParams } from "react-router-dom";

type MatchParams = {
    tourisRouteId:string
}
export const DetailPage:React.FC = (props) => {
    let params = useParams<MatchParams>()
    return <>路由详情页面,路线ID：{params.tourisRouteId}</>
}