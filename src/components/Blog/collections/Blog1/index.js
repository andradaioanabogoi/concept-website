import React from "react";

import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import useStyles from "./Blog1Styles";
import logo from "../../56.jpg";
import { Typography } from "@material-ui/core";

const Blog1 = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.heroContent}>
        <Image src={logo} cover="true" aspectRatio="1/2" />
      </Grid>
      <Grid
        container
        spacing={36}
        style={{ minHeight: "30vh" }}
        justify="center"
        className={classes.container}
      >
        <Grid
          container
          spacing={4}
          justify={"center"}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant="h3" gutterBottom>
              Holidays in the Alps
            </Typography>
            <Grid className={classes.gridContainer}>
              <Typography variant="h6" gutterBottom>
                Residential real estate may contain either a single family or
                multifamily structure that is available for occupation or for
                non-business purposes.[3] Residences can be classified by and
                how they are connected to neighbouring residences and land.
                Different types of housing tenure can be used for the same
                physical type. For example, connected residences might be owned
                by a single entity and leased out, or owned separately with an
                agreement covering the relationship between units and common
                areas and concerns.[4] Single-family detached house in Essex,
                Connecticut, United States A photograph of Townhouses in
                Victoria, Australia Major categories Attached / multi-unit
                dwellings Apartment (American English) or Flat (British English)
                – An individual unit in a multi-unit building. The boundaries of
                the apartment are generally defined by a perimeter of locked or
                lockable doors. Often seen in multi-story apartment buildings.
                Multi-family house – Often seen in multi-story detached
                buildings, where each floor is a separate apartment or unit.
                Terraced house (a. k. a. townhouse or rowhouse) – A number of
                single or multi-unit buildings in a continuous row with shared
                walls and no intervening space. Condominium (American English) –
                A building or complex, similar to apartments, owned by
                individuals. Common grounds and common areas within the complex
                are owned and shared jointly. In North America, there are
                townhouse or rowhouse style condominiums as well. The British
                equivalent is a block of flats. Cooperative (a. k. a. co-op) – A
                type of multiple ownership in which the residents of a
                multi-unit housing complex own shares in the cooperative
                corporation that owns the property, giving each resident the
                right to occupy a specific apartment or unit. Semi-detached
                dwellings Duplex – Two units with one shared wall. Detached
                dwellings Detached house or single-family detached house
                Portable dwellings Mobile homes or residential caravans – A
                full-time residence that can be (although might not in practice
                be) movable on wheels.
              </Typography>
              <Typography variant="h6" gutterBottom>
                A floating home Tents – Usually temporary, with roof and walls
                consisting only of fabric-like material. The size of an
                apartment or house can be described in square feet or meters. In
                the United States, this includes the area of "living space",
                excluding the garage and other non-living spaces. The "square
                meters" figure of a house in Europe may report the total area of
                the walls enclosing the home, thus including any attached garage
                and non-living spaces, which makes it important to inquire what
                kind of surface area definition has been used. It can be
                described more roughly by the number of rooms. A studio
                apartment has a single bedroom with no living room (possibly a
                separate kitchen). A one-bedroom apartment has a living or
                dining room separate from the bedroom. Two bedroom, three
                bedroom, and larger units are common. (A bedroom is a separate
                room intended for sleeping. It commonly contains a bed and, in
                newer dwelling units, a built-in closet for clothes storage.)
                Other categories Chawls Villas Havelis The size of these is
                measured in Gaz (square yards), Quila, Marla, Beegha, and acre.
                See List of house types for a complete listing of housing types
                and layouts, real estate trends for shifts in the market, and
                house or home for more general information. See also
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Blog1;
