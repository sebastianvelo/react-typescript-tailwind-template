import TailwindStyle from "common/tailwind/TailwindStyle";
import Text from "common/ui/atomic/text/Text";
import ParentProps from "common/ui/lib/props/ParentProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import { FunctionComponent } from "react";
import Spinner from "./spinner/Spinner";

const loadingStyle = TailwindStyle.builder()
  .add("fixed top-0 left-0 w-screen h-screen")
  .add("flex flex-col justify-center items-center space-y-4")
  .add("bg-black bg-opacity-95")
  .get();
interface LoadingProps extends ParentProps, TextContentProps {
  isLoading?: boolean;
}

const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  if (props.isLoading)
    return (
      <div className={loadingStyle}>
        <Spinner />
        <Text {...props} color={`light`} size={`xl`} />
      </div>
    );

  return <>{props.children}</>;
};

export default Loading;
