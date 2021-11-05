import Action from "common/ui/components/action/Action";
import Dot from "common/ui/components/badge/dot/Dot";
import Notification from "common/ui/components/badge/notification/Notification";
import Pill from "common/ui/components/badge/pill/Pill";
import Breadcrumb from "common/ui/widget/breadcrumb/Breadcrumb";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";

interface TestProps {

}

const Test: FunctionComponent<TestProps> = () => {
    return (
        <div className={`bg-gray-300 min-h-screen w-screen divide-y-2 divide-primary`}>
            <Row className={`divide-x-2 divide-primary`} responsive>
                <Section className={`divide-secondary w-full`} title={{ size: '3xl', content: 'Badge' }} articles={[
                    {
                        title: { size: '2xl', content: 'Notification' },
                        children: (
                            <Row className='md:space-x-2'>
                                <Notification type='success' size='xl' />
                                <Notification type='info' size='xl' />
                                <Notification type='danger' size='xl' />
                                <Notification type='warning' size='xl' />
                            </Row>
                        )
                    },
                    {
                        title: { size: '2xl', content: 'Pill' },
                        children: (
                            <Row className='md:space-x-2'>
                                <Pill content={`hello`} color="primary" />
                                <Pill content={`hello`} color="secondary" />
                                <Pill content={`hello`} color="danger" />
                                <Pill content={`hello`} color="success" />
                                <Pill content={`hello`} color="info" />
                                <Pill content={`hello`} color="warning" />
                            </Row>
                        )
                    },
                    {
                        title: { size: '2xl', content: 'Dot' },
                        children: (
                            <Row className='md:space-x-2'>
                                <Dot color="primary" />
                                <Dot color="secondary" />
                                <Dot color="danger" />
                                <Dot color="success" />
                                <Dot color="info" />
                                <Dot color="warning" />
                            </Row>
                        )
                    }
                ]} />
                <Section className={`divide-secondary w-full`} title={{ size: '3xl', content: 'Actions' }} articles={[
                    {
                        title: { size: '2xl', content: 'Buttons' },
                        children: (
                            <Row className='md:space-x-2'>
                                <Action content={`Click me!`} color="primary" onClick={() => { }} />
                                <Action content={`Click me!`} color="secondary" onClick={() => { }} />
                                <Action content={`Click me!`} color="danger" onClick={() => { }} />
                                <Action content={`Click me!`} color="success" onClick={() => { }} />
                                <Action content={`Click me!`} color="info" onClick={() => { }} />
                                <Action content={`Click me!`} color="warning" onClick={() => { }} />
                            </Row>
                        )
                    },
                    {
                        title: { size: '2xl', content: 'Anchors & Links' },
                        children: (
                            <Row className='md:space-x-2'>
                                <Action content={`Navigate!`} color="primary" />
                                <Action content={`Navigate!`} color="secondary" />
                                <Action content={`Navigate!`} color="danger" />
                                <Action content={`Navigate!`} color="success" />
                                <Action content={`Navigate!`} color="info" />
                                <Action content={`Navigate!`} color="warning" />
                            </Row>
                        )
                    },
                ]} />
            </Row>
            <Row className={`divide-x-2 divide-primary`} responsive>
                <Section className={`divide-secondary w-full`} title={{ size: '3xl', content: 'Breadcrumb' }} articles={[
                    {
                        children: (
                            <Row className='md:space-x-2'>
                                <Breadcrumb levels={[
                                    {
                                        content: 'level 1'
                                    },
                                    {
                                        content: 'level 2'
                                    },
                                    {
                                        content: 'level 3'
                                    },
                                    {
                                        content: 'level 4'
                                    },
                                ]} />
                            </Row>
                        )
                    },
                ]} />
            </Row>
        </div>
    );
}

export default Test;