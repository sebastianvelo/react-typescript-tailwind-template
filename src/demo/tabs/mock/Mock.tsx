import Title from "common/ui/atomic/title/Title";
import Color from "common/ui/lib/types/color/Color";

const tabProps = (i: number, color: Color) => ({
  header: `Tab ${i}`,
  content: (
    <Title
      color={'light'}
      className={`w-full h-full bg-${color}-dark`}
      content={`Tab ${i} content!`}
    />
  )
});

export const tabsProps = {
  tabs: [
    tabProps(1, "info"),
    tabProps(2, "primary"),
    tabProps(3, "success")
  ]
};
