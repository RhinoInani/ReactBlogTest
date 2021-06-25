import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setDatas] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data from database. Please try again later.');
                }
                return res.json();
            })
            .then((data) => {
                setDatas(data);
                setIsPending(false);
                setError(null);
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                  } else {
                    setIsPending(false);
                    setError(err.message);
                  }
            })
        }, 500);

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error}
}

export default useFetch;