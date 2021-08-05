import React from 'react'
import './sidebar.css'
import {Home,Assessment,TrendingUp} from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className ="sidebar">
            <div className="sidebar_wrapper">
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">
                        Dashboard
                    </h3>
                    <ul className="sidebar_list">
                        <li className="sidebar_listitem active">
                            <Home/>Home
                        </li>
                        <li className="sidebar_listitem">
                            <Assessment/>Analytics
                        </li>
                        <li className="sidebar_listitem">
                            <TrendingUp/>Sales
                        </li>
                    </ul>
                    
                </div>
                {/* <div className="sidebar_menu">
                    <h3 className="sidebar_title">
                        Dashboard
                    </h3>
                    <ul className="sidebar_list">
                        <li className="sidebar_listitem">
                            <Home/>Home
                        </li>
                        <li className="sidebar_listitem">
                            <Assessment/>Analytics
                        </li>
                        <li className="sidebar_listitem">
                            <TrendingUp/>Sales
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar
