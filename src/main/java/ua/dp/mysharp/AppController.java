package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
@RequestMapping("/mia")
public class AppController {

    @Autowired
    UserService userService;
    @Autowired
    PlaceService placeService;

    @RequestMapping("/about")
    public String aboutMIA() {
        return "Hi! This is #MIA - My Information Assistant.";
    }

    @RequestMapping("/test")
    public String createTestEntities() {
        placeService.createTestPlace(userService.createTestUser());
        return String.format(
                "now application has:\n" +
                    " users: %d\n" +
                    " places: %d",
                userService.getAll().size(),
                placeService.getAll().size());
    }
}
