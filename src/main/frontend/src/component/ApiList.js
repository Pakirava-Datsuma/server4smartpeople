import {ApiController} from './ApiController';
import $ from "jquery";


export let HouseController =
  new ApiController ({
    prefix: "/places",
  });
HouseController.URL_LIST_FOR_USER = HouseController.URL_LIST;
 HouseController.getAllForUser = (id, callback)=>{
     let url = HouseController.URL_LIST_FOR_USER + '/' + id;
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

//TODO: unificate all controllers
export const ServerController = {
    URL_TEST: "/api/server/test",
    CreateTestEntities: (callback) => {
        let url = ServerController.URL_TEST;
        console.log("test creation: " + url);
        $.ajax({
            headers: {
                // "Accept": "application/json",
                // "Content-Type": "application/json"
            },
            type: "GET",
            url: url,
            // data: JSON.stringify(object),
            success: callback,
            error: (result)=>{
                result="no connection";
                callback(result);
            },
        });
    }
};
