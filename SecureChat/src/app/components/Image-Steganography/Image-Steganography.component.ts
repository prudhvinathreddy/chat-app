import { Component } from '@angular/core';

@Component({
  selector: 'app-stego',
  templateUrl: './Image-Steganography.component.html',
  styleUrls: ['./Image-Steganography.component.scss']
})
export class SecretMessageEmbedderComponent {
  activeTab: 'encode' | 'decode' = 'encode';
  encodeText: string = '';
  encodeImageFile: File | null = null;
  decodeImageFile: File | null = null;
  decodedText: string = '';
  otp: string = ''; // OTP
  encodeSuccess: boolean = false;
  decodeSuccess: boolean = false;

  openTab(tabName: 'encode' | 'decode') {
    this.activeTab = tabName;
    this.reset(tabName);
  }

  onEncodeImageSelected(event: any) {
    this.encodeImageFile = event.target.files ? event.target.files[0] : null;
  }

  onDecodeImageSelected(event: any) {
    this.decodeImageFile = event.target.files ? event.target.files[0] : null;
  }

  encode() {
    //check if text area is empty
    if (!this.encodeText.trim()) {
      alert('Please enter text to encode.');
      return;
    }
    // Generate OTP
    this.generateOTP();
    // Encode OTP and text into the image
    this.encodeIntoImage();
  }

  decode() {
    // Get the entered OTP
    const enteredOTP = prompt('Enter OTP:');
    // Verify OTP
    if (!enteredOTP || enteredOTP.trim() !== this.otp.trim()) {
      alert('Invalid OTP!');
      return;
    }
    // Decode text from the image
    this.decodeTextFromImage();
  }

  generateOTP() {
    const length = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.otp = otp;
  }

  encodeIntoImage() {
    const text = this.otp + ',' + this.encodeText + String.fromCharCode(0); // OTP, text, terminator character
    const fileInput = document.getElementById("encodeImageInput") as HTMLInputElement;

    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
      alert('Please select an image file.');
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          alert('Canvas context is not supported.');
          return;
        }
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        const binaryText = this.textToBinary(text);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let textIndex = 0;
        for (let i = 0; i < imageData.data.length; i += 4) {
          if (textIndex < binaryText.length) {
            imageData.data[i] = (imageData.data[i] & 0xfe) | parseInt(binaryText[textIndex++]);
            imageData.data[i + 1] = (imageData.data[i + 1] & 0xfe) | parseInt(binaryText[textIndex++]);
            imageData.data[i + 2] = (imageData.data[i + 2] & 0xfe) | parseInt(binaryText[textIndex++]);
          } else {
            break;
          }
        }
        ctx.putImageData(imageData, 0, 0);

        const encodedImageData = canvas.toDataURL();
        const dummyLink = document.createElement('a');
        dummyLink.href = encodedImageData;
        dummyLink.download = 'encoded_image.png';
        dummyLink.click();
        this.encodeSuccess = true; // Set encode success to true
        setTimeout(() => {
          this.encodeSuccess = false; // Reset success message after 3 seconds
        }, 10000);
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  decodeTextFromImage() {
    const fileInput = document.getElementById("decodeInput") as HTMLInputElement;

    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
      alert('Please select an image file.');
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          alert('Canvas context is not supported.');
          return;
        }
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let binaryText = '';
        let byte = '';
        let charCode;
        for (let i = 0; i < imageData.data.length; i += 4) {
          byte += (imageData.data[i] & 0x01);
          byte += (imageData.data[i + 1] & 0x01);
          byte += (imageData.data[i + 2] & 0x01);
          if (byte.length >= 8) {
            charCode = parseInt(byte.substr(0, 8), 2);
            if (charCode === 0) break; // Stop if terminator character is found
            binaryText += String.fromCharCode(charCode);
            byte = byte.slice(8);
          }
        }

        // Separate OTP and text
        const parts = binaryText.split(',');
        if (parts.length !== 2) {
          alert('Invalid data format!');
          return;
        }
        const receivedOTP = parts[0].trim();
        const receivedText = parts[1];

        // Verify OTP
        if (receivedOTP !== this.otp.trim()) {
          alert('Invalid OTP!');
          return;
        }

        this.decodedText = receivedText;
        this.decodeSuccess = true; // Set decode success to true
        setTimeout(() => {
          this.decodeSuccess = false; // Reset success message after 3 seconds
        }, 10000);
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  textToBinary(text: string): string {
    let binaryText = '';
    for (let i = 0; i < text.length; i++) {
      const binaryChar = text.charCodeAt(i).toString(2).padStart(8, '0');
      binaryText += binaryChar;
    }
    return binaryText;
  }

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.otp;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('OTP copied to clipboard!');
  }

  reset(tabName: 'encode' | 'decode') {
    if (tabName === 'encode') {
      this.encodeText = '';
      this.encodeImageFile = null;
      this.otp = '';
      this.encodeSuccess = false; // Reset encode success
    } else {
      this.decodeImageFile = null;
      this.decodedText = '';
      this.decodeSuccess = false; // Reset decode success
    }
  }
}
