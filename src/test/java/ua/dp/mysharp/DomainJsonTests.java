package ua.dp.mysharp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.test.context.junit4.SpringRunner;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.User;

import static org.assertj.core.api.Assertions.assertThat;
import static ua.dp.mysharp.TestEntityFactory.getNormalPlace;
import static ua.dp.mysharp.TestEntityFactory.getNormalUser;

/**
 * Created by swanta on 17.12.16.
 */

@RunWith(SpringRunner.class)
@JsonTest
@AutoConfigureJsonTesters
public class DomainJsonTests {
    @Autowired
    private JacksonTester<User> userJson;
    @Autowired
    private JacksonTester<Place> placeJson;

    @Test
    public void serializeUser() throws Exception {
        User user = getNormalUser();
        JsonContent<User> json = userJson.write(user);
        System.out.println(user);
        System.out.println(json.getJson());
        
        assertThat(json).extractingJsonPathNumberValue("id").isEqualTo(user.getId().intValue());
        assertThat(json).extractingJsonPathStringValue("name").isEqualTo(user.getName());
        assertThat(json).extractingJsonPathStringValue("photoURL").isEqualTo(user.getPhotoURL());
        assertThat(json).extractingJsonPathStringValue("songURL").isEqualTo(user.getSongURL());
    }

    @Test
    public void serializePlace() throws Exception {
        Place place = getNormalPlace();
        JsonContent<Place> json = placeJson.write(place);
        String actualJsonString = json.getJson();
        String expectedJsonUserSubstring = userJson.write(place.getOwner()).getJson();
        System.out.println(place);
        System.out.println(actualJsonString);
        
        assertThat(json).extractingJsonPathNumberValue("id").isEqualTo(place.getId().intValue());
        assertThat(json).extractingJsonPathStringValue("name").isEqualTo(place.getName());
        assertThat(json).extractingJsonPathStringValue("photoURL").isEqualTo(place.getPhotoURL());
        assertThat(actualJsonString.contains(expectedJsonUserSubstring));
    }
    
}