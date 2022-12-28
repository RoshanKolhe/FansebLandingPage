export const projectApprovalStatus = {
  accepted: "Accepted",
  rejected: "Rejected",
  pending: null,
};

export const inputType = {
  input: "input",
  select: "select",
  textarea: "textarea",
  checkbox: "checkbox",
  radio: "radio",
  autocomplete: "autocomplete",
  date: "date",
  file: "file",
  switch: "switch",
  number: "number",
  url: "url",
  checkboxgroup: "checkboxgroup",
  multiselect: "multiselect",
};

export const projectServices = {
  desiging: "Desiging",
  development: "Development",
  marketing: "Marketing",
  others: "Others",
};

export const strings = {
  email_verify: "email_verify",
};
export const serviceType = {
  custom: "Customer Managed",
  exmyb: "EMB Managed",
};

export const serviceAddType = {
  tech: "tech",
  tags: "tags",
};

export const advanceFilterFieldType = {
  text: "text",
  dropdown: "dropdown",
  boolean: "boolean",
  date: "date",
};

export const shortlistingFilterFieldType = {
  text: "text",
  dropdown: "dropdown",
};

export const vendorVerifiedEnum = {
  pending: "pending",
  approved: "approved",
  verified: "verified",
  unverified: "unverified",
};

// api's not wokring
// 1. search on vendor profile front page
export const permissionEnum = {
  dashboard_metrix: "DASHBOARD_METRIX",
  profile_change_password: "PROFILE_CHANGE_PASSOWORD",
  profile_edit: "PROFILE_EDIT",
  services_view: "SERVICES_VIEW",
  service_delete: "SERVICE_DELETE",
  service_add_new: "SERVICE_ADD_NEW",
  service_add_tech_stack: "SERVICE_ADD_TECH_STACK",
  service_add_tags: "SERVICE_ADD_TAGS",
  service_delete_tech_stack: "SERVICE_DELETE_TECH_STACK",
  service_delete_tags: "SERVICE_DELETE_TAGS",
  industry_add_sub_service: "INDUSTRY_ADD_SUB_SERVICE",
  service_add_sub_service: "SERVICE_ADD_SUB_SERVICE",
  languages_view: "LANGUAGES_VIEW",
  languages_add: "LANGUAGES_ADD",
  languages_edit: "LANGUAGES_EDIT",
  languages_delete: "LANGUAGES_DELETE",
  tech_stack_add: "TECH_STACK_ADD",
  tech_stack_edit: "TECH_STACK_EDIT",
  tech_stack_delete: "TECH_STACK_DELETE",
  tech_stack_view: "TECH_STACK_VIEW",
  tags_view: "TAGS_VIEW",
  tags_edit: "TAGS_EDIT",
  tags_delete: "TAGS_DELETE",
  tags_add: "TAGS_ADD",
  support_view: "SUPPORT_VIEW",
  support_mark_as_resolved: "SUPPORT_MARK_AS_RESOLVED",
  support_reply_on_ticket: "SUPPORT_REPLY_ON_TICKET",
  vendor_profile_view: "VENDOR_PROFILE_VIEW",
  vendor_profile_add_new: "VENDOR_PROFLE_ADD_NEW",
  vendor_profile_basic_info_view: "VENDOR_PROFILE_BASIC_INFO_VIEW",
  vendor_profile_basic_info_edit: "VENDOR_PROFILE_BASIC_INFO_EDIT",
  vendor_profile_turnover_view: "VENDOR_PROFILE_TURNOVER_VIEW",
  vendor_profile_turnover_edit: "VENDOR_PROFILE_TURNOVER_EDIT",
  vendor_profile_turnover_delete: "VENDOR_PROFILE_TURNOVER_DELETE",
  vendor_profile_turnover_add: "VENDOR_PROFILE_TURNOVER_ADD",
  vendor_profile_notes_view: "VENDOR_PROFILE_NOTES_VIEW",
  vendor_profile_notes_add: "VENDOR_PROFILE_NOTES_ADD",
  vendor_profile_notes_edit: "VENDOR_PROFILE_NOTES_EDIT",
  vendor_profile_address_view: "VENDOR_PROFILE_ADDRESS_VIEW",
  vendor_profile_address_edit: "VENDOR_PROFILE_ADDRESS_EDIT",
  vendor_profile_address_delete: "VENDOR_PROFILE_ADDRESS_DELETE",
  vendor_profile_address_add: "VENDOR_PROFILE_ADDRESS_ADD",
  vendor_profile_bank_details_view: "VENDOR_PROFILE_BANK_DETAILS_VIEW",
  vendor_profile_bank_details_edit: "VENDOR_PROFILE_BANK_DETAILS_EDIT",
  vendor_profile_verify_nda: "VENDOR_PROFILE_VEIRFY_NDA",
  vendor_profile_services_view: "VENDOR_PROFILE_SERVICES_VIEW",
  vendor_profile_services_add: "VENDOR_PROFILE_SERVICES_ADD",
  vendor_profile_services_edit: "VENDOR_PROFILE_SERVICES_EDIT",
  vendor_profile_services_delete: "VENDOR_PROFILE_SERVICES_DELETE",
  vendor_profile_services_verify: "VENDOR_PROFILE_SERVICES_VERIFY",
  vendor_profile_portfolio_view: "VENDOR_PROFILE_Portfolio_VIEW",
  vendor_profile_portfolio_add: "VENDOR_PROFILE_Portfolio_ADD",
  vendor_profile_portfolio_edit: "VENDOR_PROFILE_Portfolio_EDIT",
  vendor_profile_portfolio_delete: "VENDOR_PROFILE_Portfolio_DELETE",
  vendor_profile_portfolio_verify: "VENDOR_PROFILE_Portfolio_VERIFY",
  vendor_profile_upload_portfolio_view: "VENDOR_PROFILE_UPLOAD_PORTFOLIO_VIEW",
  vendor_profile_upload_portfolio_upload:
    "VENDOR_PROFILE_UPLOAD_PORTFOLIO_UPLOAD",
  vendor_profile_upload_coq_view: "VENDOR_PROFILE_UPLOAD_COQ_VIEW",
  vendor_profile_upload_coq_upload: "VENDOR_PROFILE_UPLOAD_COQ_UPLOAD",
  vendor_profile_poc_view: "VENDOR_PROFILE_POC_VIEW",
  vendor_profile_poc_edit: "VENDOR_PROFILE_POC_EDIT",
  vendor_profile_poc_add: "VENDOR_PROFILE_POC_ADD",
  vendor_profile_poc_delete: "VENDOR_PROFILE_POC_DELETE",
  vendor_profile_expertise_view: "VENDOR_PROFILE_EXPERTISE_VIEW",
  vendor_profile_expertise_add: "VENDOR_PROFILE_EXPERTISE_ADD",
  vendor_profile_expertise_edit: "VENDOR_PROFILE_EXPERTISE_EDIT",
  vendor_profile_expertise_delete: "VENDOR_PROFILE_EXPERTISE_DELETE",
  vendor_profile_verification_view: "VENDOR_PROFILE_VERIFICATION_VIEW",
  vendor_profile_verification_edit: "VENDOR_PROFILE_VERIFICATION_EDIT",
  vendor_profile_notes_delete: "VENDOR_PROFILE_NOTES_DELETE",
  vendor_profile_delete: "VENDOR_PROFILE_DELETE",
  deals_view: "DEALS_VIEW",
  deals_view_project_details: "DEALS_VIEW_PROJECT_DETAILS",
  deals_view_selected_vendors: "DEALS_VIEW_SELECTED_VENDORS",
  deals_view_recommended_vendors: "DEALS_VIEW_RECOMMENDED_VENDORS",
  deals_shortlist: "DEALS_SHORTLIST",
  industry_view: "INDUSTRY_VIEW",
  industry_delete: "INDUSTRY_DELETE",
  industry_add_new: "INDUSTRY_ADD_NEW",
  roles_view: "ROLES_VIEW",
  roles_add: "ROLES_ADD",
  roles_edit: "ROLES_EDIT",
  roles_delete: "ROLES_DELETE",
  user_view: "USER_VIEW",
  user_add: "USER_ADD",
  user_edit: "USER_EDIT",
  user_delete: "USER_DELETE",
};
