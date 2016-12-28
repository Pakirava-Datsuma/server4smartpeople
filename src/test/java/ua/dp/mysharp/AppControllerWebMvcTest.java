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
import ua.dp.mysharp.rest.AppController;
import ua.dp.mysharp.service.PlaceService;
import ua.dp.mysharp.service.UserService;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static ua.dp.mysharp.PlaceTestEntityFactory.getNormalExistPlace;
import static ua.dp.mysharp.REST_API.CREATE_TEST_ENTITIES;
import static ua.dp.mysharp.REST_API.SERVER_INFO;
import static ua.dp.mysharp.UserTestEntityFactory.getNormalExistUser;

@RunWith(SpringRunner.class)
@WebMvcTest(AppController.class)
public class AppControllerWebMvcTest {

	@Autowired
	private MockMvc mvc;

//	@SpyBean
//	private PlaceController placeController;
//	@SpyBean
//	private UserController userController;
	@SpyBean
	private AppController appController;

	@MockBean
	private UserService userService;// = new UserServiceImpl();
	@MockBean
	private PlaceService placeService;// = new PlaceServiceImpl();

	@Before
	public void setup() {
//		given(userService.create(normalUser)).willReturn(normalUser);
//		given(userService.create(nullUser)).willReturn(null);
//		given(userService.create(emptyUser)).willReturn(null);
//
//		given(userService.get(normalUser.getId())).willReturn(normalUser);
//		given(userService.get(null)).willReturn(null);
//
//		given(userService.getAll()).willReturn(Collections.singleton(normalUser));

        given(userService.createTestUser()).willReturn(getNormalExistUser());
		given(placeService.createTestPlace(getNormalExistUser())).willReturn(getNormalExistPlace());
	}

	@Test
	public void getServerInfo() throws Exception{
		mvc.perform(SERVER_INFO.request()
		        .accept(MediaType.TEXT_PLAIN)
            )
		    .andExpect(status().isOk());
//		    .andExpect(content().string(Matchers.anyString())); //nonempty
        verifyNoMoreInteractions(userService);
        verifyNoMoreInteractions(placeService);
	}

	public void createTestEntities() throws Exception{
		mvc.perform(CREATE_TEST_ENTITIES.request()
		        .accept(MediaType.TEXT_PLAIN)
            )
		    .andExpect(status().isOk())
		    .andExpect(content().string(Matchers.matches("."))); //nonempty
        verify(userService, times(1)).createTestUser();
        verify(placeService, times(1)).createTestPlace(getNormalExistUser());
	}

	@Test
	public void contextLoads() {
	}

}
