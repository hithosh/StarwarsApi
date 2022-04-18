import { useState, useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import Avatars from "../components/Avaatar";

// declaring required props
type resultProps = {
    name: string, 
    hair_color:string, 
    skin_color: string, 
    next:string,
    previous:string,
    gender:string
  };

// create Functional component  for Pople
const People=()=>{
//decalare react hooks useState  for result ,pagination.searchdata
const[result,setResult] = useState<resultProps[]>([]);
const[previouss,setPrevious]=useState("");
const[nexts,setNext]=useState("");
const[search, setSearch] = useState("")

//callback function for API calling
const fectchApi = async (url:string) => {
const data = await fetch(url, {
      method: "GET"
    });
    const jsonData = await data.json();
    setPrevious(jsonData.previous);
    setNext(jsonData.next);
    setResult(jsonData.results);
  };
  
  //calling Api using React hooks  using useEffect
  useEffect(() => {
    fectchApi(`https://swapi.dev/api/people/?search=${search}`);
  }, [search]);


//next pagination  function
function previous(e:any){
  fectchApi(previouss)
  }

//previous  paginationa function
function next(e:any){
fectchApi(nexts)
 }

return (
  <div className="App">
    <Header />
    <label>
      Search{" "}
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </label>
    <hr style={{ height: "5px", backgroundColor: "black" }} />
    <div className="container">
      <div className="row">
        {result.map((record, i) => (
          <>
            <div
              style={{
                padding: "10px",
                backgroundColor: "#DBF9FC",
                margin: "10px",
                width: "23%",
              }}
              className="col-lg-2 col-md-3 col-sm-3 col-12 mb-4 position-relative text-dark"
            >
              <Avatars
                avatharstyle={"Circle"}
                hairColor={record.hair_color}
                skincolor={record.skin_color}
                gender={record.gender}
              />
              <div>
                <span>Name: {record.name}</span>
                <br />
                <span>Hair Color: {record.hair_color}</span>
                <br />
                <span>Gender: {record.gender}</span>
              </div>
            </div>
          </>
        ))}
      </div>
      <button onClick={previous}>Previous</button>
      <button style={{ margin: "10px" }} onClick={next}>
        Next
      </button>
    </div>
  </div>
);
}

export default People;


