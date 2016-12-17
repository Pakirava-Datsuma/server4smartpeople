package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.internal.verification.VerificationModeFactory;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by swanta on 13.12.16.
 */

public class UserServiceTest {
    @Mock
    private UserRepository repo;
    @InjectMocks
    private UserService service;

    private User normalUser, badUser, nullUser;
    private Collection<User> normalUsers;

    @Before
    public void setUpRepoMock() throws Exception {
        normalUser = getNormalUser();
        badUser = getNullUser();
        nullUser = null;
        normalUsers = getNormalUsers();

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
        verify(repo, VerificationModeFactory.calls(0)).save(nullUser);

        assertNull(service.add(badUser));
        verify(repo).save(badUser);

        assertEquals(normalUser, service.add(normalUser));
        verify(repo).save(normalUser);
    }

    @Test
    public void get() throws Exception {
        assertEquals(normalUser, service.get(normalUser.getId()));
        assertNull(service.get(null));
        verify(repo, VerificationModeFactory.calls(2))
                .findOne(normalUser.getId());
    }

    @Test
    public void setFavoriteMusic() throws Exception  {
        String testString = "!SONG_MARK!";
//        String testStringBefore = normalUser.getSongURL();
        service.setFavoriteMusic(normalUser.getId(),testString);
        assertEquals(normalUser.getSongURL(), testString);
        verify(repo).save(normalUser);
//        service.setFavoriteMusic(normalUser.getId(),testStringBefore);
    }

    @Test
    public void setUserPhoto() throws Exception {
        String testString = "!PHOTO_MARK!";
//        String testStringBefore = normalUser.getPhotoURL();
        service.setUserPhoto(normalUser.getId(),testString);
        assertEquals(normalUser.getPhotoURL(), testString);
        verify(repo).save(normalUser);
//        service.setUserPhoto(normalUser.getId(),testStringBefore);
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

    private User getNullUser() {
        return new User(null, null, null, null, null);
    }

    private User getEmptyUser() {
        return new User(0L, "", "", "", new HashSet<Place>(0));
    }

    private User getNormalUser() {
        User normalUser = new User(
                1L,
                "Jacky",
                "http://iconizer.net/files/Practika/orig/owner.png",
                "https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls",
                null);
        Place place = new Place(
                2L,
                "Cool House",
                "http://iconizer.net/files/Practika/orig/house.png",
                normalUser);
        normalUser.getPlaces().add(place);
        return normalUser;
    }
    private Collection<User> getNormalUsers() {
        return Collections.singletonList(normalUser);
    }
}