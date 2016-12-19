package ua.dp.mysharp;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.nio.charset.Charset;

/**
 * Created by swanta on 19.12.16.
 */
public class IT_Util {
    public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(), MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
    private static ObjectMapper mapper = new ObjectMapper();

    public static byte[] convertToJsonBytes(Object o) throws IOException {
        return mapper.writeValueAsBytes(o);
    }
}
