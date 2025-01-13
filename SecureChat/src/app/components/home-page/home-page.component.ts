import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  map,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Message } from 'src/app/models/chat';
import { ProfileUser } from 'src/app/models/user-profile';
import { ChatsService } from 'src/app/services/chats.service';
import { UsersService } from 'src/app/services/users.service';
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomeComponent implements OnInit {
/*uploadFile() {
throw new Error('Method not implemented.');
}
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}*/
  @ViewChild('endOfChat')
  endOfChat!: ElementRef;

  user$ = this.usersService.currentUserProfile$;
  myChats$ = this.chatsService.myChats$;

  searchMessage = new FormControl('');								  
  searchControl = new FormControl('');
  messageControl = new FormControl('');
  chatListControl = new FormControl('');

  messages$: Observable<Message[]> | undefined;
  selectedFile: File | null = null;
  
					
															
							   
																		
				 
							  
		
	  
   
   

  otherUsers$ = combineLatest([this.usersService.allUsers$, this.user$]).pipe(
    map(([users, user]) => users.filter((u) => u.uid !== user?.uid))
  );

  users$ = combineLatest([
    this.otherUsers$,
    this.searchControl.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([users, searchString]) => {
      return users.filter((u) =>
        u.displayName?.toLowerCase().includes(searchString.toLowerCase())
      );
    })
  );

  selectedChat$ = combineLatest([
    this.chatListControl.valueChanges,
    this.myChats$,
  ]).pipe(map(([value, chats]) => chats.find((c) => c.id === value[0])));

  constructor(
    private usersService: UsersService,
    private chatsService: ChatsService,
  ) {}

  ngOnInit(): void {
    this.messages$ = this.chatListControl.valueChanges.pipe(
      map((value) => value[0]),
      switchMap((chatId) => this.chatsService.getChatMessages$(chatId)),
      tap(() => {
        this.scrollToBottom();
      })
    );
	console.log(this.messages$);
							
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }




  createChat(user: ProfileUser) {
    this.chatsService
      .isExistingChat(user.uid)
      .pipe(
        switchMap((chatId) => {
          if (!chatId) {
            return this.chatsService.createChat(user);
          } else {
            return of(chatId);
          }
        })
      )
      .subscribe((chatId) => {
        this.chatListControl.setValue([chatId]);
      });
  }

														 
		getDecryptedMessage(encryptedMessage: string): string {
		if (encryptedMessage) {
      console.log("encrypted: " + encryptedMessage);
      console.log("decrypted: " + CryptoJS.AES.decrypt(encryptedMessage, 'my-secret-key').toString(CryptoJS.enc.Utf8))
      return CryptoJS.AES.decrypt(encryptedMessage, 'my-secret-key').toString(CryptoJS.enc.Utf8);
    } else {
      return "";
    }
    
	}										  
																													
																							   
  /*sendMessage() {
    const message = this.messageControl.value;
    const selectedChatId = this.chatListControl.value[0];
    if (message && selectedChatId) {
	  const encryptedMessage = CryptoJS.AES.encrypt(message, 'my-secret-key').toString();
      const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, 'my-secret-key').toString(CryptoJS.enc.Utf8);
      console.log(`Encrypted message: ${encryptedMessage}`);
      console.log(`Decrypted message: ${decryptedMessage}`);																				 
																												   
															
															
      this.chatsService
        .addChatMessage(selectedChatId, encryptedMessage)
        .subscribe(() => {
          this.scrollToBottom();
        });
      this.messageControl.setValue('');
    }
  }*/

  sendMessage(filePath?: string) {
    const message = this.messageControl.value;
    const selectedChatId = this.chatListControl.value[0];
    if (message && selectedChatId) {
      let messageToSend = message;
      if (filePath) {
        messageToSend += ` File: ${filePath}`;
      }
      const encryptedMessage = CryptoJS.AES.encrypt(messageToSend, 'my-secret-key').toString();
      this.chatsService
        .addChatMessage(selectedChatId, encryptedMessage)
        .subscribe(() => {
          this.scrollToBottom();
        });
      this.messageControl.setValue('');
      this.selectedFile = null;
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.endOfChat) {
        this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
