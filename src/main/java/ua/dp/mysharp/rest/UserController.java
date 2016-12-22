package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.rest.API.NewUser;
import ua.dp.mysharp.service.UserService;

import java.util.Collection;

/**
 * @author swanta
 *
 */
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping("/get")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Collection<User> getAll() {
		return userService.getAll();
	}

	@RequestMapping("/get/{id}")
	@ResponseStatus(HttpStatus.FOUND)
	@ResponseBody
	public User get(@RequestParam("id") Long id) {
		return userService.get(id);
	}

	@RequestMapping(value = "/new", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public User create(@RequestBody NewUser user) {
		return userService.create(user.getName(), user.getPhotoUrl());
	}
}
