package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by swanta on 13.12.16.
 */
@RunWith(MockitoJUnitRunner.class)
public class PlaceControllerTest {
    @Mock private PlaceService placeService;
    @Mock private UserService userService;
    @InjectMocks private PlaceController controller;

    @Before
    public void initMockPlaceService() {
        when(placeService.getAll()).thenReturn(ImmutableList.of());
    }

    @Test
    public void getAll() throws Exception {
        //test
        controller.getAll();
        //validate
        verify(placeService).getAll();
    }

    @Test
    public void get() throws Exception {
        Long id = 1L;
        controller.get(id);
        verify(placeService).find(id);
    }

    @Test
    public void add() throws Exception {
        Place place = new Place();
        controller.add(place);
        verify(placeService).add(place);
        verify(userService).find(place.getId());
    }
}