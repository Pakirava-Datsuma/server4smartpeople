/**
 * 
 */
package ua.dp.mysharp.repository;

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
