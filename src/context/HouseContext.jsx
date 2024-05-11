import { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext('');

const HouseProvider = ({children}) =>{

    const [houses, setHouses] = useState(housesData);
    const [Area, setArea] = useState('Select Area');
    const [Areas, setAreas] = useState([]);
    const [price, setPrice] = useState('Select Price');
    const [property, setProperty] = useState('Select developer');
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const allAreas = houses.map(house=>{
            return house.Area;
        })
        const uniqueAreas = [...new Set(allAreas)];
        setAreas(uniqueAreas);
    }, []);

    useEffect(() => {
        const allPropertydevelopers = houses.map(house=>{
            return house.developer;
        })
        const uniquePropertydevelopers = [...new Set(allPropertydevelopers)];
        setProperties(uniquePropertydevelopers);
    }, []);

    const searchHandler=()=>{
        setIsLoading(true);
       
        // checking selection 
        const isDefault = (str)=> {
            return str.split(' ').includes('Select');
        }
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split('- ')[1]);

        const filteredHouses = housesData.filter(house=> {
            const housePrice = parseInt(house.price);
            // no selection 
            if(isDefault(Area) && isDefault(price) && isDefault(property) ){
                return house;
            }

            // Area is selected
            if(!isDefault(Area) && isDefault(price) && isDefault(property)){
                return house.Area === Area;
            }
            
            // price is selected
            if(isDefault(Area) && !isDefault(price) && isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            
            // property is selected
            if(isDefault(Area) && isDefault(price) && !isDefault(property)){
                return house.developer === property;
            }
            
            // Area & price is selected
            if(!isDefault(Area) && !isDefault(price) && isDefault(property)){
                return house.Area === Area && (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            
            // Area & property is selected
            if(!isDefault(Area) && isDefault(price) && !isDefault(property)){
                return house.Area === Area && house.developer === property;
            }
            
            // price & property is selected
            if(isDefault(Area) && !isDefault(price) && !isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice) && house.developer === property;
            }

            // all are selected 
            if(house.Area === Area && housePrice >= minPrice && housePrice <= maxPrice && house.developer === property){
                return house;
            }
        })

        // setHouses(filteredHouses)
        setTimeout(() => {
            filteredHouses.length>0 ? setHouses(filteredHouses) : setHouses([]);
            setIsLoading(false);
        }, 1000);
    }
    
    return(
        <HouseContext.Provider value={{
            houses,
            Area,
            setArea,
            Areas,
            price,
            setPrice,
            property,
            setProperty,
            properties,
            searchHandler,
            isLoading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;