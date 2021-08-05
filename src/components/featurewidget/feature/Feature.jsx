import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./feature.css"

function Feature() {
    return (
        <div className="feature">
            <div className="feauturewidget">
                <span className="featuretitle">Revenue</span>
                <div className="featureamount">
                    <span className="featuremoney">$214</span>
                    <span className="featuremoneyrate">+2.4<ArrowUpward className="featureicon"/>
                    </span>
                </div>
                <span className="featuresub">Compare to Last Month</span>
                
            </div>
            <div className="feauturewidget">
                <span className="featuretitle">Cost</span>
                <div className="featureamount">
                    <span className="featuremoney">$150</span>
                    <span className="featuremoneyrate">+11.2<ArrowUpward className="featureicon"/>
                    </span>
                </div>
                <span className="featuresub">Compare to Last Month</span>
                
            </div>
            <div className="feauturewidget">
                <span className="featuretitle">Sales</span>
                <div className="featureamount">
                    <span className="featuremoney">$90</span>
                    <span className="featuremoneyrate">-0.4<ArrowDownward className="featureicon negative"/>
                    </span>
                </div>
                <span className="featuresub">Compare to Last Month</span>
                
            </div>
            
        </div>
        
    )
}

export default Feature;
