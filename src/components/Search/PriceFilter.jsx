import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PriceFilter = () => {
  const { setPrice } = useContext(HouseContext);

  const prices = [
    { value: "25 - 40" },
    { value: "40 -  60" },
    { value: "60 - 100" },
    { value: "100 - 150" },
    { value: "150 - 200" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Select placeholder="select price " onChange={priceHandler}>
      {prices.map((price, index) =>
          <option key={index}>{price.value}</option>
        )
      }
    </Select>
  );
};

export default PriceFilter;