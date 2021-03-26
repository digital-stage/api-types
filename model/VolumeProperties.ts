interface VolumeProperties {
  volume: number;
  muted: boolean;
}

const DefaultVolumeProperties: VolumeProperties = {
  volume: 1,
  muted: false,
};
export { DefaultVolumeProperties };
export default VolumeProperties;
