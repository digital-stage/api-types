interface ThreeDimensionalProperties {
  x: number;
  y: number;
  z: number;
  rX: number;
  rY: number;
  rZ: number;
}

const DefaultThreeDimensionalProperties: ThreeDimensionalProperties = {
  x: 0,
  y: -1,
  z: 0,
  rX: 0,
  rY: 0,
  rZ: -180,
};
export { DefaultThreeDimensionalProperties };
export default ThreeDimensionalProperties;
