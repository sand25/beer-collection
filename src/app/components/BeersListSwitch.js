import Link from "next/link";
import PropTypes from "prop-types";
import Beer from "./Beer";
import { Grid, List } from "./BeersList.styled";

const BeersListSwitch = ({ beers, listStyle }) => {
  return (
    <>
      {beers.length === 0 && <div>No beers found</div>}
      {listStyle === "list" && (
        <List>
          {beers.map((beer) => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </List>
      )}
      {listStyle === "grid" && (
        <Grid>
          {beers.map((beer) => (
            <Link key={beer.id} href={`/beers/${beer.id}`}>
              <Beer beer={beer} />
            </Link>
          ))}
        </Grid>
      )}
    </>
  );
};

BeersListSwitch.PropTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      first_brewed: PropTypes.string.isRequired,
      food_pairing: PropTypes.arrayOf(PropTypes.string),
      image_url: PropTypes.string,
    })
  ).isRequired,
  listStyle: PropTypes.string.isRequired,
};

export default BeersListSwitch;
