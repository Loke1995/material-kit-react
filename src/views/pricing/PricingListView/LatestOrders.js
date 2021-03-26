import React, { useState, forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles,
  Paper,
  TablePagination
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { DataGrid } from '@material-ui/data-grid';
import MaterialTable from 'material-table';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const data = [
  {
    tid: 'Txc0001',
    name: 'Peter',
    type: 'Collar',
    currency: 'USD',
    amount: 567.0,
    date: '13 March 2021',
    status: 'Pending'
  },
  {
    tid: 'Txc0002',
    name: 'David',
    type: 'Seagull',
    currency: 'SGD',
    amount: 1130.0,
    date: '22 March 2021',
    status: 'Expired'
  },
  {
    tid: 'Txc0003',
    name: 'Beckham',
    type: 'Vanilla',
    currency: 'GBP',
    amount: 1788888.0,
    date: '23 March 2021',
    status: 'Success'
  },
  {
    tid: 'Txc0004',
    name: 'Peter1',
    type: 'Collar',
    currency: 'CHF',
    amount: 1888.0,
    date: '13 March 2021',
    status: 'Pending'
  },
  {
    tid: 'Txc0005',
    name: 'Chuck',
    type: 'Seagull',
    currency: 'TWD',
    amount: 199888.0,
    date: '22 March 2021',
    status: 'Expired'
  },
  {
    tid: 'Txc0006',
    name: 'Beckham1',
    type: 'Vanilla',
    currency: 'GBP',
    amount: 2888.0,
    date: '23 March 2021',
    status: 'Success'
  },
  {
    tid: 'Txc0007',
    name: 'Peter2',
    type: 'Collar',
    currency: 'USD',
    amount: 980.0,
    date: '21 March 2021',
    status: 'Pending'
  },
  {
    tid: 'Txc0008',
    name: 'David2',
    type: 'Dollar',
    currency: 'CAD',
    amount: 199888.0,
    date: '22 March 2021',
    status: 'Expired'
  },
  {
    tid: 'Txc0009',
    name: 'Beckham2',
    type: 'Vanilla',
    currency: 'GBP',
    amount: 388.0,
    date: '23 March 2021',
    status: 'Success'
  },
  {
    tid: 'Txc0010',
    name: 'Peter3',
    type: 'Collar',
    currency: 'USD',
    amount: 36600.0,
    date: '13 March 2021',
    status: 'Pending'
  },
  {
    tid: 'Txc0011',
    name: 'David2',
    type: 'Seagull',
    currency: 'SGD',
    amount: 1000000.0,
    date: '22 March 2021',
    status: 'Expired'
  },
  {
    tid: 'Txc0012',
    name: 'Beckham2',
    type: 'Vanilla',
    currency: 'GBP',
    amount: 586960.0,
    date: '23 March 2021',
    status: 'Success'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  },
  tableContainer: {
    overflowX: 'initial'
  }
}));

const columns = [
  {
    title: 'ID',
    field: 'tid',
    customSort: (a, b) => a.tid.length - b.tid.length
  },
  { title: 'Name', field: 'name' },
  { title: 'Type', field: 'type' },

  { title: 'Currency', field: 'currency' },
  { title: 'Amount', field: 'amount' },
  { title: 'Date', field: 'date' },
  { title: 'Status', field: 'status' }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Trade Listing" />
      <Divider />

      <div style={{ backgroundColor: 'red' }}>
        <MaterialTable
          title="Table Preview"
          columns={columns}
          data={data}
          options={{
            sorting: true,
            rowStyle: {
              fontFamily: 'Roboto',
              whiteSpace: 'nowrap',
              textAlign: 'left',
              flexDirection: 'row',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              paddingLeft: 5,
              paddingRight: 5,
              fontWeight: 'bold',
              backgroundColor: '#EEE'
            }
          }}
          icons={tableIcons}
        />
      </div>

      {/* <DataGrid rows={rows} columns={columns} pageSize={5} /> */}

      {/* <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((order) => (
                <TableRow hover key={order.tid}>
                  <TableCell></TableCell>
                  <TableCell>{order.tid}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.type}</TableCell>
                  <TableCell>{order.currency}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    {moment(order.date).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label={order.status}
                      size="small"
                      style={{
                        backgroundColor:
                          order.status === 'Success'
                            ? 'lightGreen'
                            : order.status === 'Pending'
                            ? ''
                            : 'Red'
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar> */}
      {/* <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );

  // return (
  //   <div style={{ height: 'auto', width: 'auto' }}>
  //     <DataGrid rows={rows} columns={columns} pageSize={5} />
  //   </div>
  // );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
