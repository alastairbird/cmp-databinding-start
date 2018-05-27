import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
	@Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }
	
	onServerAdded(serverDate: {serverName: string, serverContent: string }) {
	  this.serverElements.push({
	    type: 'server',
	    name: serverData.serverName,
	    content: serverData.serverContent
	  });
	}

	onBlueprintAdded(blueprintData: {serverName: string, serverContent: string }) {
	  this.serverElements.push({
	    type: 'blueprint',
	    name: blueprintData.serverName,
	    content: blueprintData.serverContent
	  });
	}
}
