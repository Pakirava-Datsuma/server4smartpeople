package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import ua.dp.mysharp.service.ApiLogService;
import ua.dp.mysharp.service.PlaceService;
import ua.dp.mysharp.service.UserService;

import static ua.dp.mysharp.rest.API.RestApi.ABOUT_SERVER_URL;
import static ua.dp.mysharp.rest.API.RestApi.TEST_SERVER_URL;

/**
 * Created by swanta on 28.11.16.
 */
@RestController
public class AppController {

    @Autowired
    UserService userService;
    @Autowired
    PlaceService placeService;
    @Autowired
    ApiLogService logService;

    @RequestMapping(ABOUT_SERVER_URL)
    public String aboutMIA() {
        logService.write(ABOUT_SERVER_URL);
        return "Hi! This is #MIA - My Information Assistant.";
    }

    @RequestMapping(TEST_SERVER_URL)
    @ResponseStatus(HttpStatus.OK)
    public String createTestEntities() {
        logService.write(TEST_SERVER_URL);
        placeService.createTestPlace(userService.createTestUser());
        return String.format(
                "now application has:\n" +
                    " users: %d\n" +
                    " places: %d",
                userService.getAll().size(),
                placeService.getAll().size());
    }
}
