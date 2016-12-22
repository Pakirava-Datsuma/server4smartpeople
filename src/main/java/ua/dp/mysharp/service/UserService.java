package ua.dp.mysharp.service;

import ua.dp.mysharp.model.User;

import java.util.Collection;


public interface UserService {

	User create(String name, String photoURL);
	User get(Long id);

	boolean setFavoriteMusic(Long id, String url);
	boolean setUserPhoto(Long id, String photoUrl);

	User createTestUser();
	Collection<User> getAll();

}
