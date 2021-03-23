import { RouterId } from "../IdTypes";

interface Router {
  _id: RouterId;

  type: string;

  [additional: string]: any;
}

export default Router;
