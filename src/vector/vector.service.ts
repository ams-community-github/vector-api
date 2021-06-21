import { Injectable } from "@nestjs/common";
import { Vector } from "./vector";

@Injectable()
export class VectorService {
  round(vector: Vector): Vector {
    return {
      x: Math.round(vector.x),
      y: Math.round(vector.y),
    };
  }

  length(vector: Vector): Vector {
    const { x, y } = vector;
    return {
      x: x * x,
      y: y * y
    };
  }
}
