package ua.dp.mysharp;

import java.util.Collection;


public interface PlaceService {

	Place create(String name, Long ownerId);
	Place find(Long id);
	
	void createTestPlace();
	Collection<Place> getAll();
	Place getOne();

}
