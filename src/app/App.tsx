import { FunctionComponent } from "react";
import Test from "./Test";

interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div>
            <Test />
        </div>
    );
}

export default App;