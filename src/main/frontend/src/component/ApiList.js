import {ApiController} from './ApiController';
import $ from "jquery";


export let HouseController =
  new ApiController ({
    prefix: "/places",
  });
HouseController.URL_LIST_FOR_USER = HouseController.URL_LIST + '/{id}';
 HouseController.getAllForUser = (id, callback)=>{
     let url = HouseController.URL_LIST_FOR_USER;
     console.log("list for user: " + url);
     $.ajax({
         headers: {
             "Accept": "application/json",
             // "Content-Type": "application/json"
         },
         type: "GET",
         url: url,
         // data: JSON.stringify(object),
         success: callback,
         error: callback
     });
 };

export const UserController =
  new ApiController ({
    prefix: "/users",
  });

