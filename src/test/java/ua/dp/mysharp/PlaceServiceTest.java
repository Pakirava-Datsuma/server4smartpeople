package ua.dp.mysharp;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.repository.PlaceRepository;
import ua.dp.mysharp.service.PlaceServiceImpl;
import ua.dp.mysharp.service.UserServiceImpl;

import java.util.Collection;
import java.util.Iterator;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static ua.dp.mysharp.PlaceTestEntityFactory.*;

/**
 * Created by swanta on 13.12.16.
 */
@RunWith(MockitoJUnitRunner.class)
public class PlaceServiceTest {
    @Mock
    private PlaceRepository repo;
    @Mock
    private UserServiceImpl userService;
    @InjectMocks
    private PlaceServiceImpl service;

    private Place
            existPlace = getNormalExistPlace(),
            modifiedPlace = getModifiedExistPlace(),
            normalNewPlace = getNormalNewPlace();
    private PlaceDTO
            normalPlaceDto = getNormalExistPlaceDto(),
            emptyPlaceDto = getEmptyNewPlaceDto(),
            nullPlaceDto = getNullNewPlaceDto();
    private Collection<Place>
            existPlaces = getNormalExistPlaces();

    @Before
    public void setUpRepoMock() throws Exception {

        when(repo.findOne(existPlace.getId())).thenReturn(existPlace);
        when(repo.findOne(null)).thenThrow(new IllegalArgumentException());
        when(repo.save(existPlace)).thenReturn(existPlace);
        when(repo.save(normalNewPlace)).thenReturn(existPlace);
        when(repo.findAll()).thenReturn(new Iterable<Place>() {
            @Override
            public Iterator<Place> iterator() {
                return existPlaces.iterator();
            }
        });

        when(userService.get(existPlace.getOwner().getId())).thenReturn(existPlace.getOwner());
    }

    @Test
    public void createSucces() throws Exception {
        PlaceDTO request = normalPlaceDto;
        Place expectedResult = existPlace;
        Place expectedRepoSave = normalNewPlace;

        Place actual = service.create(request);

        assertEquals(expectedResult, actual);
        verify(repo, times(1)).save(expectedRepoSave);
    }

    @Test
    public void createError() throws Exception {

        Place nullResult = service.create(nullPlaceDto);
        Place emptyResult = service.create(emptyPlaceDto);

        assertNull(nullResult);
        assertNull(emptyResult);
        verify(repo, never()).save(any(Place.class));
    }

    @Test
    public void getOneById() throws Exception {
        Long request = existPlace.getId();
        Place expectedServiceResult = existPlace;

        Place actualServiceResult = service.get(request);

        assertEquals(expectedServiceResult, actualServiceResult);
        verify(repo, times(1))
                .findOne(request);
    }
    @Test
    public void getOneByNull() throws Exception {
        Long request = null;

        Place result = service.get(request);

        assertNull(result);
        verify(repo, never())
                .findOne(any());
    }

    @Test
    public void changePlaceSuccess() throws Exception  {
        Place request = modifiedPlace;

        boolean actual = service.changeData(request);

        assertTrue(actual);
        verify(repo, times(1)).save(request);
    }

    @Test
    public void changePlaceNotFound() throws Exception {
        Place request = normalNewPlace;

        boolean actual = service.changeData(request);

        assertFalse(actual);
        verify(repo, never()).save(any(Place.class));
    }

    @Test
    public void getAll() throws Exception {
        Collection<Place> expected = existPlaces;

        Collection<Place> actual = service.getAll();

        assertEquals(expected, actual);
        verify(repo,times(1)).findAll();
    }

}