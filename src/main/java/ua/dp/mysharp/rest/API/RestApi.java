package ua.dp.mysharp.rest.API;

/**
 * Created by swanta on 28.12.16.
 */
public class RestApi {
    public static final String API_PREFIX = "/api";

    public static final String SERVER_SUFFIX = "/server";
    public static final String USER_SUFFIX = "/users";
    public static final String PLACE_SUFFIX = "/places";

    public static final String NEW_ENTITY_SUFFIX = "/new";
    public static final String GET_LIST_SUFFIX = "/all";
    public static final String GET_ENTITY_SUFFIX = "/one/{id}";
    public static final String TEST_SUFFIX = "/test";
    public static final String INFO_SUFFIX = "/info";

    public static final String SERVER_URL = API_PREFIX + SERVER_SUFFIX;
    public static final String USER_URL = API_PREFIX + USER_SUFFIX;
    public static final String PLACE_URL = API_PREFIX + PLACE_SUFFIX;

    public static final String NEW_USER_URL = USER_URL + NEW_ENTITY_SUFFIX;
    public static final String GET_USER_URL = USER_URL + GET_ENTITY_SUFFIX;
    public static final String GET_USERLIST_URL = USER_URL + GET_LIST_SUFFIX;

    public static final String NEW_PLACE_URL = PLACE_URL + NEW_ENTITY_SUFFIX;
    public static final String GET_PLACE_URL = PLACE_URL + GET_ENTITY_SUFFIX;
    public static final String GET_PLACELIST_URL = PLACE_URL + GET_LIST_SUFFIX;

    public static final String TEST_SERVER_URL = SERVER_URL + TEST_SUFFIX;
    public static final String ABOUT_SERVER_URL = SERVER_URL + INFO_SUFFIX;
}
