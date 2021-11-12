import Snackbar from "ui/components/snackbar/Snackbar";
import Row from "ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const snackbarSection: ComponentSectionProps = {
  title: "Snackbars",
  articles: [
    {
      children: (
        <Row className="md:space-x-2">
          <div className={`w-full`}>
            <Snackbar color="info" open content={`Lorem ipsum dolor sit amet consectetuer.`}/>
          </div>
        </Row>
      )
    }
  ]
};

export default snackbarSection;
