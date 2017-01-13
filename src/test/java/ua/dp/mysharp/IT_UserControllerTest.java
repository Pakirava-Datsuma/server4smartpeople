package ua.dp.mysharp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import ua.dp.mysharp.model.UserDTO;

import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static ua.dp.mysharp.IT_Util.APPLICATION_JSON_UTF8;
import static ua.dp.mysharp.IT_Util.convertToJsonBytes;
import static ua.dp.mysharp.REST_API.NEW_USER;
import static ua.dp.mysharp.UserTestEntityFactory.getEmptyNewUserDto;
import static ua.dp.mysharp.UserTestEntityFactory.getNormalExistUserDto;

/**
 * Created by swanta on 19.12.16.
 */

@RunWith(SpringRunner.class)
@WebMvcTest(MiaApplication.class)
public class IT_UserControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void addNormalUser() throws Exception {
        UserDTO user = getNormalExistUserDto();
        byte[] requestBody = convertToJsonBytes(user);
//        System.out.println(user);
//        System.out.println(requestBody);
        mvc.perform(
                NEW_USER.request()
                        .accept(APPLICATION_JSON_UTF8)
                        .contentType(APPLICATION_JSON_UTF8)
                        .content(requestBody)
                )
                .andExpect(status().isCreated())
                .andExpect(content().contentType((APPLICATION_JSON_UTF8)))
                .andExpect(content().string(allOf(
                    containsString("\"id\":"),
                    containsString("\"name\":"),
                    containsString("\"photoURL\":")
                )));
    }

    @Test
    public void addBadUser() throws Exception {
        UserDTO user = getEmptyNewUserDto();
        byte[] requestBody = convertToJsonBytes(user);
//        System.out.println(user);
//        System.out.println(requestBody);
        mvc.perform(
                NEW_USER.request()
                        .accept(APPLICATION_JSON_UTF8)
                        .contentType(APPLICATION_JSON_UTF8)
                        .content(requestBody)
                )
                .andExpect(status().isNotAcceptable());
    }
}
