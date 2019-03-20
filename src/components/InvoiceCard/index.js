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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  padding: {
    paddingRight: '48px'
  }
});

class InvoiceCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title="Recent Invoices" />
        <Divider />
        <CardContent>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2" inline>
              Invoice #335783
            </Typography>
            <div>
              <Typography variant="subtitle2" inline>
                $275.00
              </Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              Due Soon
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              className={classes.padding}
              gutterBottom
            >
              Due on January 28, 2016
            </Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2" inline>
              Invoice #335783
            </Typography>
            <div>
              <Typography variant="subtitle2" inline>
                $275.00
              </Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              Due Soon
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              className={classes.padding}
              gutterBottom
            >
              Due on January 28, 2016
            </Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2" inline>
              Invoice #335783
            </Typography>
            <div>
              <Typography variant="subtitle2" inline>
                $275.00
              </Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              Due Soon
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              className={classes.padding}
              gutterBottom
            >
              Due on January 28, 2016
            </Typography>
          </div>
          <div className={classes.flexContainer}>
            <Typography variant="subtitle2" inline>
              Invoice #335783
            </Typography>
            <div>
              <Typography variant="subtitle2" inline>
                $275.00
              </Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              gutterBottom
            >
              Due Soon
            </Typography>
            <Typography
              variant="body2"
              color={(classes.color = 'textSecondary')}
              className={classes.padding}
              gutterBottom
            >
              Due on January 28, 2016
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

InvoiceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvoiceCard);
