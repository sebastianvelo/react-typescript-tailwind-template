import APIRequest from "api/APIRequest";
import useFetch from "common/hooks/useFetch";
import { FunctionComponent } from "react";
import Loading from "ui/components/loading/Loading";
import Layout, { LayoutProps } from "./layout/Layout";

const App: FunctionComponent = () => {
  const layout = useFetch<LayoutProps>(APIRequest.getLayout());
  return (
    <Loading isLoading={layout?.loading}>
      <Layout {...layout?.data} />
    </Loading>
  );
};

export default App;
