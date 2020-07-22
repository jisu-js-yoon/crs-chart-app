import { useEffect, useState } from "react";
import firebase from '../config/firebase';

const useFetch = (callback, collection) => {
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const db = firebase.firestore();
        const data = await db.collection(collection).get();
        //console.log(data.docs.map(doc => doc.data()));
        callback(data.docs.map(doc => doc.data()));
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return loading;
}

export default useFetch;