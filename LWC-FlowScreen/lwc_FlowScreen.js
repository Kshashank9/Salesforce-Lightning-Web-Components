import { LightningElement,api } from 'lwc';
import {FlowNavigationNextEvent} from "lightning/flowSupport";
export default class Lwc_FlowScreen extends LightningElement {
    handleNext()
    {   
            const eve = new FlowNavigationNextEvent();
            this.dispatchEvent(eve);
    }
}
