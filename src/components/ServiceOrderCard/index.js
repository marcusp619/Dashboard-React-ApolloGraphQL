import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardContent } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    maxWidth: '100%',
    marginBottom: '30px'
  },
  actions: {
    display: 'flex',
    flex: 1
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

class ServiceOrderCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <div className={classes.labelContainer}>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          }
          title="Service Order #WT-239"
        />
        <Divider />
        <CardContent>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2">November 24, 2015</Typography>
            <Typography variant="subtitle2">$275.00 monthly</Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              3-year Term
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              2 services
            </Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2">Non-Recurring Cost</Typography>
            <Typography variant="subtitle2">Price</Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              Configuration and Testing of Equipment
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              $3.485.00
            </Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2">Recurring Cost</Typography>
            <Typography variant="subtitle2">Monthly Price</Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              Remote Site VPN
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              $275.00
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

ServiceOrderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServiceOrderCard);
