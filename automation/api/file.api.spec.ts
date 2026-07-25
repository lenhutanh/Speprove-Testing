import { test, expect } from '@playwright/test';
import { StatusCodes } from '../constants';
import path from 'path';
import fs from 'fs';

test.describe('File Upload API Tests', () => {
  test('POST /api/v1/file/upload-audio - Success', async ({ request }) => {
    const fileBuf = fs.readFileSync(path.join(__dirname, '..', 'assets', 'sample.wav'));
    
    const response = await request.post('/api/v1/file/upload-audio', {
      multipart: {
        audio: {
          name: 'sample.wav',
          mimeType: 'audio/wav',
          buffer: fileBuf,
        },
        purpose: 'practice',
      },
    });

    expect(response.status()).toBe(StatusCodes.OK);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.data.id || body.data._id).toBeDefined();
  });

  test('POST /api/v1/file/upload-audio - Fail (Missing purpose)', async ({ request }) => {
    const fileBuf = fs.readFileSync(path.join(__dirname, '..', 'assets', 'sample.wav'));
    
    const response = await request.post('/api/v1/file/upload-audio', {
      multipart: {
        audio: {
          name: 'sample.wav',
          mimeType: 'audio/wav',
          buffer: fileBuf,
        },
      },
    });

    expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
    const body = await response.json();
    expect(body.success).toBe(false);
  });

  test('POST /api/v1/file/upload-audio - Fail (Unsupported file type)', async ({ request }) => {
    const textBuf = Buffer.from('this is not an audio file');
    
    const response = await request.post('/api/v1/file/upload-audio', {
      multipart: {
        audio: {
          name: 'test.txt',
          mimeType: 'text/plain',
          buffer: textBuf,
        },
        purpose: 'practice',
      },
    });

    expect(response.status()).toBe(StatusCodes.BAD_REQUEST);
    const body = await response.json();
    expect(body.success).toBe(false);
  });
});
