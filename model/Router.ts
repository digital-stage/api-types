interface Router<IdType = string> {
  _id: IdType;

  types: {
    [type: string]: number;
  };

  countryCode: string;
  city: string;
  position: {
    lat: number;
    lng: number;
  };

  [additional: string]: any;
}

export default Router;
