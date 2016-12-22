package ua.dp.mysharp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.repository.UserRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User create(String name, String photoURL) {
		if (name == null || name.isEmpty()) return null;
		User user = new User();
		user.setName(name);
		user.setPhotoURL(photoURL);
		userRepo.save(user);
		return user;
	}

	@Override
	public User get(Long id) {
		if (id == null) {
			return null;
		}
		return userRepo.findOne(id);
	}

	@Override
	public boolean setFavoriteMusic(Long id, String url) {
		User user = get(id);
		if (user == null) return false;
		user.setSongURL(url);
		userRepo.save(user);
		return true;
	}

	@Override
	public boolean setUserPhoto(Long id, String photoUrl) {
		User user = get(id);
		if (user == null) return false;
		user.setPhotoURL(photoUrl);
		userRepo.save(user);
		return true;
	}

	@Override
	public User createTestUser() {
		User testUser = create(
				"Test", 
				"User");
		if (testUser == null) throw new RuntimeException("test owner not created");
		
		setFavoriteMusic(testUser.getId(),
				"https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls");
		setUserPhoto(testUser.getId(), "http://iconizer.net/files/Practika/orig/owner.png");
		System.out.println("test owner created: " + testUser.toString());
		return testUser;
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
}
