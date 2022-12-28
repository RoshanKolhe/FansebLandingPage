import React, { useEffect, useState, useMemo } from "react";
import Drawer from "@mui/material/Drawer";
import Filter from "../components/Filter/Filter";
import ListSearchbar from "../components/Common/ListSearchbar";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Icon } from "@iconify/react";
import ListHead from "../components/Common/ListHead";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Scrollbar from "../components/Common/Scrollbar";
import SearchNotFound from "../../src/components/NotFound/SearchNotFound";
import {
  Card,
  Stack,
  Button,
  Container,
  Chip,
  Typography,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { css } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllVendorProfilesThunk,
  deleteVendorProfilesThunk,
  searchVendorProfilesThunk,
} from "../store/slices/vendor/vendor.slice";
import { Link, useNavigate } from "react-router-dom";
import { capitalCase } from "../components/Common/change-case";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import DeleteAction from "../components/Common/DeleteAction";
import _, { isUndefined } from "lodash";
import { fetchAllSericesThunk } from "../store/slices/services/service.slice";
import { fetchAllIndustryThunk } from "../store/slices/Industry/industry.slice";
import { fetchAllTechstackThunk } from "../store/slices/teckstack/techstack.slice";
import { fetchAllTagThunk } from "../store/slices/tag/tag.slice";
import useAdvanceFilter from "../hooks/useAdvanceFilter";
import { checkForFilterValidity } from "../utils/global/global";
import { permissionEnum } from "../utils/enum";
import withPermission from "../hoc/withPermission";

function VendorProfile() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { permissions } = useSelector(({ init }) => init);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profiles, totalProfiles } = useSelector(({ vendor }) => vendor);

  const [search, setSearch] = useState("");

  var editColumn = { id: "action", label: "Action ", alignRight: false };
  const actionColumn = permissions[permissionEnum.vendor_profile_delete]
    ? editColumn
    : "";

  const TABLE_HEAD = [
    { id: "id", label: "Id", alignRight: false },
    { id: "business_name", label: "Brand Name", alignRight: false },
    {
      id: "registered_business_name",
      label: "Reg. Business Name",
      alignRight: false,
    },
    { id: "mobile", label: "Mobile", alignRight: false },
    { id: "created_at", label: "Created At", alignRight: false },
    { id: "updated_at", label: "Updated At ", alignRight: false },
    { id: "old_profile_id", label: "Old Profile Id", alignRight: false },
    { id: "verified", label: "Verification Status ", alignRight: false },
    actionColumn,
  ];

  useEffect(() => {
    dispatch(
      fetchAllVendorProfilesThunk({
        page: 1,
        permToken: permissions[permissionEnum.vendor_profile_view],
      })
    );
    dispatch(fetchAllSericesThunk());
    dispatch(fetchAllIndustryThunk());
    dispatch(fetchAllTechstackThunk());
    dispatch(fetchAllTagThunk());
  }, [dispatch]);

  function handleRowClick(id) {
    navigate("/dashboard/profiles/" + id + "/basic");
  }

  function handleAllNewProfile() {
    navigate("/dashboard/profiles/new/basic");
  }

  function handleDelete(id) {
    dispatch(
      deleteVendorProfilesThunk({
        id: isUndefined,
        permToken: permissions[permissionEnum.vendor_profile_portfolio_delete],
      })
    );
  }

  const brandData = profiles;
  const filterState = useAdvanceFilter({ search });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  const handleChangePage = (_, newPage) => {
    const filterData = checkForFilterValidity(filterState.state);
    if (search || filterData.isAllowed) {
      setPage(newPage);
      return dispatch(
        searchVendorProfilesThunk({
          search,
          page: newPage + 1,
          filter_data: filterData.data,
        })
      );
    }
    dispatch(
      fetchAllVendorProfilesThunk({
        page: newPage + 1,
        permToken: permissions[permissionEnum.vendor_profile_view],
      })
    );
    setPage(newPage);
  };

  const _searchChange = useMemo(() => {
    return _.debounce((search, filterState) => {
      const filterData = checkForFilterValidity(filterState);
      if (!search && !filterData.isAllowed) {
        return dispatch(
          fetchAllVendorProfilesThunk({
            page: 1,
            permToken: permissions[permissionEnum.vendor_profile_view],
          })
        );
      }
      setPage(0);
      dispatch(
        searchVendorProfilesThunk({
          search,
          filter_data: filterData.data,
          permToken: permissions[permissionEnum.vendor_profile_view],
        })
      );
    }, 500);
  }, []);

  function handleSearchChange(e) {
    const value = e.target.value;
    _searchChange(value, filterState.state);
    setSearch(value);
  }
  function handleFilter() {
    setShowDrawer(true);
  }
  function handleFilterClose() {
    setShowDrawer(false);
  }

  return (
    <Container>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        PaperProps={{
          style: { width: "400px" },
        }}
      >
        <Filter
          filterState={filterState}
          handleFilterClose={handleFilterClose}
        />
      </Drawer>

      <Stack
        mb={2}
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Select vendor profile to change
        </Typography>
        {permissions[permissionEnum.vendor_profile_add_new] && (
          <Button
            size="large"
            variant="contained"
            startIcon={<Icon icon={plusFill} />}
            onClick={handleAllNewProfile}
          >
            Add More
          </Button>
        )}
      </Stack>

      <Card>
        <Breadcrumb />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: { lg: "flex", md: "flex", sm: "block", xs: "block" },
          }}
        >
          <ListSearchbar
            placeholder="Search vendor profile"
            handleSearchChange={handleSearchChange}
            styles={{
              width: "280px",
            }}
          />
          {permissions[permissionEnum.vendor_profile_view] && (
            <Button
              variant="outlined"
              sx={{ padding: "10px 20px", marginRight: "20px" }}
              onClick={handleFilter}
            >
              <Icon icon="bytesize:filter" />{" "}
              <span style={{ marginLeft: "10px" }}>Filter</span>
            </Button>
          )}
        </Stack>

        <Scrollbar>
          {brandData.length > 0 ? (
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  headLabel={TABLE_HEAD}
                  rowCount={brandData?.length}
                  styles={{ backgroundColor: "rgb(243, 246, 248)" }}
                />
                <TableBody>
                  {brandData?.map((row) => {
                    const {
                      id,
                      org_id,
                      brand_name,
                      registered_business_name,
                      mobile_number,
                      created_at,
                      updated_at,
                      verified,
                      old_profile_id,
                      profile_stage,
                    } = row;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        sx={{ cursor: "pointer", zIndex: "" }}
                        onClick={() => handleRowClick(id, org_id)}
                      >
                        <TableCell align="left">{id}</TableCell>
                        <TableCell>
                          <Typography noWrap sx={{ fontSize: "15px" }}>
                            <Link
                              to={"/"}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {capitalCase(brand_name)}
                            </Link>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography noWrap sx={{ fontSize: "15px" }}>
                            <Link
                              to={"/"}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {capitalCase(
                                registered_business_name
                                  ? registered_business_name
                                  : "-"
                              )}
                            </Link>
                          </Typography>
                        </TableCell>

                        <TableCell align="left">
                          {!mobile_number ? "-" : mobile_number}
                        </TableCell>

                        <TableCell align="left">{created_at}</TableCell>
                        <TableCell align="left">{updated_at}</TableCell>

                        <TableCell align="center">
                          {old_profile_id == null ? "-" : old_profile_id}
                        </TableCell>
                        <TableCell align="left">
                          {profile_stage == "pending" ? (
                            "Pending"
                          ) : profile_stage == "approved" ? (
                            "Approved"
                          ) : profile_stage == "verified" ? (
                            <Chip
                              className={css`
                                font-size: 12px;
                                border: none;
                                text-transform: capitalize;
                                padding-left: 5px;
                                padding-right: 5px;
                              `}
                              size="small"
                              variant="outlined"
                              label={<CheckCircleOutlineIcon />}
                              sx={{
                                color: "#11a54a",
                              }}
                            />
                          ) : profile_stage == "unverified" ? (
                            <Chip
                              className={css`
                                font-size: 12px;
                                border: none;
                                text-transform: capitalize;
                                padding-left: 5px;
                                padding-right: 5px;
                              `}
                              size="small"
                              variant="outlined"
                              label={<CancelOutlinedIcon />}
                              sx={{
                                color: "#fe4842",
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </TableCell>
                        <TableCell align="left">
                          {permissions[
                            permissionEnum.vendor_profile_delete
                          ] && (
                            <DeleteAction
                              handleDelete={() => handleDelete(id)}
                            />
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      count={totalProfiles}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPageOptions={false}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          ) : (
            <SearchNotFound
              src="/static/support.svg"
              subtitle="There is currently no vendors data to show."
            />
          )}
        </Scrollbar>
      </Card>
    </Container>
  );
}

export default withPermission(
  VendorProfile,
  permissionEnum.vendor_profile_view
);
