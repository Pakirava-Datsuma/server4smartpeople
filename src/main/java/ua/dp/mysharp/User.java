package ua.dp.mysharp;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author swanta
 *
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property = "id")
public class User {

	@Id
	@GeneratedValue
    private Long id;

    private String name;
    private String photoURL;
	
	private String songURL;

//	@OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
//	@JsonBackReference
//	private Collection<Place> places;

//	@OneToMany(mappedBy = "Place", fetch = FetchType.LAZY)
//	Collection<Place> visitedPlaces;
}
