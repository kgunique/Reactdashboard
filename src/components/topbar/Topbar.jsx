import React from 'react'
import './topbar.css'
import { NotificationsNone,Person,Settings} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar_wrapper">
                <div className="topleft">
                    <span className="logo">KG BLOG ADMIN DASHBOARD</span>
                </div>
                <div className="topright">
                    <div className="topbar_right_icons">
                        <NotificationsNone />
                        <span className="topnotificationbag">4</span>
                    </div>
                    <div className="topbar_right_icons">
                        <Person />
                    </div>
                    <div className="topbar_right_icons">
                        <Settings />
                    </div>
                    <img src="" alt="avtar" className="avtar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
