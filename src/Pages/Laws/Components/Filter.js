import _ from "lodash";
import React, { useState, useRef, useEffect } from "react";

export default function SearchFunction({ source, _setResults }) {
  const [resultLength, setResultLength] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const debounceSearch = useRef(
    _.debounce((searchTerm) => {
      const re = new RegExp(_.escapeRegExp(searchTerm), "i");
      const isMatch = (result) => re.test(result.title);
      const filteredResults = _.filter(source, isMatch);
      _setResults(filteredResults);
      setResultLength(filteredResults.length);
      setIsSearching(false);
    }, 1000)
  );

  useEffect(
    () => {
      if (searchTerm.length > 0) {
        setIsSearching(true);
        debounceSearch.current(searchTerm);
      } else {
        _setResults(source);
        setResultLength(-1);
      }
    },
    [searchTerm, source, _setResults] // Only call effect if debounced search term changes
  );

  const DynamicIcon = () => {
    switch (true) {
      case resultLength > 0:
        return <i className="green check icon" />;
      case resultLength === 0:
        return <i className="red close icon" />;
      default:
        return <i className="search icon" />;
    }
  };

  const loadingClassName = isSearching ? "loading" : "";
  return (
    <div style={{ padding: "10px 0" }}>
      <div className={`ui ${loadingClassName} search`}>
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            type="text"
            className="prompt"
            placeholder="Search..."
            style={{ borderRadius: "0" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <DynamicIcon />
        </div>
      </div>
    </div>
  );
}
