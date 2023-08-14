import { SeachFilter } from 'components/SeachBar/SeachFilter';

import { Div } from "./SeachBar.styled";



export const SearchBar = ({seachFilter, onChangeFilter}) => {
    return (
        <Div>
            <p>Find contact by name</p>
            <SeachFilter value={seachFilter} onChange={ onChangeFilter} />
    </Div>
  );

}


