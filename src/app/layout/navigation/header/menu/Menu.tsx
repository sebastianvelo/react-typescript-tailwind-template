import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import Dropdown from "ui/atomic/dropdown/Dropdown";
import Image, { ImageProps } from "ui/atomic/image/Image";
import { bgColorStyle } from "ui/common/style/CommonStyles";
import Action, { ActionProps } from "ui/components/action/Action";

const menuStyle = TailwindStyle.builder()
  .add(bgColorStyle({}))
  .add("flex flex-col space-y-2 w-52 py-2 rounded-md px-2")
  .add("absolute z-50 right-0 top-6 shadow-md")
  .get();

const menuTriggerStyle = TailwindStyle.builder()
  .add("h-8 w-8 rounded-full shadow-lg")
  .add("ring ring-primary ring-offset-1 ring-offset-dark")
  .get();

export interface MenuProps {
  toggler: ImageProps;
  options: ActionProps[];
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => (
  <Dropdown
    trigger={<Image className={menuTriggerStyle} {...props.toggler} />}
    children={
      <div className={menuStyle}>
        {props.options.map((link, index) => (
          <Action key={index} {...link} />
        ))}
      </div>
    }
  />
);

export default Menu;
