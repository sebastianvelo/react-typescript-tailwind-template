import TailwindStyle from "common/tailwind/TailwindStyle";
import Image from "common/ui/components/image/Image";
import Text from "common/ui/components/text/Text";
import Title from "common/ui/components/title/Title";
import { bgColorHoverableStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";
import Row from "../row/Row";

const styleStyle = (props: StoryProps) => TailwindStyle.builder()
  .add(`justify-between items-center p-2 w-full`)
  .addIf(bgColorHoverableStyle({}), props.hoverable)
  .get();

export interface StoryProps {
  img?: {
    alt: string;
    src: string;
  };
  title?: string;
  subtitle?: string;
  text?: string;
  hoverable?: boolean;
}

const Story: FunctionComponent<StoryProps> = (props: StoryProps) => (
  <Row className={styleStyle(props)}>
    <Row className={`justify-between items-center space-x-4`}>
      <Image {...props.img} radius="full" className={`h-16 w-16`} />
      <div>
        <Title content={props.title} size={`xl`}></Title>
        <Text content={props.subtitle} size={`l`}></Text>
      </div>
    </Row>
    <Text content={props.text}></Text>
  </Row>
);

export default Story;
