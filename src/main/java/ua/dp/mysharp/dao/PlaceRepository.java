package ua.dp.mysharp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ua.dp.mysharp.model.Place;

/**
 * @author swanta
 *
 */
@Repository
public interface PlaceRepository extends CrudRepository<Place, Long> {

}
