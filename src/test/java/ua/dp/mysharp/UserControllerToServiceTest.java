package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.dp.mysharp.model.UserDTO;
import ua.dp.mysharp.rest.UserController;
import ua.dp.mysharp.service.UserService;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static ua.dp.mysharp.UserTestEntityFactory.getNormalExistUserDto;

/**
 * Created by swanta on 13.12.16.
 */
@RunWith(MockitoJUnitRunner.class)
public class UserControllerToServiceTest {
    @Mock private UserService service;
    @InjectMocks private UserController controller;

    @Before
    public void initMockUserService() {
        when(service.getAll()).thenReturn(ImmutableList.of());
    }

    @Test
    public void getAll() throws Exception {
        //test
        controller.getAll();
        //validate
        verify(service).getAll();
    }

    @Test
    public void get() throws Exception {
        Long id = 1L;
        controller.get(id);
        verify(service).get(id);
    }

    @Test
    public void create() throws Exception {
        UserDTO request = getNormalExistUserDto();
        controller.create(request);
        verify(service).create(request);
    }
}