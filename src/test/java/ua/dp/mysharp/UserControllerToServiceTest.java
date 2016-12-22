package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.rest.UserController;
import ua.dp.mysharp.rest.API.NewUser;
import ua.dp.mysharp.service.UserService;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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
        User user = new User();
        NewUser request = new NewUser();
        request.setName(user.getName());
        request.setPhotoUrl(user.getPhotoURL());
        controller.create(request);
        verify(service).create(request.getName(), request.getPhotoUrl());
    }
}