package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.rest.API.NewPlace;
import ua.dp.mysharp.service.PlaceService;

import java.util.Collection;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
@RequestMapping("/api/places")
public class PlaceController {

    @Autowired
    private PlaceService placeService;

    @RequestMapping("/get")
    @ResponseStatus( HttpStatus.OK)
    @ResponseBody
    public Collection<Place> getAll() {
        return placeService.getAll();
    }

    @RequestMapping("/get/{id}")
    @ResponseStatus( HttpStatus.FOUND)
    @ResponseBody
    public Place get(@RequestParam("id") long id) {
        return placeService.get(id);
    }

    @RequestMapping(value = "/new", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Place add(@RequestBody NewPlace item) {
        return placeService.create(item.getName(), item.getOwnerId());
    }
}
