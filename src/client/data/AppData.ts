import { NavigationProps } from "client/layout/navigation/Navigation";
import ComponentColor from "style/tailwind/ComponentColor";

type AppDataType = {
  navigation: NavigationProps;
};

const AppData: AppDataType = {
  navigation: {
    header: "Header",
    actions: [
      {
        label: "Home",
      },
      {
        label: "About",
      },
      {
        label: "Login",
      },
    ],
  },
};

export default AppData;
