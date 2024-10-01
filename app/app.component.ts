import { Component,  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  workflowGraphBaseWidthPx = '';
  workflowGraphBaseWidthEm = '';
  workStages = [
    {id:"du",name:"DU",icon:""},
    {id:"dhcp",name:"DHCP Server",icon:""},
    {id:"oss-auto",name:"OSS Auto-Comm-Agent",icon:""},
    {id:"oss-cm",name:"OSS CM Services",icon:""},
    {id:"gnode",name:"gNode-vCU-CP",icon:""},
  ]
  workTimeLineContents = [
    {type:"message",id:"du",text:"Application Power ON"},
    {type:"line",stepCount:'1',direction:"left",start:"du",end:"dhcp",text:"Request Sr. No. Vendor cart",width:260,emVal:16.25},
    {type:"message",id:"dhcp",text:"Device Authentication"},
    {type:"line",stepCount:'2',direction:"right",start:"du",end:"dhcp",text:"IP Address, FDQN of Auto-Comm Agent",width:260,emVal:16.25},
    {type:"message",id:"du",text:"Appliance: Operator Cert. enrollment"},
    {type:"line",stepCount:'3',direction:"left",start:"du",end:"oss-auto",text:"Application Power ON Notification (Serial No.)",width:520,emVal:32.5},
    {type:"message",id:"oss-auto",text:"Application Power ON"},
    {type:"line",stepCount:'4',direction:"left",start:"oss-auto",end:"oss-cm",text:"Update D, vCU mapping",width:260,emVal:16.25},
    {type:"line",stepCount:'5',direction:"right",start:"du",end:"oss-auto",text:"Application Power ON Notification (Serial No.)",width:520,emVal:32.5},
    {type:"line",stepCount:'6',direction:"left",start:"du",end:"oss-cm",text:"NETCONF Call Home",width:780,emVal:48.75},
    {type:"line",stepCount:'7',direction:"left",start:"du",end:"oss-cm",text:"Supervision of NETCONF Connection",width:780,emVal:48.75},
    {type:"line",stepCount:'8',direction:"left",start:"du",end:"oss-cm",text:"Application: SW Management",width:780,emVal:48.75},
    {type:"line",stepCount:'9',direction:"left",start:"du",end:"oss-cm",text:"NETCONF Device configuration (including gNB-vCU-CP info)",width:780,emVal:48.75},
    {type:"line",stepCount:'10',direction:"left",start:"du",end:"gnode",text:"Establish Connection",width:1040,emVal:65},
  ]

  drawMessageBox(timeLineType,timeLineId,stageId){
    if(timeLineType = 'message'){
      if(timeLineId == stageId){
        return true;
      }
    }
    return false;
  }

  drawLine(timeLineType,timeLineStart,stageId){
    if(timeLineType = 'line'){
      if(timeLineStart == stageId){
        return true;
      }
    }
    return false;
  }
}
