
import { useState, useEffect } from "react";

import stories from '../api/NewsSource';

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug.length<=2 ){
      setData({ ...data, results: []})
    }

    if (data.slug.length>2 && data.results != undefined && /^[A-Za-z][A-Za-z0-9]*$/.test(data.slug) === true) {
    const timeoutId = setTimeout(() => {
        const fetch = async () => {
        try {
            const res = await stories.get(`/search?query=${data.slug}&tags=story`);
            setData({ ...data, results: res.data });
        } catch (err) {
            console.error(err);
        }
        };
        fetch();
    }, 600);
    return () => clearTimeout(timeoutId);
    }
}, [data.slug]);

  return { data, setData };
};

export default useFetch;