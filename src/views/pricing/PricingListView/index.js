import React, { useState } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
import Page from '../../../components/Page';
import Template from './Template';
import TemplateList from './TemplateList';
import FXSpot from './FXSpotList';

import StripList from './StripList';
import DealDetails from './PricingList';
import PropTypes from 'prop-types';
import CustomizePricing from './CustomizePricing';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   }
// }));

class PricingListView extends React.Component {
  constructor(props) {
    super(props);
    this.parentmethod = this.parentmethod.bind(this);
    this.pricingCall = this.pricingCall.bind(this);
    this.moreOptionStrip = this.moreOptionStrip.bind(this);
    this.createTemplateMethod = this.createTemplateMethod.bind(this);
    this.pvDataMethod = this.pvDataMethod.bind(this);
    this.customizeMethod = this.customizeMethod.bind(this);
    this.state = {
      templateName: '',
      templateType: '',
      pricingShow: false,
      pvData: '',
      moreOptionStrip: false,
      createTemplate: false,
      customizeTemplate: false
    };
  }
  //here 'data' represents the data recieved from the child when this method gets called inside the child
  parentmethod(name, type) {
    this.setState({
      templateName: name,
      templateType: type
    });
  }

  pricingCall(show) {
    this.setState({
      pricingShow: show
    });
  }

  pvDataMethod(data) {
    this.setState({
      pvData: data
    });
  }

  moreOptionStrip(show) {
    this.setState({
      moreOptionStrip: show
    });
  }

  createTemplateMethod(data) {
    this.setState({
      createTemplate: data
    });
  }

  customizeMethod(data) {
    this.setState({
      customizeTemplate: data
    });
  }

  render() {
    return (
      <Page title="Pricing">
        <Container maxWidth={false}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <br />
          </Grid>
          {/* <Grid container spacing={2}>
        <Grid item lg={6} sm={6} xl={6} xs={12}>
          <BucketList />
        </Grid>
        <Grid item lg={6} sm={6} xl={6} xs={12}>
        </Grid>
      </Grid> */}
          {/* <h1>{this.state.templateType}</h1> */}
          <Grid container spacing={3}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              {/* {this.state.templateListLoadID === '1' ? ( */}
              <Template
                templateName={this.state.templateName}
                templateType={this.state.templateType}
                pvData={this.state.pvData}
                methodShowPricing={this.pricingCall}
                methodMoreOptionStrip={this.moreOptionStrip}
                methodCreateTemplate={this.createTemplateMethod}
                methodCustomizeTemplate={this.customizeMethod}
                // templateData={
                //   (this.state.templateName, this.state.templateType)
                // }
              />
              {/* ) : (
                <h1>{this.state.templateListLoadID}</h1>
              )} */}
              {/* <Template /> */}
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <TemplateList methodfromparent={this.parentmethod} />
            </Grid>
          </Grid>

          {/* <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <FXSpot />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
            </Grid>
          </Grid> */}

          {this.state.customizeTemplate ? (
            <Grid container spacing={2}>
              <Grid item lg={12} sm={12} xl={12} xs={12}>
                <CustomizePricing />
              </Grid>
            </Grid>
          ) : null}

          {this.state.moreOptionStrip && this.state.createTemplate ? (
            <Grid container spacing={2}>
              <Grid item lg={12} sm={12} xl={12} xs={12}>
                <StripList />
              </Grid>
            </Grid>
          ) : null}

          {this.state.pricingShow ? (
            <Grid container spacing={2}>
              <Grid item lg={12} sm={12} xl={12} xs={12}>
                <DealDetails />
              </Grid>
            </Grid>
          ) : null}

          {/* <Grid container spacing={2}>
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid> */}

          {/* <Toolbar />
      <Box mt={3}>
        <Results customers={customers} />
      </Box> */}
        </Container>
      </Page>
    );
  }
}

// const PricingListView2 = () => {
//   const classes = useStyles();
//   const [customers] = useState(data);

//   return (
//   );
// };

export default PricingListView;
