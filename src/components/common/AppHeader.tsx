


import { AppBar, AppBarProps, Avatar, Button, Chip, IconButton, Link, Toolbar } from '@mui/material';
import React from 'react';
import { Logo } from './Logo';
import { Link as NavLink } from './Link';
import { ArrowDropDown, NotificationsNone } from '@mui/icons-material';
import { UserAccount, useAuthState } from '@app/modules/Auth';

type AppToolbarProps = Omit<AppBarProps, "children">;
type Props = {
  props: AppToolbarProps
}

function getFirstName(displayName: string): string {
  return displayName && displayName.split(" ")[0];
}

export function AppHeader(props: AppToolbarProps): JSX.Element {
  const { sx, ...other } = props;
  const menuAnchorRef = React.createRef<HTMLButtonElement>();
  const [me] = useAuthState();
  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...sx }}
      color="default"
      elevation={1}
      {...other}
    >
      <Toolbar>
        {/* App name / logo */}

        <Link color="inherit" underline="none" href="/" component={NavLink}>
          <Logo />
        </Link>

        <span style={{ flexGrow: 1 }} />

        {/* Account related controls (icon buttons) */}


        {me && (
          <Chip
            sx={{
              height: 40,
              borderRadius: 20,
              fontWeight: 600,
              backgroundColor: (x) =>
                x.palette.mode === "light"
                  ? x.palette.grey[300]
                  : x.palette.grey[700],
              ".MuiChip-avatar": { width: 32, height: 32 },
            }}
            component={NavLink}
            href="/"
            avatar={
              <Avatar
                alt={me?.name || (me?.isAnonymous ? "Anonymous" : "")}
                src={me?.photoURL || undefined}
              />
            }
            label={getFirstName(
              me?.email || (me?.isAnonymous ? "Anonymous" : ""),
            )}
          />
        )}
        {me && (
          <IconButton
            sx={{
              marginLeft: (x) => x.spacing(1),
              backgroundColor: (x) =>
                x.palette.mode === "light"
                  ? x.palette.grey[300]
                  : x.palette.grey[700],
              width: 40,
              height: 40,
            }}
          >
            <NotificationsNone />
          </IconButton>
        )}
        {me && (
          <IconButton
            ref={menuAnchorRef}
            sx={{
              marginLeft: (x) => x.spacing(1),
              backgroundColor: (x) =>
                x.palette.mode === "light"
                  ? x.palette.grey[300]
                  : x.palette.grey[700],
              width: 40,
              height: 40,
            }}
          >
            <ArrowDropDown />
          </IconButton>
        )}
        {me === null && (
          <Button
            component={NavLink}
            variant="text"
            href="/login"
            color="inherit"
          >
            Log in
            </Button>
        )}
      </Toolbar>

      {/* Pop-up menus */}

      {/* todo: Notification Menu */}
    </AppBar>
  )
}
