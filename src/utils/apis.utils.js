//Auth
export const emailLogin = "/user";
export const mobileLogin = "/customer/mobile_login";
export const verifyOtp = "/customer/validate_mobile/otp";
export const fetchAllForgotPasswordsApi = "/forgot_password";
export const validateTokenApi = "/user/validate_user_password_link";
export const setPasswordApi = "/reset_password";

//Users
export const userApi = "/user";
export const customerApi = "/user/customer";
export const deletUserApi = "/user";
export const uploadUserProfileApi = "/user/upload_profile";
export const getUserPermissionsApi = "/user/permissions";
export const getAllPermissionsApi = "/perm/getAllPermissions?type=supply";

//update password
export const updatePasswordsApi = "/user/change_password";

//Profile Details
export const getVendorProfileDetails = "/vendor/business_profile";
export const fetchAllVendorProfilesApi = "/vendor/get_all_business_profiles";
export const searchBusinessProfileApi = "/vendor/filter_bus_profile";
export const getNotesByID = "vendor/business_profile/get_notes";
export const addNotesByID = "vendor/business_profile/notes";
export const updateNotesByID = "vendor/business_profile/notes";
export const businessAddressApi = "/vendor/business_addresses";
export const addBusinessAddress = "/vendor/business_address";
export const searchLanguageApi = "/search/languages";
export const searchSkillApi = "/search/skills";
export const updateLanguagesApi = "/vendor/languages";
export const updateSkillsApi = "/vendor/skills";
export const getOrgIdByProfileIdApi = "/get_profile_org";
export const deleteNoteApi = "/vendor/business_profile/notes";
export const advanceFilterApi = "/vendor/filter_bus_profile";

//Services
export const getAllServices = "/services";
export const deleteServices = "/service";
export const addServices = "/service";
export const userAddress = "/client/business_address";
export const getServiceTeckStacksApi = "/get_service_tech_stacks";
export const getServiceTagsApi = "/get_service_tags";
export const fetchTeckStackBySearchApi = "/search/tech_stacks";
export const fetchTagsBySearchApi = "/search/tags";
export const fetchVendorShortlistedProfilesByFilterApi =
  "/supply/filter_vendors_profile";

// Notifications
export const fetchAllNotificationsApi = "/get_all_user_notifications/";
export const markNotificationAsReadApi = "/mark_push_notification_as_read";
export const markAllNotificationsAsReadApi =
  "/mark_all_push_notification_as_read";

// Suppport
export const reportedIssueApi = "/support";
export const fetchAllSupportApi = "/exmyb/support/get_general_tickets";
export const allVendorServices = "/get_vendor_services";
export const vendorBusinessAddress = "/vendor/business_addresses";
export const vendorNotes = "/vendor/business_profile/get_notes";
export const getAllSupportComment = "/support/comments";
export const createGlobalSupportCommentApi = "/support/comment";
export const ticketstatusApi = "/change_support_ticket/state";
// export const viewVendorNotes = "/vendor/business_profile/get_notes";

// Vendor Business Profile
export const businessProfileApi = "/vendor/business_profile";

// industries
export const allFunctionIndustry = "/industry";
export const getAllIndustry = "/industries";
export const deleteIndustry = "/industry";
export const addIndustry = "/vendor_industry/(vendor_id)/(profile_id)";
export const globalReportedIssueApi = "/support_ticket";
export const searchIndustryApi = "/industries/search_industry";
export const industryValidateSlug = "/industry_slug";

// vendor service

export const vendorService = "/vendor_service";
export const validateSlugServiceApi = "/service_slug";

// portfolio
export const getAllPortfolio = "/vendor/get_profile_portfolios";
export const deletePortfolio = "/vendor/portfolio";
export const addPortfolio = "/vendor/portfolio";
export const vendorViewPortFolio = "/vendor/get_profile_portfolios";

// upload portfolio

export const getAllUploadPortfolio = "/vendor/portfolio_files";
export const deleteUploadPortfolio = "/portfolio";
export const addUploadPortfolio = "/vendor/portfolio_files";

// vendor services

export const getAllVendorServices = "/get_vendor_services";
export const searchVendorServiceApi = "/get_vendor_services";
export const deleteVendorServices = "/vendor_service";
export const addVendorServices = "/vendor_service";
export const searchServiceApi = "/service/search_service";
export const addCustomServiceApi = "/vendor_service";

// skills
export const getAllSkills = "/get_all_skills";
export const deleteSkills = "/skill";
export const updateSkills = "/skill";
export const addSkills = "/skill";

// role
export const getAllRole = "/role";
export const getAllPermissions = "/user/permissions?type=supply";
export const deleteRole = "/language";
export const updateRole = "/role";
export const addRoleApi = "/role/create";

// language
export const getAllLanguage = "/get_all_languages";
export const deleteLanguage = "/language";
export const updateLanguage = "/language";
export const addLanguage = "/language";

// Dashboard
export const dashboardMatrxiApi = "/ops_dashboard_metrics";

//POC
export const addPOCApi = "/vendor/contact";
export const fetchAllPOCApi = "/vendor/contacts";
export const updatePOCApi = "/vendor/contact";
export const deletePOCApi = "/vendor/contact";

// tech stack
export const getAllTechstack = "/get_all_tech_stacks";
export const addTechstack = "/tech_stack";
export const deleteTechstack = "/tech_stack";
export const updateTechstack = "/tech_stack";
export const getAllTechstackAndTagsById = "/service/get_tech_stacks_tags";

// expertise_breakup
export const getAllExpertise = "/vendor/all_expertise";
export const deleteExpertise = "/vendor/expertise";
export const updateExpertise = "/vendor/expertise";
export const addExpertise = "/vendor/expertise";

// upload coq

export const getAllUploadCOQ = "/vendor/get_coq_files";
export const getCOQfilesByID = "/vendor/coq_files/1";
export const deleteUploadCOQ = "vendor/coq_files/3";
export const addUploadCOQ = "/vendor/coq_files";

export const updateDeleteAddExpertise = "/vendor/expertise";
// team_info
export const getAllTeamInfo = "/vendor/get_all_role_wise_teams";
export const updateDeleteAddTeamInfo = "/vendor/role_wise_team";

// Turnover
export const fetchTurnoverForLast3YearsApi = "/vendor/last_three_turnovers";
export const turnoverApi = "/vendor/turnover";

// tag
export const getAllTags = "/get_tags";
export const addTag = "/tag";
export const deleteTag = "/tag";
export const updateTag = "/tag";

// Accounts
export const getAssignedVendorApi = "/vendor/business_profile/assign_vendor";

// shortlisting
export const getAllShortlistedVendors = "/supply/get_deals";
export const getShortlistedVendorById = "/supply/get_deal";
export const searchShortlistedVendors = "/supply/search_deals";
export const getRecommendedVendors = "/supply/get_recommended_vendors";
export const getShortlistedVendors = "supply/shortlisted_vendors";
export const addVendorAsSelected = "supply/shortlisted_vendors";
export const deleteVendorAsSelected = "supply/shortlisted_vendors";
export const getVendorByPortfolioIds =
  "vendor/get_profile_portfolios_by_ids?portfolio_ids";

export const selectVerifiedVendorApi = "/vendor/change_business_profile_stage";

// product api's
export const getAllProducts = "/product/get_all_products";
export const getAllProductsByID = "/product/get_detail";
