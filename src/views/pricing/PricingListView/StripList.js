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
  CardContent,
  Grid,
  CardActions
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { DataGrid } from '@material-ui/data-grid';
import MaterialTable from 'material-table';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const data3 = {
  'FXStructurePricingResponse::DELTA': -1588496.8722428496,
  'FXStructurePricingResponse::DealDetails': [
    [
      'MYFOP_TR1',
      'MYFOP_TR9',
      'USD/MYR',
      'U UP AND OUT',
      'E European',
      'B Buy',
      'C Call',
      '4.211500',
      '4.217159',
      'Continuous',
      '4.226500',
      '4.216500',
      '1 Currency 1',
      '1000000.000000',
      '2 Currency 2',
      '0.000000',
      '05/08/2020',
      '07/08/2020',
      '07/09/2020',
      '09/09/2020',
      'Delivery',
      '5.3317',
      'BID',
      '5.3317/5.3842/5.3317',
      '',
      '00:00:00',
      '',
      'PH',
      'TRG',
      'INTERBANK',
      'Interbank Transaction',
      '407.133334',
      '1.000000'
    ],
    [
      'MYFOP_TR1',
      '03ANSH',
      'USD/MYR',
      'U UP AND OUT',
      'E European',
      'S Sell',
      'C Call',
      '4.211500',
      '4.217159',
      'Continuous',
      '4.226500',
      '4.216500',
      '1 Currency 1',
      '1000000.000000',
      '2 Currency 2',
      '0',
      '05/08/2020',
      '07/08/2020',
      '07/09/2020',
      '09/09/2020',
      'Delivery',
      '5.3317',
      'BID',
      '5.3317/5.3842/5.3317',
      '',
      '00:00:00',
      '',
      'PH',
      'TRG',
      'INTERBANK',
      'Interbank Transaction',
      '407.133334',
      '1.000000'
    ],
    [
      'MYFOP_TR1',
      'MYFOP_TR9',
      'USD/MYR',
      'U UP AND OUT',
      'E European',
      'S Sell',
      'P Put',
      '4.211500',
      '4.217159',
      'Continuous',
      '4.226500',
      '4.216500',
      '1 Currency 1',
      '2000000.000000',
      '2 Currency 2',
      '23101.738340',
      '05/08/2020',
      '07/08/2020',
      '07/09/2020',
      '09/09/2020',
      'Delivery',
      '5.3317',
      'BID',
      '5.3317/5.3842/5.3317',
      '',
      '00:00:00',
      '',
      'PH',
      'TRG',
      'INTERBANK',
      'Interbank Transaction',
      '1588904.005577',
      '1.000000'
    ],
    [
      'MYFOP_TR1',
      '03ANSH',
      'USD/MYR',
      'U UP AND OUT',
      'E European',
      'B Buy',
      'P Put',
      '4.211500',
      '4.217159',
      'Continuous',
      '4.226500',
      '4.216500',
      '1 Currency 1',
      '2000000.000000',
      '2 Currency 2',
      '0',
      '05/08/2020',
      '07/08/2020',
      '07/09/2020',
      '09/09/2020',
      'Delivery',
      '5.3317',
      'BID',
      '5.3317/5.3842/5.3317',
      '',
      '00:00:00',
      '',
      'PH',
      'TRG',
      'INTERBANK',
      'Interbank Transaction',
      '1588904.005577',
      '1.000000'
    ]
  ],
  'FXStructurePricingResponse::Diagnostic': '',
  'FXStructurePricingResponse::Headers': [
    'Folders_ShortName',
    'Cpty_ShortName',
    'Pairs_ShortName',
    'PricingType',
    'ExerciceType',
    'DealType',
    'OptionType',
    'SpotRate',
    'FwdRate',
    'BarrierOvservation',
    'Barrier',
    'Strike',
    'NotionalCcy',
    'NotionalAmount1',
    'PremiumPayment',
    'PremiumAmount2',
    'TradeDate',
    'ValueDate',
    'MaturityDate',
    'DeliveryDate',
    'SettlementMode',
    'Volat',
    'VolType',
    'Bid/Mid/Ask Vol',
    'Comments',
    'Time',
    'Cities_ShortName',
    'Brokers_ShortName',
    'BDBranchShortName',
    'DGroupName',
    'DSubGrpDesc',
    'DeltaOpt',
    'USDExchRate'
  ],
  'FXStructurePricingResponse::PV': 23101.7383395223,
  'FXStructurePricingResponse::PricingDetails': [
    ['Status', 'Successful on 2021-02-26 10:40:38'],
    ['PV', '23,101.74 MYR'],
    ['Delta', '(1,588,496.87) USD'],
    ['Vega', '1,087.13 MYR']
  ],
  'FXStructurePricingResponse::Results': {
    ObjectType: 'PricingResult',
    'PricingResult::Children': [
      [
        '0',
        {
          ObjectType: 'PricingResult',
          'PricingResult::ResultInfo': [
            ['VolRule', 'BID'],
            ['DigitalCharge', '300.000000']
          ],
          'PricingResult::Results': [
            ['PV', -306.2993561856789],
            ['Applied Vol', 0.05331736097971228],
            ['Applied Rate', 0.000006310867611920498],
            ['QUICKVEGA', 3.925044411999679],
            ['QUICKDELTA', 407.1333342651373]
          ]
        }
      ],
      [
        '1',
        {
          ObjectType: 'PricingResult',
          'PricingResult::ResultInfo': [['VolRule', 'BID']],
          'PricingResult::Results': [
            ['PV', 23408.03769570798],
            ['Applied Vol', 0.05331736097971228],
            ['Applied Rate', 0.011725406739830753],
            ['QUICKVEGA', 1083.2007758072123],
            ['QUICKDELTA', -1588904.0055771146]
          ]
        }
      ]
    ],
    'PricingResult::ResultInfo': [['SwapRule', 'ASK']],
    'PricingResult::Results': [
      ['PV', 23101.7383395223],
      ['Applied Vol', 0.10663472195942456],
      ['Applied Rate', 0.011731717607442673],
      ['QUICKVEGA', 1087.1258202192118],
      ['QUICKDELTA', -1588496.8722428496]
    ]
  },
  'FXStructurePricingResponse::Status': '',
  'FXStructurePricingResponse::VEGA': 1087.1258202192118,
  ObjectType: 'FXStructurePricingResponse'
};

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

// const columnsTest = data3.['FXStructurePricingResponse::Headers'].

const columnsTest = () => {
  var dataString = data3.['FXStructurePricingResponse::Headers'];
  var arr = [];
  Object.keys(dataString).forEach(function (key) {
    // var abc = 
    // var abc = {'title':dataString[key], 'field':key};
    arr.push({'title':dataString[key], 'field':'fefe' & key});
    // console.log(abc);
  });
  console.log(arr);

  // arr.map((key, index) => {

  // })
  return arr;
};

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

const stripList = {
  "FXStructurePricingRequest::BuildDate": 44050,
  "FXStructurePricingRequest::InputRange": [
      [ "Pricing Model", "Upper Strike", "Middle Strike", "Lower Strike", "Notional", "Leverage Factor", "Expiry Date", "Delivery Date" ],
      [ "Black-Scholes", 4.280749999999999, 4.2757499999999995, 4.26575, 10000, 1.2, "03-Aug-20", "05-Aug-20" ],
      [ "Black-Scholes", 4.280749999999999, 4.2757499999999995, 4.26575, 10000, 1.2, "01-Sep-20", "03-Sep-20" ],
  ],
  "FXStructurePricingRequest::InputRangeCommon": [
      [ "Sales Folder Name", "MYFOP_TR1" ],
      [ "Trading Folder Name", "MYFOP_TR9" ],
      [ "Customer Name", "03ANSH" ],
      [ "Base Ccy", "USD" ],
      [ "Profit Currency", "Term" ],
      [ "Term Ccy", "MYR" ],
      [ "Client to Sell or Buy Base Ccy", "Buy" ],
      [ "Sales BDBranchShortName", "TRG" ],
      [ "Sales DGroupName", "INTERBANK" ],
      [ "Sales DSubGrpDesc", "Interbank Transaction" ],
      [ "Sales Comments", null ],
      [ "Trading BDBranchShortName", "TRG" ],
      [ "Trading DGroupName", "INTERBANK" ],
      [ "Trading DSubGrpDesc", "Interbank Transaction" ],
      [ "Trading Comments", null ],
      [ "FxSpot", 4.2115 ],
      [ "Value Date", 44050 ],
      [ "BaseCcyUSDRate", 1 ],
      [ "USDMYROpenRate", 1 ]
  ],
  "FXStructurePricingRequest::OutputRange": [
      [ "Status", null ],
      [ "PV", null ],
      [ "Delta", null ],
      [ "Vega", null ]
  ],
  "FXStructurePricingRequest::OverrideAbsoluteVol": [],
  "FXStructurePricingRequest::OverrideFwdRates": [],
  "FXStructurePricingRequest::OverridePts": [],
  "FXStructurePricingRequest::OverrideVol": [],
  "FXStructurePricingRequest::StructureName": "Anytime KO Fwd",
  "GenericMapPricingOption::OptionMap": [],
  "ObjectType": "FXStructurePricingRequest"
};

const StipeList = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);
  // columnsTest();
  var dataString = stripList.['FXStructurePricingRequest::InputRange'];
  // var pvData = data3.['FXStructurePricingResponse::PricingDetails'];
  // test(pvData);
  // this.props.methodPVData(pvData);
  const arr = [];
  const arrRow = [];
  Object.keys(dataString).forEach(function (key, index) {
    
    if (index === 0) {
      dataString[key].forEach(function(key2, index) {
        arr.push({'title':key2, 'field':index});
      })
    } else {
      var test = {};
      dataString[key].forEach(function(key2, index) {
        test[index]=key2;
      })
      arrRow.push(test);
    }
  });

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
      title={<h4 style={{ display:'inline-flex', alignItems: 'center',
      height: '2.5rem' }}><AddCircleOutlineIcon style={{ paddingRight: '5px' }}/> Strip List</h4>} style={{backgroundColor: 'gray', color: 'white'}}/>
      <Divider />
      {/* <CardContent>
</CardContent> */}

      <MaterialTable
        title=""
        columns={arr}
        data={arrRow}
        options={{
          sorting: true,
          rowStyle: {
            whiteSpace: 'nowrap',
            textAlign: 'left',
            flexDirection: 'row',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingLeft: 5,
            paddingRight: 5,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: '400',
            fontSize: '12px'
          }
        }}
        icons={tableIcons}
      />

      <CardActions>
        <Button size="small" color="primary" onClick={() => alert("Add")}>
          <AddCircleOutlineIcon/>
        </Button>
        <Button size="small" color="secondary" onClick={() => alert("Delete")}>
          <DeleteIcon/>
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            alert('Save');
          }}
        >
          Save
        </Button>
      </CardActions>


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

StipeList.propTypes = {
  className: PropTypes.string
};

export default StipeList;
