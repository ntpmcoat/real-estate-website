import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const PropertydeveloperFilter = () => {

  const {setProperty, properties} = useContext(HouseContext);

  const propertydeveloperHandler = (event)=> {
    setProperty(event.target.value);
  }

  return (
    <Select placeholder='select developer' onChange={propertydeveloperHandler}>
      {
        properties.map((developer, index)=> 
          <option key={index}>{developer}</option>
        )
      }
    </Select>
  );
};

export default PropertydeveloperFilter;