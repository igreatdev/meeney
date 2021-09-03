import { faEllipsisH, faExclamationCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';

const ProfileCard = () => (
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
);

export default ProfileCard;