import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

//para cada starship: name, model, manufacturer, passengers, cantidad de films
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'Passengers',
      dataIndex: 'passengers',
      key: 'passengers',
      
    },
    {
        title: 'cantidad de films',
        dataIndex: 'films',
        key: 'films',
        render: (films: string[]) => films.length,
    }
  ];

  const StarShips = ()=>{
    const { data, error } = useSWR('/starships', swGet);

    if (error) {
      return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
      return <div className="px-2">Loading...</div>;
    }

    return (
      <div>
        <Table columns={columns} data={data.results} /* :D  .slice(0, 3)*/ />//
      </div>
    );
  }

  export default StarShips;