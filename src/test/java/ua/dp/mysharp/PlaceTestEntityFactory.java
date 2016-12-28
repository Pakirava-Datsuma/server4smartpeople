package ua.dp.mysharp;

import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.model.User;

import java.util.Collection;
import java.util.Collections;

/**
 * Created by swanta on 17.12.16.
 */
public class PlaceTestEntityFactory {

    private static Place normalNewPlace;
    private static Place normalExistPlace;
    private static Place modifiedExistPlace;
    private static PlaceDTO nullNewPlaceDto;
    private static PlaceDTO emptyNewPlaceDto;
    private static PlaceDTO normalNewPlaceDto;
    private static PlaceDTO normalExistPlaceDto;
    private static Collection<Place> normalExistPlaces;


    public static PlaceDTO getNullNewPlaceDto() {
        if (nullNewPlaceDto == null) {
            nullNewPlaceDto = new PlaceDTO();
        }
        return nullNewPlaceDto;
    }

    public static PlaceDTO getEmptyNewPlaceDto() {
        if (emptyNewPlaceDto == null) {
            emptyNewPlaceDto = new PlaceDTO(
                    "",
                    "",
                    0L);
        }
        return emptyNewPlaceDto;
    }

    public static Place getNormalExistPlace() {
        if (normalExistPlace == null) {
            User existUser = new User(
                    1L,
                    "Jacky",
                    "http://iconizer.net/files/Practika/orig/owner.png",
                    "https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls"
            );
            normalExistPlace = new Place(
                    2L,
                    "Cool House",
                    "http://iconizer.net/files/Practika/orig/house.png",
                    existUser
            );
        }
        return normalExistPlace;
    }

    public static PlaceDTO getNormalExistPlaceDto() {
        if (normalExistPlaceDto == null) {
            normalExistPlaceDto = new PlaceDTO(getNormalExistPlace());
        }
        return normalExistPlaceDto;
    }

    public static Collection<Place> getNormalExistPlaces() {
        if (normalExistPlaces == null) {
            normalExistPlaces = Collections.singletonList(getNormalExistPlace());
        }
        return normalExistPlaces;
    }

    public static Place getNormalNewPlace() {
        if (normalNewPlace == null) {
            Place existPlace = getNormalExistPlace();
            normalNewPlace = new Place(null,
                    existPlace.getName(),
                    existPlace.getPhotoURL(),
                    existPlace.getOwner());
        }
        return normalNewPlace; 
    }

    public static Place getModifiedExistPlace() {
        if (modifiedExistPlace == null) {
            modifiedExistPlace = new Place(
                    getNormalExistPlace().getId(),
                    "!edited! " + getNormalExistPlace().getName(),
                    "!edited! " + getNormalExistPlace().getPhotoURL(),
                    getNormalExistPlace().getOwner());
        }
        return modifiedExistPlace; 
    }

}