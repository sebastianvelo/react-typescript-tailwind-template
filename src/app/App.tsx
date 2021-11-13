import { FunctionComponent } from "react";
import Loading from "ui/components/loading/Loading";
import getComponent from "../widget/UIMapper";
import AppResponse from "../mock/AppResponse.json";

const App: FunctionComponent = () => {
  const view = {
    loading: false,
    data: {
      ...AppResponse
    }
  }; // useFetch<Widget>({});
  return (
    <Loading isLoading={view?.loading}>
      {getComponent(view?.data?.uiType, undefined, view?.data?.children)}
    </Loading>
  );
};

export default App;
