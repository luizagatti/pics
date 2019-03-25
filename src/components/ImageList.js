import React from 'react';

const ImageList = props => {
	const images = props.images.map(({ id, description, urls }) => {
		return (
			<div key={id}>
				<center>
					<img alt={description} src={urls.small} />
				</center>
			</div>
		);
	});
	return (
		<div>
			{images}
		</div>	
	);
}

export default ImageList;