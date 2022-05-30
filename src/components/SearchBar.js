import React, { useState, useEffect} from "react";
import useFetch from "../hooks/useFetch";
import './SearchBar.css'


function SearchBar({placeholder,isHidden}) {  
    const { data, setData } = useFetch();
    console.log(data['results']['hits'])
    let results = data['results']['hits']
    console.log("is hidden:"+isHidden)


    useEffect(() => {
  
        results = data['results']['hits'];
      },[data]);
    
    if (results !== undefined ){
        const firstkey = results[0];
        let url = firstkey['url']
        document.getElementById('myLink').setAttribute("href",url);


        // for (const value of iterator) {
        //     const url = value['url'];
        //     console.log(url);
        //     document.getElementById('myLink').setAttribute("href",url);

        //     break;
        //   }

    }

    return (
        <div className="warp">
            <div className="search">
                <input 
                type ="text" 
                placeholder={placeholder}
                value={data.slug}
                className ="searchBar"
                

                onChange={(e) => setData({ ...data, slug: e.target.value })}
                />
                
                <a  className="searchButton" id="myLink" href="url" >
                    SEARCH
                </a>  
                            
                <div className="searchIcon"></div>
                <div className="searchResults" >
                    {results !== undefined && results.length > 0 && isHidden == false && (
                        <div className="dataResult">
                    
                        {results.slice(0, 10).map((result) => {
                            return (
                            <a className="dataItem" href={result.url} target="_blank">
                                <p className="upper">{result.title}</p>
                                <p className="lower">points: {result.points} | by {result.author} | comments: {result.num_comments}</p>
                            </a>
                            );
                        })}
                        </div>
                    )}
                </div>
            </div>


        </div>
        
    )

}

export default SearchBar