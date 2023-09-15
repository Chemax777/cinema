import arrow from '../../img/arrow-up.png'

import './up-btn.css'

function UpBtn () {
    return (
        <div className="up-btn">
            <a href="#up">
                <img src={arrow} alt="arrow" />
            </a>
        </div>
    )
}

export default UpBtn