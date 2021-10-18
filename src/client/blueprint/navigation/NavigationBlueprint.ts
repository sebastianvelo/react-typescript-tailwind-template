import { NavigationProps } from "client/layout/navigation/Navigation";
import PageRoute from "client/routes/PageRoute";

const navigationBlueprint = (): NavigationProps => ({
  header: "Header",
  actions: [
    {
      label: "Home",
      path: PageRoute.HOME
    },
    {
      label: "Login",
      path: PageRoute.LOGIN
    },
  ],
});

export default navigationBlueprint;
