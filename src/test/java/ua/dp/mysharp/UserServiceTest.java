package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.*;

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

    private List<User> normalUsers = getNormalUsers();
    private List<User> badUsers = getBadUsers();

    @Test
    @ExceptionHandler(IllegalArgumentException.class)
    public void addBadUser() throws Exception {
        badUsers.forEach( user -> {
            assertNull(service.add(user));
            verify(repo).save(user);
        });
    }
    @Test
    public void addNormalUser() throws Exception {
        normalUsers.forEach( user -> {
            assertEquals(user, service.add(user));
            verify(repo).save(user);
        });
    }

    @Test
    public void getNormalId() throws Exception {
        normalUsers.forEach( user -> {
            assertEquals(user, service.get(user.getId()));
            verify(repo).findOne(user.getId());
        });
    }
    @Test
    public void getNullId() throws Exception {
        assertNull(service.get(null));
    }

    @Test
    public void setFavoriteMusic() throws Exception  {
        User testUser = service.add(normalUsers.get(0));
        String testString = "!SONG_MARK!";
        String testStringBefore = testUser.getSongURL();
        service.setFavoriteMusic(testUser.getId(),testString);
        assertEquals(testUser.getSongURL(), testString);
        service.setFavoriteMusic(testUser.getId(),testStringBefore);
    }

    @Test
    public void setUserPhoto() throws Exception {
        User testUser = service.add(normalUsers.get(0));
        String testString = "!PHOTO_MARK!";
        String testStringBefore = testUser.getPhotoURL();
        service.setUserPhoto(testUser.getId(),testString);
        assertEquals(testUser.getPhotoURL(), testString);
        service.setUserPhoto(testUser.getId(),testStringBefore);
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

    @Before
    public void setUpRepoMock() throws Exception {
        // mock single user methods
        normalUsers.forEach(user -> {
                    when(repo.findOne(user.getId()))
                            .thenReturn(user);
                    when (repo.save(user))
                            .thenReturn(user);
                }
        );

        badUsers.forEach(user -> {
                    try {
                        when(repo.findOne(user.getId()))
                                .thenReturn(null);
                    } catch (NullPointerException ignored) {
                    }
                    ;
                    try {
                        when(repo.save(user))
                                .thenReturn(null);
                    } catch (NullPointerException ignored) {
                    }
                    ;
                }
        );

        when(repo.findOne(null)).thenThrow(new IllegalArgumentException());

        // mock collects methods
        when(repo.findAll()).thenReturn(new Iterable<User>() {
            @Override
            public Iterator<User> iterator() {
                return normalUsers.iterator();
            }
        });

    }

    private List<User> getBadUsers() {
        User nullUser = new User(null, null, null, null, null);
        return Arrays.asList(null, nullUser);
    }

    private List<User> getNormalUsers() {

        User nullUser = new User(null, null, null, null, null);
        User emptyUser = new User(0L, "", "", "", new HashSet<Place>(0));
        User staticUser = new User(
                1L,
                "Jacky",
                "http://iconizer.net/files/Practika/orig/owner.png",
                "https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls",
                Collections.emptySet());
        return Arrays.asList(staticUser, emptyUser);
    }

}