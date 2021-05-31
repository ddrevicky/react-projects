const SearchBar = ({ searchText, showOnlyActive, onSearchTextChange, onShowOnlyActiveChange }) => {
    const handleSearchTextChange = (e) => {
        onSearchTextChange(e.target.value);
    };
    const handleShowOnlyActiveChange = (e) => {
        onShowOnlyActiveChange(e.target.checked);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchTextChange}
            />
            <label>
                <input
                    type="checkbox"
                    name="showActiveOnly"
                    checked={showOnlyActive}
                    onChange={handleShowOnlyActiveChange}
                />
                <span class="label-body">Only show active players</span>
            </label>
        </div>
    );
};

export default SearchBar;
