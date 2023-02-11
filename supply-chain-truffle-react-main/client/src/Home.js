import React from 'react'
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <div>
            <style>{'body { background-color: cyan; }'}</style>
             <span style={{color: 'red'}}>
            <h3><center>Supply Chain Flow</center></h3>
            <br/>
            
            <h5><center>Step 1: Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers</center></h5>
            <h6><center>(Note: This is a one time step. Skip to step 2 if already done)</center></h6>
            <center><button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm"><center>Register</center></button></center>
            <br />
            <h5><center>Step 2: Owner should order products</center></h5>
            <center><button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm"><center>Order Products</center></button></center>
            <br />
            <h5><center>Step 3: Control Supply Chain</center></h5>
            <center><button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm"><center>Control Supply Chain</center></button></center>
            <br />
            <hr />
            <br />
            <h5><center><b>Track</b> the products</center></h5>
            <center><button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm"><center>Track Products</center></button></center>
            </span>
        </div>
    )
}

export default Home
