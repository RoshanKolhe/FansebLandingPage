export const ACCESS_TOKEN = "786yshgvf54";
export const SESSION_ID = "72ygsbsb3g7";
export const ORG_ID = "8374mstsn23";

export const routesForBreadcrumbs = [
  {
    path: "/dashboard/app",
    breadcrumb: "Dashboard",
  },
  {
    path: "/dashboard/app/projects",
    breadcrumb: "All Projects",
  },
  {
    path: "/dashboard/app/projects/:id",
    breadcrumb: "Project Detail",
  },
  {
    path: "/dashboard/user",
    breadcrumb: "Users",
  },
  {
    path: "/dashboard/user/createUser",
    breadcrumb: "Create User",
  },

  {
    path: "/dashboard/profiles/:id",
    breadcrumb: "Personal Information",
  },
];

export const routesMapper = [
  "/dashboard/app",
  "/dashboard/app/projects",
  "/dashboard/app/projects/:id",
  "/dashboard/user/createUser",
  "/dashboard/user",
  "/dashboard/profiles",
  "/dashboard/profiles/:id",
];

export const ratingLabels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

export const basicInfoPath = "basic";
export const addressesPath = "address";
export const bankDetailsPath = "bank-details";
export const verificationPath = "verification";
export const servicePath = "service";
export const portfolioPath = "portfolio";
export const uploadPortfolioPath = "upload-profile";
export const poc = "poc";
export const expertiseBreakup = "expertise-breakup";
export const uploadCOQPath = "upload-coq";
