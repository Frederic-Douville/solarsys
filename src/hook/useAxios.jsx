import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAxiosGetDatas(id) {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDatas() {
            try {
                setLoader(true);
                await axios.get(url).then((response) => {
                    setDatas(response.data);
                    setLoader(false);
                    console.log(response.data);
                });
            } catch (error) {
                setLoader(false);
                setError(true);
                throw new Error(
                    'Erreur lors de la récupération des données utilisateurs!',
                    error
                );
            }
        }
        getDatas();
    }, [url]);
    return { datas, loader, error };
}
