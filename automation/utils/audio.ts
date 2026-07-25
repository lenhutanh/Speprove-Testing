import fs from 'fs';

export function getWavDuration(filePath: string): number {
  const buffer = fs.readFileSync(filePath);
  const byteRate = buffer.readUInt32LE(28);

  const dataOffset = buffer.indexOf('data');
  if (dataOffset === -1) {
    throw new Error('Invalid WAV file: "data" chunk signature not found.');
  }

  const dataSize = buffer.readUInt32LE(dataOffset + 4);
  return Math.round((dataSize / byteRate) * 1000);
}
