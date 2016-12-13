package ua.dp.mysharp;

import java.util.Collection;


public interface UserService {

	User create(String name, String photoURL);
	User get(Long id);
	User add(User user);

	boolean setFavoriteMusic(Long id, String url);
	boolean setUserPhoto(Long id, String url);

	User createTestUser();
	Collection<User> getAll();

}
