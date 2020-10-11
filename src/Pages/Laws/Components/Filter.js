import _ from "lodash";
import React, { useState, Fragment, useEffect } from "react";
import { Form } from "semantic-ui-react";

const searchFilter = (source = [], keyword = "") => {
  const re = new RegExp(_.escapeRegExp(keyword), "i");
  const isMatch = (res) => re.test(res);
  console.log("call", keyword);
  return _.filter(source, isMatch);
};

const objectReducer = (src = []) => {
  return src.map((element) => {
    let string = "";
    for (const property in element) {
      string = `${string} ${element[property]}`;
    }
    return string.trim();
  });
};

const findBestMatch = (indexes) => {
  return indexes.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {});
};

export default function SearchFunction({ source, _setResults, setNoResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasResult, setHasResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setIsSearching(true);

    if (searchTerm) {
      const result = [];
      const splitted = new Set(searchTerm.split(" ").map((s) => s.trim()));

      const parseList = objectReducer(source);

      splitted.forEach((keyword) => {
        const res = searchFilter(parseList, keyword);
        const index = res
          .map((res) => parseList.findIndex((str) => str === res))
          .filter((i) => i !== -1);
        result.push(...index);
      });

      const matchesScore = findBestMatch(result);

      const list = [...new Set(result)]
        .map((index) => {
          return {
            ...source[index],
            score: matchesScore[index],
          };
        })
        .sort((a, b) => (a.score > b.score ? -1 : 1));

      setHasResult(list.length > 0);
      _setResults(list);
    }
  };

  const handleClear = (event) => {
    setSearchTerm("");
    _setResults(source);
    setHasResult(false);
    setIsSearching(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "") handleClear();
    else setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setNoResults(!hasResult && isSearching);
  }, [setNoResults, hasResult, isSearching]);

  return (
    <Fragment>
      <Form onSubmit={handleSearch}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            width="14"
            icon="search"
            placeholder="Search..."
            onChange={handleChange}
          />
          <Form.Button type="submit" fluid width="2" content="Search" />
        </Form.Group>
      </Form>
    </Fragment>
  );
}
