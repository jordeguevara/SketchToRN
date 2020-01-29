import {useEffect, useState} from 'react';

export const useFetch = (url, initialState, config) => {
  const [result, setResult] = useState(initialState);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch(url, config)
      .then(response => response.json())
      .then(json => {
        setResult(json);
      })
      .catch(err => {
        setHasError(true);
      });
  }, []);
  return {result, hasError};
};
