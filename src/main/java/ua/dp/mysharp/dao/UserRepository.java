/**
 * 
 */
package ua.dp.mysharp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ua.dp.mysharp.model.User;

/**
 * @author swanta
 *
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
