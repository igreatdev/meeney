import { faAngleDown, faBell, faEllipsisH, faEnvelope, faExclamationCircle, faExternalLinkAlt, faImages, faMapMarkerAlt, faSearch, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Card, Col, Dropdown, FormControl, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';
import './App.scss';
import { Post, LeftSidebar, RightSidebar } from './components';
import Logo from './assets/img/logo.png';

function App() {
    return (
        <div className="app">
            <header className="header position-relative">
                <span className="semi-circle d-none d-md-inline-block position-absolute top-0 start-0 top"></span>
                <span className="semi-circle d-none d-md-inline-block position-absolute top-0 start-0 left"></span>
                <div className="main-container container-fluid d-flex">
                    <div className="user">
                        <img className="profile-img img-round primary-border-2" src="https://smilekyle.com/wp-content/uploads/michael-dam-mez3pofgs_k-unsplash-scaled-e1575747712456.jpg" alt="" />
                        <span className="user-details ms-3 d-none d-md-inline-block">
                            <FontAwesomeIcon icon={faAngleDown} className="text-warning" />
                            <span className="ms-2">Jonathan Deo</span>
                        </span>
                    </div>
                    <div className="header-menu d-flex align-items-center ms-auto">
                        <div className="menu">
                            <span className="menu-item-icon position-relative me-3 me-xl-5">
                                <img className="menu-img" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="" />
                            </span>
                            <span className="menu-item-icon position-relative me-3 me-xl-5 d-none d-md-inline-block">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <Badge className="bg-warning p-1 position-absolute top-0 start-100 translate-middle text-primary">50+</Badge>
                            </span>
                            <span className="menu-item-icon position-relative me-3 me-xl-5 d-none d-md-inline-block">
                                <FontAwesomeIcon icon={faBell} />
                                <Badge className="bg-warning p-1 position-absolute top-0 start-100 translate-middle text-primary">50+</Badge>
                            </span>
                        </div>
                        <div className="search me-3 me-xl-5 d-none d-md-inline-block">
                            <InputGroup className="">
                                <InputGroup.Text className="ps-3" id="basic-addon1"><FontAwesomeIcon icon={faSearch} className="text-yellow" /></InputGroup.Text>
                                <FormControl placeholder="Search" />
                            </InputGroup>
                        </div>
                        <div className="brand ms-4">
                            <img className="brand-img" src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </header>

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

                        <Card className="primary-radius bg-secondary">
                            <Card.Body>
                                <div className="d-flex justify-content-end align-items-center">
                                    {/* <Card.Title className="">My Pages</Card.Title> */}

                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="dropdown-basic">
                                            <FontAwesomeIcon icon={faEllipsisH} className="text-default" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                <span className="d-flex align-items-center">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                    <span className="ms-2">Copy Link</span>
                                                </span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                                <span className="d-flex align-items-center">
                                                    <FontAwesomeIcon icon={faExclamationCircle} />
                                                    <span className="ms-2">Report Post</span>
                                                </span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <Row className="profile-details">
                                    <Col md="2" className="mb-3">
                                        <img className="profile-img img-round img-fluid primary-border d-block mx-auto" src="https://smilekyle.com/wp-content/uploads/michael-dam-mez3pofgs_k-unsplash-scaled-e1575747712456.jpg" alt="" />
                                    </Col>
                                    <Col md="5">
                                        <h3 className="name text-center text-md-start">Rose Kooto</h3>
                                        <span className="username d-block text-center text-md-start">User name</span>
                                        <p className="mt-3">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                        </p>
                                    </Col>
                                    <Col md="5">
                                        <div className="d-flex flex-wrap justify-content-between justify-content-md-start mb-3">
                                            <span className="stat">
                                                <span className="number">105</span>
                                                <span className="label">Post</span>
                                            </span>
                                            <span className="stat">
                                                <span className="number">7080</span>
                                                <span className="label">Followers</span>
                                            </span>
                                            <span className="stat">
                                                <span className="number">1,500</span>
                                                <span className="label">Following</span>
                                            </span>
                                            <span className="stat">
                                                <span className="number">1,500</span>
                                                <span className="label">Suppoting</span>
                                            </span>
                                        </div>
                                        <Button className="btn-round w-md-25" size="sm">Following</Button>
                                        <span className="list-text text-primary mt-3 d-flex flex-column gap-1">
                                            <span>Other Pages</span>
                                            <span>Business One</span>
                                            <span>Business One longer name</span>
                                            <span>Business One</span>
                                            <span>Business One</span>
                                        </span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="share-card primary-radius border border-secondary mt-5 p-4">
                            <Card.Body>
                                <Row className="profile-details">
                                    <Col md="10" className="mb-2">
                                        <FormControl placeholder="Share your Moments" size="lg" />
                                    </Col>
                                    <Col md="2">
                                        <Button className="btn-round post-btn float-end" size="lg">Post</Button>
                                    </Col>
                                </Row>

                                <div className="d-flex mt-5 px-2">
                                    <span className="d-flex align-items-center me-2 me-md-5">
                                        <FontAwesomeIcon icon={faImages} className="text-primary font-ext2" />
                                        <span className="ms-2 d-none d-md-block">Image</span>
                                    </span>
                                    <span className="d-flex align-items-center me-2 me-md-5">
                                        <FontAwesomeIcon icon={faVideo} className="text-primary font-ext2" />
                                        <span className="ms-2 d-none d-md-block">Videos</span>
                                    </span>
                                    <span className="d-flex align-items-center me-2 me-md-5">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-warning font-ext2" />
                                        <span className="ms-2 d-none d-md-block">Location</span>
                                    </span>
                                    <span className="d-flex align-items-center me-2 me-md-5">
                                        <FontAwesomeIcon icon={faTags} className="text-primary font-ext2" />
                                        <span className="ms-2 d-none d-md-block">Tags</span>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>

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
