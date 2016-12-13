package ua.dp.mysharp;

import java.util.Collection;


public interface UserService {

	User add(User user);
	User find(Long id);
	
	boolean setFavoriteMusic(Long id, String url);
	boolean setUserPhoto(Long id, String url);
	
	Collection<User> getAll();
	User get(Long id);

}
