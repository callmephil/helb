import _ from "lodash";
import { useCallback, useEffect, useState } from "react";

const initialState = { hasResult: false, isSearching: false, search: "" };

const matchKeywordInList = (source = [], keyword = "") => {
  const re = new RegExp(_.escapeRegExp(keyword), "i");
  const isMatch = (res) => re.test(res);
  return _.filter(source, isMatch);
};

const matchIndexes = (res = [], list = []) => {
  return res.map((res) => list.findIndex((str) => str === res)).filter((i) => i !== -1);
};

const stringifyObjectList = (src = []) => {
  return src.map((element) => {
    return JSON.stringify(element);
  });
};

const findBestMatch = (indexes) => {
  return indexes.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {});
};

const getKeywords = (keywords) => new Set(keywords.split(" ").map((s) => s.trim()));

const useSearch = (list = [], setResult, setNoResults) => {
  const [state, setState] = useState(initialState);
  const { hasResult, isSearching, search } = state;

  const handleClear = useCallback(() => {
    setState(initialState);
    setResult(list);
  }, [setResult, list]);

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;
      if (value === "") handleClear();
      else setState({ ...state, search: value });
    },
    [handleClear, state]
  );

  const handleSearch = useCallback(() => {
    if (typeof search === "string" && search !== "") {
      setState({ ...state, isSearching: true });
      const result = [];
      const keywords = getKeywords(search);
      const getStrinyfiedList = [...stringifyObjectList(list)];

      keywords.forEach((keyword) => {
        const res = matchKeywordInList(getStrinyfiedList, keyword);
        const indexes = matchIndexes(res, getStrinyfiedList);
        result.push(...indexes);
      });

      const matchesScore = findBestMatch(result);

      const newList = [...new Set(result)]
        .map((index) => {
          return {
            ...list[index],
            score: matchesScore[index],
          };
        })
        .sort((a, b) => (a.score > b.score ? -1 : 1));

      const hasResult = newList.length > 0;
      if (hasResult) {
        setState({ ...state, hasResult });
        setResult(newList);
      } else {
      }
    }
  }, [list, search, setResult, state]);

  useEffect(() => {
    setNoResults(!hasResult && isSearching);
  }, [hasResult, isSearching, setNoResults])

  return { handleChange, handleSearch };
};

export default useSearch;
