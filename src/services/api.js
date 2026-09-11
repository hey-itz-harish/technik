// Technik School Portal API Service

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

/**
 * Parses a fetch Response as JSON and throws a readable Error if the
 * request failed, so callers can surface it directly to the user.
 */
async function parseJsonOrThrow(response) {
  let data = null;
  try {
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
 * Completes login by verifying the code (mail OTP or MS Authenticator TOTP).
 * On success the backend sets the session (JWT + CSRF) cookies.
 */
export async function verifyCodeApi({ email, code, mode = 'mail', type = 'school', rememberMe = false }) {
  const params = new URLSearchParams({ mode });
  const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp?${params.toString()}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, otp: code, type, rememberMe })
  });

  return parseJsonOrThrow(response);
}
