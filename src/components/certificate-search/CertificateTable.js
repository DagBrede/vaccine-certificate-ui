import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CertificateTable({ certificates }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Dose</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {certificates.map((certificate, index) => (
            
            <TableRow key={index}>
              <TableCell align="left">{certificate.firstName}</TableCell>
              <TableCell align="right">{certificate.lastName}</TableCell>
              <TableCell align="right">{certificate.nationalIdentityNumber}</TableCell>
              <TableCell align="right">{certificate.vaccinations.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
