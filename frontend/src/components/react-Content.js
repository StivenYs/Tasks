import React from "react";
import ContentLoader from "react-content-loader";
import './css/contentLoader.css'
function ReactContent(props){
    return(
       
        <div className="ContentLoader">
            <ContentLoader 
                seed={1} 
                width="500px" 
                height="100vh" 
                backgroundColor="#0E1214" 
                foregroundColor="#161E20"
                {...props}
            >
               
                <rect x="115" y="40" rx="0" ry="0" width="270" height="40"/>
                <rect x="26" y="125" rx="0" ry="0" width="442" height="40"/>
                <rect x="0" y="190" rx="25" ry="25" width="500" height="72"/>
                <rect x="0" y="285" rx="25" ry="25" width="500" height="72"/>
                <rect x="0" y="380" rx="25" ry="25" width="500" height="72"/>
                <rect x="0" y="478" rx="25" ry="25" width="500" height="72"/>
                <rect x="0" y="574" rx="25" ry="25" width="500" height="72"/>
                <rect x="0" y="670" rx="25" ry="25" width="500" height="72"/>
            </ContentLoader>
            
            
        </div>
    );
}

export {ReactContent};