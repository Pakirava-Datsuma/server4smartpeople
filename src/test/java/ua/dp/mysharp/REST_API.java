package ua.dp.mysharp;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.constraints.NotNull;
import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

/**
 * Created by swanta on 22.12.16.
 * this class is unused and has to be replaced
 * with xml-based REST API configurator or another
 * testable and documentable instrument
 * TODO: Try to use it in tests
 */

public enum REST_API {
    BASE(null, "api"),
        SERVER_BASE(BASE, "server"),
            SERVER_INFO(SERVER_BASE, "info", RequestMethod.GET),
            CREATE_TEST_ENTITIES(SERVER_BASE, "test", RequestMethod.GET),
        USERS_BASE(BASE, "users"),
            NEW_USER(USERS_BASE, "new", RequestMethod.PUT),
            GET_USER(USERS_BASE, "get", RequestMethod.GET, "id"),
            GET_ALL_USERS(USERS_BASE, "get", RequestMethod.GET),
        PLACES_BASE(BASE, "places"),
            NEW_PLACE(PLACES_BASE, "new", RequestMethod.PUT),
            GET_PLACE(PLACES_BASE, "get", RequestMethod.GET, "id"),
            GET_ALL_PLACES(PLACES_BASE, "get", RequestMethod.GET)
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
        checkApiConfig(method, parent, core, attrs);
        this.method = method;
        this.parent = parent;
        this.appendUrl( parent )
                .appendUrl(core)
                .appendUrl(attrs);
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
    }

    private REST_API appendUrl(String url) {
        this.url += "/" + url;
        return this;
    }

    private REST_API appendUrl(REST_API node) {
        return this.appendUrl(node != null ? node.url : "");
    }

    private REST_API appendUrl(String... attrs) {
        Arrays.asList(attrs).forEach( attr -> {
            String newAttribute = "{" + attr + "}";
            if (url.contains(newAttribute))
                Config.throwError("duplicate attribute " + newAttribute +
                                    "in " + this.url);
            this.appendUrl(newAttribute);
        });
        return this;
    }





}
