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
public class UserDTO {
    private String name;
    private String photoUrl;
    private String songUrl;

    public UserDTO(User user) {
        this(user.getName(),
                user.getPhotoURL(),
                user.getSongURL());
    }

}
