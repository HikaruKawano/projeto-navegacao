import { ReactNode } from "react";
import { ContainerStyle } from "./style"

interface ContainerProps {
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <ContainerStyle>
            {children}
        </ContainerStyle>
    )
}