import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import red from '@material-ui/core/colors/red';
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
  },
  table: {}
});

function ContractCard(props) {
  const { classes } = props;

  return (
    <Query
      query={gql`
        {
          contract {
            term_length
            id
            service
            term_length
            sites {
              id
              name
              monthly_cost
            }
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
                  <Typography
                    variant="subtitle2"
                    className={classes.expiringLabel}
                  >
                    EXPIRING
                  </Typography>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </div>
              }
              title={`Contract #${data.contract.id}`}
            />
            <Divider />
            <Table padding="dense" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Site</TableCell>
                  <TableCell align="left">Service</TableCell>
                  <TableCell align="right">Monthly Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.contract.sites.map(site => (
                  <TableRow key={site.id}>
                    <TableCell align="left">{site.name}</TableCell>
                    <TableCell align="left">100 Mbps MPLS</TableCell>
                    <TableCell align="right">{site.monthly_cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        );
      }}
    </Query>
  );
}

ContractCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContractCard);
