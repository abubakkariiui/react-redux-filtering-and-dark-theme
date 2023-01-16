import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  sortPostsAsc,
  sortPostsDesc,
  searchPosts,
} from "../redux/actions/PostActions";

const Header = ({ search, theme, onChange }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    dispatch(searchPosts(search));
    if (sort === "desc") {
      dispatch(sortPostsDesc());
    }
    if (sort === "asc") {
      dispatch(sortPostsAsc());
    }
  }, [search, sort, dispatch]);

  return (
    <header>
      <div className="title">
        <h1>React Redux Filtering</h1>
      </div>
      <div className={theme === "light" ? "filters" : "filters1"}>
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Search"
          />
        </div>
        <div className={theme === "light" ? "sort" : "sort1"}>
          <select onChange={(e) => setSort(e.target.value)}>
            <option className={theme === "light" ? "" : "opt1"} value="asc">
              ASC
            </option>
            <option className={theme === "light" ? "" : "opt1"} value="desc">
              DESC
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
