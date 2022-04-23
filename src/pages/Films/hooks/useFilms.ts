import { useQuery } from "react-query";

import { Endpoints } from "../../../services/apis";

export const GetFilms = () => {
    return useQuery(
      ['allfilms'],
      async () => {
        return await Endpoints.films()
      },
    )
  }

  export const GetFilmById = (id: number) => {
    return useQuery(
      ['film', id],
      async () => {
        return await Endpoints.filmsById(id)
      }
    );
  };