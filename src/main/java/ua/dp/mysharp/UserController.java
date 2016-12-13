package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * @author swanta
 *
 */
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	UserService userService;

//	@RequestMapping("/all")
	public @ResponseBody Collection<User> getAll() {
		return userService.getAll();
	}

	@RequestMapping("/user/{id}")
	public @ResponseBody User get(@RequestParam("id") Long id) {
		return userService.find(id);
	}

	@RequestMapping(value = "/new", method = RequestMethod.POST)
	public ResponseEntity<User> add(@RequestBody User user) {
		return new ResponseEntity<>(userService.add(user), HttpStatus.CREATED);
	}
}
