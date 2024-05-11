import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {

  const {setArea, Areas} = useContext(HouseContext);

  const locationHandler = (event)=> {
    setArea(event.target.value);
  }

  return (
    <Select placeholder='select Area' onChange={locationHandler}>
      {
        Areas.map((Area, index)=> 
          <option key={index}>{Area}</option>
        )
      }
    </Select>
  );
};

export default LocationFilter;