import { render, screen, waitFor } from "@testing-library/react";
import Home from "../components/Home";
import Detail from "../components/Detail";
import axios from "axios";

jest.mock("axios");

describe("PeopleList component", () => {
  it("should render a list of people", async () => {
    const peopleData = {
      count: 2,
      results: [
        {
          name: "Luke Skywalker",
          height: "172",
          birth_year: "19BBY",
        },
        {
          name: "Leia Organa",
          height: "150",
          birth_year: "19BBY",
        },
      ],
    };

    axios.get.mockResolvedValueOnce({ data: peopleData });

    render(<Home />);

    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument()
    );
    expect(screen.getByText("Leia Organa")).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/people");
  });
});

jest.mock("axios");

describe("PersonDetail component", () => {
  it("should render person details", async () => {
    const personData = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    };

    axios.get.mockResolvedValueOnce({ data: personData });

    render(<Detail data={data} />);

    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument()
    );
    expect(screen.getByText("Height: 172")).toBeInTheDocument();
    expect(screen.getByText("Mass: 77")).toBeInTheDocument();
    expect(screen.getByText("Hair color: blond")).toBeInTheDocument();
    expect(screen.getByText("Skin color: fair")).toBeInTheDocument();
    expect(screen.getByText("Eye color: blue")).toBeInTheDocument();
    expect(screen.getByText("Birth year: 19BBY")).toBeInTheDocument();
    expect(screen.getByText("Gender: male")).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/people/1");
  });
});
