import React from 'react'
import Chart from '../../charts/Chart'
import Feature from '../../featurewidget/feature/Feature'
import {UserData} from "../../../dummydata.js"
import './home.css'
import WidgetSm from '../../widgetsm/WidgetSm'
import WidgetLg from '../../widgetlg/WidgetLg'
function Home() {
    return (
        <div className="home">
            <Feature/>
            <Chart data={UserData} title="User Analytics" grid dataKey="au" />
            <div className="homewidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
        
    )
}

export default Home
