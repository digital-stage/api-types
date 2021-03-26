interface SoundCard<IdType = string> {
  _id: IdType;
  userId: IdType;

  /**
   * Soundcard identifier on system,
   * will make sound card unique together with user id
   */
  uuid: string;

  label: string;

  isDefault?: boolean;

  drivers: string[];
  driver: string | null;

  sampleRate: number;
  sampleRates: number[];
  periodSize: number;
  numPeriods: number; // default to 2

  softwareLatency: number | null;

  numInputChannels: number;
  numOutputChannels: number;

  inputChannels: number[]; // TODO: Replace this later by track presets
  outputChannels: number[]; // Will be 0 and 1 per default TODO: Later let user decide
}

export default SoundCard;
