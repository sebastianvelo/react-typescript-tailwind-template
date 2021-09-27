import Pill from "components/badge/pill/Pill";
import { FunctionComponent, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";

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
            <Pill label="NUEVO" />
            <Switch>

            </Switch>
        </main>
    );
}

export default Main;