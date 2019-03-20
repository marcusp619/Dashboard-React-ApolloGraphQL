import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ContractCard from '../ContractCard';
import ServiceOrderCard from '../ServiceOrderCard';
import InvoiceCard from '../InvoiceCard';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  overviewContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  overiewItem: {
    textAlign: 'center',
    flexGrow: 1
  }
});

function AsideNav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[
            'HOME',
            'TICKETING',
            'MONITORING',
            'REPORTING',
            'CONTRACTS & BILLING'
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.overviewContainer}>
              <Grid item className={classes.overiewItem}>
                <Typography variant="h5">3</Typography>
                <Typography
                  variant="subtitle1"
                  color={(classes.color = 'textSecondary')}
                >
                  Contracts
                </Typography>
              </Grid>
              <Grid item className={classes.overiewItem}>
                <Typography variant="h5">18</Typography>
                <Typography
                  variant="subtitle1"
                  color={(classes.color = 'textSecondary')}
                >
                  Sites
                </Typography>
              </Grid>
              <Grid item className={classes.overiewItem}>
                <Typography variant="h5">$52,745</Typography>
                <Typography
                  variant="subtitle1"
                  color={(classes.color = 'textSecondary')}
                >
                  Billed Per Month
                </Typography>
              </Grid>
              <Grid item className={classes.overiewItem}>
                <Typography variant="h5">Robert Taylor</Typography>
                <Typography
                  variant="subtitle1"
                  color={(classes.color = 'textSecondary')}
                >
                  GCI Sales Contact
                </Typography>
              </Grid>
            </div>
            <Divider />
          </Grid>
          <Grid item lg xs md>
            <ContractCard />
            <ServiceOrderCard />
          </Grid>
          <Grid item lg xs md>
            <InvoiceCard />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

AsideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsideNav);
