import Color from "common/ui/types/color/Color";
import Size from "common/ui/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-dark p-2",
    color: "primary" as Color,
    content: "Actions"
  }
};

export const actions: { content: string; color: Color }[] = [
  {
    content: "Primary",
    color: "primary"
  },
  {
    content: "Secondary",
    color: "secondary"
  },
  {
    content: "Success",
    color: "success"
  },
  {
    content: "Danger",
    color: "danger"
  },
  {
    content: "Warning",
    color: "warning"
  },
  {
    content: "Info",
    color: "info"
  }
];

export const dropdownActions = [
  {
    content: `Action 1`,
    url: `#`
  },
  {
    content: `Action 2`,
    url: `#`
  },
  {
    content: `Action 3`,
    url: `#`
  },
  {
    content: `Action 4`,
    url: `#`
  }
];
