enum ComponentStyle {
    ACTION = `px-4 py-2 rounded-md`,
    PILL = `py-2 px-4 shadow-md rounded-full font-semibold text-sm mr-2 w-max`,
    DROPDOWN = `list-none`,
    SPINNER_OUTER = "ease-linear rounded-full h-20 w-20 relative border-4 border-primary-light",
    SPINNER_INNER = "ease-linear rounded-full h-20 w-20 absolute -top-1 -left-1 border-t-8 border-b-0 border-l-4 border-r-0 border-primary-dark animate-spin",

    NAVIGATION = `flex bg-primary justify-between items-center w-screen py-2 px-4`,
    NAVIGATION_HEADER = `text-2xl`,
    NAVIGATION_ACTIONS = ``,
    TABS = "flex",
    TAB = "px-6",
    TAB_ACTIVE = "border-b-2 border-primary",
    TAB_CONTENT_HIDDEN = "hidden",
    TAB_CONTENT_WRAPPER = "py-4"
}

export default ComponentStyle;