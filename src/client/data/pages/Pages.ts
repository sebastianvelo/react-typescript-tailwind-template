import ErrorPage, { ErrorPageProps } from "client/pages/error/ErrorPage"
import HomePage, { HomePageProps } from "client/pages/home/HomePage"
import PageRoute from "client/routes/PageRoute"
import Page from "client/util/page/Page"

const HomeData: Page<HomePageProps> = {
    route: PageRoute.HOME,
    component: HomePage,
    props: {
    }
}

const ErrorData: Page<ErrorPageProps> = {
    route: PageRoute.ERROR,
    component: ErrorPage,
    props: {
        code: 404,
        message: 'This is not the web page you are looking for.'
    }
}

const Pages = [HomeData, ErrorData];

export default Pages;