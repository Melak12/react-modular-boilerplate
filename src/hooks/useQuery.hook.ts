// A custom hook that builds on useLocation to parse the query string
import React from "react";
import { useLocation } from "react-router-dom";


const useQuery = function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default useQuery;