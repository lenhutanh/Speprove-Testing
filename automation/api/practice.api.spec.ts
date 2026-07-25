import { test, expect } from '@playwright/test';
import { StatusCodes } from '../constants';
import path from 'path';
import fs from 'fs';

test.describe('Practice API Tests', () => {
  test.beforeAll(async ({ request }) => {
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    if (!email || !password) {
      throw new Error("Missing TEST_USER_EMAIL or TEST_USER_PASSWORD in environment variables.");
    }

    const loginResponse = await request.post('/api/v1/auth/login', {
      data: { email, password },
    });
    expect(loginResponse.status()).toBe(StatusCodes.OK);
  });

  test('Speaking Practice API Flow - Success', async ({ request }) => {
    const questionsResponse = await request.get('/api/v1/forecast-question');
    expect(questionsResponse.status()).toBe(StatusCodes.OK);
    const questionsBody = await questionsResponse.json();
    expect(questionsBody.success).toBe(true);
    expect(questionsBody.data).toBeDefined();
    expect(questionsBody.data.length).toBeGreaterThan(0);

    const questionId = questionsBody.data[0].id || questionsBody.data[0]._id;
    expect(questionId).toBeDefined();

    const fileBuf = fs.readFileSync(path.join(__dirname, '..', 'assets', 'sample.wav'));
    const uploadResponse = await request.post('/api/v1/file/upload-audio', {
      multipart: {
        audio: {
          name: 'sample.wav',
          mimeType: 'audio/wav',
          buffer: fileBuf,
        },
        purpose: 'practice',
      },
    });
    expect(uploadResponse.status()).toBe(StatusCodes.OK);
    const uploadBody = await uploadResponse.json();
    expect(uploadBody.success).toBe(true);
    const audioFileId = uploadBody.data.id || uploadBody.data._id;
    expect(audioFileId).toBeDefined();

    const attemptResponse = await request.post('/api/v1/attempt', {
      data: {
        mode: 'practice',
        forecastQuestionId: questionId,
        audioFileId: audioFileId,
      },
    });
    expect(attemptResponse.status()).toBe(StatusCodes.OK);
    const attemptBody = await attemptResponse.json();
    expect(attemptBody.success).toBe(true);
    const attemptId = attemptBody.data.id || attemptBody.data._id;
    expect(attemptId).toBeDefined();

    const getAttemptResponse = await request.get(`/api/v1/attempt/${attemptId}`);
    expect(getAttemptResponse.status()).toBe(StatusCodes.OK);
    const getAttemptBody = await getAttemptResponse.json();
    expect(getAttemptBody.success).toBe(true);
    expect(getAttemptBody.data.id || getAttemptBody.data._id).toBe(attemptId);
  });
});
