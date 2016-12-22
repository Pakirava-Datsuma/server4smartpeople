package ua.dp.mysharp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.repository.PlaceRepository;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired
	private PlaceRepository placeRepo;
	@Autowired
	private UserService userService;

	@Override
	public Place create(String name, Long ownerId) {
		Place place = new Place();
		place.setName(name);
		place.setOwner(userService.get(ownerId));
		placeRepo.save(place);
		return place;
	}

	@Override
	public Place createTestPlace(User owner) {
		if (owner == null) throw  new RuntimeException("you must create test owner first");
		Place testPlace = create(
				"TestPlace",
				owner.getId());
		if (testPlace == null) throw new RuntimeException("test place not created");

		System.out.println("test place created: " + testPlace.getName());
		return testPlace;
	}

	@Override
	public Collection<Place> getAll() {
		Collection<Place> places = new ArrayList<Place>();
		for (Place place : placeRepo.findAll()) {
			places.add(place);
		}
		return places;
	}
	
	@Override
	public Place get(Long id) {
		return placeRepo.findOne(id);
	}

}
