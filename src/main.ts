import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Vector")
    .setDescription("The Vector API description")
    .setVersion("1.0")
    .addTag("vector")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  const secret_token = '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';
  const secet_jira_api_key = 'uc8W0qLMrSDhLo5esGMJCDDE';
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(80);
}
bootstrap();
