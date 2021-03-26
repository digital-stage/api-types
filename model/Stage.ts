interface Stage<IdType = string> {
  _id: IdType;

  name: string;
  description: string;
  password: string | null;

  admins: IdType[];
  soundEditors: IdType[];

  iconUrl: string | null;

  videoType: string;
  videoTypeManaged: boolean;
  audioType: string;
  audioTypeManaged: boolean;

  [additional: string]: any;
}

export default Stage;
