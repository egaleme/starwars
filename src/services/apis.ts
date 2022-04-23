import axios from "axios";

const BaseURL = "https://swapi.dev/api";

const instance = axios.create({
  baseURL: BaseURL,
});

export const Endpoints = {
  films: () =>
    instance({
      method: "GET",
      url: `/films`,
    }),
  filmsById: (id: number) =>
    instance({
      method: "GET",
      url: `/films/${id}`,
    }),
  people: () =>
    instance({
      method: "GET",
      url: `/people`,
    }),
  peopleById: (id: number) =>
    instance({
      method: "GET",
      url: `/people/${id}`,
    }),
  planets: () =>
    instance({
      method: "GET",
      url: `/planets`,
    }),
  planetsById: (id: number) =>
    instance({
      method: "GET",
      url: `/planets/${id}`,
    }),
  species: () =>
    instance({
      method: "GET",
      url: `/species`,
    }),
  speciesById: (id: number) =>
    instance({
      method: "GET",
      url: `/species/${id}`,
    }),
  starships: () =>
    instance({
      method: "GET",
      url: `/starships`,
    }),
  starshipsById: (id: number) =>
    instance({
      method: "GET",
      url: `/starships/${id}`,
    }),
  vehicles: () =>
    instance({
      method: "GET",
      url: `/vehicles`,
    }),
  vehiclesById: (id: number) =>
    instance({
      method: "GET",
      url: `/vehicles/${id}`,
    }),
};
