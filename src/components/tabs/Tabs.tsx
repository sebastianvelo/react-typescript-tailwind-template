import Button from "components/action/button/Button";
import { FunctionComponent, useState } from "react";
import ComponentStyle from "style/ComponentStyle";
import TabContent from "./tab-content/TabContent";
import Tab from "./tab/Tab";

interface TabsProps {
    tabs: string[];
    content: React.ReactNode[];
    className?: string;
}

const Tabs: FunctionComponent<TabsProps> = (props: TabsProps) => {
    const [tabActive, setTabActive] = useState<number>(0);

    return (
        <div className={props.className}>
            <div className={ComponentStyle.TABS}>
                {props.tabs.map((tab, i) => (
                    <Button onClick={() => setTabActive(i)}>
                        <Tab label={tab} key={i} active={tabActive === i} />
                    </Button>
                ))}
            </div>
            <div className={ComponentStyle.TAB_CONTENT_WRAPPER}>
                {props.content.map((content, i) =>
                    <TabContent key={i} active={tabActive === i}>
                        {content}
                    </TabContent>
                )}
            </div>
        </div>
    );
}

export default Tabs;