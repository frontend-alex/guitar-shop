import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NameSpace } from "../../const";

import GuitarListItem from "../guitar-list-item/guitar-list-item";
import SortArea from "../sort-area/sort-area";
import { Operation } from "../../store/cards/cards";


const GuitarList = ({innerGuitars}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  
  

  const sortByPrice = () => {
    setSelectedValue("price");
    dispatch(
      Operation.sortGuitarsByPrice(
        innerGuitars.sort((a, b) => parseInt(a.price) - parseInt(b.price))
      )
    );
  };

  const sortByPriceRev = () => {
    dispatch(
      Operation.sortGuitarsByPrice(
        innerGuitars.sort((a, b) => parseInt(b.price) - parseInt(a.price))
      )
    );
  };

  const sortByPopularity = () => {
    setSelectedValue("popularity");
    dispatch(
      Operation.sortGuitarsByPopularity(
        innerGuitars.sort((a, b) => a.popularity - b.popularity)
      )
    );
  };

  const sortByPopularityRev = () => {
    dispatch(
      Operation.sortGuitarsByPopularity(
        innerGuitars.sort((a, b) => b.popularity - a.popularity)
      )
    );
  };

  return (
    <div>
      <SortArea
        sortByPrice={sortByPrice}
        sortByPopularity={sortByPopularity}
        sortByPriceRev={sortByPriceRev}
        sortByPopularityRev={sortByPopularityRev}
        selectedValue={selectedValue}
      />

      <ul className="guitar-list">
        {innerGuitars.map((guitar , id) => {
          return (
            <li key={guitar.id}>
              <GuitarListItem guitar={guitar} itemId={id + 1} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GuitarList;
