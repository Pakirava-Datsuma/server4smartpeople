package ua.dp.mysharp;

import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.rest.PlaceController;
import ua.dp.mysharp.service.PlaceService;
import ua.dp.mysharp.service.PlaceServiceImpl;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static ua.dp.mysharp.PlaceTestEntityFactory.getNormalExistPlace;
import static ua.dp.mysharp.PlaceTestEntityFactory.getNormalExistPlaceDto;

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
    public void getExistPlace() throws Exception {
        //when
        Place place = getNormalExistPlace();

        //test
        controller.get(place.getId());

         //validate
        verify(service).get(place.getId());
    }

    @Test
    public void createPlaceWithOwner() throws Exception {
        //when
        PlaceDTO request = getNormalExistPlaceDto();

        //test
        controller.add(request);

        //validate
        verify(service).create(request);
    }
}