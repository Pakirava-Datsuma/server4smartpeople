package ua.dp.mysharp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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

	@OneToMany(mappedBy = "owner", fetch = FetchType.LAZY,
			cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonBackReference
	private Collection<Place> places;

//	@OneToMany(mappedBy = "Place", fetch = FetchType.LAZY)
//	Collection<Place> visitedPlaces;
}
