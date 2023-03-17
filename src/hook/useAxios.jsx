import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAxiosGetDatas(id) {
    //const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;
    const urlGithub =
        'https://raw.githubusercontent.com/Frederic-Douville/solarsys/main/src/datas%20mocked/datas.json';
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDatas() {
            try {
                setLoader(true);
                await axios.get(urlGithub).then((response) => {
                    response.data.map((item) =>
                        item.id === id ? setDatas(item) : null
                    );
                    setLoader(false);
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
    }, [urlGithub, id]);
    return { datas, loader, error };
}
