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
        <Table padding="dense" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Site</TableCell>
              <TableCell align="left">Service</TableCell>
              <TableCell align="right">Monthly Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">Site1</TableCell>
              <TableCell align="left">100 Mbps MPLS</TableCell>
              <TableCell align="right">$7,422.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Site2</TableCell>
              <TableCell align="left">100 Mbps MPLS</TableCell>
              <TableCell align="right">$7,422.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Site3</TableCell>
              <TableCell align="left">100 Mbps MPLS</TableCell>
              <TableCell align="right">$7,422.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Site4</TableCell>
              <TableCell align="left">100 Mbps MPLS</TableCell>
              <TableCell align="right">$7,422.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
