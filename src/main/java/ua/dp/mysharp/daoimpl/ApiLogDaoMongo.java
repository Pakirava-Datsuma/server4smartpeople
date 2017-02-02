package ua.dp.mysharp.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Component;
import ua.dp.mysharp.dao.ApiLogDao;

/**
 * Created by swanta on 02.02.17.
 */
@Component
public class ApiLogDaoMongo implements ApiLogDao {

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public void save(Object record) {
        mongoOperations.save(record);
    }
}
