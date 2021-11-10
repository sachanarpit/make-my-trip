import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState } from "react";
// import { nanoid } from 'nanoid'
import axios from "axios";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const handleData = async () => {
    let { data } = await axios.get(
      "http://api.aviationstack.com/v1/flights?limit=5&dep_iata=DEL&arr_iata=BOM&access_key=c6b8626fdfe694d58f25cc5053276ee1"
    );
    data = data.data;
    data.map(e=>(
      setData([...dataa,{
        name: e.airline.name
      }])
      ))

  };

  // useEffect(() => {
  //   handleData();
  // }, []);
  return (
    <>
      <Header />
      <SearchBox handle={handleData} />
      <Bottom data={dataa} />
    </>
  );
};
