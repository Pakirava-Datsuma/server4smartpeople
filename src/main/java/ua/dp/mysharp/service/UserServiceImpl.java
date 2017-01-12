package ua.dp.mysharp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.model.UserDTO;
import ua.dp.mysharp.repository.UserRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	@Autowired
    private PlaceService placeService;

	@Override
	public User create(UserDTO dto) {
		if (dto == null ||
                dto.getName() == null ||
                dto.getName().isEmpty())
		    return null;
		User user = convert(dto);
		return userRepo.save(user);
	}

	@Override
	public User get(long id) {
		if (id == 0) {
			return null;
		}
		return userRepo.findOne(id);
	}

	@Override
	public User delete(long id) {
		User user = userRepo.findOne(id);
		userRepo.delete(user);
		return user;
	}

	@Override
	public boolean changeData(User user) {
		if (user == null) return false;
		if (get(user.getId()) == null) return false;
		userRepo.save(user);
		return true;
	}

	@Override
	public User createTestUser() {
		User testUser = new User();
        testUser.setName("Test");
		testUser.setPhotoURL("http://iconizer.net/files/Practika/orig/owner.png");
        testUser.setSongURL("https://www.internet-radio.com/servers/tools/playlistgenerator/?u=http://uk1.internet-radio.com:8004/listen.pls&t=.pls");
        testUser = userRepo.save(testUser);
        if (testUser == null) throw new RuntimeException("test owner not created");

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

	@Override
    public User convert(UserDTO dto) {
        User user = new User();
        user.setName(dto.getName());
        user.setPhotoURL(dto.getPhotoUrl());
        user.setSongURL(dto.getSongUrl());
        return user;
    }
}
