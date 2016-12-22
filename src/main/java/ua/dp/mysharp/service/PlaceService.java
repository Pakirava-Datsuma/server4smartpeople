package ua.dp.mysharp.service;

import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.User;

import java.util.Collection;


public interface PlaceService {

	Place create(String name, Long ownerId);

	Place createTestPlace(User owner);

	Collection<Place> getAll();

	Place get(Long id);
}