package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.HashSet;

import static org.junit.Assert.*;

/**
 * Created by swanta on 13.12.16.
 */
public class UserServiceTest {
    @Mock
    UserRepository userRepo;
    @InjectMocks
    UserService service;

    User nullUser = new User(null, null, null, null, null);
    User emptyUser = new User(0L, "", "", "", new HashSet<Place>(0));
    User staticUser = new User(
            1L,
            "Jacky",
            "http://iconizer.net/files/Practika/orig/owner.png",
            "https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls",
            new HashSet<Place>(0));


    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void addNull() throws Exception {
        assertNull(service.add(nullUser));
    }
    @Test
    public void addEmpty() throws Exception {
        assertNull(service.add(emptyUser));
    }
    @Test
    public void add() throws Exception {
        assertNotNull(service.add(staticUser));
    }

    @Test
    public void find() throws Exception {
        User testUser = service.add(staticUser);
        assertNotNull(service.find(testUser.getId()));
    }

    @Test
    public void setFavoriteMusic() throws Exception {
        String testString = "!SONG_MARK!";
        User testUser = service.add(staticUser);
        service.setFavoriteMusic(testUser.getId(),testString);
        assertEquals(testUser.getSongURL(), testString);
    }

    @Test
    public void setUserPhoto() throws Exception {
        String testString = "!PHOTO_MARK!";
        User testUser = service.add(staticUser);
        service.setUserPhoto(testUser.getId(),testString);
        assertEquals(testUser.getPhotoURL(), testString);
        service.setFavoriteMusic(testUser.getId(),staticUser.getPhotoURL());
    }

    @Test
    public void getAll() throws Exception {
        User testUser = service.add(staticUser);
        assertTrue(service.getAll().size() > 0);
    }

    @Test
    public void get() throws Exception {
        User testUser = service.add(staticUser);
        testUser = service.get(testUser.getId());
        assertNotNull(testUser);
        assertEquals(staticUser.getClass(), testUser.getClass());
    }

}