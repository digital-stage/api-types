import {RouterId} from "../IdTypes";

interface Router {
    id: RouterId;

    type: string;

    [additional: string]: any;
}

export default Router;
