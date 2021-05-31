import PlayerTableRow from './PlayerTableRow';

const PlayerTable = ({ searchText, showOnlyActive, header, players }) => {
    let filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (showOnlyActive) {
        filteredPlayers = filteredPlayers.filter((player) => player.status === 'Active');
    }

    return (
        <table className="u-full-width">
            <thead>
                <tr>
                    {header.map((column, idx) => (
                        <th key={idx}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredPlayers.map((player, idx) => (
                    <PlayerTableRow key={idx} player={player} />
                ))}
            </tbody>
        </table>
    );
};

export default PlayerTable;
