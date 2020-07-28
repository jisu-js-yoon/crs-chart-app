import React, { useState } from "react";
import "./Admin.css";
// import useFetch from '../../api/useFetch';
import ChartForm from 'components/ChartForm'
const Admin = () => {

    // const [charts, setCharts] = useState([]);
    // const loading = useFetch(setCharts, "charts");
    // let testList = <div>loading...</div>
    // if(!loading) testList = charts.map( (chart) => <li key={chart.Id}>{chart.Value}</li>)

    return (
        <>
            <h1>Admin Page</h1>
            <ChartForm />
        </>
    )
}

export default Admin;