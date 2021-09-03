import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { faImages, faMapMarkerAlt, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';


const SharePost = () => (
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
);

export default SharePost;