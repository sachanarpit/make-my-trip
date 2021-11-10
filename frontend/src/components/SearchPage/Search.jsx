import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useEffect, useState } from "react";
// import { nanoid } from 'nanoid'
import axios from "axios";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const handleData = async () => {
    let { data } = await axios.get(
      "https://raw.githubusercontent.com/sachanarpit/make-my-trip/dharmesh/frontend/db.json"
    );
    data = data.data;
  setData(data)
  };

  useEffect(() => {
    handleData();
  }, []);
  const bookData = (e)=>{
    console.log(e);
  }
  return (
    <>
      <Header />
      <SearchBox />
      <Bottom data={dataa} bookData={bookData} />
    </>
  );
};
