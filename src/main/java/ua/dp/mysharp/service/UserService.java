package ua.dp.mysharp.service;

import ua.dp.mysharp.model.User;
import ua.dp.mysharp.model.UserDTO;

import java.util.Collection;


public interface UserService {

	User create(UserDTO dto);
	User get(long id);

	boolean changeData(User user);

	User createTestUser();
	Collection<User> getAll();

	User convert(UserDTO dto);

	User delete(long id);
}
