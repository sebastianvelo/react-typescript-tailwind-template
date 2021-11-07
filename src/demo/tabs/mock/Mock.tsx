import Text from "common/ui/atomic/text/Text";
import Article from "common/ui/layout/article/Article";
import Color from "common/ui/lib/types/color/Color";
import Size from "common/ui/lib/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-primary p-2",
    color: "dark" as Color,
    content: "Tabs"
  }
};

const tabProps = (i: number, color: Color) => ({
  header: `Tab ${i}`,
  content: (
    <Article
      className={`w-full h-96 bg-${color} p-6`}
      title={{ content: `Tab ${i} content`, size: "xl" }}
    >
      <Text
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }
      />
    </Article>
  )
});

export const tabsProps = {
  tabs: [tabProps(1, "info"), tabProps(2, "danger"), tabProps(3, "success")]
};
