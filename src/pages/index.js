import React from "react"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { purple } from '@material-ui/core/colors';
import {
  AppBar,
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
  Hidden
} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import { graphql } from "gatsby"
import GitHubIcon from "@material-ui/icons/GitHub"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Language';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px"
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(6)
  },
  chipActions: {
    display: "block"
  },
  chip: {
    margin: "8px 0 3px 8px"
  },
  iconCls: {
    marginLeft: "10px"
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0"
  },
  avatar: {
    height: 155,
    width: 155
  },
  salutation: {
    color: purple[500]
  },
  btn: {
    textTransform: "none"
  },
  copyRight : {
    backgroundColor: theme.palette.secondary.main
  },
  root: {
    backgroundColor: "#06101B",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#FFF",
  },
  iconSocialMedia: {
    color: "#fff",
    marginLeft:"-20px"
  },
  iconSize: {
    fontSize: "32px",
  },
  team: {
    backgroundColor:"#9c27b0", 
    display:"inline",
    padding:"0.2em",
    paddingLeft:"1em",
    paddingRight:"1em",
    color:"#fffff0",
    textTransform:"uppercase",
    borderRadius:"2em",
    fontSize:"1em",
    fontFamily:"courier",
  }
}))
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);
function Footer() {
  const classes = useStyles()
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container component="dl"
            alignItems="center"
            justify="center"
            item
            xs={12}
            md={12}
            >          
            <List style={flexContainer}>
            <ListItem component="a" href="https://webwiznitr.xyz">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <WebIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                />
                </Hidden>
              </ListItem>
              <ListItem component="a" href="https://github.com/webwiznitr" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <GitHubIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                />
                </Hidden>
              </ListItem>
              <ListItem component="a" href="https://www.instagram.com/webwiz.nitr/" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <InstagramIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                />
                </Hidden>
              </ListItem>
              <ListItem component="a" href="https://twitter.com/webwiznitr" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <TwitterIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                />
                </Hidden>
              </ListItem>
              <ListItem component="a" href="https://www.linkedin.com/company/webwiz-nitr/" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <LinkedInIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
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

export default function Home({ data }) {
  const classes = useStyles()
  
  const edges = data.allContributorsJson.edges

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ background: '#06101B' }} >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Web Wiz
          </Typography>
        </Toolbar>
      </AppBar>
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
              Community Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              If your ship doesn’t come in, swim out to meet it.
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
            >
              – Jonathan Winters
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <ColorButton
                  variant="contained"
                  color="primary"
                  component="a"
                  href="https://github.com/Webwiznitr/Project-Jade-2"
                  target="_blank"
                  className={classes.btn}
                  >
                    Join The Team
                  </ColorButton>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {edges.map((edge, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={edge.node.backgroundImg}
                    title="Image title"
                    height="240"
                  />
                  <Box mt={-16} display="flex" justifyContent="center">
                    <Avatar
                      alt="Contributor"
                      className={classes.avatar}
                      src={edge.node.image}
                      component={Link}
                    />
                  </Box>

                  <CardContent className={classes.cardContent}>
                  <Typography className={classes.salutation} variant="subtitle2">
                      {`${edge.node.salutation}`}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {`I am ${edge.node.name}`}
                    </Typography>
                    <Typography className={classes.team}>
                      {`${edge.node.team}`}
                    </Typography>
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
                  </CardContent>
                  <Divider />
                  <CardActions className={classes.chipActions}>
                    {edge.node.skills.slice(0, 4).map((skill, i) => (
                      <Chip
                        key={i}
                        className={classes.chip}
                        label={skill}
                        variant="outlined"
                        color="primary"
                        avatar={<Avatar>{skill[0].toUpperCase()}</Avatar>}
                      />
                    ))}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        Welcome to Web Wiz's Community!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
        </Typography>        
      </footer>
      {/* End footer */}
      <Footer/>
     
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
          team
          skills
          backgroundImg
          image
          github
          twitter
          linkedin
        }
      }
    }
  }
`
