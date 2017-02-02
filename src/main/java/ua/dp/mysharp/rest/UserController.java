package ua.dp.mysharp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.model.UserDTO;
import ua.dp.mysharp.service.ApiLogService;
import ua.dp.mysharp.service.UserService;

import java.util.Collection;

import static ua.dp.mysharp.rest.API.RestApi.*;

/**
 * @author swanta
 *
 */
@RestController
@ResponseBody
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	ApiLogService logService;

	@RequestMapping(GET_USERLIST_URL)
	@ResponseStatus(HttpStatus.OK)
	public Collection<User> getAll() {
		logService.write(GET_USERLIST_URL);
		return userService.getAll();
	}

	@RequestMapping(GET_USER_URL)
	@ResponseStatus(HttpStatus.FOUND)
	public User get(@PathVariable("id") long id) {
		logService.write(GET_USER_URL, id);
		return userService.get(id);
	}

	@RequestMapping(value = NEW_USER_URL, method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public User create(@RequestBody UserDTO user) {
		logService.write(NEW_USER_URL, user);
		return userService.create(user);
	}

	@RequestMapping(value = DELETE_USER_URL, method = RequestMethod.DELETE)
	@ResponseStatus( HttpStatus.OK)
	public User delete(@PathVariable("id") long id) {
		logService.write(DELETE_USER_URL, id);
		return userService.delete(id);
	}
}
