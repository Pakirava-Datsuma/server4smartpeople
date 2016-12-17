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

    @RequestMapping("/")
    public ResponseEntity<Collection<Place>> getAll() {
        return new ResponseEntity<>(placeService.getAll(), HttpStatus.OK);
    }

//    @RequestMapping("/one")
//    public PlaceDTO getMainPlace(){
//        return placeService.convert(placeService.get());
//    }

    @RequestMapping("/place/{id}")
    public ResponseEntity<Place> get(@RequestParam("id") Long id) {
        return new ResponseEntity<>(placeService.find(id), HttpStatus.FOUND);
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public ResponseEntity<Place> add(@RequestBody Place item) {
        return new ResponseEntity<>(placeService.add(item), HttpStatus.CREATED);
    }
}
