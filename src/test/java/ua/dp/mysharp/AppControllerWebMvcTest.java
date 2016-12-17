package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AppController.class)
public class AppControllerWebMvcTest {

    private String BASE_URL = "/api/server/";

	@Autowired
	private MockMvc mvc;

//	@SpyBean
//	private PlaceController placeController;
//	@SpyBean
//	private UserController userController;
	@SpyBean
	private AppController appController;

	@MockBean
	private UserService userService = new UserServiceImpl();
	@MockBean
	private PlaceService placeService = new PlaceServiceImpl();

	User normalUser, nullUser, emptyUser;
	Place normalPlace;

	@Before
	public void setup() {
//		given(userService.add(normalUser)).willReturn(normalUser);
//		given(userService.add(nullUser)).willReturn(null);
//		given(userService.add(emptyUser)).willReturn(null);
//
//		given(userService.get(normalUser.getId())).willReturn(normalUser);
//		given(userService.get(null)).willReturn(null);
//
//		given(userService.getAll()).willReturn(Collections.singleton(normalUser));

        given(userService.createTestUser()).willReturn(normalUser);
		given(placeService.createTestPlace(normalUser)).willReturn(normalPlace);
	}

	@Test
	public void getServerInfo(){
		mvc.perform(get(BASE_URL + "about")
		        .accept(MediaType.TEXT_PLAIN)
            )
		    .andExpect(status().isOk())
		    .andExpect(content().string(Matchers.matches("."))); //nonempty
        verifyNoMoreInteractions(userService);
        verifyNoMoreInteractions(placeService);
	}

	public void createTestEntities(){
		mvc.perform(get(BASE_URL + "test")
		        .accept(MediaType.TEXT_PLAIN)
            )
		    .andExpect(status().isOk())
		    .andExpect(content().string(Matchers.matches("."))); //nonempty
        verify(userService, times(1)).createTestUser();
        verify(placeService, times(1)).createTestPlace(normalUser);
	}

	@Test
	public void contextLoads() {
	}

}
