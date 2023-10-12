import Link from "next/link";
import { FloatingButton } from "./AddBeer.styled";

const AddBeer = () => {
  return (
    <Link href="/beers/add">
      <FloatingButton>+</FloatingButton>
    </Link>
  );
};

export default AddBeer;
