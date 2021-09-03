import { faAngleDown, faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, FormControl, InputGroup } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';

const Header = () => (
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
);

export default Header;