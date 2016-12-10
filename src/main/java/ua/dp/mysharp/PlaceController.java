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
@RequestMapping("/places")
public class PlaceController {

    @Autowired
    private
    PlaceService placeService;
    @Autowired
    private
    UserService userService;

    @RequestMapping("/all")
    public Collection<PlaceDTO> getPlaces() {
        return placeService.convert(placeService.getAll());
    }

    @RequestMapping("/one")
    public PlaceDTO getMainPlace(){
        return placeService.convert(placeService.getOne());
    }

    @RequestMapping(value = "/one",
                    params = {"id"})
    public PlaceDTO getOne(@RequestParam("id") Long id) {
        return placeService.convert(placeService.find(id));
    }

    @RequestMapping(value = "/new",
                    params = {"name", "photo", "owner"})
    public PlaceDTO addPlace(@RequestParam("name") String name,
                          @RequestParam("photo") String photo,
                          @RequestParam("owner") Long ownerId) {
        Place place = placeService.create(name, ownerId);
        place.setPhotoURL(photo);
        return placeService.convert(place);
    }

    @RequestMapping("/test")
    public PlaceDTO createTestPlace() {
        User owner = userService.getOne();
        if (owner == null) owner = userService.createTestUser();
        return placeService.convert(placeService.createTestPlace(owner));
    }

}
