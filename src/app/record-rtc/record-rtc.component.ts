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
  constructor() { }

  ngOnInit(): void {
  }
  startRecording() {
    let mediaConstraints = {
      audio: true
      };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this));
}
successCallback(stream: MediaStream) {
      this.stream = stream;
      this.recordRTC = new RecordRTC(stream);
      this.recordRTC?.startRecording();
    }
    stopRecording() {
      this.recordRTC?.stopRecording();
      this.stream?.getAudioTracks().forEach(track => track.stop());
    }
    download() {
      this.recordRTC?.save('MyAudio.webm');
    }
}
