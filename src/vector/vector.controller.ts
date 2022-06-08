import { Controller, Get, Query } from "@nestjs/common";
import { VectorModel } from "./vector.model";
import { VectorService } from "./vector.service";

@Controller("vector")
export class VectorController {
  constructor(private vectorService: VectorService) {}

  @Get("round")
  round(@Query() vector: VectorModel) {
    return this.vectorService.round(vector);
  }

  @Get("length")
  length(@Query() vector: VectorModel) {
    return this.vectorService.length(vector);
  }
}
