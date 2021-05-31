import FilterablePlayerTable from './components/FilterablePlayerTable';

const players = [
    { name: 'John Boyle', team: 'Carolina Hurricanes', position: 'Goalie', status: 'Active' },
    { name: 'Greg Boyle', team: 'Carolina Hurricanes', position: 'Defense', status: 'Retired' },
    {
        name: 'Steven Boyle',
        team: 'Carolina Hurricanes',
        position: 'Left Forward',
        status: 'Active',
    },
    { name: 'Sid Gauti', team: 'Colorado Avalanche', position: 'Right Forward', status: 'Active' },
    { name: 'Elvis Costello', team: 'Carolina Hurricanes', position: 'Center', status: 'Active' },
];

const App = () => (
    <FilterablePlayerTable header={['Name', 'Team', 'Position', 'Status']} players={players} />
);

export default App;
