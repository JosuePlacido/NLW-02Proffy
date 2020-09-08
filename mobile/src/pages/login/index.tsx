import React,{useState} from 'react';
import { CheckBox } from 'react-native';
import {ButtonPrimary,TextLight,ButtonLinkText} from '../../assets/styles/buttons';
import {TextSecondary} from '../../assets/styles/texts';
import { BorderlessButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ContainerDefault, ContainerLightMargin,
    ViewHorizontalCenterPaddingVertical, ViewHorizontalCenter} from '../../assets/styles/views';
import {useAuth} from '../../contexts/auth';
import { PageHeaderLogo } from '../../conponents/page-header';
import InputSection from '../../conponents/input-section';
import {InputCondensed} from '../../conponents/inputs';
const SignIn: React.FC = () => {
    const { signed,user,signIn } = useAuth();
    const [email,setEmail] = useState('ozzyplacidojunior@hotmail.com');
    const [senha,setSenha] = useState('Ozzy2107');
    const [remember, setRemember] = useState(signed);
    async function handleLogin(){
        signIn(email,senha,remember);
    }
    const navigation = useNavigation();
    function handleCreateAccount(){
        navigation.navigate('Register');
    }
    function handlePasswordRecovery(){
        navigation.navigate('PasswordRecovery');
    }
    return (
        <ContainerDefault>
            <PageHeaderLogo />
            <ContainerLightMargin>
                <InputSection title="Fazer login" right={(
                    <BorderlessButton onPress={handleCreateAccount}>
                        <ButtonLinkText>Criar uma conta</ButtonLinkText>
                    </BorderlessButton>
                )}>
                    <InputCondensed label="E-mail"
                         value={email} onChangeText={(text:string) =>setEmail(text)}/>
                    <InputCondensed label="Senha" secureTextEntry={true}
                         value={senha} onChangeText ={t =>setSenha(t)} />
                         <ViewHorizontalCenterPaddingVertical>
                            <ViewHorizontalCenter>
                                <CheckBox value={remember}
                                    tintColors={{ true: '#04d361' }}
                                    onValueChange={setRemember}/>
                                <TextSecondary>Lembrar-me?</TextSecondary>
                            </ViewHorizontalCenter>
                            <BorderlessButton onPress={handlePasswordRecovery}>
                                <TextSecondary>Esqueci minha senha</TextSecondary>
                            </BorderlessButton>
                         </ViewHorizontalCenterPaddingVertical>
                    <ButtonPrimary onPress={handleLogin}>
                        <TextLight>Entrar</TextLight>
                    </ButtonPrimary>
                </InputSection>
            </ContainerLightMargin>
        </ContainerDefault>
    );
}
export default SignIn;