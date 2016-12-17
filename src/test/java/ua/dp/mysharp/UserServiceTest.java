package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Collection;
import java.util.Iterator;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.*;
import static ua.dp.mysharp.TestEntityFactory.*;

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
            normalUser = getNormalUser(),
            emptyUser = getEmptyUser(),
            nullUser = getNullUser();
    private Collection<User>
            normalUsers = getNormalUsers();

    @Before
    public void setUpRepoMock() throws Exception {

        when(repo.findOne(normalUser.getId())).thenReturn(normalUser);
        when(repo.findOne(null)).thenThrow(new IllegalArgumentException());
        when(repo.save(normalUser)).thenReturn(normalUser);
        when(repo.findAll()).thenReturn(new Iterable<User>() {
            @Override
            public Iterator<User> iterator() {
                return normalUsers.iterator();
            }
        });
    }

    @Test
    public void add() throws Exception {

        assertNull(service.add(nullUser));
        verify(repo, never()).save(nullUser);

        assertNull(service.add(emptyUser));
        verify(repo, never()).save(emptyUser);

        assertEquals(normalUser, service.add(normalUser));
        verify(repo).save(normalUser);
    }

    @Test
    public void get() throws Exception {
        assertEquals(normalUser, service.get(normalUser.getId()));
        assertNull(service.get(null));
        verify(repo, times(1))
                .findOne(normalUser.getId());
    }

    @Test
    public void setFavoriteMusic() throws Exception  {
        String testString = "!SONG_MARK!";
        String testStringBefore = normalUser.getSongURL();
        service.setFavoriteMusic(normalUser.getId(),testString);
        assertEquals(normalUser.getSongURL(), testString);
        verify(repo).save(normalUser);
        service.setFavoriteMusic(normalUser.getId(),testStringBefore);
    }

    @Test
    public void setUserPhoto() throws Exception {
        String testString = "!PHOTO_MARK!";
        String testStringBefore = normalUser.getPhotoURL();
        service.setUserPhoto(normalUser.getId(),testString);
        assertEquals(normalUser.getPhotoURL(), testString);
        verify(repo).save(normalUser);
        service.setUserPhoto(normalUser.getId(),testStringBefore);
    }

    @Test
    public void getAll() throws Exception {
        Collection<User> result = service.getAll();
        Iterator<User> expectedIterator = normalUsers.iterator();
        Iterator<User> resultIterator = result.iterator();

        assertEquals(normalUsers.size(), result.size());
        while (expectedIterator.hasNext()
                && resultIterator.hasNext()) {
            assertEquals(expectedIterator.next(), resultIterator.next());
        }
    }

}