import React, { useEffect, useState } from "react";
import "./Admin.css";
import firebase from '../../config/firebase';

const Admin = () => {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("charts").get();
            console.log(data.docs.map(doc => doc.data()));
            setCharts(data.docs.map(doc => doc.data()));
        }

        fetchData();
    }, [])

    return (
        <>
            <ul>
                {charts.map(chart => (
                    <li key={chart.Id}>{chart.Value}</li>
                ))}
            </ul>
        </>
    )
}

export default Admin;