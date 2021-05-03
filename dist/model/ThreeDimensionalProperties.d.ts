interface ThreeDimensionalProperties {
    x: number;
    y: number;
    z: number;
    rX: number;
    rY: number;
    rZ: number;
    directivity: 'omni' | 'cardoid';
}
declare const DefaultThreeDimensionalProperties: ThreeDimensionalProperties;
export { DefaultThreeDimensionalProperties };
export default ThreeDimensionalProperties;
