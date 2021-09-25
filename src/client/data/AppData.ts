import { NavigationProps } from "@client/layout/navigation/Navigation";
import ComponentColor from "@client/style/tailwind/ComponentColor";

type AppDataType = {
  navigation: NavigationProps;
};

const AppData: AppDataType = {
  navigation: {
    header: "Header",
    actions: [
      {
        label: "Home",
        color: ComponentColor.DANGER
      },
    ],
  },
};

export default AppData;
