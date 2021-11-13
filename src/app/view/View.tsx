import getComponent from "widget/UIMapper";
import { AxiosRequestConfig } from "axios";
import Widget from "common/entities/widget/Widget";
import useFetch from "common/hooks/useFetch";
import { FunctionComponent } from "react";
import Loading from "ui/components/loading/Loading";

interface ViewProps extends AxiosRequestConfig {}

const View: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const view = useFetch<Widget>({
    ...props
  });
  return (
    <Loading isLoading={view?.loading}>
      {getComponent(view?.data?.uiType, view?.data?.data)}
    </Loading>
  );
};

export default View;
