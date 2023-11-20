import { ReactNode } from "react"
import { NavStyle, Ul } from "./style"

interface NavProps {
    children: ReactNode | JSX.Element;
    className?: string;
    mt?:string;
    justify?: string;
    align?: string;
    gap?: string;
    ml?:string;
    mr?:string;
}
export const Nav: React.FC<NavProps> = ({children, className, mt, justify, align, gap, ml, mr}) => {
    return (
        <NavStyle className={className} mt={mt} justify={justify} align={align} gap={gap} ml={ml} mr={mr}>
            <Ul>
                {children}
            </Ul>
        </NavStyle>
    )
}