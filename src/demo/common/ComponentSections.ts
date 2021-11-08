import actionsSection from "demo/sections/actions/section";
import badgesSection from "demo/sections/badges/section";
import breadcrumbSection from "demo/sections/breadcrumb/section";
import checkboxSection from "demo/sections/checkbox/section";
import loadingSection from "demo/sections/loading/section";
import messagesSection from "demo/sections/messages/section";
import paginationSection from "demo/sections/pagination/section";
import storiesSection from "demo/sections/stories/section";
import tabsSection from "demo/sections/tabs/section";

const ComponentSections = [
  {
    label: "Actions",
    props: actionsSection
  },
  {
    label: "Badges",
    props: badgesSection
  },
  {
    label: "Breadcrumb",
    props: breadcrumbSection
  },
  {
    label: "Checkbox",
    props: checkboxSection
  },
  {
    label: "Loading",
    props: loadingSection
  },
  {
    label: "Messages",
    props: messagesSection
  },
  {
    label: "Stories",
    props: storiesSection
  },
  {
    label: "Tabs",
    props: tabsSection
  },
  {
    label: "Pagination",
    props: paginationSection
  }
];

export default ComponentSections;
