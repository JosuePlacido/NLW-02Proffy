import styled from 'styled-components/native';
export const TextInputDefault = styled.TextInput`
    height:54px;
    background-color:#fafAFC;
    border-radius: 8px;
    border-color: #E6E6F0;
    justify-content:center;
    padding: 0 16px;
    margin-top:4px;
    border-width:1px;
    margin-bottom:16px;
    color:#6A6180;
`;
export const Label = styled.Text`
    font-family:Poppins_400Regular;
    color: #9C98A6;
`;
export const LabelCondensed = styled(Label)`
    font-size:12px;
`;
export const TextAreaDefault = styled(TextInputDefault)`
    height:150px;
    padding: 16px;
    text-align-vertical:top;
`;
export const ViewCondensed = styled.View`
    background-color:#fafAFC;
    border-color: #E6E6F0;
    padding: 4px 16px;
    margin-top:-1px;
    border-width:1px;
`;
export const TextInputCondensed = styled.TextInput`
    color:#6A6180;
    font-family:Poppins_600SemiBold;
    font-size:16px;
    margin: 2px;
`;