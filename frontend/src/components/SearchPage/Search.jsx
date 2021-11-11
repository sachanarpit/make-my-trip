import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState ,useEffect } from "react";
// import axios from "axios";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const handleSelect = async (select) => {
    let promise = async () => {
      const data = await fetch(
        `http://api.aviationstack.com/v1/flights?limit=100&dep_iata=${select.from}&arr_iata=${select.to}&access_key=a6c1cdd70d8fe2e2fdf5ed89d652b632`
      );
      const ans = await data.json();
     setData(ans.data)
    };
    promise();
  };
  // const handleLocal = async ()=>{
  //   let x = localStorage.getItem('myKey')
  //   let y = JSON.parse(x)
  //   let { data } = await axios.get(
  //     "http://api.aviationstack.com/v1/flights?limit=100",
  //     {
  //       params: {
  //         dep_iata: y.from,
  //         arr_iata: y.to,
  //         access_key: "a6c1cdd70d8fe2e2fdf5ed89d652b632",
  //       },
  //     }
  //   );
  //   data = data.data;
  //   setData(data);
  // }

  useEffect(() => {
    let x = localStorage.getItem('myKey')
    let y = JSON.parse(x)
    let promise = async () => {
      const data = await fetch(
        `http://api.aviationstack.com/v1/flights?limit=100&dep_iata=${y.from}&arr_iata=${y.to}&access_key=a6c1cdd70d8fe2e2fdf5ed89d652b632`
      );
      const ans = await data.json();
     setData(ans.data)
    };
    promise();
  }, []);


  const bookData = (e) => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <SearchBox handle={handleSelect} />
      <Bottom data={dataa} bookData={bookData} />
    </>
  );
};
