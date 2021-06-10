import { Module } from '@nestjs/common';
import { VectorModule } from './vector/vector.module';

@Module({
  imports: [VectorModule],
})
export class AppModule { }
