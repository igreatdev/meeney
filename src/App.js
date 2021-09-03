import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import './App.scss';
import { Post, LeftSidebar, RightSidebar, SharePost, ProfileCard, Header } from './components';

function App() {
    return (
        <div className="app">
            <Header />

            <div className="main-container my-5 py-5 container-fluid">
                <Row className="gx-xxl-4 mb-5 pb-5">
                    <LeftSidebar />
                    <Col md={7} className="mb-5">
                        <Tabs defaultActiveKey="my-page" id="uncontrolled-tab-example" className="main-tab mb-4 justify-content-between">
                            <Tab eventKey="community" title="Community">
                            </Tab>
                            <Tab eventKey="trending" title="See What's Trending">
                            </Tab>
                            <Tab eventKey="my-page" title="My Page">
                            </Tab>
                        </Tabs>

                        <ProfileCard />

                        <SharePost />

                        <Post />
                        <Post />
                    </Col>
                    <RightSidebar />
                </Row>
            </div>
        </div >
    );
}

export default App;
