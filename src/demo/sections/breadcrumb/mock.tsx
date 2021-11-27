import Color from "ui/common/types/color/Color";
import Size from "ui/common/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-primary p-2",
    color: "dark" as Color,
    children: "Breadcrumb"
  }
};

export const breadcrumbProps = {
  levels: [
    {
      children: "Level 1"
    },
    {
      children: "Level 2"
    },
    {
      children: "Level 3"
    },
    {
      children: "Level 4"
    }
  ]
};
