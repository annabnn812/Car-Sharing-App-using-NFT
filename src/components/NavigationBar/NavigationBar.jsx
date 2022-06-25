import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <nav>
            <a href="/"></a>
            <div>
                <p>
                    Welcome, <span>Guest</span>
                </p>
                <i className="far far-user"></i>
            </div>
        </nav>
    );
};
export default NavigationBar;