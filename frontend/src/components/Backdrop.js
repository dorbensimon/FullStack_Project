
import './Backdrop.css';

const Backdrop = ({show,ClickHamburger}) => {
    return show && (
        <div className="backdrop" onClick={ClickHamburger} >
            
        </div>
 )
}

export default Backdrop
