package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.rest.API.NewPlace;
import ua.dp.mysharp.rest.PlaceController;
import ua.dp.mysharp.service.PlaceService;
import ua.dp.mysharp.service.PlaceServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by swanta on 13.12.16.
 */
@RunWith(MockitoJUnitRunner.class)
public class PlaceControllerToServiceTest {
    @Mock private PlaceService service = new PlaceServiceImpl();
    @InjectMocks private PlaceController controller;

    @Before
    public void initMockPlaceService() {
        when(service.getAll()).thenReturn(ImmutableList.of());
    }

    @Test
    public void getAll() throws Exception {
        //test
        controller.getAll();
        //validate
        verify(service).getAll();
    }

    @Test
    public void get() throws Exception {
        //when
        Place expected = getTestPlaceWithUser();
        when(service.get(expected.getId())).thenReturn(expected);

        //test
        Place result = controller.get(expected.getId());

         //validate
        verify(service).get(expected.getId());
        assertEquals(expected, result);
    }

    @Test
    public void addPlaceWithOwner() throws Exception {
        //when
        Place expected = getTestPlaceWithUser();
        NewPlace request = new NewPlace();
        request.setName(expected.getName());
        request.setOwnerId(expected.getOwner().getId());
        when(service.create(request.getName(), request.getOwnerId())).thenReturn(expected);

        //test
        Place result = controller.add(request);

        //validate
        verify(service).create(request.getName(), request.getOwnerId());
        assertEquals(expected, result);
    }

    private Place getTestPlaceWithUser() {
        Long id = 1L;
        User user = new User();
        Place place = new Place();
        user.setId(id++);
        user.setName("Vasya");
        place.setId(id);
        place.setOwner(user);
        place.setName("Vasya's ferrari");
        return place;
    }
}