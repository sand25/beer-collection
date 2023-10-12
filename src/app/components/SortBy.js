import PropTypes from "prop-types";
import { Label } from "./BeersList.styled";
import { SortButton } from "./SortBy.styled";

const SortBy = ({ sortBy, onSortBy }) => {
  const isSortedBy = (property, direction) =>
    sortBy && sortBy.property === property && sortBy.direction === direction;

  return (
    <div>
      <Label>Sort by:</Label>
      <SortButton
        onClick={() => onSortBy("name")}
        $active={sortBy.property === "name"}
      >
        name{" "}
        {isSortedBy("name", "asc")
          ? "↑"
          : isSortedBy("name", "desc")
          ? "↓"
          : ""}
      </SortButton>
      <SortButton
        onClick={() => onSortBy("year_brewed")}
        $active={sortBy.property === "year_brewed"}
      >
        brewing year{" "}
        {isSortedBy("year_brewed", "asc")
          ? "↑"
          : isSortedBy("year_brewed", "desc")
          ? "↓"
          : ""}
      </SortButton>
    </div>
  );
};

SortBy.propTypes = {
  sortBy: PropTypes.shape({
    property: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }),
  onSortBy: PropTypes.func.isRequired,
};

export default SortBy;
