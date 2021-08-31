import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Progress } from 'antd';
import { Button, Card, Col, Nav, InputGroup, FormControl, Dropdown, ListGroup, Tabs, Tab } from 'react-bootstrap';

const Title = () => (
    <Card className="bg-default">
        <Card.Body className="ps-0">
            <Card.Title className="text-primary">Suggested Listings</Card.Title>
        </Card.Body>
    </Card>
);

const ListItem = ({ percent }) => (
    <div className="listing-item d-flex align-items-start mb-3">
        <img className="list-img img-round primary-border" src="https://www.hikendip.com/wp-content/uploads/2018/10/balbo-style.jpg" alt="" />
        <div className="list-details ms-2 w-100 px-1 mt-1">
            <div className="d-flex align-items-start">
                <div className="d-flex flex-column">
                    <span className="name">Smoothie</span>
                    <span className="text-small">Smoothie</span>
                    <span className="text-small">25 Orders Left</span>
                </div>
                <Button className="btn-round ms-auto w-md-25" size="sm">Order</Button>
            </div>
            <Progress percent={percent} showInfo={false} />
        </div>
    </div>
)
const Listings = () => {
    return (
        <Card className="primary-radius bg-secondary mb-5">
            <Card.Body>
                <ListItem percent={70} />
                <ListItem percent={30} />
                <ListItem percent={60} />
                <ListItem percent={50} />
            </Card.Body>
        </Card>
    );
}

const Page = () => (
    <div className="page d-flex align-items-center mb-3 px-1">
        <img className="page-img img-round primary-border" src="https://www.hikendip.com/wp-content/uploads/2018/10/balbo-style.jpg" alt="" />
        <div className="page-details">
            <span className="name">Rose Kooto</span>
            <span className="sub">Abuja</span>
        </div>
        <div className="actions ms-auto w-auto">
            <Button className="btn-round me-3" size="sm">Support</Button>
            <FontAwesomeIcon icon={faBookmark} className="text-primary" />
        </div>
    </div>
)
const Pages = () => (
    <Card className="pages primary-radius bg-secondary">
        <Card.Body>
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
        </Card.Body>
    </Card>

)

const RightSidebar = () => {
    return (
        <Col md={3} className="right-sidebar">
            <Title />
            <Listings />

            <Tabs defaultActiveKey="suggested-pages" id="uncontrolled-tab-example" className="sidebar-tab mb-4 justify-content-between">
                <Tab eventKey="suggested-users" title="Suggested Users">
                </Tab>
                <Tab eventKey="suggested-pages" title="Suggested Pages">
                </Tab>
            </Tabs>
            <Pages />
        </Col>
    );
}

export default RightSidebar;