package ua.dp.mysharp;

import java.util.Collection;


public interface PlaceService {

	Place create(String name, Long ownerId);

	Place find(Long id);

	Place createTestPlace(User owner);

	Collection<Place> getAll();

	Place getOne();

	Place convert(PlaceDTO dto);

	PlaceDTO convert(Place place);

	Collection<PlaceDTO> convert(Collection<Place> places);

	Place add(Place place);
}