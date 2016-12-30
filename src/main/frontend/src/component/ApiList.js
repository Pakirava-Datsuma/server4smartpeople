import {ApiController} from './ApiController';


export const HouseController =
  new ApiController ({
    prefix: "/places",
  });
export const UserController =
  new ApiController ({
    prefix: "/users",
  });
