import './PlayerTableRow.css';

const PlayerTableRow = ({ player }) => {
    const { name, team, position, status } = player;
    return (
        <tr>
            <td>{name}</td>
            <td>{team}</td>
            <td>{position}</td>
            <td className={status !== 'Active' && 'text-red'}>{status}</td>
        </tr>
    );
};

export default PlayerTableRow;
