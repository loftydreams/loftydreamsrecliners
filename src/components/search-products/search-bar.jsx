import { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const SearchBar = ({ cname }) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.length) {
      history.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  const enterPressed = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div className={cname}>
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={keyword}
        onChange={handleChange}
        onKeyDown={enterPressed}
      />
      <SearchOutlinedIcon className="search-icon" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
