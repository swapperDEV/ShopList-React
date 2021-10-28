import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import ModeButton from './Components/ModeButton/ModeButton'

const Application = () => {
    return (
    <Fragment>
        <App/>
        <ModeButton/>
    </Fragment>
    )
}


ReactDOM.render(<Application />, document.getElementById('root'));