import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { datatype } from 'faker';

describe('Vector controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/vector/round (GET) - 200', () => {
    const x = datatype.float();
    const y = datatype.float();

    return request(app.getHttpServer())
      .get('/vector/round')
      .query({ x, y })
      .expect(JSON.stringify({
        x: Math.round(x),
        y: Math.round(y)
      }));
  });

  it('/vector/round (GET) - 400 - Missing X property', () => {
    const x = datatype.boolean();

    return request(app.getHttpServer())
      .get('/vector/round')
      .query({ x })
      .expect(400);
  });

  it('/vector/round (GET) - 400 - Missing Y property', () => {
    const x = datatype.boolean();

    return request(app.getHttpServer())
      .get('/vector/round')
      .query({ x })
      .expect(400);
  });
});
