
import { useState, useEffect } from "react";

import stories from '../api/NewsSource';

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });
  
  useEffect(() => {

    if (data.slug.length>2 ) {
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
    }, 500);
    return () => clearTimeout(timeoutId);
    }
}, [data.slug]);

  return { data, setData };
};

export default useFetch;