import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Header'

export default function MyOrder() {

    const [orderData, setorderData] = React.useState({});
    const fetchMyOrder = async () => {
        console.log(localStorage.getItem("UserEmail"));
        await fetch("http://localhost:5000/api/myorderData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: localStorage.getItem("UserEmail")
            })
        }).then(async (res) => {
            let response = await res.json();
            await setorderData(response);
        })
    }
    React.useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div >
            <div><Navbar></Navbar></div>
        </div >
    )
}