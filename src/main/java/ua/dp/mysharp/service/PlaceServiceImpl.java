package ua.dp.mysharp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.dp.mysharp.model.Place;
import ua.dp.mysharp.model.PlaceDTO;
import ua.dp.mysharp.model.User;
import ua.dp.mysharp.dao.PlaceRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired
	private PlaceRepository placeRepo;
	@Autowired
	private UserService userService;

    public Place convert(PlaceDTO dto) {
        if (dto == null) return null;
        Place place = dto.convert();
        Long ownerId = dto.getOwnerId();
        if (ownerId != null) {
            User owner = userService.get(ownerId);
            if (owner != null)
                place.setOwner(owner);
            return place;
        }
        return null;
    }

    @Override
	public Place create(PlaceDTO dto) {
        if (dto.getName() == null
                || dto.getName().isEmpty())
            return null;
        Place place = convert(dto);
        if (place == null
                || place.getOwner() == null) return null;
		return placeRepo.save(place);
	}

	@Override
	public Place delete(long id) {
    	Place place = placeRepo.findOne(id);
		placeRepo.delete(id);
    	return place;
	}

	@Override
	public Place createTestPlace(User owner) {
		if (owner == null) throw  new RuntimeException("you must create test owner first");
		Place testPlace = placeRepo.save(
		        new Place(
                    null,
                    "TestPlace",
                    "photo",
				    owner));
		if (testPlace == null) throw new RuntimeException("test place not created");

		System.out.println("test place created: " + testPlace.getName());
		return testPlace;
	}

	@Override
	public Collection<Place> getAll() {
		Collection<Place> places = new ArrayList<>();
		for (Place place : placeRepo.findAll()) places.add(place);
		return places;
	}

	@Override
	public Collection<Place> getAllForUser(long id) {
        return getAll().stream()
                .filter( place -> place.getOwner().getId() == id)
                .collect(Collectors.toList());
	}

	@Override
	public Place get(Long id) {
        if (id == null) return null;
        return placeRepo.findOne(id);
	}

    @Override
    public boolean changeData(Place place) {
        if (place == null
                || place.getId() == null
                || get(place.getId()) == null) return false;
        if (place.getOwner() == null) return false;
        placeRepo.save(place);
        return true;
    }
}
