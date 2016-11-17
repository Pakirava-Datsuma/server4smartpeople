/**
 * 
 */
package ua.dp.mysharp;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author swanta
 *
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
