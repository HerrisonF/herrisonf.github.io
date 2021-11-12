import React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';

const ProgressBarComponent = ({ percent }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${percent}%`
		}
		
		setStyle(newStyle);
    }, 200);
    
    return (
        <Row className="progress">
			<div className="progress-done" style={style}>
				{percent}%
			</div>
		</Row>
    );
}

export default ProgressBarComponent;