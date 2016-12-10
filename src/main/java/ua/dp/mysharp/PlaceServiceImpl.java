package ua.dp.mysharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired
	PlaceRepository placeRepo;
	@Autowired
	UserRepository userRepo;

	@Override
	public Place create(String name, Long ownerId) {
		Place place = new Place();
		place.setName(name);
		place.setOwner(userRepo.findOne(ownerId));
		placeRepo.save(place);
		return place;
	}

	@Override
	public Place find(Long id) {
		return placeRepo.findOne(id);
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
	public Place getOne() {
		return placeRepo.findAll().iterator().next();
	}

	public Place convert(PlaceDTO dto) {
		Place place = placeRepo.findOne(dto.getId());
		if (place == null) {
			User owner = userRepo.findOne(dto.getOwnerId());
			place = new Place(dto.getId(), dto.getName(), dto.getPhotoURL(), owner);
		}
		return place;
	}

	public PlaceDTO convert(Place place) {
		return new PlaceDTO(place);
	}

	public Collection<PlaceDTO> convert(Collection<Place> places) {
		return places.stream()
				.map(PlaceDTO::new)
				.collect(Collectors.toList());
	}

}
