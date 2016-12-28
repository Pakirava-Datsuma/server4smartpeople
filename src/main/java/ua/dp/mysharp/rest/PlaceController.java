package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.service.PlaceService;

import java.util.Collection;

import static ua.dp.mysharp.rest.API.RestApi.GET_PLACELIST_URL;
import static ua.dp.mysharp.rest.API.RestApi.GET_PLACE_URL;
import static ua.dp.mysharp.rest.API.RestApi.NEW_PLACE_URL;

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

    @RequestMapping(GET_PLACE_URL)
    @ResponseStatus( HttpStatus.FOUND)
    @ResponseBody
    public Place get(@RequestParam("id") long id) {
        return placeService.get(id);
    }

    @RequestMapping(value = NEW_PLACE_URL, method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Place add(@RequestBody PlaceDTO item) {
        return placeService.create(item);
    }
}
