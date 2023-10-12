"use client";

import { useEffect, useState } from "react";
import {
  ListStyle,
  ListStyleButton,
  SearchInput,
  Label,
  RangeInput,
  Control,
  Filters,
} from "./BeersList.styled";
import { AppContainer, ListHeader } from "../globals.styled";
import SortBy from "./SortBy";
import AddBeer from "./AddBeer";
import BeersListSwitch from "./BeersListSwitch";

const mapBeer = (beer) => ({
  ...beer,
  // date returned from API isn't in any standard format, and instead it returns string with a single year or MM/YYYY format,
  // so I'm extracting year from it to use for sorting
  year_brewed: beer.first_brewed.match(/\d+/g).pop(),
});

const BeersList = () => {
  let initialLocalBeers;

  if (typeof window !== "undefined") {
    initialLocalBeers = JSON.parse(localStorage.getItem("beers")) || [];
  }

  const [searchText, setSearchText] = useState("");
  const [beers, setBeers] = useState(null);
  const [sortBy, setSortBy] = useState({
    property: "name",
    direction: "asc",
  });
  const [brewedBefore, setBrewedBefore] = useState(2023);
  const [brewedAfter, setBrewedAfter] = useState(2005);

  useEffect(() => {
    // debouncing fetching to avoid unnecessary requests when typing in search
    const timeoutId = setTimeout(() => {
      if (searchText === "") {
        fetch(
          `https://api.punkapi.com/v2/beers?brewed_before=01-${brewedBefore}&brewed_after=12-${brewedAfter}`
        )
          .then((response) => response.json())
          .then((data) =>
            handleBeerSort(data.map(mapBeer).concat(initialLocalBeers), sortBy)
          );
        return;
      }
      fetch(
        `https://api.punkapi.com/v2/beers??brewed_before=01-${brewedBefore}&brewed_after=12-${brewedAfter}&beer_name=${searchText}`
      )
        .then((response) => response.json())
        .then((data) =>
          handleBeerSort(data.map(mapBeer).concat(initialLocalBeers), sortBy)
        );
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchText, sortBy, brewedAfter, brewedBefore, initialLocalBeers]);

  const [listStyle, setListStyle] = useState("grid");

  const handleSortBy = (property) => {
    let sortByProperty = null;
    if (sortBy && sortBy.property === property) {
      sortByProperty = {
        property,
        direction: sortBy.direction === "asc" ? "desc" : "asc",
      };
    } else {
      sortByProperty = {
        property,
        direction: "asc",
      };
    }
    setSortBy(sortByProperty);
    handleBeerSort(beers, sortByProperty);
  };

  const handleBeerSort = (beersToSort, sortByProperty) => {
    setBeers(
      beersToSort.sort((a, b) => {
        if (sortByProperty.property === "year_brewed") {
          if (sortByProperty.direction === "asc") {
            return a[sortByProperty.property] - b[sortByProperty.property];
          } else {
            return b[sortByProperty.property] - a[sortByProperty.property];
          }
        } else if (sortByProperty.property === "name") {
          if (sortByProperty.direction === "asc") {
            return a[sortByProperty.property].localeCompare(
              b[sortByProperty.property]
            );
          } else {
            return b[sortByProperty.property].localeCompare(
              a[sortByProperty.property]
            );
          }
        }
      })
    );
  };

  const handleBrewedBefore = (e) => {
    setBrewedBefore(e.target.value);
  };

  const handleBrewedAfter = (e) => {
    setBrewedAfter(e.target.value);
  };

  return (
    <AppContainer>
      <ListHeader>
        <ListStyle>
          <Filters>
            <Control>
              <Label>Brewed before:</Label>
              <span>{brewedBefore}</span>
              <RangeInput
                type="range"
                min="2005"
                max="2023"
                value={brewedBefore}
                onChange={handleBrewedBefore}
              />
            </Control>
            <Control>
              <Label>Brewed after:</Label>
              <span>{brewedAfter}</span>
              <RangeInput
                type="range"
                max="2023"
                min="2005"
                value={brewedAfter}
                onChange={handleBrewedAfter}
              />
            </Control>
          </Filters>
          <SortBy sortBy={sortBy} onSortBy={handleSortBy} />
          <SearchInput
            type="search"
            style={{ border: "1px solid black", padding: "8px" }}
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <ListStyleButton
            onClick={() => {
              setListStyle("grid");
            }}
            $active={listStyle === "grid"}
          >
            ⊞
          </ListStyleButton>
          <ListStyleButton
            onClick={() => {
              setListStyle("list");
            }}
            $active={listStyle === "list"}
          >
            ≡
          </ListStyleButton>
        </ListStyle>
      </ListHeader>
      {beers && <BeersListSwitch beers={beers} listStyle={listStyle} />}
      <AddBeer />
    </AppContainer>
  );
};

export default BeersList;
