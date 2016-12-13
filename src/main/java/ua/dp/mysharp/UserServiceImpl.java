package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public User add(User user) {
//		User user = new User();
//		user.setName(name);
//		user.setPhotoURL(photoURL);

		return userRepo.save(user);
	}

	@Override
	public User find(Long id) {
		return userRepo.findOne(id);
	}

	@Override
	public boolean setFavoriteMusic(Long id, String url) {
		User user = find(id);
		if (user == null) return false;
		user.setSongURL(url);
		userRepo.save(user);
		return true;
	}

	@Override
	public boolean setUserPhoto(Long id, String url) {
		User user = find(id);
		if (user == null) return false;
		user.setPhotoURL(url);
		userRepo.save(user);
		return true;
	}

	@Override
	public Collection<User> getAll() {
		Collection<User> collection = new ArrayList<User>();
		Iterator<User> iterator =  userRepo.findAll().iterator();
		while (iterator.hasNext()) {
			collection.add(iterator.next());
		}
		return collection;
	}
	
	@Override
	public User get(Long id) {
		return userRepo.findAll().iterator().next();
	}

}
