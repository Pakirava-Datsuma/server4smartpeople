package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.model.UserDTO;
import ua.dp.mysharp.service.UserService;

import java.util.Collection;

import static ua.dp.mysharp.rest.API.RestApi.GET_USERLIST_URL;
import static ua.dp.mysharp.rest.API.RestApi.GET_USER_URL;
import static ua.dp.mysharp.rest.API.RestApi.NEW_USER_URL;

/**
 * @author swanta
 *
 */
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(GET_USERLIST_URL)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Collection<User> getAll() {
		return userService.getAll();
	}

	@RequestMapping(GET_USER_URL)
	@ResponseStatus(HttpStatus.FOUND)
	@ResponseBody
	public User get(@RequestParam("id") long id) {
		return userService.get(id);
	}

	@RequestMapping(value = NEW_USER_URL, method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public User create(@RequestBody UserDTO user) {
		return userService.create(user);
	}
}
