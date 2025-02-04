import requests from "../API/request";

export const rows = [
    {
        id: "NO",
        title: "NETFLIX ORIGINALS",
        fetchUrl: requests.fetchNetflixOriginals,
        isLargeRow: true,
    },
    {
        id: "TN",
        title: "Trending Now",
        fetchUrl: requests.fetchTrending,
    },
    {
        id: "TR",
        title: "Top Rated",
        fetchUrl: requests.fetchTopRated,
    },
    {
        id: "AM",
        title: "Action Movies",
        fetchUrl: requests.fetchActionMovies,
    },
    {
        id: "CM",
        title: "Comedy Movies",
        fetchUrl: requests.fetchComedyMovies,
    },
    {
        id: "HM",
        title: "Horror Movies",
        fetchUrl: requests.fetchHorrorMovies,
    },
    {
        id: "RM",
        title: "Romance  Movies",
        fetchUrl: requests.fetchRomanceMovies,
    },
    {
        id: "DM",
        title: "Documentaries",
        fetchUrl: requests.fetchDocumentaries,
    },
];
