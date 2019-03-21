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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  padding: {
    paddingRight: '48px'
  }
});

function InvoiceCard(props) {
  const { classes } = props;

  return (
    <Query
      query={gql`
        {
          invoices {
            id
            paid
            paid_date
            amount
            due_date
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Card className={classes.card}>
            <CardHeader title="Recent Invoices" />
            <Divider />
            {data.invoices.map(invoice => (
              <CardContent key={invoice.id}>
                <div className={classes.flexContainer}>
                  <Typography variant="subtitle2" inline>
                    Invoice {invoice.id}
                  </Typography>
                  <div>
                    <Typography variant="subtitle2" inline>
                      ${invoice.amount}
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
            ))}
          </Card>
        );
      }}
    </Query>
  );
}

InvoiceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvoiceCard);
