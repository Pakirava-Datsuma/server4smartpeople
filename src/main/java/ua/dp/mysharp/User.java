package ua.dp.mysharp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

/**
 * @author swanta
 *
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@GeneratedValue
    private Long id;

    private String name;
    private String photoURL;
	
	private String songURL;

	@OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
	private Collection<Place> places;

//	@OneToMany(mappedBy = "Place", fetch = FetchType.LAZY)
//	Collection<Place> visitedPlaces;
}
