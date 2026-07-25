import { test, expect } from '@playwright/test';
import { StatusCodes } from '../constants';
import path from 'path';
import fs from 'fs';

test.describe('Attempt API Tests', () => {
  let questionId: string;
  let audioFileId: string;
  let attemptId: string;

  test.beforeAll(async ({ request }) => {
    const questionsResponse = await request.get('/api/v1/forecast-question');
    expect(questionsResponse.status()).toBe(StatusCodes.OK);
    const questionsBody = await questionsResponse.json();
    expect(questionsBody.success).toBe(true);

    questionId = questionsBody.data[0].id || questionsBody.data[0]._id;
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
    audioFileId = uploadBody.data.id || uploadBody.data._id;
    expect(audioFileId).toBeDefined();
  });

  test('POST /api/v1/attempt - Success', async ({ request }) => {
    const response = await request.post('/api/v1/attempt', {
      data: {
        mode: 'practice',
        forecastQuestionId: questionId,
        audioFileId: audioFileId,
      },
    });

    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
    attemptId = body.data.id || body.data._id;
    expect(attemptId).toBeDefined();
  });

  test('GET /api/v1/attempt/:id - Success', async ({ request }) => {
    expect(attemptId).toBeDefined();

    const response = await request.get(`/api/v1/attempt/${attemptId}`);
    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.data.id || body.data._id).toBe(attemptId);
  });

  test('POST /api/v1/attempt/:id/retry - Success', async ({ request }) => {
    expect(attemptId).toBeDefined();

    const response = await request.post(`/api/v1/attempt/${attemptId}/retry`);
    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
  });

  test('POST /api/v1/attempt - Fail (Missing forecastQuestionId)', async ({ request }) => {
    const response = await request.post('/api/v1/attempt', {
      data: {
        mode: 'practice',
        audioFileId: audioFileId,
      },
    });

    expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
    const body = await response.json();
    expect(body.success).toBe(false);
  });
});
