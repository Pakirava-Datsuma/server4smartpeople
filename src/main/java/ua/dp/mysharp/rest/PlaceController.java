package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.service.PlaceService;

import java.util.Collection;

import static ua.dp.mysharp.rest.API.RestApi.*;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
public class PlaceController {

    @Autowired
    private PlaceService placeService;

    @RequestMapping(GET_PLACELIST_URL)
    @ResponseStatus( HttpStatus.OK)
    @ResponseBody
    public Collection<Place> getAll() {
        return placeService.getAll();
    }

    @RequestMapping(GET_PLACELIST_FOR_USER_URL)
    @ResponseStatus( HttpStatus.FOUND)
    @ResponseBody
    public Collection<Place> getAllForUser(@RequestParam("id") long id) {
        return placeService.getAllForUser(id);
    }

    @RequestMapping(GET_PLACE_URL)
    @ResponseStatus( HttpStatus.FOUND)
    @ResponseBody
    public Place get(@PathVariable("id") long id) {
        return placeService.get(id);
    }

    @RequestMapping(value = DELETE_PLACE_URL, method = RequestMethod.DELETE)
    @ResponseStatus( HttpStatus.OK)
    public Place delete(@PathVariable("id") long id) {
        return placeService.delete(id);
    }

    @RequestMapping(value = NEW_PLACE_URL, method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Place add(@RequestBody PlaceDTO item) {
        return placeService.create(item);
    }
}
