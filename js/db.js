const peliculas = [
  // Año 2010
  {
    nombre: "Toy Story 3",
    categoria: "Animación, Aventura, Comedia",
    anioLanzamiento: 2010,
    img: "https://pics.filmaffinity.com/Toy_Story_3-691147043-large.jpg",
    puntuacion: 8.2,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "Origen",
    categoria: "Acción, Ciencia ficción",
    anioLanzamiento: 2010,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Inception_%282010%29_theatrical_poster.jpg/220px-Inception_%282010%29_theatrical_poster.jpg",
    puntuacion: 8.8,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "The Social Network",
    categoria: "Biografía, Drama",
    anioLanzamiento: 2010,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UfXGXzKoEVOVnPXvGI2EAFQdb5DBuZ94brHIzKctTg&s",
    puntuacion: 7.7,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2011
  {
    nombre: "Drive",
    categoria: "Crimen, Drama",
    anioLanzamiento: 2011,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Drive2011Poster.jpg/220px-Drive2011Poster.jpg",
    puntuacion: 7.8,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Rango",
    categoria: "Animación, Aventura, Comedia",
    anioLanzamiento: 2011,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSPKLPtsc9-WEETdKcaVelVTYyBLZQEod4YhcZe7P8g&s",
    puntuacion: 7.2,
    idioma: "Inglés",
    disponibilidadTransmision: ["Amazon Prime Video"]
  },
  // Año 2012
  {
    nombre: "Los Vengadores",
    categoria: "Acción, Aventura",
    anioLanzamiento: 2012,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rQ3yxLGS3BIDCFcOlTMvAzx8Nr_hAgW_8d2wM5evig&s",
    puntuacion: 8.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "Intocable",
    categoria: "Biografía, Comedia, Drama",
    anioLanzamiento: 2012,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/The_Intouchables.jpg/220px-The_Intouchables.jpg",
    puntuacion: 8.5,
    idioma: "Francés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Django sin Cadenas",
    categoria: "Drama, Western",
    anioLanzamiento: 2012,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Django_Unchained_Poster.jpg/220px-Django_Unchained_Poster.jpg",
    puntuacion: 8.4,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "El Lado Bueno de las Cosas",
    categoria: "Comedia, Drama, Romance",
    anioLanzamiento: 2012,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROMmsK9dj4t9zllzJTvINoR8WHgp0fGEPiMnQtpdswQ&s",
    puntuacion: 7.7,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Argo",
    categoria: "Biografía, Drama, Thriller",
    anioLanzamiento: 2012,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Argo2012Poster.jpg/220px-Argo2012Poster.jpg",
    puntuacion: 7.7,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2013
  {
    nombre: "Gravedad",
    categoria: "Ciencia ficción, Drama",
    anioLanzamiento: 2013,
    img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
    puntuacion: 7.7,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2014
  {
    nombre: "Interstellar",
    categoria: "Aventura, Drama, Ciencia ficción",
    anioLanzamiento: 2014,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Interstellar_film_poster.jpg/220px-Interstellar_film_poster.jpg",
    puntuacion: 8.6,
    idioma: "Inglés",
    disponibilidadTransmision: ["Amazon Prime Video"]
  },
  {
    nombre: "Birdman",
    categoria: "Comedia, Drama",
    anioLanzamiento: 2014,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOvEaYA6fBAsd5_xMGbqMljAc98VjkO9hOiGdwth5Mw&s",
    puntuacion: 7.7,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "El Gran Hotel Budapest",
    categoria: "Aventura, Comedia, Drama",
    anioLanzamiento: 2014,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SmQB7kGhkJuOvDr6hK_Ms9OXluc9f_BDQxOfT8wSLQ&s",
    puntuacion: 8.1,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Whiplash",
    categoria: "Drama, Música",
    anioLanzamiento: 2014,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Whiplash_poster.jpg/220px-Whiplash_poster.jpg",
    puntuacion: 8.5,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2015
  {
    nombre: "Mad Max: Furia en el Camino",
    categoria: "Acción, Aventura",
    anioLanzamiento: 2015,
    img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    puntuacion: 8.1,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "El Renacido",
    categoria: "Aventura, Drama",
    anioLanzamiento: 2015,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/The_Revenant_2015_film_poster.jpg/220px-The_Revenant_2015_film_poster.jpg",
    puntuacion: 8.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Star Wars: El Despertar de la Fuerza",
    categoria: "Acción, Aventura, Fantasía",
    anioLanzamiento: 2015,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg/220px-Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
    puntuacion: 7.8,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "La Habitación",
    categoria: "Drama, Thriller",
    anioLanzamiento: 2015,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jCHEJSJ-WLp58-RUMyUgRkhaRFqBRCj5bxvPo9J1Vw&s",
    puntuacion: 8.1,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "La Gran Apuesta",
    categoria: "Biografía, Comedia, Drama",
    anioLanzamiento: 2015,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Kz4l3vyO48_VQixz_xeLDGFA31s7vqqMV2G8_vue8Q&s",
    puntuacion: 7.8,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2016
  {
    nombre: "La La Land",
    categoria: "Comedia, Drama, Musical",
    anioLanzamiento: 2016,
    img: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
    puntuacion: 8.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Deadpool",
    categoria: "Acción, Aventura, Comedia",
    anioLanzamiento: 2016,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1zzPX4tYBMt66em-pJn-E1gaYojFoGRjMASQlWWkPQ&s",
    puntuacion: 8.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "La Llegada",
    categoria: "Drama, Ciencia ficción",
    anioLanzamiento: 2016,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Arrival%2C_Movie_Poster.jpg/220px-Arrival%2C_Movie_Poster.jpg",
    puntuacion: 7.9,
    idioma: "Inglés",
    disponibilidadTransmision: ["Amazon Prime Video"]
  },
  {
    nombre: "Animales Nocturnos",
    categoria: "Drama, Suspenso",
    anioLanzamiento: 2016,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSz0yv_uLNcHvSb6WFXjJljboPaGClweitWejYfAOOQ&s",
    puntuacion: 7.5,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Capitán Fantástico",
    categoria: "Comedia, Drama",
    anioLanzamiento: 2016,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YMksqi9qJPHJKHROiC5lm_Xh4fXs8cu5KKwZQ9nClQ&s",
    puntuacion: 7.9,
    idioma: "Inglés",
    disponibilidadTransmision: ["Amazon Prime Video"]
  },
  {
    nombre: "Zootopia",
    categoria: "Animación, Aventura, Comedia",
    anioLanzamiento: 2016,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3JELkfzuPPllXrhUQEbH2bp7QQ5faUHqSYeHztD33w&s",
    puntuacion: 8.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "La Bruja",
    categoria: "Terror, Misterio",
    anioLanzamiento: 2016,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XOEQxAxZRVeGnSZoE39ONTz6AIdP8TQcfBsUhsYrTw&s",
    puntuacion: 6.9,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2017
  {
    nombre: "Logan",
    categoria: "Acción, Drama, Ciencia ficción",
    anioLanzamiento: 2017,
    img: "https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg",
    puntuacion: 8.1,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "Wonder Woman",
    categoria: "Acción, Aventura, Fantasía",
    anioLanzamiento: 2017,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlanrzfNzc7CKYMKA6GcJ-Sok8iZ_8P6YNrvE8nyWnQ&s",
    puntuacion: 7.4,
    idioma: "Inglés",
    disponibilidadTransmision: ["HBO Max"]
  },
  {
    nombre: "Tres Anuncios por un Crimen",
    categoria: "Crimen, Drama",
    anioLanzamiento: 2017,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7kDxZaBbX609p2cGmRxcTnuGMwfVZiHRonbgf4OiZQ&s",
    puntuacion: 8.2,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  // Año 2018
  {
    nombre: "Pantera Negra",
    categoria: "Acción, Aventura",
    anioLanzamiento: 2018,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4Tk8-BoWTqMxQwH5hfN2qrHNgHNihu9H5-dx9ufMuA&s",
    puntuacion: 7.3,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "Ha nacido una estrella",
    categoria: "Drama, Música, Romance",
    anioLanzamiento: 2018,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHRplU8s3M5sW7UsxsjYCPcEpTnW0iceV9EWbC6tyiw&s",
    puntuacion: 7.7,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Bohemian Rhapsody",
    categoria: "Biografía, Drama, Música",
    anioLanzamiento: 2018,
    img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
    puntuacion: 8.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  // Año 2019
  {
    nombre: "Parásitos",
    categoria: "Drama, Thriller",
    anioLanzamiento: 2019,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4a5_vOd2izbN_TzSvGOOJqg7p50FiPB4XkhS_BqRhQ&s",
    puntuacion: 8.6,
    idioma: "Coreano",
    disponibilidadTransmision: ["Netflix", "Mubi"]
  },
  {
    nombre: "Joker",
    categoria: "Crimen, Drama, Thriller",
    anioLanzamiento: 2019,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLbGuvYHWLAJfkJennliQ9U-K8d09wyFrD5vKdgtHEA&s",
    puntuacion: 8.4,
    idioma: "Inglés",
    disponibilidadTransmision: ["HBO Max"]
  },
  {
    nombre: "1917",
    categoria: "Drama, Guerra",
    anioLanzamiento: 2019,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAPQvILBN0WoFjBRXww1_Bzx19ZPytS0AxKXcav4VSw&s",
    puntuacion: 8.3,
    idioma: "Inglés",
    disponibilidadTransmision: ["Amazon Prime Video"]
  },
  {
    nombre: "Érase una vez en Hollywood",
    categoria: "Comedia, Drama",
    anioLanzamiento: 2019,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99048MHWrApeg6BzlZVzjDYVXYnb3c2e5H6HrzT5y9Q&s",
    puntuacion: 7.6,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2020
  {
    nombre: "Soul",
    categoria: "Animación, Aventura, Comedia",
    anioLanzamiento: 2020,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxewQ4afrr90HmD6JqNLyhZJJtKHuszWYu6lktk8lYg&s",
    puntuacion: 8.1,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "Enola Holmes",
    categoria: "Aventura, Crimen, Drama",
    anioLanzamiento: 2020,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CMhylBhDwp81X1-nTwlJ8B6iPxwAO1WA0nIT50Ru7A&s",
    puntuacion: 6.6,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Mank",
    categoria: "Biografía, Comedia, Drama",
    anioLanzamiento: 2020,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_jWzL4I6lbVJRymFISbDG8kA0kcnzaRLcxQk_TFKbg&s",
    puntuacion: 7.0,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "El Juicio de los 7 de Chicago",
    categoria: "Drama, Historia, Thriller",
    anioLanzamiento: 2020,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcTjPayxYSo7LBFuguEVlCsQXhdRIVOneNDYJh8rr6Q&s",
    puntuacion: 7.8,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  {
    nombre: "Da 5 Bloods",
    categoria: "Aventura, Drama, Guerra",
    anioLanzamiento: 2020,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgOKRAVij4CTBPFMecbQatXR4oqmRY6_bNTwirozxxw&s",
    puntuacion: 6.9,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  },
  // Año 2021
  {
    nombre: "Dune",
    categoria: "Acción, Aventura, Ciencia ficción",
    anioLanzamiento: 2021,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8IrLBHieqf_IK2Moct3jNI4q_I0gAg9_rZ7hmOukvA&s",
    puntuacion: 7.5,
    idioma: "Inglés",
    disponibilidadTransmision: ["HBO Max"]
  },
  {
    nombre: "El Escuadrón Suicida",
    categoria: "Acción, Aventura, Comedia",
    anioLanzamiento: 2021,
    img: "https://pics.filmaffinity.com/the_suicide_squad-629689677-mmed.jpg",
    puntuacion: 7.3,
    idioma: "Inglés",
    disponibilidadTransmision: ["HBO Max"]
  },
  {
    nombre: "Shang-Chi y la Leyenda de los Diez Anillos",
    categoria: "Acción, Aventura, Fantasía",
    anioLanzamiento: 2021,
    img: "https://pics.filmaffinity.com/shang_chi_and_the_legend_of_the_ten_rings-111813706-mmed.jpg",
    puntuacion: 7.4,
    idioma: "Inglés",
    disponibilidadTransmision: ["Disney+"]
  },
  {
    nombre: "El Cielo de Medianoche",
    categoria: "Ciencia ficción, Drama, Fantasía",
    anioLanzamiento: 2021,
    img: "https://pics.filmaffinity.com/the_midnight_sky-931566040-mmed.jpg",
    puntuacion: 5.6,
    idioma: "Inglés",
    disponibilidadTransmision: ["Netflix"]
  }
];
