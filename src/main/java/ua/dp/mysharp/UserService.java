package ua.dp.mysharp;

import java.util.Collection;


public interface UserService {

	User create(String firstName, String lastName);
	User find(Long id);
	
	boolean setFavoriteMusic(Long id, String url);
	boolean setUserPhoto(Long id, String url);
	
	void createTestUser();
	Collection<User> getAll();
	User getOne();

}
