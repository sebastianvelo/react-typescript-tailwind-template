import Dropdown from "components/dropdown/Dropdown";
import Loading from "components/loading/Loading";
import Pill from "components/pill/Pill";
import Table from "components/table/Table";
import Tabs from "components/tabs/Tabs";
import { FunctionComponent, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";

const tablemock = {
    columns: ["Column1", "Column2", "Column3",],
    rows: [["CellA1", "CellA2", "CellA3"], ["CellA1", "CellA2", "CellA3"], ["CellA1", "CellA2", "CellA3"]]
}

const tabsMock = ["Tab1", "Tab2", "Tab3"];
const tabsContentMock = [
    <Dropdown
        trigger={<Pill label="NUEVO" />}
        content={<Table {...tablemock} />}
    />,
    <Pill label="NUEVO" />,
    <Table {...tablemock} />
]

interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return () => unlisten();
    }, [history]);

    return (
        <main>
            <Loading loading={false}>
                <Dropdown
                    trigger={<Pill label="NUEVO" />}
                    content={<Table {...tablemock} />}
                />
            </Loading>
            <Tabs tabs={tabsMock} content={tabsContentMock}></Tabs>
            <Switch>

            </Switch>
        </main>
    );
}

export default Main;