package ua.dp.mysharp;

import lombok.Data;

import java.util.Set;

/**
 * Created by swanta on 10.12.16.
 */

@Data
public class PlaceDTO {
    private Long id;
    private String name;
    private String photoURL;
    private Long ownerId;
    private Set<Long> guestIds;

    PlaceDTO (Place place) {
        this.id = place.getId();
        this.name = place.getName();
        this.photoURL = place.getPhotoURL();
        this.ownerId = place.getOwner().getId();
//        this.guestIds.addAll(place.getGuests()
//                .map(guest->guest.getId())
//                .collect(Collectors.toSet()));
    }
}
