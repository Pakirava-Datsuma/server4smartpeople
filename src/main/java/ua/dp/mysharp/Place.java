package ua.dp.mysharp;

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
public class Place {
    @Id
    @GeneratedValue
    private Long id;
    private String Name;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User owner;

//    @ManyToOne
//    @JoinColumn(name = "place_id")
//    Collection<User> users, guests;
}
