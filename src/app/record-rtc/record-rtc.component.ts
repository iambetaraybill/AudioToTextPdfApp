import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';
@Component({
  selector: 'app-record-rtc',
  templateUrl: './record-rtc.component.html',
  styleUrls: ['./record-rtc.component.css']
})
export class RecordRtcComponent implements OnInit{
  stream: MediaStream | undefined;
  recordRTC: RecordRTC | undefined;
  disableStopButtons: boolean = true;
  disableDownloadButtons: boolean = true;
  disableStartButtons: boolean = false;
  constructor() { }

  ngOnInit(): void {
  this.disableStopButtons = true;
  this.disableDownloadButtons = true;
  this.disableStartButtons = false;
  }
  startRecording() {
    let mediaConstraints = {
      audio: true
      };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this))
      .catch(e => {
        alert('Please allow audio permission');
      });
}
errorCallBack(error: any){
  
}
successCallback(stream: MediaStream) {
  this.disableStopButtons = false;
  this.disableStartButtons = true;
  this.disableDownloadButtons = true;
  this.stream = stream;
  this.recordRTC = new RecordRTC(stream, {
    type: 'audio'
  });
  this.recordRTC?.startRecording();
    }
    stopRecording() {
      this.disableStopButtons = true;
      this.disableStartButtons = false;
      this.disableDownloadButtons = false;
      this.recordRTC?.stopRecording();
      this.stream?.getAudioTracks().forEach(track => track.stop());
      
    }
    download() {
      this.disableStopButtons = true;
      this.disableDownloadButtons = true;
      this.disableStartButtons = false;
      // this.recordRTC?.save('MyAudio.webm');
      this.recordRTC?.save('MyAudio.mp3');
      this.recordRTC?.destroy();
    
    }
}
