import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Activity,
  BarChart2,
  LogOut
} from 'react-feather';
import NavItem from './NavItem';

import AuthService from '../../../services/auth.service';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const items = [
  {
    href: '/app/dashboard',
    key: 'dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/pricing',
    key: 'pricing',
    icon: Activity,
    title: 'Pricing'
  },
  {
    href: '/app/trade',
    key: 'trade',
    icon: ShoppingBagIcon,
    title: 'Trade'
  },
  {
    href: '/app/account',
    key: 'account',
    icon: UserIcon,
    title: 'Report'
  },
  {
    href: '/app/market',
    key: 'market',
    icon: BarChart2,
    title: 'Market'
  }
  // ,
  // {
  //   href: '/app/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings'
  // },
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];

const navDealer = [
  {
    href: '/app/dashboard',
    key: 'dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/pricing',
    key: 'pricing',
    icon: Activity,
    title: 'Pricing'
  }
];

const navApprover = [
  {
    href: '/app/dashboard',
    key: 'dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/trade',
    key: 'trade',
    icon: ShoppingBagIcon,
    title: 'Trade'
  },
  {
    href: '/app/account',
    key: 'account',
    icon: UserIcon,
    title: 'Report'
  },
  {
    href: '/app/market',
    key: 'market',
    icon: BarChart2,
    title: 'Market'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  const [navContent, setNavContent] = useState(items);
  const [showSeller, setShowSeller] = useState(false);
  const [showApprover, setShowApprover] = useState(false);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }

    const user = AuthService.getCurrentUser();
    if (user) {
      setShowSeller(user.roles.includes('ROLE_MODERATOR'));
      setShowApprover(user.roles.includes('ROLE_ADMIN'));
    }

    if (showSeller && showApprover) {
      setNavContent(items);
    } else if (showSeller && !showApprover) {
      setNavContent(navDealer);
    } else if (!showSeller && showApprover) {
      setNavContent(navApprover);
    } else {
      setNavContent(items);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // const user = AuthService.getCurrentUser();
  // if (user) {
  //   this.setState({
  //     currentUser: user,
  //     showDealer: user.roles.includes('ROLE_MODERATOR'),
  //     showApprover: user.roles.includes('ROLE_ADMIN')
  //   });
  // }

  // setNavContent(navDealer);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      {/* <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider /> */}
      <Box p={2}>
        <List>
          {navContent.map((item) => (
            <NavItem
              href={item.href}
              key={item.key}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      {/* <Box flexGrow={1} /> */}
      <Box p={2} bgcolor="background.dark">
        <NavItem href="/login" key="Logout" title="Logout" icon={LogOut} />
      </Box>

      {/* <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box> */}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
