import { faBookmark, faComment } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faExclamationCircle, faExternalLinkAlt, faEyeSlash, faHeart, faShare, faThumbtack, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Dropdown, Row } from "react-bootstrap";


const Post = () => {
    return (
        <Card className="post primary-radius mt-5">
            <Card.Body>
                <Row>
                    <Col md="6" className="post-img-container mb-3">
                        <img className="post-img img-fluid" src="https://www.essence.com/wp-content/uploads/2015/11/images/2015/11/06/gettyimages-482150715.jpg" alt="" />
                    </Col>
                    <Col md="6">
                        <div className="post-header d-flex align-items-center">
                            <img className="user-img img-round primary-border" src="https://smilekyle.com/wp-content/uploads/michael-dam-mez3pofgs_k-unsplash-scaled-e1575747712456.jpg" alt="" />
                            <div className="user-details mx-3">
                                <h4 className="name mb-1">Rose kooto</h4>
                                <span className="sub-details d-flex flex-wrap justify-content-between">
                                    <span>Abuja</span>
                                    <span>11hr ago</span>
                                    <span>200 Likes</span>
                                    <span className="fw-bold">20 Replies</span>
                                </span>
                            </div>
                            <div className="actions ms-auto align-self-start">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <FontAwesomeIcon icon={faEllipsisH} className="text-default" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="left">
                                        <Dropdown.Item href="#/action-1">
                                            <span className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                                <span className="ms-2">Hide</span>
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            <span className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                <span className="ms-2">Copy Link</span>
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            <span className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faThumbtack} />
                                                <span className="ms-2">Pin</span>
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <span className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faExclamationCircle} />
                                                <span className="ms-2">Report Post</span>
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <span className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                                <span className="ms-2">Delete Post</span>
                                            </span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <p className="post-text mt-3 mb-2 pe-md-5">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className="replies ps-2 pe-md-5">
                            <span className="text-small fw-bold">View all replies</span>
                            <div className="user-replies mt-2">
                                <div className="reply-item d-flex">
                                    <img className="user-img img-round" src="https://smilekyle.com/wp-content/uploads/michael-dam-mez3pofgs_k-unsplash-scaled-e1575747712456.jpg" alt="" />
                                    <div className="user-details mt-1 mx-2">
                                        <h4 className="name mb-0">Rose kooto</h4>
                                        <span className="sub-details d-flex justify-content-between">
                                            <span>Last Seen 11hr</span>
                                        </span>
                                        <p className="reply-text mt-1">
                                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Read more....
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex font-ext2 mt-4 align-items-end">
                            <FontAwesomeIcon icon={faHeart} className="text-danger me-3" />
                            <FontAwesomeIcon icon={faComment} className="text-primary me-3" />
                            <FontAwesomeIcon icon={faBookmark} className="text-primary me-3" />
                            <FontAwesomeIcon icon={faShare} className="text-primary me-3 ms-auto" />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Post;