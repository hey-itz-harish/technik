// Technik School Portal API Service

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

let cachedCsrfToken = '';

/**
 * Retrieves the CSRF token from sessionStorage (set during OTP verification),
 * document.cookie, or cached memory.
 */
export function getCsrfToken() {
  const fromSession = sessionStorage.getItem('technik_csrf_token');
  if (fromSession) return fromSession;
  if (cachedCsrfToken) return cachedCsrfToken;
  try {
    const match = document.cookie.match(new RegExp('(^|;\\s*)csrf_token=([^;]+)'));
    if (match && match[2]) {
      cachedCsrfToken = decodeURIComponent(match[2]);
      return cachedCsrfToken;
    }
  } catch {
    // Fall through
  }
  return cachedCsrfToken || '';
}

/**
 * Parses a fetch Response as JSON and throws a readable Error if the
 * request failed, so callers can surface it directly to the user.
 */
async function parseJsonOrThrow(response) {
  let data = null;
  try {
    const csrfHeader = response.headers.get('X-CSRF-Token');
    if (csrfHeader) {
      cachedCsrfToken = csrfHeader;
    }
    data = await response.json();
  } catch {
    // Non-JSON body (e.g. a network-level failure) — fall through.
  }

  if (!response.ok || (data && data.success === false)) {
    const message = (data && (data.error || data.message)) || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

/**
 * Register a school by sending POST request to /api/school/register.
 *
 * @param {Object} payload Registration payload
 * @returns {Promise<Object>} API Response object
 */
export async function registerSchoolApi(payload) {
  const school = payload.schoolDetails || payload;
  const coordinator = payload.coordinatorDetails || payload;

  // Format request body according to API specification
  const requestBody = {
    schoolName: school.schoolName || "",
    board: school.board || "",
    state: school.state || "",
    district: school.district || "",
    city: school.city || "",
    address: school.address || "",
    pincode: school.pincode || "",
    email: school.email || "",
    phone: school.mobile || school.phone || "",
    schoolMobile: school.mobile || school.schoolMobile || "",
    password: payload.password || "",
    principalName: school.principalName || "",
    coordinatorName: coordinator.name || coordinator.coordinatorName || "",
    coordinatorDesignation: coordinator.designation || coordinator.coordinatorDesignation || "",
    coordinatorMobile: coordinator.mobile || coordinator.coordinatorMobile || "",
    coordinatorEmail: coordinator.email || coordinator.coordinatorEmail || ""
  };

  const response = await fetch(`${API_BASE_URL}/api/school/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(requestBody)
  });

  return parseJsonOrThrow(response);
}

/**
 * Activates a school account using the token from the activation email.
 */
export async function activateAccountApi({ token, type = 'school' }) {
  const response = await fetch(`${API_BASE_URL}/api/auth/activate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ token, type })
  });

  return parseJsonOrThrow(response);
}

/**
 * Checks whether an account is activated via backend API.
 */
export async function getActivationStatusApi({ email, token, type = 'school' }) {
  const params = new URLSearchParams();
  if (email) params.append('email', email);
  if (token) params.append('token', token);
  if (type) params.append('type', type);

  const response = await fetch(`${API_BASE_URL}/api/auth/activation-status?${params.toString()}`, {
    method: 'GET',
    credentials: 'include'
  });

  return parseJsonOrThrow(response);
}

/**
 * Asks the backend to resend a fresh activation email (frontend "Resend" button).
 */
export async function resendActivationApi({ email, type = 'school' }) {
  const response = await fetch(`${API_BASE_URL}/api/auth/resend-activation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, type })
  });

  return parseJsonOrThrow(response);
}

/**
 * Builds the <img> src for the MFA setup QR code (a plain GET with query
 * params — no fetch/blob handling needed).
 */
export function getMfaSetupQrSrc(email, actToken, type = 'school') {
  const params = new URLSearchParams({ email, actToken, type });
  return `${API_BASE_URL}/api/auth/mfa/setup?${params.toString()}`;
}

/**
 * Confirms the code entered from the authenticator app during MFA setup.
 */
export async function verifyMfaSetupApi({ email, code, actToken, type = 'school' }) {
  const response = await fetch(`${API_BASE_URL}/api/auth/mfa/verify-setup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, code, actToken, type })
  });

  return parseJsonOrThrow(response);
}

/**
 * Logs a school in with email/password. On success, no session is created
 * yet — a verification code has been emailed, and the caller must proceed
 * to code verification.
 */
export async function loginSchoolApi({ email, password, rememberMe = false }) {
  const response = await fetch(`${API_BASE_URL}/api/school/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password, rememberMe })
  });

  return parseJsonOrThrow(response);
}

/**
 * Checks whether Microsoft Authenticator has already been set up for an
 * account, so the Code Verification screen knows which options to offer.
 */
export async function getMfaStatusApi({ email, type = 'school' }) {
  const params = new URLSearchParams({ email, type });
  const response = await fetch(`${API_BASE_URL}/api/auth/mfa-status?${params.toString()}`, {
    method: 'GET',
    credentials: 'include'
  });

  return parseJsonOrThrow(response);
}

/**
 * Helper to build auth headers with both Bearer JWT access token and X-CSRF-Token.
 */
export function getAuthHeaders(customHeaders = {}) {
  const headers = { ...customHeaders };
  const csrfToken = getCsrfToken();
  if (csrfToken) {
    headers['X-CSRF-Token'] = csrfToken;
  }
  const accessToken = sessionStorage.getItem('technik_access_token');
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return headers;
}

/**
 * Completes login by verifying the code (mail OTP or MS Authenticator TOTP).
 * On success the backend sets the session (JWT + CSRF) cookies and returns csrfToken & token.
 */
export async function verifyCodeApi({ email, code, mode = 'mail', type = 'school', rememberMe = false }) {
  const params = new URLSearchParams({ mode });
  const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp?${params.toString()}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, otp: code, type, rememberMe })
  });

  const data = await parseJsonOrThrow(response);
  if (data && data.csrfToken) {
    sessionStorage.setItem('technik_csrf_token', data.csrfToken);
    cachedCsrfToken = data.csrfToken;
  }
  if (data && data.token) {
    sessionStorage.setItem('technik_access_token', data.token);
  }
  if (data && data.school && data.school.id) {
    sessionStorage.setItem('technik_school_id', data.school.id);
  }
  return data;
}

/**
 * Gets currently authenticated user / school profile.
 */
export async function getSchoolProfileApi() {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });

  const data = await parseJsonOrThrow(response);
  if (data && data.id) {
    sessionStorage.setItem('technik_school_id', data.id);
  }
  return data;
}

/**
 * Fetches enrolled students list from StudentDetails with optional filters.
 */
export async function getSchoolStudentsApi({ search = '', gradeLevel = 'All', year = 'All', schoolId = '' } = {}) {
  const params = new URLSearchParams();
  const effectiveSchoolId = schoolId || sessionStorage.getItem('technik_school_id') || '';
  if (search) params.append('search', search);
  if (gradeLevel && gradeLevel !== 'All') params.append('gradeLevel', gradeLevel);
  if (year && year !== 'All') params.append('year', year);
  if (effectiveSchoolId) params.append('schoolId', effectiveSchoolId);

  const response = await fetch(`${API_BASE_URL}/api/school/students?${params.toString()}`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });

  return parseJsonOrThrow(response);
}

/**
 * Fetches students nominated for Technik Pride Award from TechnikPrideNomination.
 */
export async function getPrideNominationsApi({ year = '', search = '', schoolId = '' } = {}) {
  const params = new URLSearchParams();
  const effectiveSchoolId = schoolId || sessionStorage.getItem('technik_school_id') || '';
  if (year && year !== 'All') params.append('year', year);
  if (search) params.append('search', search);
  if (effectiveSchoolId) params.append('schoolId', effectiveSchoolId);

  const response = await fetch(`${API_BASE_URL}/api/technik-pride/nominations?${params.toString()}`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });

  return parseJsonOrThrow(response);
}

/**
 * Uploads a supporting document / certificate file to the server.
 */
export async function uploadNominationDocumentApi(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/school/upload-document`, {
    method: 'POST',
    credentials: 'include',
    headers: getAuthHeaders(),
    body: formData
  });

  return parseJsonOrThrow(response);
}

/**
 * Submits nominations for Technik Pride Award (single or batch).
 */
export async function nominatePrideStudentsApi(payload) {
  const response = await fetch(`${API_BASE_URL}/api/technik-pride/nominate`, {
    method: 'POST',
    headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    body: JSON.stringify(payload)
  });

  return parseJsonOrThrow(response);
}

/**
 * Registers students for Technik Olympiad tracks.
 */
export async function registerOlympiadStudentsApi(payload) {
  const response = await fetch(`${API_BASE_URL}/api/olympiad/register`, {
    method: 'POST',
    headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    body: JSON.stringify(payload)
  });

  return parseJsonOrThrow(response);
}

/**
 * Admin Authentication & Technik Portal APIs
 */
export async function loginAdminApi({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: 'POST',
    headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });
  return parseJsonOrThrow(response);
}

export async function verifyAdminOtpApi({ email, otp }) {
  const response = await fetch(`${API_BASE_URL}/api/admin/verify-otp`, {
    method: 'POST',
    headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    body: JSON.stringify({ email, otp })
  });
  const data = await parseJsonOrThrow(response);
  if (data && data.token) {
    sessionStorage.setItem('technik_admin_access_token', data.token);
  }
  return data;
}

export async function getAdminStatsApi() {
  const response = await fetch(`${API_BASE_URL}/api/admin/stats`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });
  return parseJsonOrThrow(response);
}

export async function getAdminPrideNominationsApi() {
  const response = await fetch(`${API_BASE_URL}/api/admin/pride-nominations`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });
  return parseJsonOrThrow(response);
}

export async function updatePrideStatusApi(id, { status, adminStatus = '' }) {
  const response = await fetch(`${API_BASE_URL}/api/admin/pride-nominations/${id}/status`, {
    method: 'PATCH',
    headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    body: JSON.stringify({ status, adminStatus })
  });
  return parseJsonOrThrow(response);
}

export async function getAdminOlympiadRegistrationsApi() {
  const response = await fetch(`${API_BASE_URL}/api/admin/olympiad-registrations`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });
  return parseJsonOrThrow(response);
}

export async function getAdminUsersApi() {
  const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include'
  });
  return parseJsonOrThrow(response);
}

export async function createAdminUserApi(payload) {
  const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
    method: 'POST',
    headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    body: JSON.stringify(payload)
  });
  return parseJsonOrThrow(response);
}

