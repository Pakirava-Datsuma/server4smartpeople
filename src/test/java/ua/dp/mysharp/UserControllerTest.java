package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by swanta on 13.12.16.
 */
@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {
    @Mock private PlaceService placeService;
    @Mock private UserService userService;
    @InjectMocks private UserController controller;

    @Before
    public void initMockUserService() {
        when(userService.getAll()).thenReturn(ImmutableList.of());
    }

    @Test
    public void getAll() throws Exception {
        //test
        controller.getAll();
        //validate
        verify(userService).getAll();
    }

    @Test
    public void get() throws Exception {
        Long id = 1L;
        controller.get(id);
        verify(userService).find(id);
    }

    @Test
    public void add() throws Exception {
        User user = new User();
        controller.add(user);
        verify(userService).add(user);
    }
}