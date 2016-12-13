package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
@RequestMapping("/api/places")
public class PlaceController {

    @Autowired
    private
    PlaceService placeService;
    @Autowired
    private
    UserService userService;

    @RequestMapping("/")
    public ResponseEntity<Collection<Place>> getAll() {
        return new ResponseEntity<>(placeService.getAll(), HttpStatus.OK);
    }

//    @RequestMapping("/one")
//    public PlaceDTO getMainPlace(){
//        return placeService.convert(placeService.get());
//    }

    @RequestMapping("/one/{id}")
    public PlaceDTO get(@RequestParam("id") Long id) {
        return placeService.convert(placeService.find(id));
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public ResponseEntity<Place> add(@RequestBody Place item) {
        return new ResponseEntity<>(placeService.add(item), HttpStatus.CREATED);
    }
    @RequestMapping(value = "/new", params = {"name", "photo", "owner"})
    public ResponseEntity<Place> add(@RequestParam("name") String name,
                                     @RequestParam("photo") String photo,
                                     @RequestParam("owner") Long ownerId) {
        Place place = placeService.create(name, ownerId);
        place.setPhotoURL(photo);
        return new ResponseEntity<>(placeService.add(place), HttpStatus.CREATED);
    }
}
