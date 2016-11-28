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
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping("/user")
	public User getUser() {
		return userService.getOne();
	}

	@RequestMapping("/users")
	public Collection<User> getUserList() {
		return userService.getAll();
	}

}
