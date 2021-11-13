import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState, useEffect } from "react";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const handleSelect = async (select) => {
    let isMount = true;
    if (isMount) {
      let promise = async () => {
        const data = await fetch(
          `http://api.aviationstack.com/v1/flights?limit=100&dep_iata=${select.from}&arr_iata=${select.to}&access_key=89feda8620b7905d1b2836c9d6f1f5b6
          `
        );
        let ans = await data.json();
        ans = ans.data;
        if (ans.length === 0) {
          alert("No planes are available");
        } else {
          setData(ans);
        }
      };
      promise();
    }
  };
  const handleSort = (e) => {
    if (e === true) {
      const sortedList = [...dataa].sort(
        (a, b) => +a.departure.delay - +b.departure.delay
      );
      setData(sortedList);
    }
  };
  const handleHigh = (e) => {
    if (e === true) {
      const sortedList = [...dataa].sort(
        (a, b) => +a.departure.delay - +b.departure.delay
      );
      sortedList.reverse();
      setData(sortedList);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let x = localStorage.getItem("myKey");
      let y = JSON.parse(x);
      let promise = async () => {
        const data = await fetch(
          `http://api.aviationstack.com/v1/flights?limit=100&dep_iata=${y.from}&arr_iata=${y.to}&access_key=89feda8620b7905d1b2836c9d6f1f5b6
          `
        );
        let ans = await data.json();
        ans = ans.data;
        if (ans.length === 0) {
          alert("No planes are available");
        } else {
          setData(ans);
        }
      };
      promise();
    }
  }, []);

  const bookData = (e) => {
    localStorage.setItem("buy", JSON.stringify(e));
  };
  return (
    <>
      <Header />
      <SearchBox handle={handleSelect} />
      <Bottom
        data={dataa}
        bookData={bookData}
        sorthigh={handleHigh}
        sorting={handleSort}
      />
    </>
  );
};
