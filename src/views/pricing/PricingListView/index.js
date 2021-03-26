import React, { useState } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
import Page from '/src/components/Page';
import Template from './Template';
import TemplateList from './TemplateList';
import FXSpot from './FXSpotList';
import PropTypes from 'prop-types';

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
    this.state = {
      templateName: '',
      templateType: ''
    };
  }
  //here 'data' represents the data recieved from the child when this method gets called inside the child
  parentmethod(name, type) {
    this.setState({
      templateName: name,
      templateType: type
    });
  }

  render() {
    return (
      <Page title="Customers">
        <Container maxWidth={false}>
          {/* <Grid container spacing={2}>
        <Grid item lg={6} sm={6} xl={6} xs={12}>
          <BucketList />
        </Grid>
        <Grid item lg={6} sm={6} xl={6} xs={12}>
        </Grid>
      </Grid> */}

          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              {/* {this.state.templateListLoadID === '1' ? ( */}
              <Template
                templateName={this.state.templateName}
                templateType={this.state.templateType}
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

          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              {/* <CreateDetails /> */}
              <FXSpot />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              {/* <FXSpot /> */}
            </Grid>
          </Grid>

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
