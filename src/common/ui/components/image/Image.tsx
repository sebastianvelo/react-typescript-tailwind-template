import TailwindStyle from "common/tailwind/TailwindStyle";
import RoundableProps from "common/ui/common/props/RoundeableProps";
import { roundedStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const imageStyle = (props: ImageProps) =>
  TailwindStyle.builder().add(props.className).add(roundedStyle(props)).get();

interface ImageProps
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    RoundableProps {}

const Image: FunctionComponent<ImageProps> = (props: ImageProps) => (
  <img {...props} className={imageStyle(props)} />
);

export default Image;
