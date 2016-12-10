package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * @author swanta
 *
 */
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping("/one")
	public User getUser() {
		return userService.getOne();
	}

	@RequestMapping("/all")
	public Collection<User> getUserList() {
		return userService.getAll();
	}

	@RequestMapping("/test")
	public User createTestUser() { return userService.createTestUser();}

}
