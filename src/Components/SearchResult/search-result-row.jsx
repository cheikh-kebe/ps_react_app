import { useNavigate } from 'react-router';
import './search-result-row.css';

export const SearchResultRow = ({house}) =>{
  const history = useNavigate();

  const redirectToHouse = () => {
    history(`/house/${house.id}`)
  };

  return(
    <tr onClick={redirectToHouse}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  )
}