package ua.dp.mysharp.service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.dp.mysharp.dao.ApiLogDao;

/**
 * Created by swanta on 02.02.17.
 */
@Service
public class ApiLogService {

    @Autowired
    ApiLogDao dao;

    public void write (String string){
        write(string, null);
    }

    public void write(String string, Object... data) {
        dao.save(new StringWithData(string, data));
    }

    @AllArgsConstructor
    private static class StringWithData {
        String value;
        Object object;
    }
}
