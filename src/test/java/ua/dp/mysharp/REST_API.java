package ua.dp.mysharp;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.constraints.NotNull;
import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static ua.dp.mysharp.rest.API.RestApi.*;

/**
 * Created by swanta on 22.12.16.
 * this class is unused and has to be replaced
 * with xml-based REST API configurator or another
 * testable and documentable instrument
 */

public enum REST_API {
    BASE_URL(null, API_PREFIX),
        SERVER(BASE_URL, SERVER_SUFFIX),
            SERVER_INFO(SERVER, INFO_SUFFIX, RequestMethod.GET),
            CREATE_TEST_ENTITIES(SERVER, TEST_SUFFIX, RequestMethod.GET),
        USERS(BASE_URL, USER_SUFFIX),
            NEW_USER(USERS, NEW_ENTITY_SUFFIX, RequestMethod.PUT),
            GET_USER(USERS, GET_ENTITY_SUFFIX, RequestMethod.GET, "id"),
            GET_ALL_USERS(USERS, GET_LIST_SUFFIX, RequestMethod.GET),
        PLACES(BASE_URL, PLACE_SUFFIX),
            NEW_PLACE(PLACES, NEW_ENTITY_SUFFIX, RequestMethod.PUT),
            GET_PLACE(PLACES, GET_ENTITY_SUFFIX, RequestMethod.GET, "id"),
            GET_ALL_PLACES(PLACES, GET_LIST_SUFFIX, RequestMethod.GET)
    ;

    private static class Config { static final Boolean
        nodeCanBeEndpoint = false
            ;

        static void throwError(String s) {
            throw new Error("Bad REST API config! "+ s);
        }
    };

    RequestMethod method;
    String url = "";
    REST_API parent;

    REST_API(REST_API parent, @NotNull @NotEmpty String core, @NotNull RequestMethod method, String... attrs){
        this.method = method;
        this.parent = parent;
        this.appendUrl( parent )
                .appendUrl(core);
        checkApiConfig(method, parent, core, attrs);
    }

    REST_API(REST_API parent, @NotNull @NotEmpty String core){
        this.parent = parent;
        this.appendUrl(parent)
                .appendUrl(core);

    }

    public MockHttpServletRequestBuilder request() {
        switch (method) {
            case GET: return get(url);
            case PUT: return put(url);
            case POST: return post(url);
            default: return null;
        }
    }


    private void checkApiConfig(RequestMethod method, REST_API parent, String core, String[] attrs) {
        if (!Config.nodeCanBeEndpoint && (
                (parent != null && parent.method != null)

        )) Config.throwError("check API config");

        Arrays.asList(attrs).forEach( attr -> {
            String newAttribute = "\\{" + attr + "\\}";
            String firstReplaceString = url.replaceFirst(newAttribute, "");
            String secondReplaceString = firstReplaceString.replaceAll(newAttribute, "");
            if (url.equals(firstReplaceString))
                Config.throwError("not found attribute " + newAttribute +
                        "in " + this.url);
            else if (!firstReplaceString.equals(secondReplaceString))
                Config.throwError("duplicate attribute " + newAttribute +
                        "in " + this.url);
        });

    }

    private REST_API appendUrl(String url) {
        this.url += url;
        return this;
    }

    private REST_API appendUrl(REST_API node) {
        return this.appendUrl(node != null ? node.url : "");
    }

}
