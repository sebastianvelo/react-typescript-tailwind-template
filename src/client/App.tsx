import { FunctionComponent } from "react";
import AppData from "./data/AppData";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";
import Navigation from "./layout/navigation/Navigation";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <>
      <Navigation {...AppData.navigation} />
      <Main />
      <Footer />
    </>
  );
};

export default App;