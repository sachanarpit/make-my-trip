import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState } from "react";
import axios from "axios";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const handleSelect = async (select) => {
    let { data } = await axios.get(
      "http://api.aviationstack.com/v1/flights?limit=100",
      {
        params: {
          dep_iata: select.from,
          arr_iata: select.to,
          access_key: "c6b8626fdfe694d58f25cc5053276ee1",
        },
      }
    );
    data = data.data;
    setData(data);
  };

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
