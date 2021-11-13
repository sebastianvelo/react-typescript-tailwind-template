import Widget from "common/entities/widget/Widget";
import React, { FunctionComponent } from "react";
import ActionAnchor from "../ui/atomic/anchor/ActionAnchor";
import Dot from "../ui/atomic/badge/dot/Dot";
import Notification from "../ui/atomic/badge/notification/Notification";
import Pill from "../ui/atomic/badge/pill/Pill";
import ActionButton from "../ui/atomic/button/ActionButton";
import CheckboxLabel from "../ui/atomic/checkbox/CheckboxLabel";
import Dropdown from "../ui/atomic/dropdown/Dropdown";
import Image from "../ui/atomic/image/Image";
import ActionLink from "../ui/atomic/link/ActionLink";
import Text from "../ui/atomic/text/Text";
import Title from "../ui/atomic/title/Title";
import Action from "../ui/components/action/Action";
import Breadcrumb from "../ui/components/breadcrumb/Breadcrumb";
import ButtonDropdown from "../ui/components/button-dropdown/ButtonDropdown";
import Card from "../ui/components/card/Card";
import Carousel from "../ui/components/carousel/Carousel";
import Loading from "../ui/components/loading/Loading";
import Message from "../ui/components/message/Message";
import Modal from "../ui/components/modal/modal/Modal";
import Pagination from "../ui/components/pagination/Pagination";
import Snackbar from "../ui/components/snackbar/Snackbar";
import Story from "../ui/components/story/Story";
import Tabs from "../ui/components/tabs/Tabs";
import Footer from "../app/layout/footer/Footer";
import Layout from "../app/layout/Layout";
import Main from "../app/layout/main/Main";
import Navigation from "../app/layout/navigation/Navigation";
import View from "../app/view/View";

const UIMapper = new Map<string, FunctionComponent<any>>();
UIMapper.set("anchor", ActionAnchor);
UIMapper.set("link", ActionLink);
UIMapper.set("button", ActionButton);
UIMapper.set("dot", Dot);
UIMapper.set("notification", Notification);
UIMapper.set("pill", Pill);
UIMapper.set("checkbox", CheckboxLabel);
UIMapper.set("dropdown", Dropdown);
UIMapper.set("image", Image);
UIMapper.set("text", Text);
UIMapper.set("title", Title);
UIMapper.set("action", Action);
UIMapper.set("breadcrumb", Breadcrumb);
UIMapper.set("button-dropdown", ButtonDropdown);
UIMapper.set("card", Card);
UIMapper.set("carousel", Carousel);
UIMapper.set("loading", Loading);
UIMapper.set("message", Message);
UIMapper.set("modal", Modal);
UIMapper.set("pagination", Pagination);
UIMapper.set("snackbar", Snackbar);
UIMapper.set("story", Story);
UIMapper.set("tabs", Tabs);
UIMapper.set("view", View);
UIMapper.set("navigation", Navigation);
UIMapper.set("main", Main);
UIMapper.set("footer", Footer);
UIMapper.set("layout", Layout);

const getComponent = (
  uiType: string = "error",
  props: any,
  children?: Widget[]
): React.ReactNode => {
  const Component = UIMapper.get(uiType);
  const childrenComponent = children?.map((child) =>
    getComponent(child.uiType, child.data, child.children)
  );

  if (Component) return Component({ ...props, children: childrenComponent });
  return React.createElement(
    "p",
    null,
    `Component with uiType ${uiType} does not exist.`
  );
};
export default getComponent;
