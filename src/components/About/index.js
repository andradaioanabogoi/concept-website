import React from "react";

import Grid from "@material-ui/core/Grid";
import useStyles from "./AboutStyles";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import CoupleCards from "./CoupleCards";

const cards = [
  {
    title: "1",
    text: `The Dacian people, one of the major indigenous peoples of southeast Europe are one of the predecessors of the Proto-Romanians. It is believed that a mixture of Dacians, Romans, Slavs, and Illyrians are the predecessors of the modern Romanians, Aromanians, Megleno-Romanians, and Istro-Romanians. Modern Romanian culture visibly reflects a tremendous amount of Eastern European influences. In addition, Romanian culture shares several similarities with other ancient cultures such as that of the Armenians.[2]`,
    image: image1,
  },
  {
    title: "2",
    text:
      "The first printed book, a prayer book in Slavonic, was produced in Wallachia in 1508 and the first book in Romanian, a catechism, was printed in Transylvania, in 1544.",
    image: image2,
  },
  {
    title: "3",
    text:
      "Dimitrie Cantemir, a Moldavian prince, was an important personality of the medieval period in Moldavia. His interests included philosophy, history, music, linguistics, ethnography and geography, and the most important works containing information about the Romanian regions were Descriptio Moldaviae published in 1769.",
    image: image3,
  },
  {
    title: "4",
    text:
      "Romania's history has been full of rebounds: the culturally productive epochs were those of stability, when the people proved quite an impressive resourcefulness in making up for less propitious periods and were able to rejoin the mainstream of European culture. This stands true for the years after the Phanariote-Ottoman period, at the beginning of the 19th century, when Romanians had a favourable historical context and Romania started to become westernized, mainly with French influences, which they pursued steadily and at a very fast pace. From the end of the 18th century, the sons of the upper classes started having their education in Paris, and French became (and was until the communist years) a genuine second language of culture for Romanians.",
    image: image4,
  },
];

const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={24}
      style={{ minHeight: "100vh" }}
      justify="center"
      className={classes.container}
    >
      <Grid item xs={6}>
        {cards.map((card) => {
          return <CoupleCards card={card} />;
        })}
      </Grid>
    </Grid>
  );
};

export default About;
