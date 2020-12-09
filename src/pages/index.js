
import React, { useState, useEffect, Fragment } from "react"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  Container,
  Chip,
  Divider,
  Avatar,
  Box,
  Hidden,
} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import { graphql } from "gatsby"
import GitHubIcon from "@material-ui/icons/GitHub"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import YoutubeIcon from "@material-ui/icons/YouTube"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Helmet } from "react-helmet"
import favicon from "../../static/logo.ico"
import Img from "gatsby-image"
import loadergif from "../../static/welcome.gif"
import { SignalWifi1BarLock } from "@material-ui/icons"

{/*https://avatars.githubusercontent.com/username  need to pass username in the url*/}


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    //background:'#ff5c5c',

    backgroundImage: "url(" + "https://webwiznitr.xyz/assets/img/logo.png" + ")",
    backgroundSize: '150px',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "40px",

  },
  cardMedia: {
    width: "100%",
    height: "auto",
    //paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    height: "4.5em"
  },
  chipActions: {
    display: "block",
  },
  chip: {
    margin: "8px 0 3px 8px",
  },
  iconCls: {
    marginLeft: "5px",
    marginRight: "5px"
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0",
    marginLeft:"15px",
  },
  avatar: {
    height: 155,
    width: 155,
  },
  btn: {
    textTransform: "none",
    backgroundColor: "#9317d9",
    color:"white"
  },
  copyRight: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#000000",
  },
  iconSocialMedia: {
    color: "#fff",
    marginLeft: "-10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paddingCls: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingClsxs: {
    padding: 0,
  },
  iconSize: {
    fontSize: "32px",
  },
  logo: {
    borderRadius: "50%",
    marginRight: "14px",
  },
}))
function Footer() {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          component="dl"
          alignItems="center"
          justify="center"
          item
          xs={12}
          md={12}
        >
          <List style={flexContainer}>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.facebook.com/search/top?q=webwiz.nitr"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <FacebookIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Facebook"
                />
              </Hidden>
            </ListItem>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://twitter.com/webwiznitr"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <TwitterIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Twitter"
                />
              </Hidden>
            </ListItem>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.instagram.com/webwiz.nitr/"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <InstagramIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Instagram"
                />
              </Hidden>
            </ListItem>
            
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.linkedin.com/company/webwiz-nitr/"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <LinkedInIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="LinkedIn"
                />
              </Hidden>
            </ListItem>
          </List>
          {/* </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}
function Logo() {
  const classes = useStyles()
  return (
    <img
      className={classes.logo}
      alt="Logo"
      width="50px"
      height="50px"
      src="webwizLogo.jpeg"
    />
  )
}

function Loader() {
  return (
    <Fragment>
      <img
        src={loadergif}
        alt="..."
        style={{ margin: "20%",marginLeft:"45%",marginBottom:"-50%", display: "block",height:"80%" }}
      />
    </Fragment>
  )
}

export default function Home({ data }) {
  const classes = useStyles()

  const edges = data.allContributorsJson.edges
  const avatarImages = data.avatarImages
  const coverImages = data.coverImages
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2500)
  }, [])

  if (!loaded) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Members</title>
        <link rel="canonical" href="https://pledge.codeforcause.org/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome! 
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Every contribution counts. So let's come together to Code for a
              Cause and grow together as a community. One pull request at a
              time.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    component="btn"
                    href="https://webwiznitr.xyz"
                    color="dark"
                    target="_blank" 
                  >
                    Join Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {edges.map((edge, index) => {
              // Getting relevant optimised Avatar image
              const avatarFileName = `${edge.node.image}.jpg`
              const avatar = avatarImages.edges.find(
                edge => edge.node.fixed.originalName === avatarFileName
              )

              // Getting relevant optimised Cover image
              const coverFileName = `${edge.node.image}bg.jpg`
              const cover = coverImages.edges.find(
                edge => edge.node.fluid.originalName === coverFileName
              )

              return (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Cover pic"
                      component={Img}
                      fluid={cover.node.fluid}
                    />
                    <Box mt={-16} display="flex" justifyContent="center">
                      <Avatar
                        alt="Contributor"
                        className={classes.avatar}
                        component={Link}
                      >
                        <Img fixed={avatar.node.fixed}></Img>
                      </Avatar>
                    </Box>
                    {/* <Avatar alt="Remy Sharp" src={edge.node.image} /> */}

                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {`${edge.node.salutation}`}
                      </Typography>
                       
                      <Typography gutterBottom variant="h6" component="h2">
                        {`I am ${edge.node.name}`}
                      </Typography>

                      <Typography>{`I code for ${edge.node.cause}`}</Typography>
        
                    </CardContent>
                    {/*<Divider />*/}
                    <CardActions className={classes.chipActions}>
                      {edge.node.skills.slice(0, 3).map((skill, i) => (
                        <Chip
                          key={i}
                          className={classes.chip}
                          label={skill}
                          
                          color="primary"
                          
                        />
                      ))}
                    </CardActions>
                    <Typography>
                    {edge.node.LocationOnIcon ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.LocationOnIcon}
                            component="a"
                            target="_blank"
                          >
                            <LocationOnIcon></LocationOnIcon>
                          </Link>
                        ) : null}
                    </Typography>
                    {/*<Divider />*/}
                    
                      <Typography className={classes.extraMargin}>{`I'm pursuing ${edge.node.branch}`}</Typography>
                      <Typography className={classes.extraMargin}>{`I'm from ${edge.node.nativeplace}`}</Typography>
                      <Typography className={classes.extraMargin}>
                        {`I code for ${edge.node.cause}`}</Typography>
                      <Typography className={classes.extraMargin}>
                        {`You can reach me at :`}
                      </Typography>

                      <Typography className={classes.extraMargin}>
                        {edge.node.github ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.github}
                            component="a"
                            target="_blank"
                          >
                            <GitHubIcon></GitHubIcon>
                          </Link>
                        ) : null}
                        {edge.node.twitter ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.twitter}
                            component="a"
                            target="_blank"
                          >
                            <TwitterIcon></TwitterIcon>
                          </Link>
                        ) : null}
                        {edge.node.linkedin ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.linkedin}
                            component="a"
                            target="_blank"
                          >
                            <LinkedInIcon></LinkedInIcon>
                          </Link>
                        ) : null}
                      </Typography>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thank you for supporting the community!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
      </footer>
      {/* End footer */}
      <Footer />
    </React.Fragment>
  )
}
export const query = graphql`
  query ContributorsQuery {
    allContributorsJson {
      edges {
        node {
          salutation
          name
          branch
          nativeplace
          cause
          skills
          image
          github
          twitter
          linkedin
          
        }
      }
    }

    avatarImages: allImageSharp {
      edges {
        node {
          fixed(width: 155, height: 155, quality: 100) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }

    coverImages: allImageSharp {
      edges {
        node {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`