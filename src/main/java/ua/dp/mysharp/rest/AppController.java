package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import ua.dp.mysharp.service.PlaceService;
import ua.dp.mysharp.service.UserService;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
@RequestMapping("/api/server")
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
    @ResponseStatus(HttpStatus.OK)
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
