import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { AngularDeviceInformationService } from 'angular-device-information';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {

  isFav = false;
  item = {
    name: 'Device Info',
    description: 'Get device infos like user-agent, screen size, etc..',
    category: 'General',
    icon: 'assets/icons/device.svg',
    url: '/tools/device-info',
  };

  constructor(
    private favS: FavoritesService,
    public deviceInformationService: AngularDeviceInformationService
  ) {
    this.isFav = Boolean(this.favS.isFavorite(this.item));
    console.log(deviceInformationService.getDeviceInfo());
  }

  ngOnInit(): void {
  }

  addToFav() {
    this.isFav = true;
    this.favS.addToFavorites(this.item);
  }

  getOrientation(){
    const screen = this.deviceInformationService.getDeviceInfo().screen_resolution;
    const parts = screen.split(' x ');
    if(parts[0] > parts[1]){
      return 'Landscape';
    }else{
      return 'Portrait';
    }
  }

}
