import React, { ReactNode } from 'react';
import { Image,View } from 'react-native';
import {Container,Title, BackgroundBanner, LogoInBanner, TitleInBanner} from './styles';
import {ViewHorizontalCenter} from '../../assets/styles/views';
import background from '../../assets/images/give-classes-background.png';
import backIcon from '../../assets/images/icons/back.png';
import Logo from '../../assets/images/logo.png';
import {BorderlessButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../assets/styles/images';
import { DescriptionPrimary } from '../../assets/styles/texts';
interface PageHeaderProps {
    title:string;
    headerRight?:ReactNode;
}

export const PageHeaderLogo:React.FC = () =>{ 
    return (
            <BackgroundBanner source={background} resizeMode="stretch">
                <LogoInBanner source={Logo} resizeMode="stretch" />
                <TitleInBanner>Sua plataforma de {'\n'}estudos online.</TitleInBanner>
                
            </BackgroundBanner>
    )
}

const PageHeader:React.FC<PageHeaderProps> = ({title,headerRight,children}) => {
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.navigate('Landing');
    }
    return (
        <Container>            
            <ViewHorizontalCenter>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
                <Image source={Logo} resizeMode="contain" />
            </ViewHorizontalCenter>
            <ViewHorizontalCenter>
                <Title>
                    {title}    
                </Title>
                {headerRight}  
            </ViewHorizontalCenter>
            {children}
        </Container>
    );
}
export default PageHeader;