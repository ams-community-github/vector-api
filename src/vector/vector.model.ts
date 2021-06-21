import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty } from "class-validator";

export class VectorModel {
  @ApiProperty()
  @IsDecimal()
  public x: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  public y: number;
}
