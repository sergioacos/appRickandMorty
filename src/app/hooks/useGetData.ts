import { useEffect, useState, useReducer } from "react";

interface Action {
    type: "INIT_REQUEST" | "REQUEST_FAILURE" | "REQUEST_SUCCESS";
    payload?:{
        error?:any;
        data?:any;
    };
}
function reducer(state, action: Action) {
    switch (action.type) {
        case "INIT_REQUEST":
            return { 
                loading: true, 
                error: null, 
                data: null 
            };

        case "REQUEST_FAILURE":
            return { 
                loading: false, 
                error: action.payload.error,
                 data: null, 
                };

        case "REQUEST_SUCCESS":
            return { loading: false,
                 error: null, 
                 data: action.payload.data,
                };

    }
}


function useGetData<T>(API_URL: string) {
    const [state, dispatch] = useReducer(reducer, {
      loading: true,
      data: null,
      error: null,  
    });
    /*const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);*/


    useEffect(() => {
        requestData();
    }, []);
    async function requestData() {
        try {
            dispatch({type:"INIT_REQUEST"});
           /* setLoading(true);
            setError(null);
            setData(null);*/
            const res = await fetch(API_URL);
            const json = await res.json();
            //atrapamos error en la peticion
            if (json.error) {
                dispatch({type:"REQUEST_FAILURE",payload:{error: json.error}});
                /*setError(json.error);
                setLoading(false);
                setData(null);*/
            } else {
                dispatch({type:"REQUEST_SUCCESS",payload:{data: json}});
               /* setData(json);
                setLoading(false);
                setError(null);*/
            }

        } catch (e) {
            console.error(e);
        }
    }
   // console.log(data);

    return { data:state.data, error:state.error, loading:state.loading };
}
export default useGetData;