import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: '400px'
  },
  actions: {
    display: 'flex',
    flex: 1
  },
  expiringLabel: {
    color: red[900],
    background: red[100],
    padding: '2px 4px',
    borderRadius: '3px'
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  }
});

class InfoCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <div className={classes.labelContainer}>
              <Typography variant="subtitle2" className={classes.expiringLabel}>
                EXPIRING
              </Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          }
          title="Contract #HB-134"
        />
      </Card>
    );
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
