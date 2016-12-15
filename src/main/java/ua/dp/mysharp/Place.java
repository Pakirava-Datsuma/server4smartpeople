package ua.dp.mysharp;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Created by swanta on 28.11.16.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Place {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String photoURL;


    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User owner;

//    @ManyToOne
//    @JoinColumn(name = "place_id")
//    Collection<User> users, guests;
}
