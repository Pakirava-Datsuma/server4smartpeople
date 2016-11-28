package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
@RequestMapping("/place")
public class PlaceController {

    @Autowired
    PlaceService placeService;

    @RequestMapping("/all")
    public Collection<Place> getPlaces() {
        return placeService.getAll();
    }

    @RequestMapping("/one")
    public Place getMainPlace(){
        return placeService.getOne();
    }

    @RequestMapping(value = "/one",
                    params = {"id"})
    public Place getOne(@RequestParam("id") Long id) {
        return placeService.find(id);
    }

}
