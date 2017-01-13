package ua.dp.mysharp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by swanta on 22.12.16.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlaceDTO {
    private String name;
    private String photoUrl;
    private Long ownerId;

    public PlaceDTO(Place place) {
        name = place.getName();
        photoUrl = place.getPhotoURL();
        User owner = place.getOwner();
        if (owner != null)
            ownerId = place.getOwner().getId();
    }

    public Place convert() {
        return new Place(null, name, photoUrl,
                new User(ownerId, null, null, null));
    }
}
