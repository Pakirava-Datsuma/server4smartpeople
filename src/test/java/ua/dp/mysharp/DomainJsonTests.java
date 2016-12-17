package ua.dp.mysharp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
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
        assertThat(json).extractingJsonPathNumberValue("id").isEqualTo(user.getId().intValue());
        assertThat(json).extractingJsonPathStringValue("name").isEqualTo(user.getName());
        assertThat(json).extractingJsonPathStringValue("photoURL").isEqualTo(user.getPhotoURL());
        assertThat(json).extractingJsonPathStringValue("songURL").isEqualTo(user.getSongURL());
//        assertThat(json).extractingJsonPathArrayValue("places").isEqualTo(user.getPlaces().toArray());
    }

    public void deserializeUser() throws Exception {
        String incomingJson = "{ \"name\": Jack }";
        User user = userJson.read(incomingJson).getObject();
        assertNotNull(user);
        assertNotNull(user.getName());
        assertFalse(user.getName().isEmpty());
    }
}