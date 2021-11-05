import Action from "common/ui/components/action/Action";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";

const ActionSection: FunctionComponent = () => (
  <Section
    className={`divide-secondary w-full`}
    title={{ size: "3xl", content: "Actions" }}
    articles={[
      {
        title: { size: "2xl", content: "Buttons" },
        children: (
          <Row className="md:space-x-2">
            <Action content={`Click me!`} color="primary" onClick={() => {}} />
            <Action
              content={`Click me!`}
              color="secondary"
              onClick={() => {}}
            />
            <Action content={`Click me!`} color="danger" onClick={() => {}} />
            <Action content={`Click me!`} color="success" onClick={() => {}} />
            <Action content={`Click me!`} color="info" onClick={() => {}} />
            <Action content={`Click me!`} color="warning" onClick={() => {}} />
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Anchors & Links" },
        children: (
          <Row className="md:space-x-2">
            <Action content={`Navigate!`} color="primary" />
            <Action content={`Navigate!`} color="secondary" />
            <Action content={`Navigate!`} color="danger" />
            <Action content={`Navigate!`} color="success" />
            <Action content={`Navigate!`} color="info" />
            <Action content={`Navigate!`} color="warning" />
          </Row>
        )
      }
    ]}
  />
);

export default ActionSection;
