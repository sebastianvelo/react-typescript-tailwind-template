import { FunctionComponent } from "react";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";
import Navigation from "./layout/navigation/Navigation";
import appResponse from "./AppResponse.json";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const appProps = appResponse;

  return (
    <div>
      <Navigation {...appProps.navigation} />
      <Main {...appResponse.main} />
      <Footer {...appResponse.footer} />
    </div>
  );
};

export default App;
