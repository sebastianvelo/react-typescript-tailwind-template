import Color from "common/ui/lib/types/color/Color";
import Size from "common/ui/lib/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-dark p-2",
    color: "primary" as Color,
    content: "Messages"
  }
};

export const storyProps = {
  img: {
    alt: "",
    src: "https://via.placeholder.com/150"
  },
  title: "Title",
  subtitle: "Subtitle",
  text: "Text",
  hoverable: true,
  route: '/home'
};

export const storiesProps = Array(5).fill(storyProps);
