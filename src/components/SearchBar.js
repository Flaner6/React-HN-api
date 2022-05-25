import React from "react";
import useFetch from "../hooks/useFetch";
import './SearchBar.css'

function SearchBar({placeholder}) {  
    const { data, setData } = useFetch();
    console.log(data['results']['hits'])
    var results = data['results']['hits']
    
    if (results !== undefined){
        const iterator = results.values();

        for (const value of iterator) {
            const url = value['url'];
            console.log(url);
            document.getElementById('myLink').setAttribute("href",url);

            break;
          }
    }

    return (
        <div className="warp">
            <div className="search">
                <input 
                type ="text" 
                placeholder={placeholder}
                value={data.slug}
                
                
                onChange={(e) => setData({ ...data, slug: e.target.value })}
                />
                
                <a  className="searchButton" id="myLink" href="url" >
                    SEARCH
                </a>  
                            
                <div className="searchIcon"></div>
                <div className="searchResults">
                    {results != undefined && results.length != 0 && (
                        <div className="dataResult">
                    
                        {results.slice(0, 10).map((result) => {
                            return (
                            <a className="dataItem" href={result.url} target="_blank">
                                <p>{result.title} </p>
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