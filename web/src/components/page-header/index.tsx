import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import { TopBar, Container, Content, ContentFlex } from "./styles";
interface PageHeaderProps {
	page: string;
	title?: string;
	description?: React.ReactNode;
}
export const PageHeaderForm: React.FunctionComponent<PageHeaderProps> = ({
	page,
	title,
	description,
	children,
}) => {
	return (
		<Container>
			<TopBar>
				<Link to="/">
					<img src={backIcon} alt="Voltaroltar" />
				</Link>
				<p>{page}</p>
				<img src={logoImg} alt="Proffy" />
			</TopBar>
			<Content>
				<strong>{title}</strong>
				{description && <p>{description}</p>}
				{children}
			</Content>
		</Container>
	);
};
const PageHeader: React.FunctionComponent<PageHeaderProps> = ({page,title,description,children}) => {
	return (
		<Container>
			<TopBar>
				<Link to="/">
					<img src={backIcon} alt="Voltaroltar" />
				</Link>
				<p>{page}</p>
				<img src={logoImg} alt="Proffy" />
			</TopBar>
			<ContentFlex>
				<strong>{title}</strong>
				{description && <p>{description}</p>}
				{children}
			</ContentFlex>
		</Container>
	);
};
export default PageHeader;
