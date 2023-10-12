"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import {
  FieldSet,
  FieldsContainer,
  Input,
  SubmitButton,
} from "./AddBeerForm.styled";

const AddBeerPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  let currentLocalBeers = [];

  if (typeof window !== "undefined") {
    currentLocalBeers = JSON.parse(localStorage.getItem("beers")) || [];
  }

  const handleBeerAdd = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "beers",
      JSON.stringify([
        ...currentLocalBeers,
        {
          id: uuidv4(),
          name,
          tagline,
          description,
          first_brewed: firstBrewed,
          year_brewed: firstBrewed,
          type: "draft",
        },
      ])
    );
    router.push("/");
  };

  return (
    <form onSubmit={handleBeerAdd}>
      <FieldsContainer>
        <FieldSet>
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </FieldSet>
        <FieldSet>
          <label htmlFor="tagline">Tagline</label>
          <Input
            name="tagline"
            type="text"
            placeholder="Enter tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </FieldSet>
        <FieldSet>
          <label htmlFor="description">Description</label>
          <Input
            name="description"
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </FieldSet>
        <FieldSet>
          <label htmlFor="firstBrewed">First brewed</label>
          <Input
            name="firstBrewed"
            type="number"
            min="2005"
            placeholder="Enter first year brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
            required
          />
        </FieldSet>
        <SubmitButton type="submit">Add</SubmitButton>
      </FieldsContainer>
    </form>
  );
};

export default AddBeerPage;
