package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.model.UserDTO;
import ua.dp.mysharp.repository.UserRepository;
import ua.dp.mysharp.service.UserServiceImpl;

import java.util.Collection;
import java.util.Iterator;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static ua.dp.mysharp.UserTestEntityFactory.*;

/**
 * Created by swanta on 13.12.16.
 */
@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
    @Mock
    private UserRepository repo;
    @InjectMocks
    private UserServiceImpl service;

    private User
            existUser = getNormalExistUser(),
            modifiedUser = getModifiedExistUser(),
            normalNewUser = getNormalNewUser();
    private UserDTO
            normalUserDto = getNormalExistUserDto(),
            emptyUserDto = getEmptyNewUserDto(),
            nullUserDto = getNullNewUserDto();
    private Collection<User>
            existUsers = getNormalExistUsers();

    @Before
    public void setUpRepoMock() throws Exception {

        when(repo.findOne(existUser.getId())).thenReturn(existUser);
        when(repo.findOne(null)).thenThrow(new IllegalArgumentException());
        when(repo.save(existUser)).thenReturn(existUser);
        when(repo.save(normalNewUser)).thenReturn(existUser);
        when(repo.findAll()).thenReturn(new Iterable<User>() {
            @Override
            public Iterator<User> iterator() {
                return existUsers.iterator();
            }
        });
    }

    @Test
    public void createSucces() throws Exception {
        UserDTO request = normalUserDto;
        User expectedResult = existUser;
        User expectedRepoCall = normalNewUser;

        User actualResult = service.create(request);

        verify(repo, times(1)).save(expectedRepoCall);
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void createError() throws Exception {

        User nullResult = service.create(nullUserDto);
        User emptyResult = service.create(emptyUserDto);

        assertNull(nullResult);
        assertNull(emptyResult);
        verify(repo, never()).save(any(User.class));
    }

    @Test
    public void getOneById() throws Exception {
        Long request = existUser.getId();
        User expectedServiceResult = existUser;

        User actualServiceResult = service.get(request);

        assertEquals(expectedServiceResult, actualServiceResult);
        verify(repo, times(1))
                .findOne(request);
    }
    @Test
    public void getOneByNull() throws Exception {
        Long request = null;

        User result = service.get(request);

        assertNull(result);
        verify(repo, never())
                .findOne(any());
    }

    @Test
    public void changeUserSuccess() throws Exception  {
        User request = modifiedUser;

        boolean actual = service.changeData(request);

        assertTrue(actual);
        verify(repo, times(1)).save(request);
    }

    @Test
    public void changeUserNotFound() throws Exception {
        User request = normalNewUser;

        boolean actual = service.changeData(request);

        assertFalse(actual);
        verify(repo, never()).save(any(User.class));
    }

    @Test
    public void getAll() throws Exception {
        Collection<User> expected = existUsers;

        Collection<User> actual = service.getAll();

        assertEquals(expected, actual);
        verify(repo,times(1)).findAll();
    }

}