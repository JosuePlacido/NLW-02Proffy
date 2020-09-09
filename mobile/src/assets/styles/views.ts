import styled from 'styled-components/native';
export const ContainerDefault = styled.View`
    flex:1;
    background-color:#f0f0f7;
`;
export const ContainerLightMargin = styled(ContainerDefault)`
    padding:20px;
`;
export const ContainerPrimary = styled.View`
    flex:1;
    background-color:#8257e5;
    justify-content:center;
    padding:40px;
`;
export const ViewHorizontalCenter = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;
export const ViewHorizontalCenterPaddingVertical = styled(ViewHorizontalCenter)`
    padding:16px 0;
`;
export const ViewSubGroup = styled.View`
    width:48%;
`;
export const ContainerItem = styled.View`
    background-color:#fff;
    border-width:1px;
    border-color:#e6e6f0;
    border-radius:8px;
    margin-bottom:16px;
    overflow:hidden;
`;
export const ViewHorizontalCenterPadding = styled.View`
    flex-direction:row;
    align-items:center;
    padding:24px;
`;
export const ItemFooter = styled.View`
    background-color:#fafafc;
    margin-top:24px;
    align-items:center;
    padding:24px;
    flex-direction:column;
`;
export const ViewVerticalCenterPadding = styled.View`
	align-items: center;
	padding: 24px;
`;
