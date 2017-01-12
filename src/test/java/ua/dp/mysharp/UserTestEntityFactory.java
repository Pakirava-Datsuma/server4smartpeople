package ua.dp.mysharp;

import ua.dp.mysharp.model.User;
import ua.dp.mysharp.model.UserDTO;
import ua.dp.mysharp.service.UserService;
import ua.dp.mysharp.service.UserServiceImpl;

import java.util.Collection;
import java.util.Collections;

import static ua.dp.mysharp.PlaceTestEntityFactory.getNormalExistPlace;

/**
 * Created by swanta on 17.12.16.
 */
public class UserTestEntityFactory {
    private static UserService service = new UserServiceImpl();

    private static User normalNewUser;
    private static User normalExistUser;
    private static User modifiedExistUser;
    private static UserDTO nullNewUserDto;
    private static UserDTO emptyNewUserDto;
    private static UserDTO normalNewUserDto;
    private static UserDTO normalExistUserDto;
    private static Collection<User> normalExistUsers;


    public static UserDTO getNullNewUserDto() {
        if (nullNewUserDto == null) {
            nullNewUserDto = new UserDTO();
        }
        return nullNewUserDto;
    }

    public static UserDTO getEmptyNewUserDto() {
        if (emptyNewUserDto == null) {
            emptyNewUserDto = new UserDTO("", "", "");
        }
        return emptyNewUserDto;
    }

    public static User getNormalExistUser() {
        if (normalExistUser == null) {
            normalExistUser = getNormalExistPlace().getOwner();
        }
        return normalExistUser;
    }

    public static UserDTO getNormalExistUserDto() {
        if (normalExistUserDto == null) {
            normalExistUserDto = new UserDTO(getNormalExistUser());
        }
        return normalExistUserDto;
    }

    public static Collection<User> getNormalExistUsers() {
        if (normalExistUsers == null) {
            normalExistUsers = Collections.singletonList(getNormalExistUser());
        }
        return normalExistUsers;
    }

    public static User getNormalNewUser() {
        if (normalNewUser == null) {
            normalNewUser = service.convert(getNormalExistUserDto());
        }
        return normalNewUser;
    }

    public static User getModifiedExistUser() {
        if (modifiedExistUser == null) {
            modifiedExistUser = new User();
            modifiedExistUser.setId(getNormalExistUser().getId());
            modifiedExistUser.setName("!edited! " + getNormalExistUser().getName());
            modifiedExistUser.setPhotoURL("!edited! " + getNormalExistUser().getPhotoURL());
            modifiedExistUser.setSongURL("!edited! " + getNormalExistUser().getSongURL());
        }
        return modifiedExistUser;
    }

}