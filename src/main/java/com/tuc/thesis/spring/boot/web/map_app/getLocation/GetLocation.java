package com.tuc.thesis.spring.boot.web.map_app.getLocation;


import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotRepository;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GetLocation implements CommandLineRunner {
    @Override
    public void run(String... strings) throws Exception {

    }
//    @Autowired
//    SpotService spotService;
//    @Autowired
//    SpotRepository spotRepository;
//
//    @Override
//    public void run(String... strings) throws Exception {
//        List<Spot> spots = spotService.getAllSpots();
//        spots
//                .forEach(spot -> {
//                    if(StringUtils.isEmpty(spot.getAddress())) {
//                        String url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
//                                + spot.getLatitude() +
//                                "," +
//                                + spot.getLongitude() +
//                                "&key=AIzaSyDfzAsxAargCz1x8D04F8NVA4Tz0WsxhSE&libraries=places";
//                        RestTemplate restTemplate = new RestTemplate();
//                        Response response = restTemplate.getForObject(url,Response.class);
//                        if( response != null && !CollectionUtils.isEmpty(response.getResults()) && response.getResults().get(0) != null && !CollectionUtils.isEmpty(response.getResults().get(0).getAddressComponents())) {
//                            List<Address> addressList = response.getResults().get(0).getAddressComponents();
//                            String address = addressList
//                                    .stream()
//                                    .map(addr -> addr.getLongName())
//                                    .collect(Collectors.joining(", "));
//
//                            spot.setAddress(address);
//                            spotRepository.save(spot);
//                        }
//                    }
//
//                });
//
//    }
}
