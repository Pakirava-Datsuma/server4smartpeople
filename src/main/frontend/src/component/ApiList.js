import {ApiController} from './ApiController';


export const HouseController =
  new ApiController ({
    prefix: "/places",
    list: "/get",
    get: "/get",
    create: "/new",
  });
export var UserController =
  new ApiController ({
    prefix: "/users",
    list: "/get",
    get: "/get",
    create: "/new",
  });
