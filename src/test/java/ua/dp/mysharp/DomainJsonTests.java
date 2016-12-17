package ua.dp.mysharp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.core.ResolvableType;
import org.springframework.test.context.junit4.SpringRunner;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.stream.StreamSupport;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.in;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

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
        User user = new User(1L, "Jack", "picUrl", "songUrl", Collections.emptyList());
        JsonContent<User> json = this.userJson.write(user);
        Arrays.stream(User.class.getDeclaredFields()).forEach(field -> {
            assertThat(json).extractingJsonPathStringValue(field.getName())
                    .isEqualTo(User.class.getDeclaredMethod("get" + field.getName()).invoke(user));
        });
    }

    public void deserializeUser() throws Exception {
        String incomingJson = "{ \"name\": Jack }";
        User user = userJson.read(incomingJson).getObject();
        assertNotNull(user);
        assertNotNull(user.getName());
        assertFalse(user.getName().isEmpty());
    }
}