import styled from "styled-components";

interface NavProps {
    mt?:string;
    ml?:string
    mr?:string
    justify?: string;
    align?: string;
    gap?: string;
}

export const NavStyle = styled.nav<NavProps>`
    display: flex;
    align-items: ${props => (props.align ? props.align : 'center')} ;
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    margin-top: ${props => (props.mt ? props.mt : '')};
    margin-left: ${props => (props.ml ? props.ml : '')};
    gap: ${props => (props.gap ? props.gap : '')};
    margin-right: ${props => (props.mr ? props.mr : '')};
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Li = styled.li`
    color: #FBE8FC;
    font-family: Hannari;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 58px; 
    margin-top: 41px;
    right: 20px;
    position: relative;
    &:last-child{
        border-bottom: solid 4px #F59CF7;
    }
`;