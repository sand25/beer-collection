import {
  BeerContainer,
  BeerFooter,
  BeerHeader,
  BeerImage,
  BrewingDate,
  Description,
  FoodPairing,
  FoodPairingItem,
  H2,
  H3,
  LeftSide,
  RightSide,
  Tagline,
  NoImage,
} from "./Beer.styled";
import PropTypes from "prop-types";

const Beer = ({ beer, $variant = "default" }) => {
  const beerDescription =
    $variant === "default" && beer.description.length > 100
      ? `${beer.description.slice(0, 100)}...`
      : beer.description;

  return (
    <BeerContainer $variant={$variant}>
      <BeerHeader>
        <LeftSide>
          {/* in some cases API returns empty image field */}
          {beer.image_url ? (
            <BeerImage src={beer.image_url} />
          ) : (
            <NoImage>X</NoImage>
          )}
        </LeftSide>
        <RightSide>
          <H2>{beer.name}</H2>
          <Tagline>{beer.tagline}</Tagline>
          <Description title={beer.description}>{beerDescription}</Description>
          <BrewingDate>{beer.first_brewed}</BrewingDate>
        </RightSide>
      </BeerHeader>

      {beer.food_pairing && (
        <BeerFooter>
          <H3>Best food pairing:</H3>
          <FoodPairing>
            {beer.food_pairing.map((food, index) => {
              return (
                <FoodPairingItem key={`${food.slice(0, 5)}${index}`}>
                  {food}
                </FoodPairingItem>
              );
            })}
          </FoodPairing>
        </BeerFooter>
      )}
    </BeerContainer>
  );
};

Beer.PropTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    first_brewed: PropTypes.string.isRequired,
    food_pairing: PropTypes.arrayOf(PropTypes.string),
    image_url: PropTypes.string,
  }).isRequired,
  $variant: PropTypes.string,
};

export default Beer;
