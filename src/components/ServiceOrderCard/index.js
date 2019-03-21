import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardContent } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

function ServiceOrderCard(props) {
  const { classes } = props;

  return (
    <Query
      query={gql`
        {
          order {
            id
            non_recurring_cost
            non_recurring_cost_description
            recurring_cost
            recurring_cost_description
            term_length
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

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
              title={`Service Order #${data.order.id}`}
            />
            <Divider />
            <CardContent>
              <div className={classes.flexContainer}>
                <Typography variant="subtitle2">November 24, 2015</Typography>
                <Typography variant="subtitle2">$270</Typography>
              </div>
              <div className={classes.flexContainer}>
                <Typography
                  variant="body2"
                  color={(classes.color = 'textSecondary')}
                  gutterBottom
                >
                  {data.order.term_length}-year Term
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
                  {data.order.non_recurring_cost_description}
                </Typography>
                <Typography
                  variant="body2"
                  color={(classes.color = 'textSecondary')}
                  gutterBottom
                >
                  {data.order.non_recurring_cost}
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
                  {data.order.recurring_cost_description}
                </Typography>
                <Typography
                  variant="body2"
                  color={(classes.color = 'textSecondary')}
                  gutterBottom
                >
                  {data.order.recurring_cost}
                </Typography>
              </div>
            </CardContent>
          </Card>
        );
      }}
    </Query>
  );
}

ServiceOrderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServiceOrderCard);
