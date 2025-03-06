import './App.css'
import './felveteli.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import {useState, useEffect} from 'react'
import axios from 'axios'

function Tabla() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/diakok")
        .then(res => setData(res.data))
        .catch(error => console.error("Hiba: ", error));
        })
} [];

  return (
    <>
        {diakok.map((diak) => (    
            <tr key={diak.oktazon}>
                <td>{diak.nev}</td>

            </tr>
        ))} 
    </>
  )
}
export default Tabla
