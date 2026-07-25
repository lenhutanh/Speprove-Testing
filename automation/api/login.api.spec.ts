import { test, expect } from '@playwright/test';
import { StatusCodes, ErrorCodes } from '../constants';

test.describe('Login API Tests', () => {
  test('POST /api/v1/auth/login - Success', async ({ request }) => {
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    if (!email || !password) {
      throw new Error("Missing TEST_USER_EMAIL or TEST_USER_PASSWORD in environment variables.");
    }

    const response = await request.post('/api/v1/auth/login', {
      data: {
        email: email,
        password: password,
      },
    });

    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
  });

  test('POST /api/v1/auth/login - Fail (Wrong password)', async ({ request }) => {
    const email = process.env.TEST_USER_EMAIL;

    if (!email) {
      throw new Error("Missing TEST_USER_EMAIL in environment variables.");
    }

    const response = await request.post('/api/v1/auth/login', {
      data: {
        email: email,
        password: 'WrongPassword123!',
      },
    });

    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.errorCode).toBe(ErrorCodes.INVALID_CREDENTIALS);
  });
});
