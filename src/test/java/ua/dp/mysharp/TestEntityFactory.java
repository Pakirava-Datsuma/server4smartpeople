package ua.dp.mysharp;

import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.User;

import java.util.Collection;
import java.util.Collections;

/**
 * Created by swanta on 17.12.16.
 */
public class TestEntityFactory {
    private static User nullUser;
    private static User badUser;
    private static User normalUser;
    private static Collection<User> normalUsers;

    private static Place normalPlace;

    public static User getNullUser() {
        if (nullUser == null) {
            nullUser = new User();
//            new User(null, null, null, null, null);
        }
        return nullUser;
    }

    public static User getEmptyUser() {
        if (badUser == null) {
            badUser = new User(0L, "", "", "");//, new HashSet<Place>(0));
        }
        return badUser;
    }

    public static User getNormalUser() {
        if (normalUser == null) {
            normalUser = getNormalPlace().getOwner();
        }
        return normalUser;
    }

    public static Collection<User> getNormalUsers() {
        if (normalUsers == null) {
            normalUsers = Collections.singletonList(getNormalUser());
        }
        return normalUsers;
    }

    public static Place getNormalPlace() {
        if (normalPlace == null) {
            User normalUser = new User(
                    1L,
                    "Jacky",
                    "http://iconizer.net/files/Practika/orig/owner.png",
                    "https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls"
//                    new ArrayList<Place>()
            );
            normalPlace = new Place(
                    2L,
                    "Cool House",
                    "http://iconizer.net/files/Practika/orig/house.png",
                    normalUser
            );
//            normalUser.getPlaces().create(normalPlace);
        }
        return normalPlace;
    }

}
