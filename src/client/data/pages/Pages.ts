import HomePage, { HomePageProps } from "client/pages/home/HomePage"
import PageRoute from "client/routes/PageRoute"
import Page from "client/util/page/Page"

const HomeData: Page<HomePageProps> = {
    route: PageRoute.HOME,
    component: HomePage,
    props: {
    }
}

export default HomeData;