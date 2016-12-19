package ua.dp.mysharp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static ua.dp.mysharp.IT_Util.APPLICATION_JSON_UTF8;
import static ua.dp.mysharp.IT_Util.convertToJsonBytes;
import static ua.dp.mysharp.TestEntityFactory.getEmptyUser;
import static ua.dp.mysharp.TestEntityFactory.getNormalUser;

/**
 * Created by swanta on 19.12.16.
 */

@RunWith(SpringRunner.class)
@WebMvcTest(MiaApplication.class)
public class IT_UserControllerTest {
    private String URI="/api/users";

    @Autowired
    private MockMvc mvc;

    @Test
    public void addNormalUser() throws Exception {
        User user = getNormalUser();
        byte[] requestBody = convertToJsonBytes(user);
        System.out.println(user);
        System.out.println(requestBody);
        mvc.perform(
                post(URI + "/new")
                        .contentType(APPLICATION_JSON_UTF8)
                        .content(requestBody)
                )
                .andExpect(status().isCreated())
                .andExpect(content().contentType((APPLICATION_JSON_UTF8)))
                .andExpect(content().string(allOf(
                    containsString("\"name\":"),
                    containsString("\"photoURL\":")
                )));
    }

    @Test
    public void addBadUser() throws Exception {
        User user = getEmptyUser();
        byte[] requestBody = convertToJsonBytes(user);
        System.out.println(user);
        System.out.println(requestBody);
        mvc.perform(
                post(URI + "/new")
                        .contentType(APPLICATION_JSON_UTF8)
                        .content(requestBody)
                )
                .andExpect(status().isNotAcceptable());
    }
}
