import {Component, OnInit} from '@angular/core';
// import {NotificationsService} from 'angular2-notifications';
import {PubSubService} from '../../services/pubsub/pubsub';

@Component({
  selector: 'app-notification-wrapper',
  templateUrl: './notification-wrapper.component.html',
  styleUrls: ['./notification-wrapper.component.scss']
})
export class NotificationWrapperComponent implements OnInit {

  // constructor(private _notificationsService: NotificationsService, private pubSub: PubSubService) {
  // }

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  };


  ngOnInit() {
    // this.pubSub.subscribe('notification', (notif) => {
    //   this._notificationsService.success(
    //     'Some Title',
    //     'Some Content',
    //     {
    //       timeOut: 5000,
    //       showProgressBar: true,
    //       pauseOnHover: false,
    //       clickToClose: false,
    //       maxLength: 10
    //     }
    //   )
    // })
  }

}
