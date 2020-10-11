import { useCallback, useEffect, useState } from "react";

const initialState = { searchTerm: "", hasResult: false, isSearching: false };

const useSearch = (list = [], setNoResults) => {
  const [state, setState] = useState(initialState);
  const { searchTerm, hasResult, isSearching } = state;

  const handleClear = useCallback(() => {
    setState(initialState);
  }, []);

  const handleChange = useCallback(({value, name}) => {
    if (value === "")
        setState(initialState);
    else
        setState({ ...state, [name]: value });
  }, [state]);

  useEffect(() => {
    setNoResults(!hasResult && isSearching);
  }, [setNoResults, hasResult, isSearching]);

  return [state, {setState, handleClear, handleChange}];
};

export default useSearch;
