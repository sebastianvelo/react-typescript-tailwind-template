import useFetch from "common/hooks/useFetch";
import { FunctionComponent } from "react";
import Loading from "ui/components/loading/Loading";
import Layout, { LayoutProps } from "./layout/Layout";

const App: FunctionComponent = () => {
  const view = useFetch<LayoutProps>({
    url: "http://localhost:5001/template/us-central1/default/layout",
    method: "GET"
  });
  return (
    <Loading isLoading={view?.loading}>
      <Layout {...view?.data} />
    </Loading>
  );
};

export default App;
