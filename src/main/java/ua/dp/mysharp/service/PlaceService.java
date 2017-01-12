package ua.dp.mysharp.service;

import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.model.User;

import java.util.Collection;


public interface PlaceService {

	Place create(PlaceDTO dto);

	boolean changeData(Place place);

	Place createTestPlace(User owner);

	Collection<Place> getAll();

	Place get(Long id);

    Place convert(PlaceDTO dto);

    Place delete(long id);

    Collection<Place> getAllForUser(long id);
}