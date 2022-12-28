import PropTypes from "prop-types";
import { noCase } from "change-case";
import { useEffect, useRef, useState, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Icon } from "@iconify/react";
import bellFill from "@iconify/icons-eva/bell-fill";
import clockFill from "@iconify/icons-eva/clock-fill";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotificationHandler } from "../../utils/global/NotificationApiCall";
import CircularProgress from "@mui/material/CircularProgress";
import doneAllFill from "@iconify/icons-eva/done-all-fill";
import { DateTime } from "luxon";
// material
import { alpha } from "@mui/material/styles";
import {
  Box,
  Badge,
  Avatar,
  IconButton,
  Typography,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  Tooltip,
  Button,
  Divider,
  List,
  ListSubheader,
} from "@mui/material";
// utils
import MenuPopover from "../../components/MenuPopover";
import {
  fetchAllNotificationsThunk,
  markAllNotificationsAsReadThunk,
} from "../../store/slices/init/init.slice";

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {/* {notification.message_title} */}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        {noCase(notification.notification_text)}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.message_title}
          src="/static/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.message_title}
          src="/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.message_title}
          src="/static/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.message_title}
          src="/static/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: null,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    // <ListItemButton
    //   to="#"
    //   disableGutters
    //   component={RouterLink}
    //   sx={{
    //     py: 1.5,
    //     px: 2.5,
    //     mt: "1px",
    //     ...(!notification.is_read && {
    //       bgcolor: "action.selected",
    //     }),
    //   }}
    // >
    <ListItemButton
      to="#"
      disableGutters
      component={RouterLink}
      sx={{
        background:
          notification.is_read == 0 ? "rgba(145, 158, 171, 0.08)" : "",
        borderRadius: "10px",
        borderBottom: 1,
        borderColor: "#E3E3E3",
        py: 1.5,
        mt: "1px",
        mb: "1px",
        display: "flex",
        alignItems: "flex-start",
        marginLeft: "12px",
        marginRight: "12px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      {/* {avatar && (
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
        </ListItemAvatar>
      )} */}

      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: 50,
          backgroundColor: notification.is_read == 0 ? "#2073F2" : "#5f5f5f",
          pr: 1,
          display: "flex",
          alignContent: "baseline",
          mr: 1,
          ml: 1,
          marginTop: "8px",
          padding: "5px",
        }}
      />
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              pb: 2,
              // ml: 3,
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Box
              component={Icon}
              icon={clockFill}
              sx={{ width: 16, height: 16 }}
            />
            {DateTime.fromISO(notification.timestamp).toFormat("DD")} at{" "}
            {DateTime.fromISO(notification.timestamp).toFormat("TT")}
          </Typography>
        }
      />
      {/* <ListItemAvatar sx={{ marginRight: 0, marginTop: "13px" }}>
        <Avatar src="/static/info.png" sx={{ bgcolor: "background.neutral" }}>
          {avatar}
        </Avatar>
      </ListItemAvatar> */}
    </ListItemButton>
  );
}

export default function NotificationsPopover() {
  // const anchorRef = useRef(null);
  // const [open, setOpen] = useState(false);
  // const notificationData = useSelector(({ init }) => init.notifications);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllNotificationsThunk());
  // }, [dispatch]);

  // const { unread_count, notifications } = notificationData;

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // let obj = {
  //   status: false,
  //   result: notifications ? notifications : [],
  // };

  // if (notifications?.length > 3) {
  //   obj.status = true;
  //   obj.result = notifications.slice(0, 3);
  // }

  // if (unread_count === 0) obj.result = [];

  const [isLoading, setisLoading] = useState(true);
  const scrollBarRef = useRef();
  const [offset, setOffset] = useState(0);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notificationData, setnotificationData] = useState({});
  const [notificationDataForDisplay, setnotificationDataForDisplay] = useState(
    []
  );
  const dispatch = useDispatch();
  const measuredRef = useCallback((node) => {
    if (node != null) {
      node.addEventListener("scroll", () => {
        if (node.scrollTop + node.clientHeight >= node.scrollHeight) {
          scrollToEnd();
        }
      });
    }
  }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      if (
        notificationData.next_offset == undefined ||
        notificationData.next_offset != -1
      ) {
        var data = await getAllNotificationHandler(
          notificationData.next_offset == undefined
            ? 0
            : notificationData.next_offset
        );
        setnotificationData(data.data);
        setnotificationDataForDisplay([
          ...notificationDataForDisplay,
          ...data.data.notifications,
        ]);
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    }
    fetchMyAPI();
  }, [offset]);
  const scrollToEnd = () => {
    setisLoading(true);
    setOffset((prev) => prev + 10);
  };
  const { unread_count, notifications } = notificationData;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function fncMarkAllRead() {
    dispatch(markAllNotificationsAsReadThunk())
      .unwrap()
      .then(() => {
        setnotificationData([]);
        setnotificationDataForDisplay([]);
        dispatch(fetchAllNotificationsThunk())
          .unwrap()
          .then((d) => {
            setnotificationData(d);
            setnotificationDataForDisplay(d.notifications);
          });
      });
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge badgeContent={unread_count} color="error">
          {/* <Icon icon={bellFill} width={20} height={20} /> */}
          <img src="/static/bell.svg" width={23} height={23} />
        </Badge>
      </IconButton>

      {/* <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        {notificationDataForDisplay.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // py: 2,
              px: 2.5,
              borderBottom: 2,
              borderColor: "#E3E3E3",
              opacity: 1,
            }}
          >
            <Box
              sx={{ flexGrow: 1, paddingTop: "15px", paddingBottom: "15px" }}
            >
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You have {unread_count + " "}
                unread messages
              </Typography>
            </Box>

            <Tooltip title=" Mark all as read">
              <IconButton sx={{ color: "#2073F2" }} onClick={fncMarkAllRead}>
                <Icon icon={doneAllFill} width={20} height={20} />
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "#2073F2" }}
                >
                  Mark as read
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>
        ) : (
          ""
        )}

        {notificationDataForDisplay.length == 0 ? (
          <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You have no unread messages
              </Typography>
              <div
                style={{
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076476.png"
                  style={{
                    width: 80,
                    height: "auto",
                    margin: "0 auto",
                    opacity: "0.5",
                  }}
                  alt=""
                />
              </div>
            </Box>
          </Box>
        ) : (
          ""
        )}

        {notificationDataForDisplay.length > 0 && (
          <div
            id="scrollBar"
            ref={measuredRef}
            style={{ height: "400px", overflow: "auto" }}
          >
            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline" }}
                ></ListSubheader>
              }
            >
              {notificationDataForDisplay == undefined
                ? ""
                : notificationDataForDisplay.map((notification) => (
                    <NotificationItem
                      key={notification._id}
                      notification={notification}
                    />
                  ))}
            </List>

            {isLoading ? (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              ""
            )}
          </div>
        )}
      </MenuPopover> */}

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        {notificationDataForDisplay.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2.5,
              borderBottom: 2,
              borderColor: "#E3E3E3",
              opacity: 1,
            }}
          >
            <Box
              sx={{ flexGrow: 1, paddingTop: "15px", paddingBottom: "15px" }}
            >
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You have <b>{unread_count + " "}</b>
                unread messages
              </Typography>
            </Box>
            {unread_count == 0 ? (
              ""
            ) : (
              <Tooltip title=" Mark all as read">
                <IconButton sx={{ color: "#2073F2" }} onClick={fncMarkAllRead}>
                  <Icon icon={doneAllFill} width={20} height={20} />
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "#2073F2" }}
                  >
                    Mark as read
                  </Typography>
                </IconButton>
              </Tooltip>
            )}
          </Box>
        ) : (
          ""
        )}
        {notificationDataForDisplay.length == 0 ? (
          <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You have no unread messages
              </Typography>
              <div
                style={{
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076476.png"
                  style={{
                    width: 80,
                    height: "auto",
                    margin: "0 auto",
                    opacity: "0.5",
                  }}
                  alt=""
                />
              </div>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {notificationDataForDisplay.length > 0 && (
          <div
            id="scrollBar"
            ref={measuredRef}
            style={{ height: "400px", overflow: "auto" }}
          >
            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline" }}
                ></ListSubheader>
              }
            >
              {notificationDataForDisplay == undefined
                ? ""
                : notificationDataForDisplay.map((notification) => (
                    <NotificationItem
                      key={notification._id}
                      notification={notification}
                    />
                  ))}
            </List>
            {isLoading ? (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              ""
            )}
          </div>
        )}
      </MenuPopover>
    </>
  );
}
