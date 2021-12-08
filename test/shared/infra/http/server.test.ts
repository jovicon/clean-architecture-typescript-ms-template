import request from 'supertest';
import { server, ServerEnvironment } from '../../../../src/shared/infra/http/server';

describe('Test Shared Infra Http Server', () => {
  it('health path should return 200', async () => {
    const serverEnvironment: ServerEnvironment = {
      PORT: 3000,
      PATH_BASE_MS: '/advance',
    };

    const app = server(serverEnvironment);

    try {
      const response = await request(app).get('/advance/health');
      expect(response.statusCode).toBe(200);
    } finally {
      app.close();
    }
  });
});
