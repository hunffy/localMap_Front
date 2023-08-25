import locationIcon from "../assets/images/ic_header_search.svg";
import searchIcon from "../assets/images/ic_main_search.svg";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const [searchValue, setSearch] = useState("");
  const saveSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const navigate = useNavigate();
  const goSearchResult = () => {
    navigate("/searchResult" + `/${searchValue}`);
  };
  return (
    <div className="searchWrapper">
      <div className="search">
        <img src={locationIcon} />
        <input type="text" value={searchValue} onChange={saveSearch} />
      </div>
      <div className="searchButton" onClick={goSearchResult}>
        <img src={searchIcon} />
        <p>검색</p>
      </div>
    </div>
  );
};

export default MainSearch;
