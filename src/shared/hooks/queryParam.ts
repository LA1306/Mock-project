import qs from "querystring";
import { useSearchParams } from "react-router-dom";

export default function useQueryParam() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const queryParam: any = qs.parse(queryString);
  //console.log('> QueryParam: ', queryParam);

  const setQueryString = (obj: any) => {
    setSearchParams(obj, { replace: true });
    //setSearchParams(qs.stringify(obj), { replace: true });
  }
  return { queryParam, setQueryString };
  
  /* let queryParam: any = React.useMemo(() => qs.parse(queryString!), [queryString]);
  let setValue = React.useCallback((newValue: any, options?: any) => {
      setSearchParams(newValue, options);
  }, []); */
}
