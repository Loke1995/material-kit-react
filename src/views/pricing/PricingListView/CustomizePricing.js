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
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Divider,
  makeStyles
} from '@material-ui/core';
import MaterialTable from 'material-table';

const data3 = {
  "FXStructurePricingResponse::CustomizeDetails": [
      [ "DeliveryDate", "FwdRateOverride", "VolOverrideRef(Bid,Mid,Ask)", "FwdRate", "Bid/Mid/Ask Vol", "DealType", "OptionType" ],
      [ "14-Apr-21", "", "", 4.137453, "4.754/4.852/4.954", "S Sell", "C Call" ],
      [ "14-Apr-21", "", "", 4.137453, "4.754/4.852/4.954", "B Buy", "P Put" ]
  ],
  "FXStructurePricingResponse::PricingDetails": [
      [ "Status", "Successful on 2021-02-26 10:40:38" ],
      [ "PV", "23,101.74 MYR" ],
      [ "Delta", "(1,588,496.87) USD" ],
      [ "Vega", "1,087.13 MYR" ]
  ],
  "ObjectType": "FXStructurePricingResponse"
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

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  },
  tableContainer: {
    overflowX: 'initial'
  }
}));

const CustomizePricing = ({ className, ...rest }) => {
  const classes = useStyles();
  // columnsTest();
  var dataString = data3.['FXStructurePricingResponse::CustomizeDetails'];
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
  // console.log(arr);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customize Pricing Output" />
      <Divider />
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
            fontWeight: 'bold'
          }
        }}
        icons={tableIcons}
      />

    </Card>
  );
};

CustomizePricing.propTypes = {
  className: PropTypes.string
};

export default CustomizePricing;