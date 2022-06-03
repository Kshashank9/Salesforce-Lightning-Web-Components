import { LightningElement, track } from 'lwc';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import C_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
//import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import PHONE from '@salesforce/schema/Contact.Phone';

export default class MapForm extends LightningElement {
    value='';
    zoomLevel=3;
    mapMarkers=[];
    showMap=false;
    showForm=false;
    objectApiName=C_OBJECT;
    fields=[NAME_FIELD,PHONE];
    countries=['India','Bangladesh','Pakistan'];
    get options() {
        return [
            { label: 'India', value: 'India' },
            { label: 'Pakistan', value: 'Pakistan'},
            { label: 'Bangladesh', value: 'Bangladesh' },
            { label: 'USA', value: 'USA' },
            { label: 'Canada', value: 'Canada' },
        ];

    }
    
    handleChange(event)
    {
        this.value = event.detail.value;
        
        if(this.value=='India' || this.value=='Pakistan' || this.value=='Bangladesh')
        {
        this.showMap=true;
        this.showForm=false;
        this.mapMarkers=[{
            location: {
                Country: this.value,
            },
            title: this.value,
            description: 'Pointing the country selected',
            icon: 'custom:custom26',
            }];
        }
        else{
            this.showForm=true;
            this.showMap=false;
        }
    }
    
}
