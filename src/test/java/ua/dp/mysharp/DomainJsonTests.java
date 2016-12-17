package ua.dp.mysharp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static ua.dp.mysharp.EntityFactory.getNormalUser;

/**
 * Created by swanta on 17.12.16.
 */

@RunWith(SpringRunner.class)
@JsonTest
public class DomainJsonTests {
    private JacksonTester<User> userJson;
    private JacksonTester<Place> placeJson;

    @Test
    public void serializeUser() throws Exception {
        User user = getNormalUser();
        JsonContent<User> json = this.userJson.write(user);
        assertThat(json).extractingJsonPathStringValue("id").isEqualTo(user.getId());
        assertThat(json).extractingJsonPathStringValue("name").isEqualTo(user.getName());
        assertThat(json).extractingJsonPathStringValue("photoURL").isEqualTo(user.getPhotoURL());
        assertThat(json).extractingJsonPathStringValue("songURL").isEqualTo(user.getSongURL());
        assertThat(json).extractingJsonPathStringValue("places").isEqualTo(user.getPlaces());
    }

    public void deserializeUser() throws Exception {
        String incomingJson = "{ \"name\": Jack }";
        User user = userJson.read(incomingJson).getObject();
        assertNotNull(user);
        assertNotNull(user.getName());
        assertFalse(user.getName().isEmpty());
    }
}