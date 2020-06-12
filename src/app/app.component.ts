import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password-Generator';
  password = '';
  includeLetters = false;
  includeNum = false;
  includeSym = false;
  inputLen = 0;
  info = '';
  onBtnClick(){
   let validChar = '';
   const possibleNum = '0123456789';
   const possibleLett = 'AaBbCcDdEeFfGgHhIiJjKkLlmMnNoOPpQqRrSsTtUuVvWwXxYyZz';
   const possibleSym = '~!@#$%^&*()';

   if (this.includeLetters){
     validChar += possibleLett;
   }
   if (this.includeNum){
     validChar += possibleNum;
   }
   if (this.includeSym){
     validChar += possibleSym;
   }

   let generatedPassword = '';
   for (let i = 0; i < this.inputLen; i++) {
     if (validChar !== ''){
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
     }
   }
   this.password = generatedPassword;
  }

  lenFromUser(val: number){

   if (!isNaN(val)) {
     this.inputLen = val;
   }
  }

  onChangeIncludeLetter(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeIncludeNum(){
    this.includeNum = !this.includeNum;
  }
  onChangeIncludeSym(){
    this.includeSym = !this.includeSym;
  }
  getPwd(){
    return this.password;
  }
}
