import { useEffect, useState } from "react";

function useGetData<T>(API_URL: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        requestData();
    }, []);
    async function requestData() {
        try {
            setLoading(true);
            setError(null);
            setData(null);
            const res = await fetch(API_URL);
            const json = await res.json();
            //atrapamos error en la peticion
            if (json.error) {
                setError(json.error);
                setLoading(false);
            } else {
                setData(json);
                setLoading(false);
                setError(null);
            }

        } catch (e) {
            console.error(e);
        }
    }
    console.log(data);

    return { data, error, loading };
}
export default useGetData;