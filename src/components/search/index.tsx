import Menu from "../menu";
import { SearchStyle, Container, Magnifier } from "./style";


const Search = () => {
    return (
        <Container>
            <SearchStyle type="search" />
            <Magnifier>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                    <path d="M13.3863 4C11.5052 4 9.66624 4.57582 8.10211 5.65465C6.53798 6.73348 5.31889 8.26686 4.59901 10.0609C3.87912 11.8549 3.69076 13.829 4.05776 15.7335C4.42475 17.6381 5.33062 19.3875 6.6608 20.7606C7.99098 22.1337 9.68573 23.0688 11.5307 23.4476C13.3758 23.8264 15.2882 23.632 17.0261 22.8889C18.7641 22.1458 20.2496 20.8874 21.2947 19.2728C22.3398 17.6582 22.8976 15.76 22.8976 13.8181C22.8975 11.2142 21.8953 8.71707 20.1116 6.87585C18.328 5.03463 15.9088 4.00017 13.3863 4Z" stroke="#FBE8FC" stroke-width="2" stroke-miterlimit="10" />
                    <path d="M20.4824 21.1431L27.125 28" stroke="#FBE8FC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
            </Magnifier>
        </Container>
    );
}

export default Search;