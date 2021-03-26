interface Router<IdType = string> {
  _id: IdType;

  types: {
    [type: string]: number;
  };

  countryCode: string;
  city: string;
  positon: {
    lat: number;
    lng: number;
  };

  [additional: string]: any;
}

export default Router;
