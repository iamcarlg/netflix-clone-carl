import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./PlanScreen.css";

function PlanScreen(){

    const history = useHistory();
    const [state, setState] = useState(0);

    return(
        <div className="planScreen">
            <div className="planScreen__details planScreen__standard">
                <div>
                    <h4>Netflix Standard</h4>
                    <p>1080p</p>
                </div>

                <button onClick={() => history.push("/paypal-standard")}>Subscribe</button>
            </div>

            <div className="planScreen__details planScreen__Basic">
                <div>
                    <h4>Netflix Basic</h4>
                    <p>480px</p>
                </div>

                <button onClick={() => history.push("/paypal-basic")}>Subscribe</button>

            </div>

            <div className="planScreen__details planScreen__Premium">
                <div>
                    <h4>Netflix Premium</h4>
                    <p>4K+HDR</p>
                </div>

                <button onClick={() => history.push("/paypal-premium")}>Subscribe</button>


            </div>
        </div>
    );
}

export default PlanScreen;
