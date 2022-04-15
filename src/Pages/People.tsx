import { useState, useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css"

type resultProps = {
    name: string, 
    height: number, 
    mass: string, 
    hair_color:string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    
};

 const StarApi=()=> {
   
  const [result, setResult] = useState<resultProps[]>([]);
  const [search, setSearch] = useState("")
  //calling Api using React hooks and handle promise object
  useEffect(() => {
    const fectchApi = async () => {
      const data = await fetch(`https://swapi.dev/api/people/?search=${search}`, {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    fectchApi();
  }, [search]);

  return (
    <div className="App">
      <Header/>
      <input type="text" value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
      <hr style={{height:"5px",backgroundColor:"black" }}/>
      <div className="container" >
        <div className="row">
          { result.map((record, i)=> (
            <div style={{ padding:"10px",backgroundColor:"orange",margin:"10px"}}className="col-lg-2 col-md-3 col-sm-3 col-12 mb-4 position-relative text-dark">
              <span >Name: {record.name}</span><br/>
              <span >Hair Color: {record.hair_color}</span><br/>
               <span >Gender: {record.gender}</span>
             </div>) ) }
        </div>
      </div>
    </div>
    );
}

export default StarApi;