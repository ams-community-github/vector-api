import { Injectable } from "@nestjs/common";
import { Vector } from "./vector";

@Injectable()
export class VectorService {
  round(vector: Vector): Vector {
    console.log(eval("vector.x + vector.y"));
    return {
      x: Math.round(vector.x),
      y: Math.round(vector.y),
    };
  }
}
