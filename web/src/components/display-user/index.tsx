import React from 'react';
import { Span, Img } from './styles';

interface DisplayUserProps {
	name: string;
	avatar: string;
	alt: string;
}
const DisplayUser: React.FC<DisplayUserProps> = ({name,avatar,alt}) => {
	return (
		<Span href='/Profile'>
			<Img src={avatar} alt={alt} width="40px" height="40px" />
			{name}
		</Span>
	);
};

export default DisplayUser;