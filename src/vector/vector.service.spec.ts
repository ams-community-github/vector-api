import { Test } from "@nestjs/testing";
import { Factory } from "rosie";
import { random } from "faker";
import { Vector } from "./vector";
import { VectorService } from "./vector.service";

describe("VectorService", () => {
  let service: VectorService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [VectorService],
    }).compile();

    service = module.get<VectorService>(VectorService);
  });

  const createVector = () =>
    new Factory<Vector>()
      .attr("x", () => random.number())
      .attr("y", () => random.number())
      .build();

  it(`
    Given a Vector
    When rouding the Vector
    Then x and y properties are rounded
  `, async () => {
    // Given
    const vector = createVector();
    const expected = {
      x: Math.round(vector.x),
      y: Math.round(vector.y),
    };

    // When
    const actual = service.round(vector);

    // Then
    expect(actual).toEqual(expected);
  });

  it(`
    Given a vector
    When computing the vector length
    Then the length is returned
  `, async () => {
    // Given
    const vector = createVector();
    const { x, y } = vector;
    const expected = {
      x: x * x,
      y: y * y,
    };

    // When
    const actual = service.length(vector);

    // Then
    expect(actual).toEqual(expected);
  });
});
