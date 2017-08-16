import React from 'react'
import {Route,Link} from 'react-router-dom'
export default function ({exact,label,to}) {
    return(
 <Route exact={exact}  path={to} children={({match})=>(
     //不管url里面的路径跟path师傅匹配都能渲染出来
// 如果url里面的路径和当前路由规则的path匹配成功 match是有值的 否则match=null
     <li className={match?'active':null}><Link to={to}>{label}</Link></li>
 )}/>
    )
}
