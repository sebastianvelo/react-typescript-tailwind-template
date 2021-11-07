import Color from "common/ui/lib/types/color/Color";
import Size from "common/ui/lib/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-dark p-2",
    color: "primary" as Color,
    content: "Checkbox"
  }
};

export const checkboxListProps = {
  items: [
    {
      children: "First checkbox",
      checkbox: {
        label: "first"
      }
    },
    {
      children: "Second checkbox",
      checkbox: {
        label: "second"
      }
    },
    {
      children: "Third checkbox",
      checkbox: {
        label: "thrid"
      }
    }
  ]
};
