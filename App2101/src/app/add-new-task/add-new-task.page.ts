import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory

  constructor(public modalCtlr: ModalController) { }

  ngOnInit() {
    this.categories.push('meditation')
    this.categories.push('chill out musics')
    this.categories.push('peaceful soundtracks')
    this.categories.push('quotes')
    this.categories.push('exercise')
    this.categories.push('yoga')

  }

  add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    // console.log(this.newTaskObj);
    this.dismis()
  }
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
