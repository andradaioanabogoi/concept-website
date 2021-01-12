import React from "react";

import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import BlogCard from "./BlogCard";
import useStyles from "./BlogStyles";
import logo from "./56.jpg";
import image1 from "./33.jpg";
import image2 from "./8.jpg";

const blogData = [
  {
    title: "",
    text: "HELLO",
    image: image1,
    to: "/blog/blog1",
  },
  {
    title: "",
    text: "HELLO",
    image: image2,
    to: "/blog/blog2",
  },
  {
    title: "",
    text: "HELLO",
    image: image1,
    to: "/blog/blog1",
  },
  {
    title: "",
    text: "HELLO",
    image: image2,
    to: "/blog/blog2",
  },
];
const Blog = () => {
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
        {blogData.map((blogPost) => {
          return <BlogCard blogPost={blogPost} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Blog;
