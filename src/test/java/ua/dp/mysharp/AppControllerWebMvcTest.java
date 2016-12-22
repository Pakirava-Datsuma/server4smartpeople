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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static ua.dp.mysharp.TestEntityFactory.getNormalPlace;
import static ua.dp.mysharp.TestEntityFactory.getNormalUser;

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

        given(userService.createTestUser()).willReturn(getNormalUser());
		given(placeService.createTestPlace(getNormalUser())).willReturn(getNormalPlace());
	}

	@Test
	public void getServerInfo() throws Exception{
		mvc.perform(get(BASE_URL + "about")
		        .accept(MediaType.TEXT_PLAIN)
            )
		    .andExpect(status().isOk());
//		    .andExpect(content().string(Matchers.anyString())); //nonempty
        verifyNoMoreInteractions(userService);
        verifyNoMoreInteractions(placeService);
	}

	public void createTestEntities() throws Exception{
		mvc.perform(get(BASE_URL + "test")
		        .accept(MediaType.TEXT_PLAIN)
            )
		    .andExpect(status().isOk())
		    .andExpect(content().string(Matchers.matches("."))); //nonempty
        verify(userService, times(1)).createTestUser();
        verify(placeService, times(1)).createTestPlace(getNormalUser());
	}

	@Test
	public void contextLoads() {
	}

}
