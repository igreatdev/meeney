import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faCog, faEllipsisH, faPen, faPlusCircle, faRss, faSearch, faThumbtack, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, ButtonGroup, Button, Card, Col, Nav, InputGroup, FormControl, Dropdown } from 'react-bootstrap';

const SwitchAccount = () => (
    <Card className="switch-account">
        <Card.Body>
            <Card.Title className="text-center text-primary">Switch Account</Card.Title>
            <ButtonGroup className="w-100 mt-3">
                {/* <div className="d-flex"> */}
                <Button className="text-center flex-grow-1">
                    <Badge className="bg-warning p-1 position-absolute top-0 start-0 translate-middle text-primary">50+</Badge>{' '}
                    Social
                </Button>
                <Button className="flex-grow-1 bg-gray" variant="default">
                    Business
                    {' '}<Badge className="bg-warning p-1 position-absolute top-0 start-100 translate-middle text-primary">50+</Badge>
                </Button>
                {/* </div> */}
            </ButtonGroup>
        </Card.Body>
    </Card>
);

const NavMenuItem = ({ name, icon, url }) => (
    <Nav.Item>
        <Nav.Link href={url}>
            <FontAwesomeIcon icon={icon} />
            <span className="nav-text">{name}</span>
        </Nav.Link>
    </Nav.Item>
)
const NavMenu = () => {
    return (
        <Nav className="side-nav flex-column" activeKey="/#">
            <NavMenuItem name="Feeds" icon={faRss} url="/#" />
            <NavMenuItem name="Gallery" icon={faImage} />
            <NavMenuItem name="Settings" icon={faCog} />
            <NavMenuItem name="Referral" icon={faUsers} />
            <NavMenuItem name="Saved" icon={faBookmark} />
        </Nav>
    );
}

const Page = () => (
    <div className="page d-flex">
        <img className="page-img img-round" src="https://www.hikendip.com/wp-content/uploads/2018/10/balbo-style.jpg" alt="" />
        <div className="page-details">
            <span className="name">Business name</span>
            <span className="sub">Private seller</span>
        </div>
        <div className="actions ms-auto">
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    <FontAwesomeIcon icon={faEllipsisH} className="text-default" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                        <span className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faThumbtack} className="text-warning" />
                            <span className="ms-2">Pin</span>
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        <span className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPen} />
                            <span className="ms-2">Edit Page</span>
                        </span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <FontAwesomeIcon icon={faThumbtack} className="text-primary" />
        </div>
    </div>
)
const Pages = () => (
    <Card className="my-pages">
        <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Card.Title className="">My Pages</Card.Title>

                <Button className="btn-round" size="sm">
                    <span className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faPlusCircle} className="text-warning" />
                        &nbsp;
                        <span>Create new</span>
                    </span>
                </Button>
            </div>

            <div className="search">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    <FormControl placeholder="Search Pages" />
                </InputGroup>
            </div>

            {/* Pages */}
            <div className="my-4">
                <Page />
                <Page />
                <Page />
                <Page />
            </div>
            {/* Pages end */}
        </Card.Body>
    </Card>

)

const LeftSidebar = () => {
    return (
        <Col md={2} className="mb-5">
            <SwitchAccount />
            <NavMenu />

            <Pages />
        </Col>
    );
}

export default LeftSidebar;