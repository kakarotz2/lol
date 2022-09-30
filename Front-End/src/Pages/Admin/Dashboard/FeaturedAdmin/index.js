import './featured.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Featured() {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Tổng doanh thu</h1>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
                </div>
                <p className="title">Total</p>
                <p className="amount">$420</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Tartget</div>
                        <div className="itemResult positive">
                            <FontAwesomeIcon icon={faChevronDown} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult postivit">
                            <FontAwesomeIcon icon={faChevronUp} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult postivit">
                            <FontAwesomeIcon icon={faChevronUp} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
