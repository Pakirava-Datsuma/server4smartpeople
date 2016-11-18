package ua.dp.mysharp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author swanta
 *
 */
@Entity
@Data
public class User {

	@Id
	@GeneratedValue
	Long id;
	
	String firstName, lastName;
	String profilePhotoURL;
	
	String favoriteSongURL;

	public User(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	public User() {};
	
}
