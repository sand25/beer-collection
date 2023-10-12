"use client";

import Beer from "@/app/components/Beer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BeerPage = ({ params }) => {
  const [beer, setBeer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // first check in local storage if beer exists
    const localBeers = JSON.parse(localStorage.getItem("beers")) || [];
    const localBeer = localBeers.find((beer) => beer.id === params.id);

    if (localBeer) {
      setBeer(localBeer);
      return;
    }

    // if not, try fetching from API
    const fetchBeer = async () => {
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers/${params.id}`
        );

        if (!response.ok) {
          throw new Error("No item found");
        }

        const data = await response.json();
        setBeer(data[0]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBeer();
  }, [params.id]);

  return (
    <>
      {beer && <Beer beer={beer} $variant="full" />}
      {error && <span>{error}</span>}
    </>
  );
};

BeerPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeerPage;
