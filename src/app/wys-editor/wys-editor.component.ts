import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-wys-editor',
  templateUrl: './wys-editor.component.html',
  styleUrls: ['./wys-editor.component.scss']
})
export class WysEditorComponent implements OnInit {

  //https://stackoverflow.com/questions/36246994/how-to-use-two-way-data-binding-between-components-in-angular-2
  @Input() obj: Object;
  @Input() prop: string;

  text:string;
  // @Output() modelChange: EventEmitter = new EventEmitter();


  options: Object = {
    charCounterCount: false,
    placeholderText: 'Edit Your Content Here!',
    toolbarButtons:['bold', 'italic', 'underline', 'insertLink', 'insertTable'],
    quickInsertTags:[],
    events: {
      'froalaEditor.contentChanged': (e, editor) => {
        this.obj[this.prop] = editor.html.get();
      }
    }
  };

constructor()
{

}

ngOnInit()
{
   this.text=this.obj[this.prop];
}

}
