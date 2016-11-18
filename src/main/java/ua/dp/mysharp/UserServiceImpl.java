package ua.dp.mysharp;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public User create(String firstName, String lastName) {
		User user = new User(firstName, lastName);
		userRepo.save(user);
		return user;
	}

	@Override
	public User find(Long id) {
		return userRepo.findOne(id);
	}

	@Override
	public boolean setFavoriteMusic(Long id, String url) {
		User user = find(id);
		if (user == null) return false;
		user.favoriteSongURL = url;
		userRepo.save(user);
		return true;
	}

	@Override
	public boolean setUserPhoto(Long id, String url) {
		User user = find(id);
		if (user == null) return false;
		user.profilePhotoURL = url;
		userRepo.save(user);
		return true;
	}

	@Override
	public void createTestUser() {
		User testUser = create(
				"Test", 
				"User");
		if (testUser == null) throw new RuntimeException("test user not created");
		
		setFavoriteMusic(testUser.id, 
				"https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls");
		setUserPhoto(testUser.id, "http://iconizer.net/files/Practika/orig/user.png");
		System.out.println("test user created: " + testUser.toString());

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
	public User getOne() {
		return userRepo.findAll().iterator().next();
	}

}
