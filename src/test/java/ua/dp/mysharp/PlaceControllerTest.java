package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by swanta on 13.12.16.
 */
//@RunWith(MockitoJUnitRunner.class)
public class PlaceControllerTest {
    @Mock private PlaceService service;
//    @Mock private UserService userService;
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
        Place testPlace = getTestPlaceWithUser();
        when(service.get(testPlace.getId())).thenReturn(testPlace);
        ResponseEntity<Place> expected = new ResponseEntity<Place>(testPlace, HttpStatus.FOUND);

        //test
        ResponseEntity<Place> result = controller.get(testPlace.getId());

         //validate
        verify(service).get(testPlace.getId());
        assertEquals(expected, result);
    }

    @Test
    public void addPlaceWithOwner() throws Exception {
        //when
        Place testPlace = getTestPlaceWithUser();
        when(service.add(testPlace)).thenReturn(testPlace);
        ResponseEntity<Place> expected = new ResponseEntity<Place>(testPlace, HttpStatus.CREATED);

        //test
        ResponseEntity<Place> result = controller.add(testPlace);

        //validate
        verify(service).add(testPlace);
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