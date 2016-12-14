import {ApiController} from './ApiController';


export const HouseController =
  new ApiController ({
    prefix: "/places",
    getAll: "/",
    get: "/place/",
    post: "/new",
  });
export var UserController =
  new ApiController ({
    prefix: "/users",
    getAll: "/",
    get: "/user/",
    post: "/new",
  });
