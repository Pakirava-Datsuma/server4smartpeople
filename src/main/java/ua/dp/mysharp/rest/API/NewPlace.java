package ua.dp.mysharp.rest.API;

import lombok.Data;

/**
 * Created by swanta on 22.12.16.
 */
@Data
public class NewPlace {
    private String name;
    private String photoUrl;
    private long ownerId;
}
