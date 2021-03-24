import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { Bar, Line, HorizontalBar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Typography,
  Grid
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = (theme) => ({
  root: {}
});

class CurrencyPair extends React.Component {
  constructor(props) {
    super(props);
    const { theme } = this.props;
    this.state = {
      // this.state.options.scales.yAxes[0].ticks.suggestedMin
      options: {
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              barThickness: 12,
              maxBarThickness: 10,
              barPercentage: 0.5,
              categoryPercentage: 0.5,
              ticks: {
                fontColor: theme.palette.text.secondary
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: theme.palette.text.secondary,
                beginAtZero: false
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: theme.palette.divider,
                drawBorder: false,
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
                zeroLineColor: theme.palette.divider
              }
            }
          ]
        },
        tooltips: {
          backgroundColor: theme.palette.background.default,
          bodyFontColor: theme.palette.text.secondary,
          borderColor: theme.palette.divider,
          borderWidth: 1,
          enabled: true,
          footerFontColor: theme.palette.text.secondary,
          intersect: false,
          mode: 'index',
          titleFontColor: theme.palette.text.primary
        }
      }
    };
  }

  render() {
    const { classes, theme } = this.props;

    const data = {
      labels: [
        '1 Aug',
        '2 Aug',
        '3 Aug',
        '4 Aug',
        '5 Aug',
        '6 Aug',
        '7 Aug',
        '8 Aug',
        '9 Aug',
        '10 Aug',
        '11 Aug',
        '12 Aug'
      ],
      datasets: [
        {
          label: 'USD/MYR',
          data: [
            4.1183,
            4.10931,
            4.11403,
            4.11789,
            4.10594,
            4.10085,
            4.1183,
            4.12093,
            4.11403,
            4.11289,
            4.11693,
            4.1011
          ],
          volume: 4292424.391723,
          currency: 'USD',
          change: '-0.0172%',
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)'
          // fill: false,
          // borderColor: '#742774'
        }
        // ,
        // {
        //   label: 'GBP/MYR',
        //   data: [5.1183, 5.10931, 5.11403, 5.11789, 5.12093, 5.10294],
        //   fill: false,
        //   borderColor: '#742774'
        // }
      ]
    };

    return (
      <Card className={classes.root}>
        <CardHeader
          action={
            <Button
              endIcon={<ArrowDropDownIcon />}
              size="small"
              variant="text"
            ></Button>
          }
          title={data.datasets[0].label}
        />
        <Divider />
        <CardContent>
          <Box height={'40vh'} position="relative" width={'100%'}>
            <Typography
              style={{ textAlign: 'right' }}
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {data.labels[0]} - {data.labels[data.labels.length - 1]}
            </Typography>

            {/* {(this.state.options.scales.yAxes[0].ticks.suggestedMin = '4.1')} */}
            <Line data={data} options={this.state.options} />
            {/* <article className="canvas-container">
          <Line data={data} options={options} />
        </article> */}
          </Box>
        </CardContent>
        <br />
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={1.5}>
          {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Overview
      </Button> */}
          <Grid container lg={12} sm={12} xl={12} xs={12} spacing={2}>
            {/* <Grid container justify="space-between" spacing={2}> */}
            <Grid
              container
              lg={6}
              sm={6}
              xl={6}
              xs={6}
              style={{ paddingRight: '2rem' }}
            >
              <Grid container justify="space-between">
                <Typography color="textSecondary" gutterBottom variant="h6">
                  Change:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  {data.datasets[0].change}
                </Typography>
              </Grid>
              <Grid container justify="space-between">
                <Typography color="textSecondary" gutterBottom variant="h6">
                  High:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  {Math.max(...data.datasets[0].data)}
                </Typography>
              </Grid>
              <Grid container justify="space-between">
                <Typography color="textSecondary" gutterBottom variant="h6">
                  Low:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  {Math.min(...data.datasets[0].data)}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              lg={6}
              sm={6}
              xl={6}
              xs={6}
              style={{ paddingRight: '1rem' }}
            >
              <Grid container justify="space-between">
                <Typography color="textSecondary" gutterBottom variant="h6">
                  Volume:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  {/* number2.toLocaleString(undefined, {maximumFractionDigits:2}) */}
                  {data.datasets[0].currency}{' '}
                  {Math.abs(data.datasets[0].volume) > 999999
                    ? Math.sign(data.datasets[0].volume) *
                        (Math.abs(data.datasets[0].volume) / 1000000).toFixed(
                          1
                        ) +
                      'M'
                    : Math.abs(data.datasets[0].volume) > 999
                    ? Math.sign(data.datasets[0].volume) *
                        (Math.abs(data.datasets[0].volume) / 1000).toFixed(1) +
                      'K'
                    : Math.sign(data.datasets[0].volume) *
                      Math.abs(data.datasets[0].volume)}
                </Typography>
              </Grid>
              <Grid container justify="space-between">
                <Typography color="textSecondary" gutterBottom variant="h6">
                  Open:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  {data.datasets[0].data[0]}
                </Typography>
              </Grid>
              <Grid container justify="space-between">
                <Typography color="textSecondary" gutterBottom variant="h6">
                  Close:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  {data.datasets[0].data[data.datasets[0].data.length - 1]}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Card>
    );
  }
}

// const Sales = ({ className, ...rest }) => {
//   const classes = useStyles();
//   const theme = useTheme();

//   const data2 = {
//     datasets: [
//       {
//         backgroundColor: colors.indigo[500],
//         data: [18, 5, 19, 27, 29, 19, 20],
//         label: 'This year'
//       },
//       {
//         backgroundColor: colors.grey[200],
//         data: [11, 20, 12, 29, 30, 25, 13],
//         label: 'Last year'
//       }
//     ],
//     labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
//   };

//   const data = {
//     labels: [
//       '1 Aug',
//       '2 Aug',
//       '3 Aug',
//       '4 Aug',
//       '5 Aug',
//       '6 Aug',
//       '7 Aug',
//       '8 Aug',
//       '9 Aug',
//       '10 Aug',
//       '11 Aug',
//       '12 Aug'
//     ],
//     datasets: [
//       {
//         label: 'USD/MYR',
//         data: [
//           4.1183,
//           4.10931,
//           4.11403,
//           4.11789,
//           4.10594,
//           4.10085,
//           4.1183,
//           4.12093,
//           4.11403,
//           4.11289,
//           4.11693,
//           4.1011
//         ],
//         volume: 4292424.391723,
//         currency: 'USD',
//         change: '-0.0172%',
//         fill: true,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)'
//         // fill: false,
//         // borderColor: '#742774'
//       }
//       // ,
//       // {
//       //   label: 'GBP/MYR',
//       //   data: [5.1183, 5.10931, 5.11403, 5.11789, 5.12093, 5.10294],
//       //   fill: false,
//       //   borderColor: '#742774'
//       // }
//     ]
//   };

//   const options = {
//     animation: false,
//     cornerRadius: 20,
//     layout: { padding: 0 },
//     legend: { display: false },
//     maintainAspectRatio: false,
//     responsive: true,
//     scales: {
//       xAxes: [
//         {
//           barThickness: 12,
//           maxBarThickness: 10,
//           barPercentage: 0.5,
//           categoryPercentage: 0.5,
//           ticks: {
//             fontColor: theme.palette.text.secondary
//           },
//           gridLines: {
//             display: false,
//             drawBorder: false
//           }
//         }
//       ],
//       yAxes: [
//         {
//           ticks: {
//             fontColor: theme.palette.text.secondary,
//             beginAtZero: false,
//             // min: 4.1,
//             suggestedMin: 4.10085,
//             suggestedMax: 4.12093
//             // stepSize: 0.001
//           },
//           gridLines: {
//             borderDash: [2],
//             borderDashOffset: [2],
//             color: theme.palette.divider,
//             drawBorder: false,
//             zeroLineBorderDash: [2],
//             zeroLineBorderDashOffset: [2],
//             zeroLineColor: theme.palette.divider
//           }
//         }
//       ]
//     },
//     tooltips: {
//       backgroundColor: theme.palette.background.default,
//       bodyFontColor: theme.palette.text.secondary,
//       borderColor: theme.palette.divider,
//       borderWidth: 1,
//       enabled: true,
//       footerFontColor: theme.palette.text.secondary,
//       intersect: false,
//       mode: 'index',
//       titleFontColor: theme.palette.text.primary
//     }
//   };

//   const data3 = {
//     labels: [
//       '10/04/2018',
//       '10/05/2018',
//       '10/06/2018',
//       '10/07/2018',
//       '10/08/2018',
//       '10/09/2018',
//       '10/10/2018',
//       '10/11/2018',
//       '10/12/2018',
//       '10/13/2018',
//       '10/14/2018',
//       '10/15/2018'
//     ],
//     datasets: [
//       {
//         label: 'Temperature',
//         data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
//         fill: false, // Don't fill area under the line
//         borderColor: 'green' // Line color
//       }
//     ]
//   };

//   return (
//     <Card className={clsx(classes.root, className)} {...rest}>
//       <CardHeader
//         action={
//           <Button
//             endIcon={<ArrowDropDownIcon />}
//             size="small"
//             variant="text"
//           ></Button>
//         }
//         title={data.datasets[0].label}
//       />
//       <Divider />
//       <CardContent>
//         <Box height={'40vh'} position="relative" width={'100%'}>
//           <Typography
//             style={{ textAlign: 'right' }}
//             color="textSecondary"
//             gutterBottom
//             variant="h6"
//           >
//             {data.labels[0]} - {data.labels[data.labels.length - 1]}
//           </Typography>
//           <Line data={data} options={options} />
//           {/* <article className="canvas-container">
//             <Line data={data} options={options} />
//           </article> */}
//         </Box>
//       </CardContent>
//       <br />
//       <Divider />
//       <Box display="flex" justifyContent="flex-end" p={1.5}>
//         {/* <Button
//           color="primary"
//           endIcon={<ArrowRightIcon />}
//           size="small"
//           variant="text"
//         >
//           Overview
//         </Button> */}
//         <Grid container lg={12} sm={12} xl={12} xs={12} spacing={2}>
//           {/* <Grid container justify="space-between" spacing={2}> */}
//           <Grid
//             container
//             lg={6}
//             sm={6}
//             xl={6}
//             xs={6}
//             style={{ paddingRight: '2rem' }}
//           >
//             <Grid container justify="space-between">
//               <Typography color="textSecondary" gutterBottom variant="h6">
//                 Change:
//               </Typography>
//               <Typography color="textPrimary" gutterBottom variant="h6">
//                 {data.datasets[0].change}
//               </Typography>
//             </Grid>
//             <Grid container justify="space-between">
//               <Typography color="textSecondary" gutterBottom variant="h6">
//                 High:
//               </Typography>
//               <Typography color="textPrimary" gutterBottom variant="h6">
//                 {Math.max(...data.datasets[0].data)}
//               </Typography>
//             </Grid>
//             <Grid container justify="space-between">
//               <Typography color="textSecondary" gutterBottom variant="h6">
//                 Low:
//               </Typography>
//               <Typography color="textPrimary" gutterBottom variant="h6">
//                 {Math.min(...data.datasets[0].data)}
//               </Typography>
//             </Grid>
//           </Grid>

//           <Grid
//             container
//             lg={6}
//             sm={6}
//             xl={6}
//             xs={6}
//             style={{ paddingRight: '1rem' }}
//           >
//             <Grid container justify="space-between">
//               <Typography color="textSecondary" gutterBottom variant="h6">
//                 Volume:
//               </Typography>
//               <Typography color="textPrimary" gutterBottom variant="h6">
//                 {/* number2.toLocaleString(undefined, {maximumFractionDigits:2}) */}
//                 {data.datasets[0].currency}{' '}
//                 {Math.abs(data.datasets[0].volume) > 999999
//                   ? Math.sign(data.datasets[0].volume) *
//                       (Math.abs(data.datasets[0].volume) / 1000000).toFixed(1) +
//                     'M'
//                   : Math.abs(data.datasets[0].volume) > 999
//                   ? Math.sign(data.datasets[0].volume) *
//                       (Math.abs(data.datasets[0].volume) / 1000).toFixed(1) +
//                     'K'
//                   : Math.sign(data.datasets[0].volume) *
//                     Math.abs(data.datasets[0].volume)}
//               </Typography>
//             </Grid>
//             <Grid container justify="space-between">
//               <Typography color="textSecondary" gutterBottom variant="h6">
//                 Open:
//               </Typography>
//               <Typography color="textPrimary" gutterBottom variant="h6">
//                 {data.datasets[0].data[0]}
//               </Typography>
//             </Grid>
//             <Grid container justify="space-between">
//               <Typography color="textSecondary" gutterBottom variant="h6">
//                 Close:
//               </Typography>
//               <Typography color="textPrimary" gutterBottom variant="h6">
//                 {data.datasets[0].data[data.datasets[0].data.length - 1]}
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>
//     </Card>
//   );
// };

// CurrencyPair.propTypes = {
//   className: PropTypes.string
// };

// export default CurrencyPair;

CurrencyPair.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CurrencyPair);
