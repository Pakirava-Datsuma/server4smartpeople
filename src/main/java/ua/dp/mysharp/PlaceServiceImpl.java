package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired
	PlaceRepository placeRepo;
	@Autowired
	UserService userService;

	@Override
	public Place create(String name, Long ownerId) {
		Place place = new Place();
		place.setName(name);
		place.setOwner(userService.find(ownerId));
		placeRepo.save(place);
		return place;
	}

	@Override
	public Place find(Long id) {
		return placeRepo.findOne(id);
	}

	@Override
	public void createTestPlace() {
		User user = userService.getOne();
		if (user == null) throw  new RuntimeException("you must create test owner first");
		Place testPlace = create(
				"TestPlace",
				user.getId());
		if (testPlace == null) throw new RuntimeException("test place not created");

		System.out.println("test place created: " + testPlace.getName());

	}

	@Override
	public Collection<Place> getAll() {
		Collection<Place> collection = new ArrayList<Place>();
		Iterator<Place> iterator =  placeRepo.findAll().iterator();
		while (iterator.hasNext()) {
			collection.add(iterator.next());
		}
		return collection;
	}
	
	@Override
	public Place getOne() {
		return placeRepo.findAll().iterator().next();
	}

}
