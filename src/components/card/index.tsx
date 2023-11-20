
import { ReactNode } from "react";
import CardStyle from "./style";

interface CardProps {
    children:  ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <CardStyle>
            {children}
        </CardStyle>
    );
}

export default Card;