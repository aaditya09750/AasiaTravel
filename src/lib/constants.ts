export const ROUTES = {
  HOME: '/',
  PACKAGES: '/packages',
  PACKAGE_DETAILS: (id: string) => `/packages/${id}`,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
