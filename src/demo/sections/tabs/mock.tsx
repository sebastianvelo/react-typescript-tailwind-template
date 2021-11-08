import Text from "common/ui/atomic/text/Text";
import Article from "common/ui/layout/article/Article";
import Color from "common/ui/lib/types/color/Color";

const tabProps = (i: number, color: Color) => ({
  header: `Tab ${i}`,
  content: (
    <Article
      className={`w-full h-96 bg-${color}-light p-6 text-dark`}
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
  tabs: [tabProps(1, "warning"), tabProps(2, "danger"), tabProps(3, "success")]
};
