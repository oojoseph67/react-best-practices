import {
  useQueryParams,
  QueryParamsProvider,
  StringParam,
} from "use-query-params";
import { ReactRoute6Adapter } from "use-query-params/adapters/react-router-6";

function App() {
  const [searchParam, setSearchPara] = useQueryParams({ search: StringParam });
  const [searchVal, setSearchVal] = React.useState(searchParam?.search);

  React.useEffect(() => {
    if (searchVal) {
      setSearchPara({ search: searchVal }, "push");
    }
  }, [searchVal.setSearchParam]);

  return (
    <input
      value={searchVal}
      onChange={(e) => {
        setSearchVal(e.target.value);
      }}
    />
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <QueryParamsProvider adapter={ReactRoute6Adapter}>
        <App />
      </QueryParamsProvider>
    </BrowserRouter>
  );
}
