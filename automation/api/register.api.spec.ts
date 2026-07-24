import { test, expect } from '@playwright/test';
import { StatusCodes, ErrorCodes } from '../constants';

test.describe('Register API Tests', () => {
  test('POST /api/v1/auth/register - Success', async ({ request }) => {
    const dynamicEmail = `api_user_${Date.now()}@example.com`;
    const response = await request.post('/api/v1/auth/register', {
      data: {
        email: dynamicEmail,
        password: 'Password123!',
        confirmPassword: 'Password123!',
      },
    });

    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
  });

  test('POST /api/v1/auth/register - Fail (Duplicate email)', async ({ request }) => {
    const response = await request.post('/api/v1/auth/register', {
      data: {
        email: 'user01@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
      },
    });

    expect(response.status()).toBe(StatusCodes.CONFLICT);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.errorCode).toBe(ErrorCodes.INTERNAL_SERVER_ERROR);
  });

  test('POST /api/v1/auth/verify-register - Fail (Invalid OTP)', async ({ request }) => {
    const response = await request.post('/api/v1/auth/verify-register', {
      data: {
        email: 'user01@example.com',
        otp: '000000',
      },
    });

    expect(response.status()).toBe(StatusCodes.NOT_ACCEPTABLE);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.errorCode).toBe(ErrorCodes.INTERNAL_SERVER_ERROR);
  });
});
