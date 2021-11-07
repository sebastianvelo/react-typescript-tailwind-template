import Color from "common/ui/lib/types/color/Color";
import Size from "common/ui/lib/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-primary p-2",
    color: "dark" as Color,
    content: "Checkbox"
  }
};

export const checkboxListProps = {
  items: [
    {
      children: "First checkbox",
      checkbox: {
        label: "First"
      }
    },
    {
      children: "Second checkbox",
      checkbox: {
        label: "Second"
      }
    },
    {
      children: "Third checkbox",
      checkbox: {
        label: "Thrid"
      }
    }
  ]
};
