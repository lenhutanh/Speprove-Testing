import { test, expect } from '@playwright/test';
import { StatusCodes, ErrorCodes } from '../constants';

test.describe('Login API Tests', () => {
  test('POST /api/v1/auth/login - Success', async ({ request }) => {
    const response = await request.post('/api/v1/auth/login', {
      data: {
        email: 'user01@example.com',
        password: 'user123654',
      },
    });

    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
  });

  test('POST /api/v1/auth/login - Fail (Wrong password)', async ({ request }) => {
    const response = await request.post('/api/v1/auth/login', {
      data: {
        email: 'user01@example.com',
        password: 'WrongPassword123!',
      },
    });

    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.errorCode).toBe(ErrorCodes.INVALID_CREDENTIALS);
  });
});
