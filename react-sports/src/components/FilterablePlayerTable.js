import { useState } from 'react';
import PlayerTable from './PlayerTable';
import SearchBar from './SearchBar';

const FilterablePlayerTable = ({ header, players }) => {
    const [showOnlyActive, setShowOnlyActive] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (searchText) => {
        setSearchText(searchText);
    };
    const handleShowOnlyActiveChange = (showOnlyActive) => {
        setShowOnlyActive(showOnlyActive);
    };

    return (
        <div>
            <SearchBar
                onSearchTextChange={handleSearchTextChange}
                onShowOnlyActiveChange={handleShowOnlyActiveChange}
                searchText={searchText}
                showOnlyActive={showOnlyActive}
            />
            <PlayerTable
                searchText={searchText}
                showOnlyActive={showOnlyActive}
                header={header}
                players={players}
            />
        </div>
    );
};

export default FilterablePlayerTable;
