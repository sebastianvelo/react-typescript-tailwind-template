import Text from "common/ui/atomic/text/Text";
import ParentProps from "common/ui/lib/props/ParentProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import { FunctionComponent } from "react";
import Spinner from "./spinner/Spinner";

interface LoadingProps extends ParentProps, TextContentProps {
  isLoading?: boolean;
}

const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  if (props.isLoading)
    return (
      <div className="fixed top-0 left-0 bg-black w-screen h-screen flex flex-col justify-center items-center bg-opacity-95 space-y-4">
        <Spinner />
        <Text {...props} color={`light`} size={`xl`} />
      </div>
    );

  return <>{props.children}</>;
};

export default Loading;
