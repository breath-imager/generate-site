import React from "react"


export default function Newsletter(){
    return (
        
            <div className="row footerTop">
                <div className="col-12 col-md-12 text-center">
                    <h1>Get Generate in your inbox</h1>
                    <h2>No spam, good vibes only</h2>
                    <form className="form-inline w-100">
                    <input type="text" className="form-control email" placeholder="Enter email"/>
                    <input type="submit" value="suscribe" className="btn btn-primary btn-suscribe"/>
                    </form>
                </div>
            </div>
        
    )
} 
