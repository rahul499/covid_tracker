import React from 'react';
import { fetchIndianData, fetchStateData } from '../../api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CountUp from 'react-countup';
import styles from './Indian.module.css';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(
  state: string,
  confirmed: number,
  active: number,
  recovered: number,
  deaths: number,

) {
  return {
    state,
    confirmed,
    recovered,
       active,
    deaths,
  };
}



function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
       
        <TableCell align="center" component="th" scope="row">
          {row.state}
        </TableCell>
        <TableCell align="center">
          <CountUp start={0} end={row.confirmed} duration={2.5} separator="," />
        </TableCell>
        <TableCell align="center">
            <CountUp start={0} end={row.active} duration={2.5} separator="," />
        </TableCell>
        <TableCell align="center">
             <CountUp start={0} end={row.recovered} duration={2.5} separator="," />
        </TableCell>
        <TableCell align="center">
              <CountUp start={0} end={row.deaths} duration={2.5} separator="," />
        </TableCell>

          <TableCell>
          
        </TableCell>

      </TableRow>
    </React.Fragment>
  );
}






class IndianTable extends React.Component{

 state = {
  indianData: []
}

async componentDidMount() {

const fetchedIndianData = await fetchIndianData();


this.setState({ 
  indianData: fetchedIndianData.data
 });
 console.log(this.state.indianData);

}

  render(){
   const customColumnStyle = { width: 350};
   const customColumnStyle1 = { width: 150};
  
    return(
        
        <TableContainer component={Paper} className="styles.customTableStyle" >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
         
            <TableCell align="center" style={customColumnStyle} >STATE/UT</TableCell>
            <TableCell  align="center">INFECTED</TableCell>
            <TableCell  align="center">ACTIVE</TableCell>
            <TableCell   align="center">RECOVERED</TableCell>
            <TableCell  align="center" style={customColumnStyle1} >DEATHS</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
      <TableBody>
          {this.state.indianData.map((row) => (
            <Row key={row.state} row={row} />
          ))}
        </TableBody>
        </Table>
    </TableContainer>

    
      );
  }
}

export default IndianTable;
