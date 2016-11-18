package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author swanta
 *
 */
@RestController
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping("/user")
	public User getUser() {
		return userService.getOne();
	}
	
	@RequestMapping("/about")
	public String aboutMIA() {
		return "Hi! This is #MIA - My Information Assistant.";
	}
	
	@RequestMapping("/test")
	public String createTestUser() {
		userService.createTestUser();
		return ("now repo has users: " + userService.getAll().size());
	}
}
